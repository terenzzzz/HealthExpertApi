//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const sleepHandler = require('../router_handler/sleep_handler')

/**
 * @api {get} /my/sleep getSleep
 * @apiGroup Sleep
 * 
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiQuery {String} date date
*/
router.get('/sleep', sleepHandler.sleep)


/**
 * @api {post} /my/lastFiveSleep LastFiveSleep
 * @apiGroup Sleep
 * 
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
*/
router.get('/lastFiveSleep', sleepHandler.lastFiveSleep)

/**
 * @api {post} /my/addSleep AddSleep
 * @apiGroup Sleep
 * 
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} temperature
 * @apiBody {String} pressure
 * @apiBody {String} light
 * @apiBody {String} humidity
 * @apiBody {String} startTime
*/
router.post('/addSleep', sleepHandler.addSleep)



//共享
module.exports = router