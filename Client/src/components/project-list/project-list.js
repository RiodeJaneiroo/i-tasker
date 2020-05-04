import React from 'react';
import ProjectListItem from '../project-list-item';
import { fetchProjectList } from '../../actions/project-actions';
import { useFetchData } from '../../custom-hooks';
import PropTypes from 'prop-types';
import ErrorIndicator from '../error-indicator';


import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { Spinner } from 'react-bootstrap';

const ProjectList = ({ projectList }) => {
	return (
		<div>
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
				<h1 className="h2">Список проектов</h1>
				<Link to="/project-add" className="btn btn-primary">
					
					<Icon.Plus size="14" />
					Добавить проект
				</Link>
			</div>

		<table className="table table-hover">
			<thead className="thead-dark">
			<tr>
				<th scope="col">Название</th>
				<th scope="col">Проект</th>
				<th scope="col">Время</th>
			</tr>
			</thead>
			<tbody>
				{ 
					projectList.map((project, idx) => <ProjectListItem key={idx} id={idx} project={project} />)
				}
			</tbody>
		</table>
		</div>
	);
}
ProjectList.propTypes = {
	projectList: PropTypes.arrayOf(PropTypes.object)
}

const ProjectListContainer = () => {

	const { items, loading, error } = useFetchData(fetchProjectList, state => state.projectList);

	if(loading || error) {
		return loading ? <Spinner animation="border" /> : <ErrorIndicator msg={error} />;
	}

	return <ProjectList projectList={items} />
};

export default ProjectListContainer;
 