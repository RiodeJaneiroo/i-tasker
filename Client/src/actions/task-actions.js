import TaskService from '../services/task-service';

/*
 * action types
 */

export const FETCH_TASKLIST_REQUEST = 'FETCH_TASKLIST_REQUEST';
export const FETCH_TASKLIST_SUCCESS = 'FETCH_TASKLIST_SUCCESS';
export const FETCH_TASKLIST_FAILURE = 'FETCH_TASKLIST_FAILURE';

export const FETCH_TASK_REQUEST = 'FETCH_TASK_REQUEST';
export const FETCH_TASK_SUCCESS = 'FETCH_TASK_SUCCESS';
export const FETCH_TASK_FAILURE = 'FETCH_TASK_FAILURE';

export const FETCH_TASK_ADD_REQUEST = 'FETCH_TASK_ADD_REQUEST';
export const FETCH_TASK_ADD_SUCCESS = 'FETCH_TASK_ADD_SUCCESS';
export const FETCH_TASK_ADD_FAILURE = 'FETCH_TASK_ADD_FAILURE';

export const FETCH_TASK_REMOVE_REQUEST = 'FETCH_TASK_REMOVE_REQUEST';
export const FETCH_TASK_REMOVE_SUCCESS = 'FETCH_TASK_REMOVE_SUCCESS';
export const FETCH_TASK_REMOVE_FAILURE = 'FETCH_TASK_REMOVE_FAILURE';

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

/*
 * action creators
 */

const taskListRequsted = () => ({ type: FETCH_TASKLIST_REQUEST });
const taskListLoaded = (tasks) => ({ type: FETCH_TASKLIST_SUCCESS, payload: tasks});
const taskListError = (error) => ({ type: FETCH_TASKLIST_FAILURE, payload: error });

const taskRequsted = () => ({ type: FETCH_TASK_REQUEST });
const taskLoaded = (tasks) => ({ type: FETCH_TASK_SUCCESS, payload: tasks});
const taskError = (error) => ({ type: FETCH_TASK_FAILURE, payload: error });

const taskAddRequest = () => ({ type: FETCH_TASK_ADD_REQUEST});
const taskAddLoaded = (newTask) => ({ type: FETCH_TASK_ADD_SUCCESS, payload: newTask });
const taskAddError = (error) => ({ type: FETCH_TASK_ADD_FAILURE, payload: error });

const taskRemoveRequest = () => ({ type: FETCH_TASK_REMOVE_REQUEST});
const taskRemoveLoaded = (newTask) => ({ type: FETCH_TASK_REMOVE_SUCCESS, payload: newTask });
const taskRemoveError = (error) => ({ type: FETCH_TASK_REMOVE_FAILURE, payload: error });


/*
 * action functions
 */
const taskService = new TaskService();

export const fetchTasks = (dispatch) =>  {
	dispatch(taskListRequsted());
	taskService.getTaskList()
		.then((data) => dispatch(taskListLoaded(data)))
		.catch((error) => dispatch(taskListError(error)));
}

export const fetchTask = (dispatch, taskId) => {
	
	dispatch(taskRequsted());

	taskService.getTask(taskId)
		.then(data => {	
			if(data.error) {
				dispatch(taskError(data.error));
			} else {
				dispatch(taskLoaded(data.task));
			}
		})
		.catch((error) => {
			dispatch(taskError(error));
		});
}

export const fetchTaskAdd = (dispatch, task) =>  {
	
	dispatch(taskAddRequest());
	return taskService.addTask(task)
		.then((data) => {
			const task = data || [];
			dispatch(taskAddLoaded(task));
			return data;
		})
		.catch((error) => dispatch(taskAddError(error)));
}

export const fetchTaskRemove = (dispatch, taskId) => {
	
	dispatch(taskRemoveRequest());
	
	taskService.removeTask(taskId)
		.then(data => {		
			dispatch(taskRemoveLoaded(data.task._id))
		})
		.catch((error) => dispatch(taskRemoveError(error)));
}

