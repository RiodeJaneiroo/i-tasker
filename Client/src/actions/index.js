

const tasksRequsted = () => ({ type: 'FETCH_TASKS_REQUEST' });

const tasksLoaded = (tasks) => ({ type: 'FETCH_TASKS_SUCCESS', payload: tasks});

const tasksError = (error) => ({ type: 'FETCH_TASKS_FAILURE', payload: error });

const taskAdded = (newTask) => ({ type: 'TASK_ADDED', payload: newTask });

const fetchTasks = (dispatch, taskService) => () => {
	dispatch(tasksRequsted());
	taskService.getTask()
	.then((data) => dispatch(tasksLoaded(data)))
	.catch((error) => dispatch(tasksError(error)));
}
const fetchTask = (dispatch, taskService) => () => {
	dispatch(tasksRequsted());
	taskService.getComment()
	.then((data) => dispatch(tasksLoaded(data)))
	.catch((error) => dispatch(tasksError(error)));
}


export {
	fetchTasks,
	fetchTask,
	taskAdded
};