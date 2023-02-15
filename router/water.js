//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入处理函数
const waterHandler = require('../router_handler/water_handler')

router.get("/waters", waterHandler.waters)

router.get('/watersInfo', waterHandler.watersInfo)

router.post("/addWaters", waterHandler.addWaters)

router.post('/editWatersType', waterHandler.editWatersType)

router.post('/editWatersTitle', waterHandler.editWatersTitle)

router.post('/editWatersContent', waterHandler.editWatersContent)

router.post('/editWatersValue', waterHandler.editWatersValue)

router.post('/editWatersTime', waterHandler.editWatersTime)

router.post('/deleteWaters', waterHandler.deleteWaters)



// 向外共享路由对象 
module.exports = router