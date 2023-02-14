//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const newsHandler = require('../router_handler/news_handler')

router.get('/news', newsHandler.news)

router.get('/newInfo', newsHandler.newsInfo)

//共享
module.exports = router