// 导入数据库操作模块
const db = require('../db/index')

// 获取用户当天行走信息数据
exports.walks = (req, res) => {
    let today = toDate()
    console.log(today);
    const sqlQuery = `select * from Walks where idUser=? and Date="${today}"`
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
    let today = toDate()
    console.log(today);
    const sqlQuery = `select * from WalkSteps where Date(Time)="${today}"`
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


// 添加步数数据
exports.addWalkSteps = (req, res) => {
    let today = new Date();
    let year = today.getFullYear();
    var month = today.getMonth()
    if (month < 9) {
        month = month + 1
        month = `0${month}`
    }
    let date = today.getDate();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();


    let time = hours + ":" + minutes + ":" + seconds
    let fulldate = year + "-" + month + "-" + date
    let dateTime = year + "-" + month + "-" + date + " " + time// 2023-3-11 08：00
    
    console.log(fulldate);
    const sqlQuery = `select * from Walks where Date="${fulldate}"`
    db.query(sqlQuery, req.query.idWalk, (err, results) => { 
        console.log(results.length);
        if (results.length == 0) {
            return res.cc('添加行走数据失败！')
        } else if (results.length == 1) {
            let recordId = results[0].id
            const sqlInsert = `insert into WalkSteps set ?`
            db.query(sqlInsert, {
                idWalk: recordId, Steps: req.body.steps,Time: dateTime
            }, function (err, results) {
                if (err) return res.cc(err)
                if (results.affectedRows == 1) {
                    res.send({ status: 200, message: '添加步数数据成功！'})
                } else {
                    return res.cc('添加步数数据失败！')
                }
            })
        } 
    })
}

function toDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // getMonth() returns zero-based index, so we need to add 1
    let day = date.getDate();
    let mysqlDate = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
    return mysqlDate
}

function toDateTime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // getMonth() returns zero-based index, so we need to add 1
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let mysqlDateTime = year + "-" + (month < 10 ? "0" + month : month) +
        "-" + (day < 10 ? "0" + day : day) + " " + (hours < 10 ? "0" + hours : hours)
        + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    return mysqlDateTime
}