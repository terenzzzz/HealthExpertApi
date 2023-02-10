// 导入数据库操作模块
const db = require('../db/index')

// 获取用户卡路里模块数据
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