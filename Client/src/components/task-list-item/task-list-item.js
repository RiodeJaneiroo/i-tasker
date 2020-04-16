import React from 'react';
import { Link } from 'react-router-dom';
import TaskControl from '../task-control';

const TaskListItem = ({ task }) =>{
	const { title, project, time, _id} = task;
	
	return (
		<tr className="bTable__td">
			<td><Link to={`/task/${_id}`} >{title}</Link></td>
			<td>{project}</td>
			<td className="bTable__time">{time}</td>
			<td className="bTable__control">
				<TaskControl taskId={_id}/>
			</td>
		</tr>
	);
};

export default TaskListItem;