//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入处理函数
const walksHandler = require('../router_handler/walks_handler')

router.get("/walks", walksHandler.walks)

router.get('/walkSteps', walksHandler.walkSteps)




// 向外共享路由对象 
module.exports = router