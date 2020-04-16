const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
	body: String,
	date: Date,
	userId: Number
});
const userSchema = new Schema({
   name: {
		type: String,
		required: true
	},
   createAt: {
		type: Date,
		default: Date.now
	},
   modifyAt: {
		type: Date,
		default: Date.now
	},
	rate: Number,
	comments: [commentSchema],
	projectId: Number
})

mongoose.model('user', userSchema);