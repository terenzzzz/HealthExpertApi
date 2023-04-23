//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const newsHandler = require('../router_handler/news_handler')

/**
 * @api {get} /api/news getNews
 * @apiGroup News
*/
router.get('/news', newsHandler.news)

/**
 * @api {get} /api/newInfo getNewInfo
 * @apiGroup News
 * 
 * @apiQuery {String} id id
*/
router.get('/newInfo', newsHandler.newsInfo)

//共享
module.exports = router