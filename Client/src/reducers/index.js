import updateTask from './update-task';
import updateTaskList from './update-task-list';
import updateCommentList from './update-comment-list';

import updateProject from './update-project';
import updateNotify from './update-notify';
import updateProjectList from './update-project-list';

const reducer = (state, action) => {
	return {
		task: updateTask(state, action),
		taskList: updateTaskList(state, action),
		commentList: updateCommentList(state, action),
		userList: [],
		project: updateProject(state, action),
		projectList: updateProjectList(state, action),
		notify: updateNotify(state, action),
		timer: {
			taskId: 'id',
			time: 0
		}
	}
}

export default reducer;