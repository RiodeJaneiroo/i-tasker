import React from 'react';
import TaskListItem from '../task-list-item';

import { useFetchData } from '../../custom-hooks';
import { fetchTasks } from '../../actions/task-actions';
import ErrorIndicator from '../error-indicator';
import PropTypes from 'prop-types';


import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { Spinner } from 'react-bootstrap';
import imgDone from "./done.gif";

const TaskList = ({tasks}) => {

	return (
		<div>
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
				<h1 className="h2">Список задач</h1>
				<Link to="/task-add" className="btn btn-primary">
					
					<Icon.Plus size="14" />
					Добавить задачу
				</Link>
			</div>
			{ tasks.length ?
				<table className="table table-hover bTable">
					<thead className="thead-dark">
					<tr>
						<th scope="col">Название</th>
						<th scope="col">Проект</th>
						<th scope="col">Время</th>
						<th scope="col"></th>
					</tr>
					</thead>
					<tbody>
						{ 
							tasks.map((task, idx) => <TaskListItem key={idx} id={idx} task={task} />)
						}
					</tbody>
				</table>
				:
					<div className="bDone">
						<h3>Все задачи выполнены!</h3>
						<img src={imgDone} alt="done"/>
					</div>
			}
		</div>
	);
}
TaskList.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.object)
}
const TaskListContainer = () => {

	const { items, loading, error } = useFetchData(fetchTasks, state => state.taskList);
	
	if(loading || error) {
		return loading ? <Spinner animation="border" /> : <ErrorIndicator msg={error} />;
	}
	return <TaskList tasks={items} />
}


export default TaskListContainer;
 