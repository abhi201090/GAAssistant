var mongoose = require('mongoose');
var objId = mongoose.Types.ObjectId;
//var connection = mongoose.createConnection('mongodb://gaadmin:nailcutter@ds048368.mlab.com:48368/gaapplication');
var connection = mongoose.createConnection('mongodb://gauser:gapassword@fbsapps.wpi.edu:27017/gaapplication');
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var Term = require('../models/terms')(connection);
var User = require('../models/user')(connection);
var Job = require('../models/job')(connection);


var router = express.Router();

router.get('/test', (req, res) => {
    res.json('success');
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    ;
    res.redirect('/');
});

router.get('/logout');

router.get('/userDetails', (req, res) => {
    if (!req.user) {
        res.status(500).send({ error: "Unauthorized" });
    }
    res.json(req.user);
});

router.post('/addterm', (req, res) => {
    req.body._id = new objId;
    var newTerm = Term(req.body);
    newTerm.save(function (err) {
        if (err)
            console.log(err);
        else {
            console.log('Term Added');
        }
    });
});
router.post('/updateterm', (req, res) => {
    Term.findById(req.body._id, function (err, term) {
        if (err)
            console.log(err);
        else {
            term.name = req.body.name;
            term.status = req.body.status;
            term.from = req.body.from;
            term.to = req.body.to;
            term.type = req.body.type;
            term.updated_at = req.body.updated_at;
            term.save(function (saveError) {
                if (saveError)
                    console.log(saveError);
                else
                    console.log('Term updated');
            });
        }
    });
});
router.post('/deleteterm', (req, res) => {
    Term.findById(req.body._id, function (err, term) {
        if (err)
            console.log(err);
        else {
            term.remove(function (err) {
                if (err)
                    console.log(err);
                else
                    console.log('Term deleted');
            });
        }
    })
});
router.get('/getTerms', (req, res) => {
    if (!req.user) {
        res.status(500).send({ error: "Unauthorized" });
    }
    else {
        Term.find({}, function (err, terms) {
            if (err)
                console.log(err);
            else {
                res.json(terms);
            }
        }).sort({ created_at: -1 });
    }
});

router.get('/validTerms', (req, res) => {
    if (!req.user) {
        res.status(500).send({ error: "Unauthorized" });
    }
    else {
        Term.find({ status: { $in: ['Active', 'Upcoming'] } }, function (err, terms) {
            if (err)
                console.log(err);
            else {
                res.json(terms);
            }
        }).sort({ created_at: -1 });
    }
});

router.post('/addJob', (req, res) => {
    req.body._id = new objId;
    console.log(req.body);
    var newJob = Job(req.body);
    newJob.save(function (err) {
        if (err)
            console.log('err');
        else
            console.log('Job Added');
    });
});

router.get('/getFacultyJobs', (req, res) => {
    if (!req.user) {
        res.status(500).send({ error: "Unauthorized" });
    }
    else {
        Job.find({ user: req.user }, function (err, jobs) {
            if (err)
                console.log(err);
            else
                res.json(jobs);
        }).populate('term').sort({ created_at: -1 });
    }
});

router.post('/updateJob', (req, res) => {
    if (!req.user) {
        res.status(500).send({ error: "Unauthorized" });
    }
    else {
        Job.findById(req.body._id, function (err, job) {
                job._id = req.body._id;
                job.title = req.body.title;
                job.description = req.body.description;
                job.requirements = req.body.requirements;
                job.deadline = req.body.deadline;
                job.startdate = req.body.startdate;
                job.enddate = req.body.enddate;
                job.wage = req.body.wage;
                job.hrsperweek = req.body.hrsperweek;
                job.resources = req.body.resources;
                job.funding = req.body.funding;
                job.positionfor = req.body.positionfor;
                job.facultycomment = req.body.facultycomment;
                job.admincomment = req.body.admincomment;
                job.status = req.body.status;
                job.term = req.body.term;
                job.user = req.body.user;
                job.createdat = req.body.createdat;
                job.updatedat = req.body.updatedat;
                job.save(function(saveError){
                    if(saveError)
                        console.log(saveError);
                    else
                        console.log('Job updated');
                });
        });
    }
})

module.exports = router;