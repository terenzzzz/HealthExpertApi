// 导入数据库操作模块
const db = require('../db/index')

// 获取用户当天行走信息数据
exports.walks = (req, res) => {
    const sqlQuery = `select * from Walks where idUser=? and date=?`
    db.query(sqlQuery, [req.user.idUser,req.query.date], (err, results) => {
        if (err) return res.cc(err)
        if (results.length == 1) {
            res.send({ status: 200, message: '获取用户当天行走信息成功！', data: results[0]})
        } else {
            return res.cc('获取用户当天行走信息失败！')
        }
    })
}

exports.walkSteps = (req, res) => {
    const sqlQuery = `select * from WalkSteps where idWalk=?`
    db.query(sqlQuery, req.query.idWalk, (err, results) => {
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
    let today = new Date();
    let year = today.getFullYear();
    var month = today.getMonth()
    if (month < 9) {
        month = month + 1
        month = `0${month}`
    }
    let date = today.getDate();
    let fulldate = year + "-" + month + "-" + date
    console.log(fulldate);
    const sqlQuery = `select * from Walks where Date="${fulldate}"`
    db.query(sqlQuery, req.query.idWalk, (err, results) => { 
        console.log(results.length);
        if (results.length == 0) {
            const sqlInsert = `insert into Walks set ?`
            db.query(sqlInsert, {
                idUser: req.user.idUser, TotalSteps: req.body.steps, Calories: req.body.calories,
                Distance: req.body.distance, Date: fulldate
            }, function (err, res1) {
                if (err) return res.cc(err)
                if (res1.affectedRows == 1) {
                    return res.send({ status: 200, message: '添加行走数据成功！'})
                } else {
                    return res.cc('添加行走数据失败！')
                }
            })
            
        } else if (results.length == 1) {
            let recordId = results[0].id
            const sqlUpdate = `update Walks set TotalSteps = ?,
                Calories = ?,Distance = ? where id = ?`
            db.query(sqlUpdate, [req.body.steps, req.body.calories, req.body.distance,recordId], (err, res2) => {
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