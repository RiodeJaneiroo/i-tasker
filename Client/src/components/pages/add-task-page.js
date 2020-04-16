import React, { Component } from 'react';
import * as Icon from 'react-feather';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchTaskAdd } from '../../actions/task-actions';
import { bindActionCreators } from 'redux';
import { withTaskService } from '../hoc';
import { compose } from '../../utils';


class AddTaskPage extends Component {
	state = {
		title: '',
		project: '',
		descr: ''
	}
	sumbitAddTask = (e) => {
		e.preventDefault();
		const { title, project, descr } = this.state;
		const task = {
			title,
			project,
			descr
		};
		
		this.props.fetchTaskAdd(task);
	};

	handleChanges = (el, name) => {
		this.setState({
			[name]: el.value
		});
	};
	
	render() {
		const { sumbitAddTask, handleChanges } = this;
		return (
			<Container>
				<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
					<h1 className="h2">Новая задача</h1>
				</div>
				<Row>
					<Col sm={6}>
						<form onSubmit={sumbitAddTask}>
							<div className="form-group">
								<label>Название</label>
								<input 
									type="text"
									value={this.state.title}
									onChange={({target}) => handleChanges(target, 'title')}
									className="form-control" 
									required />
							</div>
							<div className="form-group">
								<label>Проект</label>
								<input 
									type="text"
									value={this.state.project}
									onChange={({target}) => handleChanges(target, 'project')}
									className="form-control" />
							</div>
							<div className="form-group">
								<label>Описание</label>
								<textarea 
									className="form-control"
									value={this.state.descr}
									onChange={({target}) => handleChanges(target, 'descr')}
									rows="3">
								</textarea>
							</div>
							<button type="submit" className="bIcon btn btn-warning">
								<Icon.CheckCircle size="14" />
								Добавить
							</button>
						</form>
					</Col>
				</Row>
			</Container>
			
		);
	}
};
const mapStateToProps = ({ tasks }) => {
	return { tasks };
};

const mapDispatchToProps = (dispatch, { taskService }) => {
	return bindActionCreators({
		fetchTaskAdd: (task) => fetchTaskAdd(taskService, task)()
	}, dispatch)
};

export default compose(
	withTaskService(),
	connect(mapStateToProps, mapDispatchToProps)
 )(AddTaskPage);
 