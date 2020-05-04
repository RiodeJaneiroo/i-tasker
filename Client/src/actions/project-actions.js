import ProjectService from '../services/project-service';
/*
 * action types
 */

export const FETCH_PROJECTLIST_REQUEST = 'FETCH_PROJECTLIST_REQUEST';
export const FETCH_PROJECTLIST_SUCCESS = 'FETCH_PROJECTLIST_SUCCESS';
export const FETCH_PROJECTLIST_FAILURE = 'FETCH_PROJECTLIST_FAILURE';

export const FETCH_PROJECT_REQUEST = 'FETCH_PROJECT_REQUEST';
export const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS';
export const FETCH_PROJECT_FAILURE = 'FETCH_PROJECT_FAILURE';

export const FETCH_PROJECT_ADD_REQUEST = 'FETCH_PROJECT_ADD_REQUEST';
export const FETCH_PROJECT_ADD_SUCCESS = 'FETCH_PROJECT_ADD_SUCCESS';
export const FETCH_PROJECT_ADD_FAILURE = 'FETCH_PROJECT_ADD_FAILURE';

/*
 * action creators
 */

const projectListRequsted = () => ({ type: FETCH_PROJECTLIST_REQUEST });
const projectListLoaded = (projectList) => ({ type: FETCH_PROJECTLIST_SUCCESS, payload: projectList});
const projectListError = (error) => ({ type: FETCH_PROJECTLIST_FAILURE, payload: error });

const projectRequsted = () => ({ type: FETCH_PROJECT_REQUEST });
const projectLoaded = (project) => ({ type: FETCH_PROJECT_SUCCESS, payload: project});
const projectError = (error) => ({ type: FETCH_PROJECT_FAILURE, payload: error });

const projectAddRequest = (newProject) => ({ type: FETCH_PROJECT_ADD_REQUEST, payload: newProject });
const projectAddLoaded = (newProject) => ({ type: FETCH_PROJECT_ADD_SUCCESS, payload: newProject });
const projectAddError = (newProject) => ({ type: FETCH_PROJECT_ADD_FAILURE, payload: newProject });


/*
 * action functions
 */
const projectService = new ProjectService();
export const fetchProjectList = (dispatch) =>  {
	dispatch(projectListRequsted());
	projectService.getProjectList()
		.then( data => dispatch(projectListLoaded(data)) )
		.catch( error => dispatch(projectListError(error)) );
}

export const fetchProject = (dispatch, projectId) => {
	dispatch(projectRequsted());
	projectService.getProject(projectId)
		.then(data => {			
			dispatch(projectLoaded(data))
		})
		.catch((error) => dispatch(projectError(error)));
}

export const fetchProjectAdd = (dispatch, project) => {
	dispatch(projectAddRequest());
	projectService.projectAdd(project)
		.then((data) => {
			const project = data || [];
			dispatch(projectAddLoaded(project));
		})
		.catch((error) => dispatch(projectAddError(error)));
}


