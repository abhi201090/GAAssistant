var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var connection = mongoose.createConnection('mongodb://gaadmin:nailcutter@ds048368.mlab.com:48368/gaapplication');
var User = require('./models/user')(connection);
var app = express();


process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var api = require('./server/api');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up an Express session, which is required for CASAuthentication. 



app.use(express.static(path.join(__dirname, 'dist')));
app.use(session({
  secret: 'super secret key',
  resave: false,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, cb) {

  cb(null, user._id);
});

passport.deserializeUser(function (id, cb) {
  User.findById(id, function (err, user) {

    cb(err, user);
  });
});


passport.use(new LocalStrategy(
  function(username, password, done) {
      User.findOne({
        username: username
      }, function(err, user) {
        if (err) {
          return done(err);
        }

        if (!user) {
          //console.log(user);
          return done(null, false);
        }
        if (user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      });
  }
));
app.use('/', api);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//var port = process.env.PORT || '80';
var port = process.env.OPENSHIFT_NODEJS_PORT || '3000';
//var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
app.set('port', port);

var server = http.createServer(app);
server.listen(port, () => console.log("Server is running"));


