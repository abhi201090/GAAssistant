var mongoose = require('mongoose');

module.exports = function (connection) {
  var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
  var termSchema = new Schema({
    _id: ObjectId,
    name: { type: String, required: true },
    status: { type: String, required: true },
    from: { type: Date, required: true },
    to: { type: Date, required: true },
    type: { type: String, required: true },
    created_at: Date,
    updated_at: Date
  });

  //var Term = mongoose.model('Terms', termSchema);
  return connection.model('Terms', termSchema);
}
//mongoose.connect('mongodb://gaadmin:nailcutter@ds048368.mlab.com:48368/gaapplication');


//module.exports = Term;