//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const trainingsHandler = require('../router_handler/trainings_handler')


/**
 * @api {get} /my/trainingOverall getTrainingOverall
 * @apiGroup Trainings
 * 
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiQuery {String} date date
*/
router.get("/trainingOverall", trainingsHandler.trainingOverall)


/**
 * @api {post} /my/updateTrainingOverall updateTrainingOverall
 * @apiGroup Trainings
 * 
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
*/
router.post("/updateTrainingOverall", trainingsHandler.updateTrainingOverall)

/**
 * @api {get} /my/trainings getTrainings
 * @apiGroup Trainings
 * 
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiQuery {String} date date
*/
router.get("/trainings", trainingsHandler.trainings)

/**
 * @api {get} /my/trainingInfo getTrainingInfo
 * @apiGroup Trainings
 * 
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiQuery {String} id id 
*/
router.get("/trainingInfo", trainingsHandler.trainingInfo)

/**
 * @api {get} /my/trainingLocation getTrainingLocation
 * @apiGroup Trainings
 * 
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiQuery {String} idTraining Training id
*/
router.get("/trainingLocation", trainingsHandler.trainingLocation)

/**
 * @api {post} /my/addTraining addTraining
 * @apiGroup Trainings
 * 
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} type Training type
 * @apiBody {String} titleTraining title
 * @apiBody {String} distance Training distance
 * @apiBody {String} speed Training speed
 * @apiBody {String} caloriesBurn Training caloriesBurn
 * @apiBody {String} startTime Training startTime
 * @apiBody {String} endTime Training endTime
*/
router.post("/addTraining",trainingsHandler.addTraining)

/**
 * @api {post} /my/addLocations addLocations
 * @apiGroup Trainings
 * 
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} insertId Training Id
 * @apiBody {String} locations Training locations
*/
router.post("/addLocations", trainingsHandler.addLocations)

/**
 * @api {post} /my/deleteTraining deleteTraining
 * @apiGroup Trainings
 * 
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} id Training id
*/
router.post("/deleteTraining", trainingsHandler.deleteTraining)

/**
 * @api {post} /my/deleteTrainingLocation deleteTrainingLocation
 * @apiGroup Trainings
 * 
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} idTraining Training id
*/
router.post("/deleteTrainingLocation",trainingsHandler.deleteTrainingLocation)

//共享
module.exports = router