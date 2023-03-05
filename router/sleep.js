//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const sleepHandler = require('../router_handler/sleep_handler')

router.get('/sleep', sleepHandler.sleep)

router.post('/addSleep', sleepHandler.addSleep)



//共享
module.exports = router