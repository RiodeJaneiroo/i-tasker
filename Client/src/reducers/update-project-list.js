import {FETCH_PROJECTLIST_REQUEST, FETCH_PROJECTLIST_SUCCESS, FETCH_PROJECTLIST_FAILURE} from '../actions/project-actions';

const updateProjectList = (state, action) => {
	
	if(state === undefined) {
		return {
			items: [],
			loading: true,
			error: null
		};
	}
	switch(action.type) {
		case FETCH_PROJECTLIST_REQUEST:
			return {
				items: [],
				loading: true,
				error: null
			}
		case FETCH_PROJECTLIST_SUCCESS:
			return {
				items: action.payload,
				loading: false,
				error: null
			};
		case FETCH_PROJECTLIST_FAILURE:
			return {
				items: [],
				loading: false,
				error: action.payload
			}
		default:
			return state.projectList;
	}
}

export default updateProjectList;