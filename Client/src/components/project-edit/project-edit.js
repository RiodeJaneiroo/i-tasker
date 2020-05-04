import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProject } from '../../actions/project-actions';

import ErrorIndicator from '../error-indicator';
import { Spinner } from 'react-bootstrap';

import ProjectForm from '../project-form';

const ProjectEdit = ({ match }) => {
	const { id } = match.params;
	const dispatch = useDispatch();

	const [editor, setEditor] = useState(false);
	const [form, setForm] = useState({
		title: "",
		projectUrl: ""
	});

	const { item, loading, error } = useSelector(state => state.project);

	useEffect(() => {
		if(id) {
			fetchProject(dispatch, id);
		}
	}, [dispatch, id]);

	useEffect(() => {
		if(id) {
			setForm(item);
			setEditor(item.body);
		}
	},[item, id]);


	const submitUpdate = (e) => {
		e.preventDefault();
		let { title, projectUrl } = form;
		projectUrl = (projectUrl.indexOf('http') === -1) ? `//${projectUrl}` : projectUrl;
		const project = {
			title,
			projectUrl,
			body: editor
		};
		
		// fetchProjectAdd(dispatch, project);
	};
	const updateField = ({target}) => {
		setForm({
			...form,
			[target.name]: target.value
		});
	}
	
	if(loading || error) {
		return loading ? <Spinner animation="border" /> : <ErrorIndicator msg={error} />;
	}

	return (
		<ProjectForm 
			form={form}
			editor={editor}
			handleEditor={(editor) => setEditor(editor)}
			submitForm={submitUpdate}
			updateField={updateField}  />
	)
}

export default ProjectEdit;