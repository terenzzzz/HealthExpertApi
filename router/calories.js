//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const caloriesHandler = require('../router_handler/calories_handler')

router.get('/caloriesOverall', caloriesHandler.caloriesOverall)
router.post('/addCaloriesOverall', caloriesHandler.addCaloriesOverall)
router.post('/subCaloriesOverall', caloriesHandler.subCaloriesOverall)

//获取用户卡路里记录
/**
 * @api {post} /my/addCalories AddCalories
 * @apiGroup Calories
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
 * @apiSuccess {Array} data  Respond Data.
 *
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "获取用户卡路里信息成功！",
    "data": [
        {
            "id": 1,
            "idUser": 14,
            "Type": "Intake",
            "Title": "Breakfast",
            "Content": "Break",
            "Calories": 288,
            "Time": "2023-03-11T09:22:00.000Z"
        },
        {
            "id": 2,
            "idUser": 14,
            "Type": "Burn",
            "Title": "Walking",
            "Content": "3000 steps",
            "Calories": 162,
            "Time": "2023-02-10T10:00:00.000Z"
        },
    ]
  *}
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
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "获取用户卡路里信息成功！",
    "data": [
        {
            "id": 1,
            "idUser": 14,
            "Type": "Intake",
            "Title": "Breakfast",
            "Content": "Break",
            "Calories": 288,
            "Time": "2023-03-11T09:22:00.000Z"
        }
    ]
  *}
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
 *
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "更新卡路里类型成功"
 * }
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
 *
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "更新卡路里类型成功"
 * }
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
 *
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "更新卡路里标题成功"
 * }
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
 *
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "更新卡路里内容成功"
 * }
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
 *
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "更新卡路里数值成功"
 * }
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
 *
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "更新卡路里时间成功"
 * }
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
 *
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "删除记录成功"
 * }
*/
router.post('/deleteCalories', caloriesHandler.deleteCalories)

//共享
module.exports = router