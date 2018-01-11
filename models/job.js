var mongoose = require('mongoose');
mongoose.connect('mongodb://gaadmin:nailcutter@ds048368.mlab.com:48368/gaapplication');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var jobSchema = new Schema({
    _id: ObjectId,
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: String, required: true },
    deadline: { type: Date, required: true },
    startdate: { type: Date, required: true },
    enddate: { type: Date, required: true },
    wage: { type: Number, required: true },
    hrsperweek: { type: Number, required: true },
    resources: { type: Number, required: true},
    funding: {type: String, required: true},
    positionfor: {type: String, required :true},
    type: { type: String, required: true },
    facultyComment: { type: String, required: true},
    adminComment: {type: String, required: true},
    status: {type: String, required: true},
    term:{
        _id: Schema.Types.ObjectId,
        ref:'terms'
    },
    created_at: Date,
    updated_at: Date
});

var Job = mongoose.model('Jobs', jobSchema);

module.exports = Job;