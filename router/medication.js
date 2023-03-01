//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const medicationHandler = require('../router_handler/medication_handler')

router.get('/medications', medicationHandler.medications)

router.get('/pendingMedications', medicationHandler.pendingMedications)

router.post('/addMedication', medicationHandler.addMedication)


//共享
module.exports = router