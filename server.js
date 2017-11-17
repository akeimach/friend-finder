var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// app.use('/app', express.static('/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', require('./app/routing/htmlRoutes'));
app.use('/api', require('./app/routing/apiRoutes'));


app.listen(process.env.PORT || 3000, function() {
    console.log('Listening for requests');
});