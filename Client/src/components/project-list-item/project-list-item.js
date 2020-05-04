import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
ProjectListItem.propTypes = {
	project: PropTypes.shape({
		_id: PropTypes.string,
		title: PropTypes.string,
		time: PropTypes.number
	}),
};

export default ProjectListItem;