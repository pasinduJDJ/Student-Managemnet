var express = require('express');

var studentController = require('../src/student/studentController');
const router = express.Router();

//show users
router.route('/student/getAll').get(studentController.getDataConntrollerfn);
//update user 
router.route('/student/update/:id').patch(studentController.updateUserController);
//delete user
router.route('/student/delete/:id').delete(studentController.deleteUserController);
// login users
router.route('/student/login').post(studentController.loginUserControllerFn);
//create user
router.route('/student/create').post(studentController.createStudentControllerFn);


module.exports = router;