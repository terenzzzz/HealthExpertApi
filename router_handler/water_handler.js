// 导入数据库操作模块
const db = require('../db/index')
const today = require('../utils/today');
const logger = require('../utils/logger');


// 获取喝水汇总数据
exports.waterOverall = (req, res) => {
    const sqlQuery = `select * from WaterOverall where idUser=? and Date(Date)="${today.toDate()}"`
    db.query(sqlQuery, req.user.idUser, (err, results) => {
        if (err) return res.cc(err)
        if (results.length > 0) {
            logger.log("获取喝水汇总信息成功！")
            res.send({ status: 200, message: '获取喝水汇总信息成功！', data: results[0]})
        } else {
            logger.log("获取喝水汇总信息失败！")
            return res.cc('获取喝水汇总信息失败！')
        }
    })
}

// 更新喝水汇总数据
exports.updateWaterOverall = (req, res) => {
    var totalDrink = 0
    // Check if overallRecord exit
    const sqlQueryforOverall = `select * from WaterOverall where idUser=? and Date(Date)="${today.toDate()}"`
    db.query(sqlQueryforOverall, req.user.idUser, (err, results) => {
        if (err) return res.cc(err.message)
        if (results.length == 0) {
            const sqlInsert = `insert into WaterOverall set ?`
            db.query(sqlInsert, { idUser: req.user.idUser, Total: 0, Date: today.toDateTime() },
                (err, results) => {
                if(err) return res.cc(err.message)
            })
        } 
        const sqlQuery = `select * from Waters where idUser=? and Date(Time)="${today.toDate()}"`
        db.query(sqlQuery, req.user.idUser, (err, results) => {
            if (err) return res.cc(err.message)
            if (results.length > 0) {
                results.forEach(obj => {
                    totalDrink = totalDrink + obj.Value
                });
            }
            const sqlUpdate = `update WaterOverall set Total = ?, Date = "${today.toDateTime()}" 
            where idUser=? and Date(Date) ="${today.toDate()}"`
            db.query(sqlUpdate, [totalDrink, req.user.idUser], (err2, res2) => {
                if (err2) return res.cc(err2.message)
                if (res2.affectedRows === 1) {
                    logger.log("更新喝水汇总数据成功！")
                    return res.send({
                        status: 200,
                        message:'更新喝水汇总数据成功'
                    })
                } else {
                    logger.log("更新喝水汇总数据失败！")
                    return res.cc('添加喝水汇总数据失败！')
                }
            })
        })
    })
}

// 获取用户喝水模块数据
exports.waters = (req, res) => {
    const sqlQuery = `select * from Waters where idUser=? and Date(Time)="${today.toDate()}"`
    db.query(sqlQuery, req.user.idUser, (err, results) => {
        if (err) return res.cc(err)
        if (results.length > 0) {
            logger.log("获取用户喝水信息成功！")
            res.send({ status: 200, message: '获取用户喝水信息成功！', data: results})
        } else {
            logger.log("获取用户喝水信息失败！")
            return res.cc('获取用户喝水信息失败！')
        }
    })
}

exports.watersInfo = (req, res) => {
    const sqlQuery = `select * from Waters where idUser=? and id=?`
    db.query(sqlQuery, [req.user.idUser, req.query.id], (err, results) => {
        if (err) return res.cc(err)
        if (results.length == 1) {
            logger.log("获取用户喝水详细信息成功！")
            return res.send({ status: 200, message: '获取用户喝水详细信息成功！', data: results})
        } else {
            logger.log("获取用户喝水详细信息失败！")
            return res.cc('获取用户喝水详细信息失败！')
        }
    })
}

// 添加喝水数据
exports.addWaters = (req, res) => {
    const sqlInsert = `insert into Waters set ?`
    db.query(sqlInsert, {
        idUser: req.user.idUser, Type: req.body.type, Title: req.body.title,
        Content: req.body.content, Value: req.body.value, Time: today.toDateTime()
    }, function (err, results) {
        if (err) return res.cc(err)
        if (results.affectedRows == 1) {
            logger.log("添加喝水数据成功！",req.body)
            return res.send({ status: 200, message: '添加喝水数据成功！'})
        } else {
            logger.log("添加喝水数据成功！",req.body)
            return res.cc('添加喝水数据失败！')
        }
    })
}

exports.editWatersType = (req, res) => { 
    const sqlUpdate = `update Waters set Type = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [req.body.type, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新喝水类型成功！", req.body)
            return res.send({
                status: 200,
                message:'更新喝水类型成功'
            })
        }
        logger.log("添加喝水类型成功！", req.body)
        return res.cc('更新喝水类型失败')
    })
}

exports.editWatersTitle = (req, res) => { 
    const sqlUpdate = `update Waters set Title = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [req.body.title, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新喝水标题成功！", req.body)
            return res.send({
                status: 200,
                message:'更新喝水标题成功'
            })
        }
        logger.log("更新喝水标题失败！", req.body)
        return res.cc('更新喝水标题失败')
    })
}

exports.editWatersContent = (req, res) => { 
    const sqlUpdate = `update Waters set Content = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [req.body.content, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新喝水内容成功！", req.body)
            return res.send({
                status: 200,
                message:'更新喝水内容成功'
            })
        }
        logger.log("更新喝水内容失败！", req.body)
        return res.cc('更新喝水内容失败')
    })
}

exports.editWatersValue = (req, res) => { 
    const sqlUpdate = `update Waters set Value = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [req.body.value, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新喝水数值成功！", req.body)
            return res.send({
                status: 200,
                message:'更新喝水数值成功'
            })
        }
        logger.log("更新喝水数值成功！", req.body)
        return res.cc('更新喝水数值失败')
    })
}

exports.editWatersTime = (req, res) => { 
    let time = req.body.time
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth()+1;
    let date = today.getDate();
    let dateTime = year + "-" + (month + 1) + "-" + date + " " + time + ":00"// 2023-3-11 08：00
    const sqlUpdate = `update Waters set Time = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [dateTime, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新喝水时间成功！", req.body)
            return res.send({
                status: 200,
                message:'更新喝水时间成功'
            })
        }
        logger.log("更新喝水时间成功！", req.body)
        return res.cc('更新喝水时间失败')
    })
}

exports.deleteWaters = (req, res) => { 
    const sqlDelete = `delete from Waters where idUser = ? and id=?`
    db.query(sqlDelete, [req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("删除喝水记录成功！", req.body)
            return res.send({
                status: 200,
                message:'删除喝水记录成功'
            })
        }
        logger.log("删除喝水记录失败！", req.body)
        return res.cc('删除喝水记录失败')
    })
}