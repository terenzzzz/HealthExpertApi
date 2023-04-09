// 导入数据库操作模块
const db = require('../db/index')
const logger = require('../utils/logger');

// 获取用户目标
exports.goal = (req, res) => {
    const sqlQuery = `select * from Goals where idUser=?`
    db.query(sqlQuery, [req.user.idUser], (err, results) => {
        if (err) return res.cc(err)
        if (results.length >= 0) {
            logger.log("获取用户目标成功:", req.query.date)
            return res.send({ status: 200, message: '获取用户目标成功', data: results[0]})
            
        } else {
            logger.log("获取用户目标失败！")
            return res.cc('获取用户目标失败！', req.query.date)
            
        }
    })
}

// 添加目标
exports.initGoals = (req, res) => {
    const sqlInsert = `insert into Goals set ?`
    db.query(sqlInsert, {
        idUser: req.user.idUser, Calories: 2400, Steps: 10000,
        Training: 60, Water: 8000, Sleep: 8
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

exports.editCalories = (req, res) => { 
    const sqlUpdate = `update Goals set Calories = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.calories,req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新卡路里目标成功:", req.body)
            return res.send({
                status: 200,
                message:'更新卡路里目标成功'
            })
        }
        logger.log("更新卡路里目标失败:", req.body)
        return res.cc('更新卡路里目标失败')
    })
}

exports.editSteps = (req, res) => { 
    const sqlUpdate = `update Goals set Steps = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.steps,req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新步数目标成功:", req.body)
            return res.send({
                status: 200,
                message:'更新步数目标成功'
            })
        }
        logger.log("更新步数目标失败:", req.body)
        return res.cc('更新步数目标失败')
    })
}


exports.editTraining = (req, res) => { 
    const sqlUpdate = `update Goals set Training = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.training,req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新训练目标成功:", req.body)
            return res.send({
                status: 200,
                message:'更新训练目标成功'
            })
        }
        logger.log("更新训练目标失败:", req.body)
        return res.cc('更新训练目标失败')
    })
}


exports.editWater = (req, res) => { 
    const sqlUpdate = `update Goals set Water = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.water,req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新喝水目标成功:", req.body)
            return res.send({
                status: 200,
                message:'更新喝水目标成功'
            })
        }
        logger.log("更新喝水目标失败:", req.body)
        return res.cc('更新喝水目标失败')
    })
}


exports.editSleep = (req, res) => { 
    const sqlUpdate = `update Goals set Sleep = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.sleep,req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新睡眠目标成功:", req.body)
            return res.send({
                status: 200,
                message:'更新睡眠目标成功'
            })
        }
        logger.log("更新睡眠目标失败:", req.body)
        return res.cc('更新睡眠目标失败')
    })
}

