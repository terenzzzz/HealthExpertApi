// 导入数据库操作模块
const db = require('../db/index')
const today = require('../utils/today');
const logger = require('../utils/logger');

// 获取药物数据
exports.medications = (req, res) => {
    const sqlQuery = `select * from Medication where idUser=? and Date(Date)=? ORDER BY TIME(date) ASC`
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

// 获取单个药物数据
exports.medication = (req, res) => {
    const sqlQuery = `select * from Medication where idUser=? and id=?`
    db.query(sqlQuery, [req.user.idUser, req.query.id], (err, results) => {
        if (err) return res.cc(err)
        if (results.length >= 0) {
            logger.log("获取单个药物数据成功:", req.query.date)
            return res.send({ status: 200, message: '获取单个药物数据成功', data: results})
            
        } else {
            logger.log("获取单个药物数据失败！")
            return res.cc('获取单个药物数据失败！', req.query.date)
        }
    })
}

// 获取待提醒药物数据
exports.pendingMedications = (req, res) => {
    const sqlQuery = `select * from Medication where idUser=? and Date>'${today.toDateTime()}' ORDER BY TIME(date) ASC`
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
    // 0：pending
    // 1: done
    const sqlUpdate = `update Medication set Status = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [req.body.status, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新药物状态成功:", req.body)
            return res.send({
                status: 200,
                message:'更新药物状态成功'
            })
        }
        logger.log("更新药物状态失败", req.body)
        return res.cc('更新药物状态失败')
    })
}

exports.editMedicationType = (req, res) => { 
    const sqlUpdate = `update Medication set Type = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [req.body.type, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新药物类型成功:", req.body)
            return res.send({
                status: 200,
                message:'更新药物类型成功'
            })
        }
        logger.log("更新药物类型失败", req.body)
        return res.cc('更新药物类型失败')
    })
}

exports.editMedicationName = (req, res) => { 
    const sqlUpdate = `update Medication set Name = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [req.body.name, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新药物名称成功:", req.body)
            return res.send({
                status: 200,
                message:'更新药物名称成功'
            })
        }
        logger.log("更新药物名称失败", req.body)
        return res.cc('更新药物名称失败')
    })
}

exports.editMedicationDose = (req, res) => { 
    const sqlUpdate = `update Medication set Dose = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [req.body.dose, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新药物剂量成功:", req.body)
            return res.send({
                status: 200,
                message:'更新药物剂量成功'
            })
        }
        logger.log("更新药物剂量失败", req.body)
        return res.cc('更新药物剂量失败')
    })
}

exports.editMedicationDate = (req, res) => { 
    const sqlUpdate = `update Medication set Date = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [req.body.date, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新药物时间成功:", req.body)
            return res.send({
                status: 200,
                message:'更新药物时间成功'
            })
        }
        logger.log("更新药物时间失败", req.body)
        return res.cc('更新药物时间失败')
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