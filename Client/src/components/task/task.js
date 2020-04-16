import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchTask } from '../../actions/task-actions';
import { Link } from 'react-router-dom';
import ErrorIndicator from '../error-indicator';

import TaskControl from '../task-control';
import { formatDate } from '../../utils';
import * as Icon from 'react-feather';
import { Table, Spinner, Alert } from 'react-bootstrap';
import TaskFooter from './task-footer';
import TaskBody from './task-body';
import DraftEditor from '../draft-editor';


import './task.css';

const Task = ({ task }) => {
	const { title, createAt, modifyAt, projectId, content, project, _id } = task;

	return (
		<div className="row">
			<div className="col-12">
				<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
					<h1 className="h2">{title}</h1>
					<TaskControl taskId={_id}/>
				</div>
			</div>
			<div className="col-8">
				<DraftEditor content={content} readOnly={true} />
				<TaskFooter />
				<TaskBody />
			</div>
			<div className="col-4">
				<Table striped bordered hover variant="dark">
					<tbody>
						<tr>
							<td>Крайний срок:</td>
							<td>12.07.2025, 12:05</td>
						</tr>
						<tr>
							<td>Важность:</td>
							<td><span role="img" aria-label="fire">🔥 🔥 🔥</span></td>
						</tr>
						<tr>
							<td>Проект:</td>
							<td>
								<Link to={`/project/${projectId}`}>{project.title}</Link>

								<a rel="noopener noreferrer" target="_blank" className="externalLinkProject" href={project.url}>
									<Icon.ExternalLink size="18" />
								</a>
							</td>
						</tr>
						<tr>
							<td>Создано:</td>
							<td>{formatDate(createAt)}</td>
						</tr>
						<tr>
							<td>Изменено:</td>
							<td>{formatDate(modifyAt)}</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};
const TaskContainer = ({ match, location }) => {

	const dispatch = useDispatch();
	const { item, loading, error } = useSelector(state => state.task);

	useEffect(() => {
		const { id } = match.params;
		fetch(dispatch, id);
	}, [dispatch, match.params]);


	if(error || loading) {
		return loading ? <Spinner animation="border" /> : <ErrorIndicator msg={error} />
	}

	return <Task task={item} />
}

export default TaskContainer;