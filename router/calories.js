//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const caloriesHandler = require('../router_handler/calories_handler')

router.get('/caloriesInfo', caloriesHandler.caloriesInfo)

//共享
module.exports = router