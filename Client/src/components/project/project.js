import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '../../utils';
import { fetchProject } from '../../actions/project-actions';
import { Link } from 'react-router-dom';
import ErrorIndicator from '../error-indicator';


import * as Icon from 'react-feather';
import { Table, Spinner } from 'react-bootstrap';
import DraftEditor from '../draft-editor';


const Project = ({ project, renderContent }) => {
	const { _id, title, projectUrl = "#", createAt } = project;
	const createTime = formatDate(createAt);
	const externalLink = (projectUrl.indexOf('http') === -1) ? `//${projectUrl}` : projectUrl;
	return (
		<div className="row">
			<div className="col-12">
				<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
					<h1 className="h2">{title}</h1>
					<Link to={`/project/${_id}/edit`} className="bIcon btn btn-primary">
						<Icon.Edit2 size="14" />
						Редактировать
					</Link>
				</div>
			</div>
			<div className="col-8">
				<div className="card rounded-0 mb-3 bAddTask__box">
					{renderContent}
				</div>
			</div>
			<div className="col-4">
				<Table striped bordered hover variant="dark">
					<tbody>
						<tr>
							<td>Создано:</td>
							<td>{createTime}</td>
						</tr>
						<tr>
							<td>Проект:</td>
							<td><a href={externalLink} rel="noopener noreferrer" target="_blank">{projectUrl}</a></td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};

const ProjectContainer = ({ match, location }) => {

	const dispatch = useDispatch();
	const { item, loading, error } = useSelector(state => state.project);

	useEffect(() => {
		const { id } = match.params;
		fetchProject(dispatch, id);
	}, [dispatch, match.params]);

	
	if(error || loading) {
		return loading ? <Spinner animation="border" /> : <ErrorIndicator msg={error} />
	}

	return (
		<Project
			project={item}
			loading={loading}
			renderContent={<DraftEditor content={item.body} readOnly={false} />} />
	);
};

export default ProjectContainer;