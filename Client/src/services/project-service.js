export default class ProjectService {

	async getProjectList() {
		return fetch(`/api/project-list`, { method: 'GET'})
			.then(res => res.json());
	}

	async getProject(projectId) {		
		let res = await fetch(`/api/project/${projectId}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			.then(res => res.json())
			.catch(err => {
				throw new Error(err);
			});
    	return res.project || [];
	}
	
	async projectAdd(project) {	
			
		let res = await fetch(`/api/project`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(project)
			})
			.then(res => res.json())
			.catch(err => {
				throw new Error(err);
			});
			
    	return res.data || [];
	}

	async projectRemove(projectId) {	
			
		let res = await fetch(`/api/project`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(projectId)
			})
			.then(res => res.json())
			.catch(err => {
				throw new Error(err);
			});
			
    	return res.data || [];
	}

}