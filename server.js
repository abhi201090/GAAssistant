var express = require('express');
var bodyParser = require('body-parser');
var http = require ('http');
var path = require ('path');
var session = require('express-session');

var app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var api = require ('./server/api');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set up an Express session, which is required for CASAuthentication. 
app.use( session({
    secret            : 'super secret key',
    resave            : false,
    saveUninitialized : true
}));


app.use(express.static(path.join(__dirname,'dist')));
app.use('/', api);

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//var port = process.env.PORT || '3000';
var port = process.env.OPENSHIFT_NODEJS_PORT || '8080';
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
app.set('port', port);

var server = http.createServer(app);
server.listen(port, server_ip_address, ()=> console.log("Server is running"));


