//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const caloriesHandler = require('../router_handler/calories_handler')

router.get('/calories', caloriesHandler.calories)

router.get('/caloriesInfo', caloriesHandler.caloriesInfo)

router.post('/addCalories', caloriesHandler.addCalories)

router.post('/editCaloriesType', caloriesHandler.editCaloriesType)
router.post('/editCaloriesTitle', caloriesHandler.editCaloriesTitle)
router.post('/editCaloriesContent', caloriesHandler.editCaloriesContent)
router.post('/editCaloriesCalories', caloriesHandler.editCaloriesCalories)
router.post('/editCaloriesTime', caloriesHandler.editCaloriesTime)

//共享
module.exports = router