const mongoose = require('mongoose');
const { Schema } = mongoose;


const taskSchema = new Schema({
   title: {
		type: String,
		required: true
	},
	listTask: [
		{ id: Number, done: Boolean, editor: Object }
	],
   createAt: {
		type: Date,
		default: Date.now
	},
   modifyAt: {
		type: Date,
		default: Date.now
	},
	comments: [{ body: String, date: Date,  }],
	projectId: String
})

mongoose.model('task', taskSchema);