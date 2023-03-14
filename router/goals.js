//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const goalsHandler = require('../router_handler/goals_handler')

router.post('/addGoals', goalsHandler.addGoals)

//共享
module.exports = router