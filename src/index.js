const express = require('express');
// const conn = require('./connection/config.js');
const app = express();

const conn = require('./connection/connection.js');

console.log(conn());

app.set('port', process.env.PORT || 5000);

app.get('/', function (req, res) {
  res.send(conn);
});

app.listen(app.get('port'), () => {
  console.log(`app run on port ${app.get('port')}`);
});
