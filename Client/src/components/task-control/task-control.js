import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchTaskRemove } from '../../actions/task-actions';
import { useHistory } from 'react-router-dom';


import { Button } from 'react-bootstrap';
import * as Icon from 'react-feather';

const TaskControl = ({ taskId }) => {

	const history = useHistory();
	const dispatch = useDispatch();

	const onStartStop = () => {
		console.log('onstart Stop', taskId);	
	}
	const onFinished = () => {
		console.log('Finished', taskId);	
	}
	const onDeleted = () => {
		const confirmDelete = window.confirm('Вы действительно хотите удалить задачу ?');
		if(confirmDelete) {
			fetchTaskRemove(dispatch, taskId);
			history.push("/");
		}
	}
	return (
		<div className="bControl">
			<Button 
				onClick={onStartStop}
				className="bControl__btn"
				variant="secondary" 
				size="sm" >
				<Icon.Play  size="14" />
			</Button>
			<Button 
				onClick={onFinished}
				className="bControl__btn"
				variant="success" 
				size="sm" >
				<Icon.CheckCircle  size="14" />
			</Button>
			<Button 
				onClick={onDeleted}
				className="bControl__btn"
				variant="danger" 
				size="sm" >
				<Icon.Trash2  size="14" />
			</Button>
		</div>
	)
};

export default TaskControl;