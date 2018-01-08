var mongoose = require('mongoose');
var objId = mongoose.Types.ObjectId;
var express = require('express');
var bodyParser = require('body-parser');
var CASAuthentication = require('cas-authentication');
var Term = require('../models/terms');

var cas = new CASAuthentication({
    cas_url     : 'https://localhost/cas',
    service_url : 'http://localhost:3000',
    cas_version: "2.0",
    session_info: "user_info"
});

var router = express.Router();

router.get('/test',cas.block, (req,res) => {
    res.json('success');
});

router.get('/login',cas.bounce,(req,res)=>{
    res.redirect('/');
});

router.get('/userDetails',cas.block,(req,res)=>{
    res.json(req.session.user_info);
});

router.post('/addterm', cas.block, (req,res)=>{
    req.body._id = new objId;
    var newTerm = Term(req.body);
    newTerm.save(function(err){
        if(err)
            console.log(err);
        else{
            console.log('Term Added');
        }
    });
});
router.post('/updateterm', cas.block, (req,res)=>{
    Term.findById(req.body._id, function(err,term){
        if(err)
            console.log(err);
        else{
            term.name = req.body.name;
            term.status = req.body.status;
            term.from = req.body.from;
            term.to = req.body.to;
            term.type = req.body.type;
            term.updated_at = req.body.updated_at;
            term.save(function(saveError){
                if(saveError)
                    console.log(saveError);
                else
                    console.log('Term updated');
            });
        }
    });
});
router.post('/deleteterm', cas.block, (req,res)=>{
    Term.findById(req.body._id, function(err, term){
        if(err)
            console.log(err);
        else{
            term.remove(function(err){
                if(err)
                    console.log(err);
                else
                    console.log('Term deleted');
            });
        }
    })
});
router.get('/getTerms', cas.block, (req,res)=>{
    Term.find({}, function(err,terms){
        if(err)
            console.log(err);
        else{
            res.json(terms);
        }
    }).sort({created_at:-1});
});
router.get('/logout',cas.logout);

module.exports = router;