// 导入数据库操作模块
const db = require('../db/index')
const logger = require('../utils/logger');
const today = require('../utils/today');

// 获取用户目标
exports.heartRates = (req, res) => {
    const sqlQuery = `select * from HeartRate where idUser=? and Date(Date)=?`
    db.query(sqlQuery, [req.user.idUser,req.query.date], (err, results) => {
        if (err) return res.cc(err)
        if (results.length >= 0) {
            logger.log("获取用户当天心率成功:", req.query.date)
            return res.send({ status: 200, message: '获取用户当天心率成功', data: results})
            
        } else {
            logger.log("获取用户当天心率失败")
            return res.cc('获取用户当天心率失败', req.query.date)
            
        }
    })
}


exports.addHeartRate = (req, res) => {
    const sqlInsert = `insert into HeartRate set ?`
    db.query(sqlInsert, {idUser: req.user.idUser, HeartRate: req.body.heartRate, Date: today.toDateTime()}, function (err, results) {
        if (err) return res.cc(err)
        if (results.affectedRows == 1) {
            logger.log("添加心率成功:", req.body)
            res.send({ status: 200, message: '添加心率成功！'})
        } else {
            logger.log("添加心率失败", req.body)
            return res.cc('添加心率失败')
        }
    })
}
