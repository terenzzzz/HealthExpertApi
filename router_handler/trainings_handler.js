// 导入数据库操作模块
const db = require('../db/index')
const today = require('../utils/today');
const logger = require('../utils/logger');

// 获取训练汇总数据
exports.trainingOverall = (req, res) => {
    const sqlQuery = `select * from TrainingOverall where idUser=? and Date(Date)="${today.toDate()}"`
    db.query(sqlQuery, req.user.idUser, (err, results) => {
        if (err) return res.cc(err)
        if (results.length > 0) {
            logger.log("获取训练汇总信息成功!")
            res.send({ status: 200, message: '获取训练汇总信息成功！', data: results[0]})
        } else {
            logger.log("获取训练汇总信息失败!")
            return res.cc('获取训练汇总信息失败！')
        }
    })
}

// 更新训练汇总数据
exports.updateTrainingOverall = (req, res) => {
    var distance = 0
    var speed = 0
    var calories = 0
    var totalDuration = 0

    // Check if overallRecord exit
    const sqlQueryforOverall = `select * from TrainingOverall where idUser=? and Date(Date)="${today.toDate()}"`
    db.query(sqlQueryforOverall, req.user.idUser, (err, results) => {
        if (err) return res.cc(err.message)
        if (results.length == 0) {
            const sqlInsert = `insert into TrainingOverall set ?`
            db.query(sqlInsert, { idUser: req.user.idUser, Distance: 0, Speed: 0, Calories: 0, Duration: 0, Date: today.toDateTime() },
                (err, results) => {
                if(err) return res.cc(err.message)
            })
        } 
        const sqlQuery = `select * from Trainings where idUser=? and Date(EndTime)="${today.toDate()}"`
        db.query(sqlQuery, req.user.idUser, (err, results) => {
            if (err) return res.cc(err.message)
            if (results.length > 0) {
                results.forEach(obj => {
                    distance += obj.Distance
                    speed += obj.Speed
                    calories += obj.CaloriesBurn
                    const startTime = new Date(obj.StartTime)
                    const endTime = new Date(obj.EndTime)
                    const duration = endTime.getTime() - startTime.getTime()
                    const durationInMins = Math.round(duration / 60000)
                    totalDuration += durationInMins
                });
                speed = speed/results.length
            }
        
            const sqlUpdate = `update TrainingOverall set Distance=?,Speed=?,Calories=?,
            Duration=?,Date = "${today.toDateTime()}" where idUser=? and Date(Date) ="${today.toDate()}"`
            db.query(sqlUpdate, [distance,speed,calories,totalDuration, req.user.idUser], (err2, res2) => {
                if (err2) return res.cc(err2.message)
                if (res2.affectedRows === 1) {
                    logger.log("更新训练汇总数据成功!")
                    return res.send({
                        status: 200,
                        message:'更新训练汇总数据成功'
                    })
                } else {
                    logger.log("更新训练汇总数据失败!")
                    return res.cc('更新训练汇总数据失败！')
                }
            })
        })
    })
}

// 获取用户训练模块数据
exports.trainings = (req, res) => {
    const sqlQuery = `select * from Trainings where idUser=? and Date(EndTime)="${today.toDate()}"`
    db.query(sqlQuery, req.user.idUser, (err, results) => {
        if (err) return res.cc(err)
        if (results.length > 0) {
            logger.log("获取用户训练信息成功!")
            res.send({ status: 200, message: '获取用户训练信息成功！', data: results})
        } else {
            logger.log("获取用户训练信息失败!")
            return res.cc('获取用户训练信息失败！')
        }
    })
}

exports.trainingInfo = (req, res) => {
    const sqlQuery = `select * from Trainings where idUser=? and id=?`
    db.query(sqlQuery, [req.user.idUser, req.query.id], (err, results) => {
        if (err) return res.cc(err)
        if (results.length == 1) {
            logger.log("获取用户训练详细信息成功!",req.query)
            res.send({ status: 200, message: '获取训练详细信息成功！', data: results})
        } else {
            logger.log("获取用户训练详细信息失败!",req.query)
            return res.cc('获取训练详细信息失败！')
        }
    })
}

exports.trainingLocation = (req, res) => {
    const sqlQuery = `select * from TrainingLocations where idTraining=?`
    db.query(sqlQuery, req.query.idTraining, (err, results) => {
        if (err) return res.cc(err)
        if (results.length > 0) {
            logger.log("获取训练定位信息成功!",req.query)
            res.send({ status: 200, message: '获取训练定位信息成功！', data: results})
        } else {
            logger.log("获取训练定位信息失败!",req.query)
            return res.cc('获取训练定位信息失败！')
        }
    })
}

exports.addTraining = (req, res) => {
    let startTime = today.toDate() + " " + req.body.startTime + ":00"
    let endTime = today.toDate() + " " + req.body.endTime + ":00"
    const sqlInsert = `insert into Trainings set ?`
    db.query(sqlInsert, {
        idUser: req.user.idUser,
        Type: req.body.type,
        Title: req.body.title,
        Distance: req.body.distance,
        Speed: req.body.speed,
        CaloriesBurn: req.body.caloriesBurn,
        StartTime: startTime,
        EndTime: endTime,
    }, function (err, results) {
        if (err) return res.cc(err)
        if (results.affectedRows == 1) {
            logger.log("添加训练数据成功!",req.body)
            res.send({ status: 200, message: '添加训练数据成功！', insertId: results.insertId})
        } else {
            logger.log("添加训练数据失败!",req.body)
            return res.cc('添加训练数据失败！')
        }
    })
}

exports.addLocations = (req, res) => { 
    // var locations = [
    //     { latitude: 53.3805467, longitude: -1.4769983 },
    //     { latitude: 53.3805467, longitude: -1.4769983 },
    //     { latitude: 53.3805467, longitude: -1.4769983 },
    // ];
    console.log(req.body.locations);
    const sqlInsert = `INSERT INTO TrainingLocations (idTraining,Latitude,Longitude) VALUES ?`
    const locations = JSON.parse(req.body.locations)
    const insertId = req.body.insertId
    console.log(locations);
    const data = []
    locations.forEach((v,i) => {
        data.push([insertId,v.latitude,v.longitude])
    });

    db.query(sqlInsert, [data], (err, results) => { 
        if (err) { return res.cc(err) }
        if (results.affectedRows >= 1) { 
            logger.log("定位添加成功!",req.body)
            return res.send({
                status: 0,
                message: '定位添加成功'
            })
        }
        logger.log("定位添加失败!",req.body)
        return res.cc('定位添加失败')
    })
}

exports.deleteTraining = (req, res) => { 
    const sqlDelete = `delete from Trainings where idUser = ? and id=?`
    db.query(sqlDelete, [req.user.idUser, req.body.id], (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows === 1) {
            logger.log("删除训练记录成功!",req.body)
            return res.send({
                status: 200,
                message:'删除训练记录成功'
            })
        }
        logger.log("删除训练记录失败!",req.body)
        return res.cc('删除训练记录失败')
    })
}

exports.deleteTrainingLocation = (req, res) => { 
    const sqlDelete = `delete from TrainingLocations where idTraining=?`
    db.query(sqlDelete, req.body.idTraining, (err, results) => {
        if(err) return res.cc(err.message)
        if (results.affectedRows >= 1) {
            logger.log("删除训练定位记录成功!",req.body)
            return res.send({
                status: 200,
                message:'删除训练定位记录成功'
            })
        }
        logger.log("删除训练定位记录失败!",req.body)
        return res.cc('删除训练定位失败')
    })
}