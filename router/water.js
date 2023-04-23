//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入处理函数
const waterHandler = require('../router_handler/water_handler')

/**
 * @api {get} /my/waterOverall waterOverall
 * @apiGroup Water
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiQuery {String} date
 *  
*/
router.get('/waterOverall', waterHandler.waterOverall)

/**
 * @api {post} /my/updateWaterOverall updateWaterOverall
 * @apiGroup Water
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 *  
*/
router.post('/updateWaterOverall', waterHandler.updateWaterOverall)

/**
 * @api {get} /my/waters getWaters
 * @apiGroup Water
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiQuery {String} date
 *  
*/
router.get("/waters", waterHandler.waters)

/**
 * @api {get} /my/watersInfo getWatersInfo
 * @apiGroup Water
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiQuery {String} id
 *  
*/
router.get('/watersInfo', waterHandler.watersInfo)

/**
 * @api {post} /my/addWaters addWaters
 * @apiGroup Water
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} type 
 * @apiBody {String} title 
 * @apiBody {String} content 
 * @apiBody {String} value 
 * @apiBody {String} time 
 *  
*/
router.post("/addWaters", waterHandler.addWaters)

/**
 * @api {post} /my/editWatersType editWatersType
 * @apiGroup Water
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} id 
 * @apiBody {String} type 
*/
router.post('/editWatersType', waterHandler.editWatersType)

/**
 * @api {post} /my/editWatersTitle editWatersTitle
 * @apiGroup Water
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} id 
 * @apiBody {String} title 
*/
router.post('/editWatersTitle', waterHandler.editWatersTitle)

/**
 * @api {post} /my/editWatersContent editWatersContent
 * @apiGroup Water
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} id 
 * @apiBody {String} content 
*/
router.post('/editWatersContent', waterHandler.editWatersContent)

/**
 * @api {post} /my/editWatersValue editWatersValue
 * @apiGroup Water
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} id 
 * @apiBody {String} value 
*/
router.post('/editWatersValue', waterHandler.editWatersValue)

/**
 * @api {post} /my/editWatersTime editWatersTime
 * @apiGroup Water
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} id 
 * @apiBody {String} time 
*/
router.post('/editWatersTime', waterHandler.editWatersTime)

/**
 * @api {post} /my/deleteWaters deleteWaters
 * @apiGroup Water
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} id 
*/
router.post('/deleteWaters', waterHandler.deleteWaters)

// 向外共享路由对象 
module.exports = router