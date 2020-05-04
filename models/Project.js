const mongoose = require('mongoose');
const { Schema } = mongoose;


const projectSchema = new Schema({
   title: {
		type: String,
		required: true
	},
   createAt: {
		type: Date,
		default: Date.now
	},
	siteUrl: String,
	body: Object,
	projectId: Number
})

mongoose.model('project', projectSchema);