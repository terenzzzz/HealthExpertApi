//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const heartRateHandler = require('../router_handler/heartRate_handler')


router.get('/heartRates', heartRateHandler.heartRates)

router.post('/addHeartRate', heartRateHandler.addHeartRate)

//共享
module.exports = router