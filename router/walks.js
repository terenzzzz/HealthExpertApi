//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入处理函数
const walksHandler = require('../router_handler/walks_handler')

/**
 * @api {get} /my/walksOverall getWalksOverall
 * @apiGroup Walk
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiQuery {String} date 
 *  
*/
router.get("/walksOverall", walksHandler.walksOverall)

/**
 * @api {get} /my/walkSteps walkSteps
 * @apiGroup Walk
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiQuery {String} date
 *  
*/
router.get('/walkSteps', walksHandler.walkSteps)

/**
 * @api {post} /my/updateWalksOverall updateWalksOverall
 * @apiGroup Walk
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} height 
 * @apiBody {String} weight 
 *  
*/
router.post('/updateWalksOverall', walksHandler.updateWalksOverall)

/**
 * @api {post} /my/addWalkSteps addWalkSteps
 * @apiGroup Walk
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} steps 
 *  
*/
router.post('/addWalkSteps', walksHandler.addWalkSteps)



// 向外共享路由对象 
module.exports = router