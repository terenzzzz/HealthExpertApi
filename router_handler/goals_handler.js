// 导入数据库操作模块
const db = require('../db/index')
const today = require('../utils/today');
const logger = require('../utils/logger');

// 添加药物提醒
exports.addGoals = (req, res) => {
    const sqlInsert = `insert into Goals set ?`
    db.query(sqlInsert, {
        idUser: req.user.idUser, Calories: req.body.calories, Steps: req.body.steps,
        Training: req.body.training, Water: req.body.water, Sleep: req.body.sleep
    }, function (err, results) {
        if (err) return res.cc(err)
        if (results.affectedRows == 1) {
            logger.log("添加目标记录成功:", req.body)
            res.send({ status: 200, message: '添加目标记录成功！'})
        } else {
            logger.log("添加目标记录失败", req.body)
            return res.cc('添加目标记录失败')
        }
    })
}
