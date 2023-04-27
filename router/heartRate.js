//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const heartRateHandler = require('../router_handler/heartRate_handler')

/**
 * @api {get} /my/heartRates getHeartRates
 * @apiGroup Heart Rate
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiQuery {String} date
 *
*/
router.get('/heartRates', heartRateHandler.heartRates)

/**
 * @api {post} /my/addHeartRate AddHeartRate
 * @apiGroup Heart Rate
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {String} heartRate Heart Rate
 *
*/
router.post('/addHeartRate', heartRateHandler.addHeartRate)

//共享
module.exports = router