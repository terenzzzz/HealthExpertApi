// 导入数据库操作模块
const db = require('../db/index')
const today = require('../utils/today');
const logger = require('../utils/logger');

// 获取药物数据
exports.medications = (req, res) => {
    const sqlQuery = `select * from Medication where idUser=? and Date(Date)=?`
    db.query(sqlQuery, [req.user.idUser, req.query.date], (err, results) => {
        if (err) return res.cc(err)
        if (results.length >= 0) {
            logger.log("获取药物数据成功:", req.query.date)
            return res.send({ status: 200, message: '获取药物数据成功', data: results})
            
        } else {
            logger.log("获取药物数据失败！")
            return res.cc('获取药物数据失败！', req.query.date)
        }
    })
}