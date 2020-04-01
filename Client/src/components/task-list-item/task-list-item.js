import React from 'react';
import { Link } from 'react-router-dom';

const TaskListItem = ({task}) =>{
	const { title, project, time, id} = task;
	return (
		<tr>
			<th scope="row">{id}</th>
			<td><Link to={`/task/${id}`} >{title}</Link></td>
			<td>{project}</td>
			<td>{time}</td>
		</tr>
	);
};

export default TaskListItem;