const mongoose = require('mongoose');
const Task = mongoose.model('task');
const Project = mongoose.model('project');

module.exports = (app) => {

	app.get(`/api/task-list`, async (req, res) => {		
		let tasks = await Task.find();
		return res.status(200).send(tasks);
	});

	app.post(`/api/task`, async (req, res) => {
		let task = await Task.create(req.body);

		return res.status(201).send({
			error: false,
			task
		});
	});
	app.post(`/api/task/:id`, async (req, res) => {
		const { id } = req.params;
		try {
			let taskOne = await Task.findOne({_id: id});
		
			if(taskOne) {
				let project = await Project.findOne({_id: taskOne.projectId});				
				const {_id, title, projectId, createAt, modifyAt, content} = taskOne;

				return res.status(201).send({
					error: false,
					task: {
						_id,
						title,
						projectId,
						createAt,
						content,
						modifyAt,
						project: {
							url: project.projectUrl,
							title: project.title
						}
					}
				}); 
			} else {
				return res.status(201).send({
					error: 'Task not found'
				});
			}
		} catch (error) {
			console.log(error);
			return res.status(400).send({
				error: true
			});
		}

	});

	app.put(`/api/task/:id`, async (req, res) => {
		const { id } = req.params;
		let task = await Task.findByIdAndUpdate(id, req.body);

		return res.status(202).send({
			error: false,
			task
		})
	});

	app.delete(`/api/task/:id`, async (req, res) => {
		const { id } = req.params;
		let task = await Task.findByIdAndDelete(id);

		return res.status(202).send({
			error: false,
			task
		});
	});
}