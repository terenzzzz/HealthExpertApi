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

// 获取待提醒药物数据
exports.pendingMedications = (req, res) => {
    const sqlQuery = `select * from Medication where idUser=? and Date>'${today.toDateTime()}'`
    db.query(sqlQuery, [req.user.idUser], (err, results) => {
        if (err) return res.cc(err)
        if (results.length >= 0) {
            logger.log("获取待提醒药物数据成功:", req.query.date)
            return res.send({ status: 200, message: '获取待提醒药物数据成功', data: results})
            
        } else {
            logger.log("获取待提醒药物数据失败！")
            return res.cc('获取待提醒药物数据失败！', req.query.date)
        }
    })
}

// 添加药物提醒
exports.addMedication = (req, res) => {
    const sqlInsert = `insert into Medication set ?`
    db.query(sqlInsert, {
        idUser: req.user.idUser, Type: req.body.type, Name: req.body.name,
        Dose: req.body.dose, Date: req.body.date, Status: 0
    }, function (err, results) {
        if (err) return res.cc(err)
        if (results.affectedRows == 1) {
            logger.log("添加药物数据成功:", req.body)
            res.send({ status: 200, message: '添加药物数据成功！'})
        } else {
            logger.log("添加药物数据失败", req.body)
            return res.cc('添加药物数据失败！')
        }
    })
}

exports.editMedicationStatus = (req, res) => { 
    const sqlUpdate = `update Medication set Status = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [req.body.status, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新药物数据成功:", req.body)
            return res.send({
                status: 200,
                message:'更新药物数据成功'
            })
        }
        logger.log("更新药物数据失败", req.body)
        return res.cc('更新药物数据失败')
    })
}

exports.deleteMedication = (req, res) => { 
    const sqlDelete = `delete from Medication where idUser = ? and id=?`
    db.query(sqlDelete, [req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("删除记录成功:", req.body)
            return res.send({
                status: 200,
                message:'删除记录成功'
            })
        }
        logger.log("删除记录失败:", req.body)
        return res.cc('删除记录失败')
    })
}