/*
 * Module dependencies
 */
var express = require('express');
var get_info = require('./get_info');
  
var app = express();

app.set('views', __dirname + '/pug');
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  function callback(data) {
      res.render('index', {
        title: data.title,
        artist: data.artist,
        singer: data.singer,
      });
  }
  get_info.get_track_info(callback);
})

app.get('/get_track_info', function (req, res) {
  function callback(data) {
      res.json({
        title: data.title,
        artist: data.artist,
        singer: data.singer,
      });
  }
  get_info.get_track_info(callback);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
