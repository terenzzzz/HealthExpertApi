//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const trainingsHandler = require('../router_handler/trainings_handler')

router.get("/trainings", trainingsHandler.trainings)

router.post("/addTraining",trainingsHandler.addTraining)

router.post("/addLocations",trainingsHandler.addLocations)

//共享
module.exports = router