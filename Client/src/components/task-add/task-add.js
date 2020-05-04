import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTaskAdd } from '../../actions/task-actions';
import { fetchProjectList } from '../../actions/project-actions';
import { notificationAdd } from '../../actions/notify-actions';
import PropTypes from 'prop-types';


import * as Icon from 'react-feather';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import DraftEditor from '../draft-editor';



const TaskAdd = ({ sumbitTaskAdd, formState, updateField, updateFieldSelect, updateEditor, editor, addEditField }) => {
	const { title, project, optionProject } = formState;

	const rowEditor = editor.map((el, idx) => {
		return (
			<div key={idx} className="mb-3">
				<DraftEditor onHandleChange={updateEditor(idx+1)} />
			</div>
		)}
	);

	return (
		<Container>
			<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
				<h1 className="h2">Новая задача</h1>
			</div>
			<Row>
				<Col sm={6}>
					<Form onSubmit={sumbitTaskAdd}>
						<Form.Group as={Col} controlId="formGridName">
							<Form.Label>Название</Form.Label>
							<Form.Control
								type="text"
								name="title"
								value={title}
								onChange={updateField} />
						</Form.Group>
						<Form.Group as={Col} controlId="formGridProject">
							<Form.Label>Проекты</Form.Label>
							<Select 
								isSearchable
								isClearable
								value={project}
								onChange={updateFieldSelect}
								options={optionProject} />
						</Form.Group>
						<Form.Group as={Col} controlId="formGridTask">
							<Form.Label>Описание</Form.Label>
							{ rowEditor }
							<Button onClick={addEditField} type="button" variant="info">
								<Icon.Plus size="14" />
							</Button>
						</Form.Group>
						<Form.Group as={Col} controlId="formGridTask">
							<Button type="submit" variant="warning" className="bIcon">
								<Icon.CheckCircle size="14" />
								Добавить задачу
							</Button>
						</Form.Group>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};
TaskAdd.propTypes = {
	sumbitTaskAdd: PropTypes.func,
	formState: PropTypes.object,
	updateField: PropTypes.func,
	updateFieldSelect: PropTypes.func,
	updateEditor: PropTypes.func
}

const TaskAddContainer = (props) => {

	const dispatch = useDispatch();
	const { items: projectList } = useSelector(state => state.projectList);

	const [formState, setFormState] = useState({
		title: '',
		project: '',
		optionProject: null
	});
	const [editor, setEditor] = useState([ { id: 1, done: false } ]);

	useEffect(() => {
		fetchProjectList(dispatch);
	}, [dispatch]);

	useEffect(() => {
		setFormState(formState => ({
			...formState,
			optionProject: projectList.map(el => ({value: el._id, label: el.title }))
		}));
		
	}, [projectList]);
	
	
	const sumbitTaskAdd = (e) => {
		e.preventDefault();
		const { title, project } = formState;
		const task = {
			title,
			projectId: project.value,
			listTask: editor
		};

		fetchTaskAdd(dispatch, task)
			.then(task => {
				props.history.push(`/task/${task._id}`);
				notificationAdd(dispatch, { text: "Задача успешно добавлена", type: "success" });
			});
	};

	const updateField = ({target}) => {
		setFormState(formState => ({
			...formState,
			[target.name]: target.value
		}));
	}
	const updateFieldSelect = (project) => {
		setFormState(formState => ({
			...formState,
			project
		}));
	}

	const updateEditor = (id) => (content) => {
		setEditor(editorList => {
			const idx = editorList.findIndex(el => el.id === id);

			if(idx !== -1) {
				return [
					...editorList.slice(0, idx),
					{ editor: content, id, done: false },
					...editorList.slice(idx + 1 )
				]
			}
			return [
				...editorList,
				{ editor: content, id, done: false }
			];
		});
	}
	const addEditField = () => {
		setEditor(state => {
			const newItem = {id: state.length + 1}
			return [
				...state,
				newItem
			]
		});
	};

	return (
		<TaskAdd
			sumbitTaskAdd={sumbitTaskAdd}
			formState={formState}
			updateField={updateField}
			addEditField={addEditField}
			updateFieldSelect={updateFieldSelect}
			editor={editor}
			updateEditor={updateEditor} />
	)
}
export default TaskAddContainer;
 
