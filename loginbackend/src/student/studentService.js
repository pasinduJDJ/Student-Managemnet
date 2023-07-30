var studentModel = require('./studentModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createStudentDBService = (studentDetails) => {
    return new Promise(function myFn(resolve, reject) {
        var studentModelData = new studentModel();
        studentModelData.name = studentDetails.name;
        studentModelData.address = studentDetails.address;
        studentModelData.username = studentDetails.username;
        studentModelData.password = studentDetails.password;
        var encrypted = encryptor.encrypt(studentDetails.password);
       studentModelData.password = encrypted;
        studentModelData.save(function resultHandle(error, result) {
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    });
 }


 module.exports.loginuserDBService = (studentDetails)=> 
{
   return new Promise(function myFn(resolve, reject) 
   {
      studentModel.findOne({ username: studentDetails.username},function getresult(errorvalue, result)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Data"});
         }
         else
         {
            if(result !=undefined &&  result !=null)
            {
               var decrypted = encryptor.decrypt(result.password);
               if(decrypted== studentDetails.password)
               {
                  resolve({status: true,msg: "Student Validated Successfully"});
               }
               else
               {
                  reject({status: false,msg: "Student Validated failed"});
               }
            }
            else
            {
               reject({status: false,msg: "Student Error Detailssss"});
            }
         }
      
      });
      
   });
}

////////////////////////////////////////////////////////

module.exports.getDataFromDBService = () => {
   return new Promise(function checkURL(resolve, reject) {

       studentModel.find({}, function returnData(error, result) {

           if (error) {
               reject(false);
           } else {
        
               resolve(result);
           }
       });

   });

}


module.exports.updateUserDBService = (id,studentDetails) => {     
   console.log(studentDetails);
   return new Promise(function myFn(resolve, reject) {
       studentModel.findByIdAndUpdate(id,studentDetails, function returnData(error, result) {
         if(error)
         {
               reject(false);
         }
         else
         {
            resolve(result);
         }
       });

   });
}

module.exports.removeUserDBService = (id) => { 
   return new Promise(function myFn(resolve, reject) {
       studentModel.findByIdAndDelete(id, function returnData(error, result) {

         if(error)
         {
               reject(false);
         }
         else
         {
            resolve(result);
         }          
       });
   });

}