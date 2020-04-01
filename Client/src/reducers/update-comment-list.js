const updateCommentList = (state, action) => {
	if(state === undefined) {
		return {
			comments: [],
			loading: true,
			error: null
		};
	}
	
	switch(action.type) {
		case 'FETCH_COMMENTS_REQUEST':
			return {
				comments: [],
				loading: true,
				error: null
			}
		case 'FETCH_COMMENTS_SUCCESS':
			return {
				comments: action.payload,
				loading: false,
				error: null
			};
		case 'FETCH_COMMENTS_FAILURE':
			return {
				comments: [],
				loading: false,
				error: action.payload
			}
		default:
			return state.taskList;
	}
}
export default updateCommentList;