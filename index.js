const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// pkill node
// IMPORT MODELS
require('./models/Task');
require('./models/Project');

const app = express();
const urlMongo = 'mongodb+srv://prainua:u5D1dKMjhxVogeYy@itasker-z1zrz.mongodb.net/i-tasker?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;

mongoose.connect(urlMongo, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// IMPORT ROUTES
require('./routes/taskRoutes')(app);
require('./routes/projectRoutes')(app);


if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
 
	const foo = function(_req, res) {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	}
 	app.get('*', foo);
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});


// process.on('uncaughtException', function (err) {
// 	console.error(err.stack);
// 	console.log("Node NOT Exiting...");
//  });