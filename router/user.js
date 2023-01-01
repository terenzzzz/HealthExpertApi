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
/**
 * @api {post} /register Register
 * @apiName register
 * @apiGroup User
 *
 * @apiBody {String} email Users email.
 * @apiBody {String} password Users password.
 * @apiBody {String} confirmPassword Users confirmPassword.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
 *
 * @apiSuccessExample Success-Response:
 * {
 *   "status": 200,
 *   "message": "注册成功"
 * }
 */
router.post('/register', expressJoi(user_schema), userHandler.register)

// 登录
/**
 * @api {post} /login Login
 * @apiName login
 * @apiGroup User
 *
 * @apiBody {String} email Users email.
 * @apiBody {String} password Users password.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
 * @apiSuccess {Int} idUser User uniqe Id.
 * @apiSuccess {String} token User Login Token.
 *
 * @apiSuccessExample Success-Response:
 * {
 *   "status": 200,
 *   "message": "登录成功！"
 *   "idUser": 5,
 *   "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjUsIkVtYWlsIjoiNEA0LmNv
 *      bSIsIlBhc3N3b3JkIjoiJDJhJDEwJEJCUmdPb0NvSnJnN3F4VWsuOWtiLnVzOUxKV0g2UGNDTFJvU0prLmY1SEhY
 *      QWZ1emozQVlxIiwiTmFtZSI6bnVsbCwiQWdlIjpudWxsLCJIZWlnaHQiOm51bGwsIldlaWdodCI6bnVsbCwicGFzc
 *      3dvcmQiOiIiLCJpYXQiOjE2NzI1OTM3OTMsImV4cCI6MTY3MzE5ODU5M30.3tU0VXcul3Uc_l_GJlDJz-5EnJShl9Tx
 *      LJ6nYJfjLxk"
 * }
 */
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