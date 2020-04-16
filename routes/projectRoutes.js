const mongoose = require('mongoose');
const Project = mongoose.model('project');

module.exports = (app) => {

	app.get(`/api/project-list`, async (req, res) => {		
		let tasks = await Project.find();
		return res.status(200).send(tasks);
	});

	app.post(`/api/project`, async (req, res) => {
				
		let project = await Project.create(req.body);		

		return res.status(201).send({
			error: false,
			project
		});
	});
	app.post(`/api/project/:id`, async (req, res) => {
		const { id } = req.params;
				
		let project = await Project.findOne({_id: id});		

		return res.status(201).send({
			error: false,
			project
		});
	});

	app.put(`/api/project/:id`, async (req, res) => {
		const { id } = req.params;
		let task = await Project.findByIdAndUpdate(id, req.body);

		return res.status(202).send({
			error: false,
			task
		})
	});

	app.delete(`/api/project/:id`, async (req, res) => {
		const { id } = req.params;
		let task = await Project.findByIdAndDelete(id);

		return res.status(202).send({
			error: false,
			task
		});
	});
}