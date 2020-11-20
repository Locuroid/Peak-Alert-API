const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { DateTime } = require('luxon');
const main = require('./main.js')

var now = DateTime.local().setZone('America/Phoenix');

console.log(`It is ${now.hour}:${now.minute}`)

var status = main.exportResult()

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.get('/', function(req, res, next) {
  res.redirect('https://PeakAlert.locuroid.repl.co')
})

app.get('/status', function(req, res, next) {
  res.json({ "status": main.exportResult() });
});

//Listen
app.listen(3000);

console.log('Listening on 3000 | %cServer is ready to go!', "color: green")