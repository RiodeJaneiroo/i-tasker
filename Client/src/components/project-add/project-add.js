import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProjectAdd } from '../../actions/project-actions';
import DraftEditor from '../draft-editor';


import * as Icon from 'react-feather';
import { Container, Row, Col, Form } from 'react-bootstrap';


const ProjectAddPage = ({ fetchProjectAdd }) => {

	const [editor, setEditor] = useState({});
	const [form, setForm] = useState({
		title: '',
		projectUrl: ''
	});


	const sumbitAddProject = (e) => {
		e.preventDefault();
		let { title, projectUrl } = form;
		projectUrl = (projectUrl.indexOf('http') === -1) ? `//${projectUrl}` : projectUrl;
		const project = {
			title,
			projectUrl,
			body: editor
		};
		
		fetchProjectAdd(project);
	};
	const updateField = ({target}) => {
		const newForm = {
			...form,
			[target.name]: target.value
		}
		setForm(newForm);
	}
 
	return (
		<Container>
			<div className="d-flex justify-content-between flex-wrap align-items-center pt-3 pb-2 mb-3 border-bottom">
				<h1 className="h2">Новый проект</h1>
			</div>
			<Row>
				<Col sm={8}>
					<Form onSubmit={sumbitAddProject}>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridName">
								<Form.Label>Название</Form.Label>
								<Form.Control
									type="text"
									name="title"
									value={form.title}
									onChange={updateField} />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridSite">
								<Form.Label>Сайт</Form.Label>
								<Form.Control
									type="text"
									name="projectUrl"
									value={form.projectUrl}
									onChange={updateField} />
							</Form.Group>
						</Form.Row>

						<div className="form-group">
							<label>Описание</label>
							<DraftEditor onHandleChange={(editor) => setEditor(editor)} />
						</div>
						<button type="submit" className="bIcon btn btn-warning">
							<Icon.CheckCircle size="14" />
							Добавить
						</button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};



const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		fetchProjectAdd: fetchProjectAdd
	}, dispatch)
};

export default connect(
	null,
	mapDispatchToProps)
(ProjectAddPage);
 