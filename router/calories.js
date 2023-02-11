//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const caloriesHandler = require('../router_handler/calories_handler')

router.get('/calories', caloriesHandler.calories)

router.get('/caloriesInfo', caloriesHandler.caloriesInfo)

router.post('/addCalories', caloriesHandler.addCalories)

router.post('/editType', caloriesHandler.editType)
router.post('/editTitle', caloriesHandler.editTitle)
router.post('/editContent', caloriesHandler.editContent)
router.post('/editCalories', caloriesHandler.editCalories)
router.post('/editTime', caloriesHandler.editTime)

//共享
module.exports = router