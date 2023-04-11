// 导入数据库操作模块
const db = require('../db/index')
const logger = require('../utils/logger');
const today = require('../utils/today');


// 获取当天结束的最后一次睡眠
exports.sleep = (req, res) => {
    const sqlQuery = `select * from Sleep where idUser=? and Date(EndTime)=? ORDER BY StartTime DESC LIMIT 1`
    db.query(sqlQuery, [req.user.idUser,req.query.date], (err, results) => {
        if (err) return res.cc(err)
        if (results.length >= 0) {
            logger.log("获取昨晚睡眠数据成功:")
            return res.send({ status: 200, message: '获取昨晚睡眠数据成功', data: results[0]})
            
        } else {
            logger.log("获取昨晚睡眠数据失败")
            return res.cc('获取昨晚睡眠数据失败')
            
        }
    })
}

exports.addSleep = (req, res) => {
    const sqlInsert = `insert into Sleep set ?`
    db.query(sqlInsert, {
        idUser: req.user.idUser, Temperature: req.body.temperature, Pressure: req.body.pressure,
        Light: req.body.light, Humidity: req.body.humidity, StartTime: req.body.startTime, EndTime:today.toDateTime()
    }, function (err, results) {
        if (err) return res.cc(err)
        if (results.affectedRows == 1) {
            logger.log("添加睡眠数据成功:", req.body)
            res.send({ status: 200, message: '添加睡眠数据成功！'})
        } else {
            logger.log("添加睡眠数据失败", req.body)
            return res.cc('添加睡眠数据失败！')
        }
    })
}