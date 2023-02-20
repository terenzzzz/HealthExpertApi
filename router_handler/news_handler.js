// 导入数据库操作模块
const db = require('../db/index')
const logger = require('../utils/logger');


exports.news = (req, res) => {
    const sqlQuery = `select * from News`
    db.query(sqlQuery, (err, results) => {
        if (err) return res.cc(err)
        if (results.length > 0) {
            logger.log("获取新闻成功!")
            res.send({ status: 200, message: '获取新闻成功！', data: results})
        } else {
            logger.log("获取新闻失败!")
            return res.cc('获取新闻失败！')
        }
    })
}

// 获取卡路里详细信息
exports.newsInfo = (req, res) => {
    const sqlQuery = `select * from News where id=?`
    db.query(sqlQuery, req.query.id, (err, results) => {
        if (err) return res.cc(err)
        if (results.length == 1) {
            logger.log("获取新闻详细信息成功!")
            res.send({ status: 200, message: '获取新闻详细信息成功！', data: results})
        } else {
            logger.log("获取新闻详细信息失败!")
            return res.cc('获取新闻详细信息失败！')
        }
    })
}