import React from 'react';

import DraftEditor from '../draft-editor';
import * as Icon from 'react-feather';
import { Container, Row, Col, Form } from 'react-bootstrap';

const ProjectForm= ({ submitForm, updateField, form, handleEditor, editor }) => {
	const { title = "", projectUrl = "" } = form;
	return (
		<Container>
			<div className="d-flex justify-content-between flex-wrap align-items-center pt-3 pb-2 mb-3 border-bottom">
				<h1 className="h2">Новый проект</h1>
			</div>
			<Row>
				<Col sm={8}>
					<Form onSubmit={submitForm}>
						<Form.Row>
							<Form.Group as={Col} controlId="formGridName">
								<Form.Label>Название</Form.Label>
								<Form.Control
									type="text"
									name="title"
									value={title}
									onChange={updateField} />
							</Form.Group>

							<Form.Group as={Col} controlId="formGridSite">
								<Form.Label>Сайт</Form.Label>
								<Form.Control
									type="text"
									name="projectUrl"
									value={projectUrl}
									onChange={updateField} />
							</Form.Group>
						</Form.Row>

						<div className="form-group">
							<label>Описание</label>
							{ editor &&
								<DraftEditor content={editor} onHandleChange={handleEditor} />
							}
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
export default ProjectForm;