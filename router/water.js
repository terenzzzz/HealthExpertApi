//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入处理函数
const waterHandler = require('../router_handler/water_handler')

router.get("/waters", waterHandler.waters)

router.post("/addWaters", waterHandler.addWaters)

// 向外共享路由对象 
module.exports = router