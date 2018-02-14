var mongoose = require('mongoose');
var objId = mongoose.Types.ObjectId;
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var Term = require('../models/terms');
var User = require('../models/user');

var router = express.Router();

router.get('/test', (req,res) => {
    res.json('success');
});

router.post('/login',passport.authenticate('local'),(req,res)=>{;
    res.redirect('/');
});

router.get('/logout');

router.get('/userDetails',(req,res)=>{
    if(!req.user){
        res.status(500).send({error:"Unauthorized"});
        }
    res.json(req.user);
});

router.post('/addterm', (req,res)=>{
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
router.post('/updateterm', (req,res)=>{
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
router.post('/deleteterm', (req,res)=>{
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
router.get('/getTerms', (req,res)=>{
    if(!req.user){
        res.status(500).send({error:"Unauthorized"});
    }
    else{
        Term.find({}, function(err,terms){
            if(err)
                console.log(err);
            else{
                res.json(terms);
            }
        }).sort({created_at:-1});
    }
});

router.get('/validTerms', (req,res)=>{
    if(!req.user){
        res.status(500).send({error:"Unauthorized"});
    }
    else{
        Term.find({status:{$in:['Active','Upcoming']}},function(err,terms){
            if(err)
                console.log(err);
            else{
                res.json(terms);
            }
        }).sort({created_at:-1});
    }
});


module.exports = router;