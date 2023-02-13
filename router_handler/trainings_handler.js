// 导入数据库操作模块
const db = require('../db/index')

// 获取用户卡路里模块数据
exports.trainings = (req, res) => {
    const sqlQuery = `select * from Trainings where idUser=?`
    db.query(sqlQuery, req.user.idUser, (err, results) => {
        if (err) return res.cc(err)
        if (results.length > 0) {
            res.send({ status: 200, message: '获取用户训练信息成功！', data: results})
        } else {
            return res.cc('获取用户训练信息失败！')
        }
    })
}