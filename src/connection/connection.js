const mongoose = require('mongoose');
const config = require('./config.js');
const url = `mongodb://${config.MONGOUSER}:${config.MONGOPASSWORD}@${config.MONGOHOST}:${config.MONGOPORT}`;

const conn = () => {
  console.log(config);
  return mongoose
    .connect(url)
    .then((db) => {
      console.log('connection successful');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = conn;
