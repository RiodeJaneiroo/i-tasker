import React, { Component } from 'react';
import TaskListItem from '../task-list-item';
import { withTaskService } from '../hoc';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { fetchTasks } from '../../actions';

import { Spinner } from 'react-bootstrap';

const TaskList = ({tasks}) => {
	return (
		<table className="table table-hover">
			<thead className="thead-dark">
			<tr>
				<th scope="col">#</th>
				<th scope="col">Название</th>
				<th scope="col">Проект</th>
				<th scope="col">Время</th>
			</tr>
			</thead>
			<tbody>
				{ 
					tasks.map((task, idx) => <TaskListItem key={idx} id={idx} task={task} />)
				}
			</tbody>
		</table>
	);
}

class TaskListContainer extends Component {
	componentDidMount() {
		this.props.fetchTasks();
	}
	render() {
		const { tasks, loading, error } = this.props;
		
		if(loading) {
			return <Spinner animation="border" />;
		}
		if(error) {
			return <div>error !!!</div>
		}

		return <TaskList tasks={tasks} />
		
	}
};

const mapStateToProps = ({ taskList: { tasks, loading, error } }) => {
	return { tasks, loading, error };
};
const mapDispatchToProps = (dispatch, { taskService }) => {
	return {
		fetchTasks: fetchTasks(dispatch, taskService)
	}
};

export default compose(
	withTaskService(),
	connect(mapStateToProps, mapDispatchToProps)
 )(TaskListContainer);
 