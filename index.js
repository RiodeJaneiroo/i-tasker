const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const urlMongo = `mongodb+srv://prainua:u5D1dKMjhxVogeYy@itasker-z1zrz.mongodb.net/i-tasker?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise;

mongoose.connect(urlMongo, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
});
