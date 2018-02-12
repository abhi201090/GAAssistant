var mongoose = require('mongoose');
mongoose.connect('mongodb://gaadmin:nailcutter@ds048368.mlab.com:48368/gaapplication');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
var ObjId = mongoose.Types.ObjectId;

var userSchema = new Schema({
    _id: ObjectId,
    firstName: { type: String, required: true },
    lastName:{ type: String, required: true },
    middleName: {type: String},
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: {type: String, required: true}
});

var User = mongoose.model('user', userSchema);
/*
User.FindorCreate = function (userInfo) {
    User.find({ commonname: userInfo.commonname }, function (err, user) {
        console.log(user);
        if (err)
            console.log(err);
        else if (!user || user === [] || user.length === 0) {
            var Object_ID = new ObjId;
            var nuser = {
                _id: new ObjId,
                commonname: userInfo.commonname,
                surname: userInfo.surname,
                givenname: userInfo.givenname,
                uid: userInfo.uid,
                email: userInfo.email
            };
            var newuser = new User(nuser);
            newuser.save(function (err) {
                if (err)
                    console.log(err);
                else
                    console.log('Added User');
            })

        }
    })
}*/

module.exports = User;