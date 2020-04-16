import React from 'react';
import { Link } from 'react-router-dom';

const ProjectListItem = ({ project }) =>{
	const { title, time, _id} = project;
	
	return (
		<tr>
			<td><Link to={`/project/${_id}`} >{title}</Link></td>
			<td>ss</td>
			<td>{time}</td>
		</tr>
	);
};

export default ProjectListItem;