import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProjectAdd } from '../../actions/project-actions';

import ProjectForm from '../project-form';

const ProjectAddContainer = () => {

	const dispatch = useDispatch();

	const [editor, setEditor] = useState(false);
	const [form, setForm] = useState({
		title: "",
		projectUrl: ""
	});

	const sumbitAdd = (e) => {
		e.preventDefault();
		let { title, projectUrl } = form;
		projectUrl = (projectUrl.indexOf('http') === -1) ? `//${projectUrl}` : projectUrl;
		const project = {
			title,
			projectUrl,
			body: editor
		};
		
		fetchProjectAdd(dispatch, project);
	};
	const updateField = ({target}) => {
		setForm({
			...form,
			[target.name]: target.value
		});
	}

	return (
		<ProjectForm 
			form={form}
			handleEditor={(editor) => setEditor(editor)}
			submitForm={sumbitAdd}
			updateField={updateField}  />
	)
}

export default ProjectAddContainer;
 