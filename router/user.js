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
 * @api {get} /user User
 * @apiName user
 * @apiGroup User
 *
 * @apiQuery {Int} idUser Users unique ID.
 *
 * @apiSuccess {Int} idUser Users unique ID.
 * @apiSuccess {String} email  Users Email.
 *
 * @apiSuccessExample Success-Response:
 * {
 *   "status": 200,
 *   "message": "获取用户基本信息成功！",
 *   "data": {
 *       "idUser": 3,
 *       "email": "2@2.com"
 *    }
 * }
 */
router.get('/user', userHandler.user)

// 查询用户信息
/**
 * @api {get} /userInfo UserInfo
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
router.get('/userInfo', userHandler.userInfo)

//共享
module.exports = router