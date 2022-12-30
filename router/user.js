//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const userHandler = require('../router_handler/user_handler')
// 导入验证表单数据的中间件 
const expressJoi = require('@escook/express-joi')
// 导入需要的验证规则对象
const { user_schema } = require('../schema/user')


// 注册新用户
router.post('/register', expressJoi(user_schema), userHandler.register)

// 登录
router.post('/login', expressJoi(user_schema), userHandler.login)

// 查询用户
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.get('/user', userHandler.user)

// 查询用户信息
router.get('/userInfo', userHandler.userInfo)

//共享
module.exports = router