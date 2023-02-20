// 导入数据库操作模块
const db = require('../db/index')
const logger = require('../utils/logger');

// 获取用户信息
exports.userInfo = (req, res) => {
    const sqlQuery = `select idUser,Email,Name,Gender,Age,Height,Weight,Bmi,BodyFatRate from User where idUser=?`
    db.query(sqlQuery, req.user.idUser, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) {
            logger.log("获取用户基本信息失败！")
            return res.cc('获取用户信息失败！')
        } 
        logger.log("获取用户基本信息成功！")
        res.send({ status: 200, message: '获取用户基本信息成功！', data: results[0] })
    })
}

exports.editName = (req, res) => { 
    const sqlUpdate = `update User set Name = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.name, req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新昵称成功！",req.body)
            return res.send({
                status: 200,
                message:'更新昵称成功'
            })
        }
        logger.log("更新昵称失败")
        return res.cc('更新失败')
    })
}

exports.editGender = (req, res) => { 
    const sqlUpdate = `update User set Gender = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.gender, req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新性别成功！",req.body)
            return res.send({
                status: 200,
                message:'更新性别成功'
            })
        }
        logger.log("更新性别失败")
        return res.cc('更新性别失败')
    })
}

exports.editAge = (req, res) => { 
    const sqlUpdate = `update User set Age = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.age, req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新年龄成功！",req.body)
            return res.send({
                status: 200,
                message:'更新年龄成功'
            })
        }
        logger.log("更新年龄失败")
        return res.cc('更新年龄失败')
    })
}

exports.editHeight = (req, res) => { 
    const sqlUpdate = `update User set Height = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.height, req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新身高成功！",req.body)
            return res.send({
                status: 200,
                message:'更新身高成功'
            })
        }
        logger.log("更新身高失败")
        return res.cc('更新身高失败')
    })
}

exports.editWeight = (req, res) => { 
    const sqlUpdate = `update User set Weight = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.weight, req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新体重成功！",req.body)
            return res.send({
                status: 200,
                message:'更新体重成功'
            })
        }
        logger.log("更新体重失败")
        return res.cc('更新体重失败')
    })
}

exports.editBMI = (req, res) => { 
    const sqlUpdate = `update User set Bmi = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.bmi, req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新Bmi成功！",req.body)
            return res.send({
                status: 200,
                message:'更新Bmi成功'
            })
        }
        logger.log("更新Bmi失败")
        return res.cc('更新Bmi失败')
    })
}

exports.editBodyFatRate = (req, res) => { 
    const sqlUpdate = `update User set BodyFatRate = ? where idUser = ?`
    db.query(sqlUpdate, [req.body.bfr, req.user.idUser], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新体脂率成功！",req.body)
            return res.send({
                status: 200,
                message:'更新体脂率成功'
            })
        }
        logger.log("更新体脂率失败")
        return res.cc('更新体脂率失败')
    })
}