import { FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS, FETCH_PROJECT_FAILURE } from '../actions/project-actions';

const updateProject = (state, action) => {
	
	if(state === undefined) {
		return {
			item: [],
			loading: true,
			error: null
		};
	}
	switch(action.type) {
		case FETCH_PROJECT_REQUEST:
			return {
				item: [],
				loading: true,
				error: null
			}
		case FETCH_PROJECT_SUCCESS:
			return {
				item: action.payload,
				loading: false,
				error: null
			};
		case FETCH_PROJECT_FAILURE:
			return {
				item: [],
				loading: false,
				error: action.payload
			}
		default:
			return state.project;
	}
}

export default updateProject;