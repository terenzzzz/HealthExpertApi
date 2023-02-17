//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const trainingsHandler = require('../router_handler/trainings_handler')

router.get("/trainingOverall", trainingsHandler.trainingOverall)

router.post("/updateTrainingOverall", trainingsHandler.updateTrainingOverall)

router.get("/trainings", trainingsHandler.trainings)

router.get("/trainingInfo", trainingsHandler.trainingInfo)

router.get("/trainingLocation", trainingsHandler.trainingLocation)

router.post("/addTraining",trainingsHandler.addTraining)

router.post("/addLocations", trainingsHandler.addLocations)

router.post("/deleteTraining", trainingsHandler.deleteTraining)

router.post("/deleteTrainingLocation",trainingsHandler.deleteTrainingLocation)

//共享
module.exports = router