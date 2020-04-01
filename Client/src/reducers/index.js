import updateTaskList from './update-task-list';
import updateCommentList from './update-comment-list';

const reducer = (state, action) => {
	console.log(action.type);
	
	return {
		taskList: updateTaskList(state, action),
		commentList: updateCommentList(state, action),
		userList: []
	}
}

export default reducer;