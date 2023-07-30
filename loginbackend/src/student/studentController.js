var studentService = require('./studentService');

var createStudentControllerFn = async (req, res) => {
    try {
        console.log(req.body);
        var status = await studentService.createStudentDBService(req.body);
        console.log(status);
        if (status) {
            res.send({ "status": true, "message": "Student created successfully" });
        } else {
            res.send({ "status": false, "message": "Error creating user" });
        }
    }
    catch (err) {
        console.log(err);
    }
}


var loginUserControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await studentService.loginuserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}

//////////////////////////////////////////////////////////

var getDataConntrollerfn = async (req, res) => {
    var student = await studentService.getDataFromDBService();
    res.send({ "status": true, "data": student });
}

var updateUserController = async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    var result = await studentService.updateUserDBService(req.params.id, req.body);
    if (result) {
        res.send({ "status": true, "message": "User Updated" });
    } else {
        res.send({ "status": false, "message": "User Updated Failed" });
    }
}

var deleteUserController = async (req, res) => {
    console.log(req.params.id);
    var result = await studentService.removeUserDBService(req.params.id);
    if (result) {
        res.send({ "status": true, "message": "User Deleteddd" });
    } else {
        res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
    }
}


module.exports = { createStudentControllerFn, loginUserControllerFn, getDataConntrollerfn, updateUserController, deleteUserController };