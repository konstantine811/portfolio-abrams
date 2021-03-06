var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var port = process.env.PORT || 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname, '/client/dist'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


//Set Static Folder
app.use(express.static(path.join(__dirname, '/client/dist')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);

app.get('*', function(req, res) {
    res.render(path.join(__dirname, '/client/dist/index.html'));
});

app.listen(port, function() {
    console.log('Server started on port' +port);
});