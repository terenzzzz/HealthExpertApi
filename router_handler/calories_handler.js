// 导入数据库操作模块
const db = require('../db/index')
const today = require('../utils/today');
const logger = require('../utils/logger');

// 获取用户卡路里模块数据
exports.caloriesOverall = (req, res) => {
    const sqlQuery = `select * from CaloriesOverall where idUser=? and Date(Date)=?`
    db.query(sqlQuery, [req.user.idUser, req.query.date], (err, results) => {
        if (err) return res.cc(err)
        if (results.length >= 0) {
            logger.log("获取卡路里汇总数据成功:", req.query.date)
            return res.send({ status: 200, message: '获取卡路里汇总数据成功！', data: results[0]})
            
        } else {
            logger.log("获取卡路里汇总数据失败！")
            return res.cc('获取卡路里汇总数据失败！', req.query.date)
            
        }
    })
}

// 卡路里汇总数据
exports.updateCaloriesOverall = (req, res) => {
    var totalIntake = 0
    var totalburn = 0
    var sum = 0

    // Check if overallRecord exit
    const sqlQueryforOverall = `select * from CaloriesOverall where idUser=? and Date(Date)="${today.toDate()}"`
    db.query(sqlQueryforOverall, req.user.idUser, (err, results) => {
        if (err) return res.cc(err.message)
        if (results.length == 0) {
            const sqlInsert = `insert into CaloriesOverall set ?`
            db.query(sqlInsert, { idUser: req.user.idUser, Intake: 0, Burn:0, Sum:0, Date: today.toDateTime() },
                (err, results) => {
                if(err) return res.cc(err.message)
            })
        } 
        const sqlQuery = `select * from Calories where idUser=? and Date(Time)="${today.toDate()}"`
        db.query(sqlQuery, req.user.idUser, (err, results) => {
            if (err) return res.cc(err.message)
            if (results.length > 0) {
                results.forEach(obj => {
                    if (obj.Type == "Intake") {
                        totalIntake = totalIntake + obj.Calories
                    } else {
                        totalburn = totalburn + obj.Calories
                    }
                });
            }
            sum = totalIntake - totalburn
            const sqlUpdate = `update CaloriesOverall set Intake = ?, Burn = ?, 
            Sum = ?, Date = "${today.toDateTime()}" where idUser=? and Date(Date) ="${today.toDate()}"`
            db.query(sqlUpdate, [totalIntake, totalburn, sum, req.user.idUser], (err2, res2) => {
                if(err2) return res.cc(err2.message)
                if (res2.affectedRows === 1) {
                    logger.log("更新卡路里汇总数据成功:")
                    return res.send({
                        status: 200,
                        message:'更新卡路里汇总数据成功'
                    })
                } else {
                    logger.log("更新卡路里汇总数据失败！")
                    return res.cc('添加卡路里汇总数据失败！')
                }
            })
        })
    })
}


// 获取用户卡路里模块数据
exports.calories = (req, res) => {
    const sqlQuery = `select * from Calories where idUser=? and Date(Time)=?`
    db.query(sqlQuery, [req.user.idUser,req.query.date], (err, results) => {
        if (err) return res.cc(err)
        if (results.length >= 0) {
            logger.log("获取用户卡路里信息成功:")
            console.log(results);
            res.send({ status: 200, message: '获取用户卡路里信息成功！', data: results})
        } else {
            logger.log("获取用户卡路里信息失败！")
            return res.cc('获取用户卡路里信息失败！')
        }
    })
}

// 获取卡路里详细信息
exports.caloriesInfo = (req, res) => {
    const sqlQuery = `select * from Calories where idUser=? and id=?`
    db.query(sqlQuery, [req.user.idUser, req.query.id], (err, results) => {
        if (err) return res.cc(err)
        if (results.length == 1) {
            logger.log("获取卡路里详细信息成功:", req.query)
            res.send({ status: 200, message: '获取卡路里详细信息成功！', data: results})
        } else {
            logger.log("获取卡路里详细信息失败！")
            return res.cc('获取卡路里详细信息失败！')
        }
    })
}

// 添加卡路里数据
exports.addCalories = (req, res) => {
    let time = req.body.time
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();
    let dateTime = year + "-" + (month + 1) + "-" + date + " " + time + ":00"// 2023-3-11 08：00
    console.log(dateTime);
    const sqlInsert = `insert into Calories set ?`
    db.query(sqlInsert, {
        idUser: req.user.idUser, Type: req.body.type, Title: req.body.title,
        Content: req.body.content, Calories: req.body.calories, Time: dateTime
    }, function (err, results) {
        if (err) return res.cc(err)
        if (results.affectedRows == 1) {
            logger.log("添加卡路里数据成功:", req.body)
            res.send({ status: 200, message: '添加卡路里数据成功！'})
        } else {
            logger.log("添加卡路里数据失败", req.body)
            return res.cc('添加卡路里数据失败！')
        }
    })
}

exports.editCaloriesType = (req, res) => { 
    const sqlUpdate = `update Calories set Type = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [req.body.type, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新卡路里类型成功:", req.body)
            return res.send({
                status: 200,
                message:'更新卡路里类型成功'
            })
        }
        logger.log("更新卡路里类型失败", req.body)
        return res.cc('更新类型失败')
    })
}

exports.editCaloriesTitle = (req, res) => { 
    const sqlUpdate = `update Calories set Title = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [req.body.title, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新卡路里标题成功:", req.body)
            return res.send({
                status: 200,
                message:'更新卡路里标题成功'
            })
        }
        logger.log("更新卡路里标题失败:", req.body)
        return res.cc('更新标题失败')
    })
}

exports.editCaloriesContent = (req, res) => { 
    const sqlUpdate = `update Calories set Content = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [req.body.content, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新卡路里内容成功:", req.body)
            return res.send({
                status: 200,
                message:'更新卡路里内容成功'
            })
        }
        logger.log("更新卡路里内容失败:", req.body)
        return res.cc('更新内容失败')
    })
}

exports.editCaloriesCalories = (req, res) => { 
    const sqlUpdate = `update Calories set Calories = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [req.body.calories, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新卡路里数值成功:", req.body)
            return res.send({
                status: 200,
                message:'更新卡路里数值成功'
            })
        }
        logger.log("更新卡路里数值失败:", req.body)
        return res.cc('更新卡路里数值失败')
    })
}

exports.editCaloriesTime = (req, res) => { 
    let time = req.body.time
    let date = today.toDate();
    let dateTime = date + " " + time + ":00"// 2023-03-11 08：00
    const sqlUpdate = `update Calories set Time = ? where idUser = ? and id=?`
    db.query(sqlUpdate, [dateTime, req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("更新时间成功:", dateTime)
            return res.send({
                status: 200,
                message:'更新时间成功'
            })
        }
        logger.log("更新时间失败:", req.body)
        return res.cc('更新时间失败')
    })
}

exports.deleteCalories = (req, res) => { 
    const sqlDelete = `delete from Calories where idUser = ? and id=?`
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