export default class TaskService {

	getTaskList() {
		return fetch(`/api/task-list`, { method: 'GET'})
			.then(res => {
				return res.json();
		});
	}

	async getTask(taskId) {
		let res = await fetch(`/api/task/${taskId}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(res => {
				return res.json();
			})
			.catch(err => {
				throw new Error(err);
			});
		return res;
	}
	
	async addTask(task) {		
		let res = await fetch(`/api/task`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(task)
			})
			.then(res => {
				return res.json();
			})
			.catch(err => {
				throw new Error(err);
			});
		
    	return res.task || [];
	}
	async removeTask(taskId) {		
		let res = await fetch(`/api/task/${taskId}`, {
				method: 'delete',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(res => {
				return res.json();
			})
			.catch(err => {
				throw new Error(err);
			});
		
    	return res || [];
	}
}