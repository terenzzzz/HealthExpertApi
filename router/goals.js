//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const goalsHandler = require('../router_handler/goals_handler')

router.post('/initGoals', goalsHandler.initGoals)

router.post('/editSteps', goalsHandler.editSteps)

router.post('/editTraining', goalsHandler.editTraining)

router.post('/editWater', goalsHandler.editWater)

router.post('/editSleep', goalsHandler.editSleep)

//共享
module.exports = router