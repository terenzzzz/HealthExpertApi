// 导入数据库操作模块
const db = require('../db/index')

// 获取用户卡路里模块数据
exports.calories = (req, res) => {
    const sqlQuery = `select * from Calories where idUser=?`
    db.query(sqlQuery, req.user.idUser, (err, results) => {
        if (err) return res.cc(err)
        if (results.length > 0) {
            res.send({ status: 200, message: '获取用户卡路里信息成功！', data: results})
        } else {
            return res.cc('获取用户卡路里信息失败！')
        }
    })
}

exports.caloriesInfo = (req, res) => {
    const sqlQuery = `select * from Calories where idUser=?`
    db.query(sqlQuery, req.user.idUser, (err, results) => {
        if (err) return res.cc(err)
        if (results.length > 0) {
            res.send({ status: 200, message: '获取用户卡路里信息成功！', data: results})
        } else {
            return res.cc('获取用户卡路里信息失败！')
        }
    })
}

// 添加卡路里数据
exports.addCalories = (req, res) => {
    let time = req.body.time
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let date = today.getDate();
    let dateTime = year + "-" + (month + 1) + "-" + date + " " + time + ":00"// 2023-3-11 08：00
    console.log(dateTime);
    const sqlInsert = `insert into Calories set ?`
    db.query(sqlInsert, {
        idUser: req.user.idUser, Type: req.body.type, Title: req.body.title,
        Content: req.body.content, Calories: req.body.calories, Time: dateTime
    }, function (err, results) {
        if (err) return res.cc(err)
        if (results.affectedRows == 1) {
            res.send({ status: 200, message: '添加卡路里数据成功！'})
        } else {
            return res.cc('添加卡路里数据失败！')
        }
    })
}