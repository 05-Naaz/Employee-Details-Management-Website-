const express = require('express')
const router = express.Router();

const controller = require('../controller/controller');
const manager = require('../manager/manager');
const middleware = require('../middleware/middleware')

let fileUploadHelper  = require('../fileuploads/file_upload');

router.post('/admin_register',fileUploadHelper.uploadUserProfileImage.single('image'),controller.adminRegister)
router.post('/admin_login',controller.adminLogin)

router.get('/employee_list',controller.getEmpList)

router.post('/employee_register',middleware.validateUser,fileUploadHelper.uploadUserProfileImage.single('image'),controller.employeeRegister)
router.post('/employee_login',controller.employeeLogin)


router.get('/getemployee_details/:id',controller.getEmpDetails)
router.put('/update_employee/:id',middleware.validateUser,fileUploadHelper.uploadUserProfileImage.single('image'),controller.updateEmployee)


router.delete('/delete_employee/:id',middleware.validateUser,controller.deleteEmployee)
module.exports=router;
