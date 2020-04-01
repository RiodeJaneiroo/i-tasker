const updateTaskList = (state, action) => {
	
	if(state === undefined) {
		return {
			tasks: [],
			loading: true,
			error: null
		};
	}
	switch(action.type) {
		case 'FETCH_TASKS_REQUEST':
			return {
				tasks: [],
				loading: true,
				error: null
			}
		case 'FETCH_TASKS_SUCCESS':
			return {
				tasks: action.payload,
				loading: false,
				error: null
			};
		case 'FETCH_TASKS_FAILURE':
			return {
				tasks: [],
				loading: false,
				error: action.payload
			}
		// case 'TASK_ADDED':

		// 	let id = state.tasks.length + 1;
		// 	return {
		// 		...state.taskList,
		// 		tasks: [
		// 			...state.taskList.tasks,
		// 			{ ...action.payload, id}
		// 		]
		// 	}
		default:
			return state.taskList;
	}
}

export default updateTaskList;