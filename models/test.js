var mongoose = require('mongoose');
mongoose.connect('mongodb://gaadmin:nailcutter@ds048368.mlab.com:48368/gaapplication');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var termSchema = new Schema({
    _id: ObjectId,
    term:{
        ref:'terms',
        term_id: Schema.Types.ObjectId
    }
  });
  
  var test = mongoose.model('test', termSchema);
  
  module.exports = test;