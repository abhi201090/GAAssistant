var mongoose = require('mongoose');
//mongoose.connect('mongodb://gaadmin:nailcutter@ds048368.mlab.com:48368/gaapplication');
module.exports = function (connection) {
    var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
    var ObjId = mongoose.Types.ObjectId;

    var userSchema = new Schema({
        _id: ObjectId,
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        middleName: { type: String },
        username: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, required: true },
        role: { type: String, required: true }
    });

    //var User = mongoose.model('user', userSchema);
    return connection.model('user',userSchema);
}


//module.exports = User;