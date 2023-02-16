// 导入数据库操作模块
const db = require('../db/index')

// 获取用户喝水模块数据
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