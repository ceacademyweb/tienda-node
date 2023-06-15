const express = require('express');
const app = express();

app.set('port', process.env.PORT || 5000);

// console.log('Starting');

// app.get('/', function (req, res) {
//   res.send('funcionando');
// });

// app.listen(app.get('port'), () => {
//   console.log(`app run on port ${app.get('port')}`);
// });

// const bcrypt = require('bcrypt');

console.log(app.get('port'));
