// 导入数据库操作模块
const db = require('../db/index')
const today = require('../utils/today');

// 获取用户当天行走信息数据
exports.walks = (req, res) => {
    const sqlQuery = `select * from Walks where idUser=? and Date(Date)="${today.toDate()}"`
    db.query(sqlQuery, req.user.idUser, (err, results) => {
        if (err) return res.cc(err)
        if (results.length == 1) {
            res.send({ status: 200, message: '获取用户当天行走信息成功！', data: results[0]})
        } else {
            return res.cc('获取用户当天行走信息失败！')
        }
    })
}

exports.walkSteps = (req, res) => {
    const sqlQuery = `select * from WalkSteps where Date(Time)="${today.toDate()}"`
    db.query(sqlQuery,  (err, results) => {
        if (err) return res.cc(err)
        if (results.length > 0) {
            res.send({ status: 200, message: '获取用户当天行走步数信息成功！', data: results})
        } else {
            return res.cc('获取用户当天行走步数信息失败！')
        }
    })
}

// 添加行走数据
exports.addWalk = (req, res) => {
    const sqlQuery = `select * from Walks where Date(Date)="${today.toDate()}"`
    db.query(sqlQuery, req.query.idWalk, (err, results) => { 
        console.log(results.length);
        if (results.length == 0) {
            let newStep = parseInt(req.body.steps)
            let step =  newStep
            let calories = newStep * 0.04
            let distance = parseFloat(newStep * 0.0005) 
            const sqlInsert = `insert into Walks set ?`
            db.query(sqlInsert, {
                idUser: req.user.idUser, TotalSteps: step, Calories: calories,
                Distance: distance, Date: today.toDateTime()
            }, function (err, res1) {
                if (err) return res.cc(err)
                if (res1.affectedRows == 1) {
                    return res.send({ status: 200, message: '添加行走数据成功！'})
                } else {
                    return res.cc('添加行走数据失败！')
                }
            })
            
        } else if (results.length == 1) {
            let newStep = parseInt(req.body.steps) 
            let step = parseInt(results[0].TotalSteps)  + newStep
            let calories = parseInt(results[0].Calories) + newStep * 0.04
            let distance = parseFloat(results[0].Distance) + newStep * 0.0005
            const sqlUpdate = `update Walks set TotalSteps = ?,
                Calories = ?,Distance = ?,Date = "${today.toDateTime()}" where Date="${today.toDate()}"`
            db.query(sqlUpdate, [step, calories, distance], (err, res2) => {
                if(err) return res.cc(err.message)
                if (res2.affectedRows===1){
                    return res.send({
                        status: 200,
                        message:'更新行走数据成功'
                    })
                }
                return res.cc('更新行走数据失败')
            })
        } 
    })
}


// 添加步数数据
exports.addWalkSteps = (req, res) => {
    const sqlInsert = `insert into WalkSteps set ?`
    db.query(sqlInsert, {Steps: req.body.steps,Time: today.toDateTime()}, function (err, results) {
        if (err) return res.cc(err)
        if (results.affectedRows == 1) {
            res.send({ status: 200, message: '添加步数数据成功！'})
        } else {
            return res.cc('添加步数数据失败！')
        }
    })
}

