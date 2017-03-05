var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var apis = require('./routes/apis');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', apis);



app.get('*', function(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '/public') });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



var port = process.env.PORT || 8082;        // set our port

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('server starts on port ' + port);


module.exports = app;
