//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const goalsHandler = require('../router_handler/goals_handler')

/**
 * @api {get} /my/goal GetGoal
 * @apiGroup Goals
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *
*/
router.get('/goal', goalsHandler.goal)

/**
 * @api {post} /my/initGoals InitGoals
 * @apiGroup Goals
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 *
*/
router.post('/initGoals', goalsHandler.initGoals)

/**
 * @api {post} /my/editCalories EditCaloriesGoal
 * @apiGroup Goals
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiQuery {Int} calories
 *
*/
router.post('/editCalories', goalsHandler.editCalories)

/**
 * @api {post} /my/editSteps EditStepsGoal
 * @apiGroup Goals
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiQuery {Int} steps
 *
*/
router.post('/editSteps', goalsHandler.editSteps)

/**
 * @api {post} /my/editTraining EditTrainingGoal
 * @apiGroup Goals
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiQuery {Int} training
 *
*/
router.post('/editTraining', goalsHandler.editTraining)

/**
 * @api {post} /my/editWater EditWaterGoal
 * @apiGroup Goals
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiQuery {Int} water
 *
*/
router.post('/editWater', goalsHandler.editWater)

/**
 * @api {post} /my/editSleep EditSleepGoal
 * @apiGroup Goals
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiQuery {Int} sleep
 *
*/
router.post('/editSleep', goalsHandler.editSleep)

//共享
module.exports = router