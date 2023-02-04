//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入处理函数
const userInfoHandler = require('../router_handler/userInfo_handler')

// 获取用户信息
/**
 * @api {get} /my/userInfo UserInfo
 * @apiName userInfo
 * @apiGroup User
 *
 * @apiQuery {Int} idUser Users unique ID.
 *
 * @apiSuccess {Int} idUser Users unique ID.
 * @apiSuccess {String} Email  Users Email.
 * @apiSuccess {String} Password  Users Password.
 * @apiSuccess {String} Name  Users Name.
 * @apiSuccess {Int} Age  Users Age.
 * @apiSuccess {Float} Height  Users Height.
 * @apiSuccess {Float} Weight  Users Weight.
 *
 * @apiSuccessExample Success-Response:
 * {
 *  "status": 200,
 *  "message": "获取用户详细信息成功！",
 *    "data": {
 *       "idUser": 8,
 *       "Email": "2@qq.com",
 *       "Password": "$2a$10$9AbBAd2yO4LZVnzG2xuUzOu2sGkBOFdSkwqys6I2gGwhPSI5rBpKW",
 *      "Name": null,
 *       "Age": null,
 *       "Height": null,
 *       "Weight": null
 *    }
 * }
 */
router.get('/userinfo', userInfoHandler.userInfo)

router.post('/editName', userInfoHandler.editName)
router.post('/editHeight', userInfoHandler.editHeight)
router.post('/editWeight', userInfoHandler.editWeight)

// 向外共享路由对象 
module.exports = router