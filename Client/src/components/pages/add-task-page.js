import React, { Component } from 'react';
import * as Icon from 'react-feather';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { taskAdded } from '../../actions';

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
			id: 10,
			title,
			project,
			descr
		};
		this.props.taskAdded(task);

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
const mapDispatchToProps = {
	taskAdded
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTaskPage);