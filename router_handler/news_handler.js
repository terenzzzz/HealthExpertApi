// 导入数据库操作模块
const db = require('../db/index')

exports.news = (req, res) => {
    const sqlQuery = `select * from News`
    db.query(sqlQuery, (err, results) => {
        if (err) return res.cc(err)
        if (results.length > 0) {
            res.send({ status: 200, message: '获取新闻成功！', data: results})
        } else {
            return res.cc('获取新闻失败！')
        }
    })
}