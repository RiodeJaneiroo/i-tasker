import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTaskAdd } from '../../actions/task-actions';
import { fetchProjectList } from '../../actions/project-actions';


import * as Icon from 'react-feather';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Select from 'react-select';
import DraftEditor from '../draft-editor';



const TaskAdd = (props) => {

	const dispatch = useDispatch();
	const { items: projectList } = useSelector(state => state.projectList);

	const [formState, setFormState] = useState({
		title: '',
		project: '',
		optionProject: null
	});
	const [editor, setEditor] = useState(null);



	useEffect(() => {
		fetchProjectList(dispatch);
	}, [dispatch]);

	useEffect(() => {
		setFormState(formState => {
			return {
				...formState,
				optionProject: projectList.map(el => ({value: el._id, label: el.title }))
			}
		});
		
	}, [projectList]);
	
	
	const sumbitTaskAdd = (e) => {
		e.preventDefault();
		const { title, project } = formState;
		const task = {
			title,
			projectId: project.value,
			content: editor
		};
		console.log(`sumbittask`, typeof editor);
		fetchTaskAdd(dispatch, task);
			// .then(task => props.history.push(`/task/${task._id}?success`));
		
	};

	const updateField = ({target}) => {
		setFormState(formState => {
			return {
				...formState,
				[target.name]: target.value
			}
		});
	}
	const updateFieldSelect = (project) => {
		
		setFormState(formState => {
			return {
				...formState,
				project
			}
		});
	}


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
								value={formState.title}
								onChange={updateField} />
						</Form.Group>
						<Form.Group as={Col} controlId="formGridProject">
							<Form.Label>Проекты</Form.Label>
							<Select 
								isSearchable
								isClearable
								value={formState.project}
								onChange={updateFieldSelect}
								options={formState.optionProject} />
						</Form.Group>
						<Form.Group as={Col} controlId="formGridTask">
							<Form.Label>Описание</Form.Label>
							{<DraftEditor onHandleChange={(editor) => setEditor(editor)} /> }
						</Form.Group>
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

export default TaskAdd;
 
