import {FETCH_TASK_REQUEST, FETCH_TASK_SUCCESS, FETCH_TASK_FAILURE} from '../actions/task-actions';

const updateTask = (state, action) => {
	
	if(state === undefined) {
		return {
			item: [],
			loading: true,
			error: null
		};
	}
	switch(action.type) {
		case FETCH_TASK_REQUEST:
			return {
				item: [],
				loading: true,
				error: null
			}
		case FETCH_TASK_SUCCESS:
			return {
				item: action.payload,
				loading: false,
				error: null
			};
		case FETCH_TASK_FAILURE:
			return {
				item: [],
				loading: false,
				error: action.payload
			}
		default:
			return state.task;
	}
}

export default updateTask;