//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入验证表单数据的中间件 
const expressJoi = require('@escook/express-joi')
// 导入需要的验证规则对象
const { user_schema } = require('../schema/user')


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

//修改昵称
/**
 * @api {post} /my/editName EditName
 * @apiGroup User
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {String} name New User Name.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
 *
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "更新昵称成功"
 * }
*/
router.post('/editName', userInfoHandler.editName)

//修改性别
/**
 * @api {post} /my/editGender EditGender
 * @apiGroup User
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {Float} gender New User Gender.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
 *
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "更新性别成功"
 * }
*/
router.post('/editGender', userInfoHandler.editGender)

//修改年龄
/**
 * @api {post} /my/editAge EditAge
 * @apiGroup User
 * 
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {Int} age New User Age.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
 *
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "更新年龄成功"
 * }
*/
router.post('/editAge', userInfoHandler.editAge)


//修改身高
/**
 * @api {post} /my/editHeight EditHeight
 * @apiGroup User
 * 
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {Float} height New User Height.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
 *
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "更新身高成功"
 * }
*/
router.post('/editHeight', userInfoHandler.editHeight)

//修改体重
/**
 * @api {post} /my/editWeight EditWeight
 * @apiGroup User
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {Float} weight New User Weight.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
 *
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "更新体重成功"
 * }
*/
router.post('/editWeight', userInfoHandler.editWeight)

//修改BMI
/**
 * @api {post} /my/editBmi EditBmi
 * @apiGroup User
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {Float} bmi New User Bmi.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
 *
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "更新Bmi成功"
 * }
*/
router.post('/editBmi', userInfoHandler.editBMI)

//修改体脂率
/**
 * @api {post} /my/editBodyFatRate EditBodyFatRate
 * @apiGroup User
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {Float} bfr New User BodyFatRate.
 *
 * @apiSuccess {Int} status Respond Status Code.
 * @apiSuccess {String} message  Respond Message.
 *
 * @apiSuccessExample Success-Response:
 * {
    "status": 200,
    "message": "更新体脂率成功"
 * }
*/
router.post('/editBodyFatRate', userInfoHandler.editBodyFatRate)


/**
 * @api {post} /my/initUser initUser
 * @apiGroup User
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *  
 * @apiBody {String} height 
 * @apiBody {String} weight 
 * @apiBody {String} age 
 * @apiBody {String} gender 
 * @apiBody {String} name 
*/
router.post('/initUser', userInfoHandler.initUser)


/**
 * @api {post} /my/changePassword changePassword
 * @apiGroup User
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} password 
 * @apiBody {String} newPassword 
 *  
*/
router.post('/changePassword',expressJoi(user_schema), userInfoHandler.changePassword)

// 向外共享路由对象 
module.exports = router