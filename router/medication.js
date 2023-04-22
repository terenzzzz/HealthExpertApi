//导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

//导入处理函数
const medicationHandler = require('../router_handler/medication_handler')

/**
 * @api {get} /my/medications GetMedications
 * @apiGroup Medication
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiQuery {String} Date
 *
*/
router.get('/medications', medicationHandler.medications)

/**
 * @api {get} /my/medication GetMedication
 * @apiGroup Medication
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiQuery {String} id
 *
*/
router.get('/medication', medicationHandler.medication)

/**
 * @api {get} /my/pendingMedications GetPendingMedications
 * @apiGroup Medication
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 *
*/
router.get('/pendingMedications', medicationHandler.pendingMedications)

/**
 * @api {post} /my/addMedication AddMedication
 * @apiGroup Medication
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {String} type 
 * @apiBody {String} name 
 * @apiBody {String} dose
 * @apiBody {String} date
 *
*/
router.post('/addMedication', medicationHandler.addMedication)

/**
 * @api {post} /my/editMedicationStatus editMedicationStatus
 * @apiGroup Medication
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {Int} id 
 * @apiBody {String} status 
 *
*/
router.post('/editMedicationStatus', medicationHandler.editMedicationStatus)

/**
 * @api {post} /my/editMedicationType editMedicationType
 * @apiGroup Medication
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {Int} id 
 * @apiBody {String} type 
 *
*/
router.post('/editMedicationType', medicationHandler.editMedicationType)

/**
 * @api {post} /my/editMedicationName editMedicationName
 * @apiGroup Medication
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {Int} id 
 * @apiBody {String} name 
 *
*/
router.post('/editMedicationName', medicationHandler.editMedicationName)

/**
 * @api {post} /my/editMedicationDose editMedicationDose
 * @apiGroup Medication
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {Int} id 
 * @apiBody {String} dose 
 *
*/
router.post('/editMedicationDose', medicationHandler.editMedicationDose)

/**
 * @api {post} /my/editMedicationDate editMedicationDate
 * @apiGroup Medication
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {Int} id 
 * @apiBody {String} date 
 *
*/
router.post('/editMedicationDate', medicationHandler.editMedicationDate)

/**
 * @api {post} /my/deleteMedication deleteMedication
 * @apiGroup Medication
 *
 * @apiHeader {String} Authorization Users Login AWT Token.
 * 
 * @apiBody {Int} id 
 *
*/
router.post('/deleteMedication', medicationHandler.deleteMedication)


//共享
module.exports = router