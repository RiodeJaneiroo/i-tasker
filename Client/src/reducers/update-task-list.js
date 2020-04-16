import { FETCH_TASKLIST_REQUEST, FETCH_TASKLIST_SUCCESS, FETCH_TASKLIST_FAILURE, FETCH_TASK_REMOVE_SUCCESS} from '../actions/task-actions';

const updateTaskList = (state, action) => {
	
	if(state === undefined) {
		return {
			items: [],
			loading: true,
			error: null
		};
	}
	switch(action.type) {
		case FETCH_TASKLIST_REQUEST:
			return {
				items: [],
				loading: true,
				error: null
			}
		case FETCH_TASKLIST_SUCCESS:
			return {
				items: action.payload,
				loading: false,
				error: null
			};
		case FETCH_TASKLIST_FAILURE:
			return {
				items: [],
				loading: false,
				error: action.payload
			}
		case FETCH_TASK_REMOVE_SUCCESS:
			const { items } = state.taskList;
			const newItems = items.filter(item => item._id !== action.payload);
			return {
				items: newItems,
				loading: false,
				error: null
			}
			
		default:
			return state.taskList;
	}
}

export default updateTaskList;