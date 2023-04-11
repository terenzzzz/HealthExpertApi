//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const caloriesHandler = require('../router_handler/calories_handler')


/**
 * @api {get} /my/caloriesOverall GetCaloriesOverall
 * @apiGroup Calories
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiQuery {date} date
 * 
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
 * @apiSuccess {Array} data  Respond Data.
 *
*/
router.get('/caloriesOverall', caloriesHandler.caloriesOverall)

/**
 * @api {post} /my/updateCaloriesOverall UpdateCaloriesOverall
 * @apiGroup Calories
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * 
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
 *
*/
router.post('/updateCaloriesOverall', caloriesHandler.updateCaloriesOverall)

//获取用户卡路里记录
/**
 * @api {get} /my/calories getCalories
 * @apiGroup Calories
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
 * @apiSuccess {Array} data  Respond Data.
*/
router.get('/calories', caloriesHandler.calories)

//获取单个卡路里记录
/**
 * @api {post} /my/caloriesInfo CaloriesInfo
 * @apiGroup Calories
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiQuery {id} Calories ID
 *  
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
 * @apiSuccess {Array} data  Respond Data.
 *
*/
router.get('/caloriesInfo', caloriesHandler.caloriesInfo)


//添加卡路里记录
/**
 * @api {post} /my/addCalories AddCalories
 * @apiGroup Calories
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {String} type New Calories Type.
 * @apiBody {String} title New Calories title.
 * @apiBody {String} content New Calories content.
 * @apiBody {String} calories New Calories calories.
 * @apiBody {String} time New Calories time.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
*/
router.post('/addCalories', caloriesHandler.addCalories)


//修改卡路里记录类型
/**
 * @api {post} /my/editCaloriesType EditCaloriesType
 * @apiGroup Calories
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {String} type New Calories Type.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
*/
router.post('/editCaloriesType', caloriesHandler.editCaloriesType)

//修改卡路里记录标题
/**
 * @api {post} /my/editCaloriesTitle EditCaloriesTitle
 * @apiGroup Calories
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {String} title New Calories Title.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
*/
router.post('/editCaloriesTitle', caloriesHandler.editCaloriesTitle)

//修改卡路里记录内容
/**
 * @api {post} /my/editCaloriesContent EditCaloriesContent
 * @apiGroup Calories
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {String} content New Calories Content.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
*/
router.post('/editCaloriesContent', caloriesHandler.editCaloriesContent)

//修改卡路里记录时间
/**
 * @api {post} /my/editCaloriesCalories EditCaloriesCalories
 * @apiGroup Calories
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {String} calories New Calories Value.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
*/
router.post('/editCaloriesCalories', caloriesHandler.editCaloriesCalories)

//修改卡路里记录时间
/**
 * @api {post} /my/editCaloriesTime EditCaloriesTime
 * @apiGroup Calories
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {String} time New Calories Time.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
*/
router.post('/editCaloriesTime', caloriesHandler.editCaloriesTime)

//删除卡路里记录
/**
 * @api {post} /my/deleteCalories DeleteCalories
 * @apiGroup Calories
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {String} id Calories Id.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
*/
router.post('/deleteCalories', caloriesHandler.deleteCalories)

//共享
module.exports = router