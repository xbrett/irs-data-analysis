const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));


app.get('/', function (req, res) {
  res.render('index');
})

app.get('/admincompensataion', function (req, res) {
  res.render('rel1.ejs');
})

app.get('/incomesource', function (req, res) {
  res.render('rel2.ejs', {anychart: anychart});
})

app.get('/totalrevenues', function (req, res) {
  res.render('rel3.ejs');
})

app.get('/highwages', function (req, res) {
  res.render('rel4.ejs');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})