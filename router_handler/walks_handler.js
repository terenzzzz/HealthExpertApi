// 导入数据库操作模块
const db = require('../db/index')
const today = require('../utils/today');
const metric = require('../utils/metric');
const logger = require('../utils/logger');

// 获取用户当天行走信息数据
exports.walksOverall = (req, res) => {
    const sqlQuery = `select * from WalksOverall where idUser=? and Date(Date)="${today.toDate()}"`
    db.query(sqlQuery, req.user.idUser, (err, results) => {
        if (err) return res.cc(err)
        if (results.length == 1) {
            logger.log("获取行走汇总信息成功！")
            return res.send({ status: 200, message: '获取行走汇总信息成功！', data: results[0]})
        } else {
            logger.log("获取行走汇总信息失败！")
            return res.cc('获取行走汇总信息失败！')
        }
    })
}

exports.walkSteps = (req, res) => {
    const sqlQuery = `select * from WalkSteps where idUser=? and Date(Time)="${today.toDate()}"`
    db.query(sqlQuery,req.user.idUser,  (err, results) => {
        if (err) return res.cc(err)
        if (results.length > 0) {
            logger.log("获取用户当天行走步数信息成功！")
            res.send({ status: 200, message: '获取用户当天行走步数信息成功！', data: results})
        } else {
            logger.log("获取用户当天行走步数信息失败！")
            return res.cc('获取用户当天行走步数信息失败！')
        }
    })
}

exports.updateWalksOverall = (req, res) => {
    let step =  0
    let calories = 0
    let distance = 0
    const weight = req.body.weight
    const height = req.body.height
    const stepLength = metric.stepLength(height)
    const met = metric.walkingMet()

    // Check if overallRecord exit
    const sqlQueryforOverall = `select * from WalksOverall where idUser=? and Date(Date)="${today.toDate()}"`
    db.query(sqlQueryforOverall, req.user.idUser, (err, results) => {
        if (err) return res.cc(err.message)
        if (results.length == 0) {
            const sqlInsert = `insert into WalksOverall set ?`
            db.query(sqlInsert, { idUser: req.user.idUser, TotalSteps: 0, Calories:0, Distance:0, Date: today.toDateTime() },
                (err, results) => {
                if(err) return res.cc(err.message)
            })
        } 
        const sqlQuery = `select * from WalkSteps where idUser=? and Date(Time)="${today.toDate()}"`
        db.query(sqlQuery, req.user.idUser, (err, results) => {
            if (err) return res.cc(err.message)
            if (results.length > 0) {
                results.forEach(obj => {
                    const distancebyStep = metric.distance(obj.Steps, stepLength)
                    const caloriesbyStep = metric.calories(weight,distancebyStep,met)
                    step += obj.Steps
                    calories += caloriesbyStep
                    distance += distancebyStep
                });
            }
            console.log(`step: ${step}`);
            console.log(`calories: ${calories}`);
            console.log(`distance: ${distance}`);
            const sqlUpdate = `update WalksOverall set TotalSteps = ?, Calories = ?, 
            Distance = ?, Date = "${today.toDateTime()}" where idUser=? and Date(Date) ="${today.toDate()}"`
            db.query(sqlUpdate, [step, calories, distance.toFixed(2), req.user.idUser], (err2, res2) => {
                if(err2) return res.cc(err2.message)
                if (res2.affectedRows === 1) {
                    logger.log("更新步数汇总数据成功！",req.body)
                    return res.send({
                        status: 200,
                        message:'更新步数汇总数据成功'
                    })
                } else {
                    logger.log("添加步数汇总数据失败！",req.body)
                    return res.cc('添加步数汇总数据失败！')
                }
            })
        })
    })
}


// 添加步数数据
exports.addWalkSteps = (req, res) => {
    const sqlInsert = `insert into WalkSteps set ?`
    db.query(sqlInsert, {idUser: req.user.idUser,Steps: req.body.steps,Time: today.toDateTime()}, function (err, results) {
        if (err) return res.cc(err)
        if (results.affectedRows == 1) {
            logger.log("添加步数数据成功！",req.body)
            return res.send({ status: 200, message: '添加步数数据成功！'})
        } else {
            logger.log("添加步数数据失败！",req.body)
            return res.cc('添加步数数据失败！')
        }
    })
}

