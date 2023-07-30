var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('students', studentSchema);