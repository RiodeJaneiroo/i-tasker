import React, { Component } from 'react';

import { withTaskService } from '../hoc';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import { fetchTask } from '../../actions';


import * as Icon from 'react-feather';
import { Tab, Nav, Col, Row, Card } from 'react-bootstrap';

import './task.css';

class Task extends Component {
	componentDidMount() {
		this.props.fetchTask();
	}
	render() {
		return (
			<div className="row">
				<div className="col-8">
					<div className="card rounded-0 mb-3 bAddTask__box">
						<button type="button" className="btn btn-secondary btn-sm bAddTask__done">
							<Icon.Check size="18"/>
						</button>
						<div className="card-body">
							<h5 className="card-title">Special title treatment</h5>
							<p className="card-text">Доработка таблицы - Вадим нужно сделать, если сможешь кого то давай привлечем!!</p>
							<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
						</div>
					</div>
					<div className="card rounded-0 mb-3 bAddTask__box">
						<div className="btn btn-success disabled btn-sm bAddTask__done">Решено</div>
						<div className="card-body">
							<h5 className="card-title">Special title treatment</h5>
							<p className="card-text">Доработка таблицы - Вадим нужно сделать, если сможешь кого то давай привлечем!!</p>
							<p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
						</div>
					</div>
					<hr className="mt-5"/>
					<Tab.Container id="left-tabs-example" defaultActiveKey="first">
						<Row>
							<Col sm={3}>
								<Nav variant="pills" className="flex-column">
									<Nav.Item>
										<Nav.Link eventKey="first">Комментарии</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="second">Время</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>
							<Col sm={9}>
								<Tab.Content>
								<Tab.Pane eventKey="first">
									
									<Card className="bComment mb-2">
										<Card.Body>
											<div className="scard-title h6">Вадим Змиевский <small className="text-muted bCoomentDate">23.02 20:06</small></div>
											<hr />
											<Card.Text>
												+800 руб.
											</Card.Text>
										</Card.Body>
									</Card>
									<Card className="bComment mb-2">
										<Card.Body>
											<div className="scard-title h6">Вадим Змиевский <small className="text-muted bCoomentDate">23.02 20:06</small></div>
											<hr />
											<Card.Text>
												Доработка таблицы - Вадим нужно сделать, если сможешь кого то давай привлечем!!
											</Card.Text>
										</Card.Body>
									</Card>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<p>Доработка таблицы - Вадим нужно сделать, если сможешь кого то давай привлечем!!</p>
									<p>Доработка таблицы - Вадим нужно сделать, если сможешь кого то давай привлечем!!</p>
								</Tab.Pane>
								</Tab.Content>
							</Col>
						</Row>
					</Tab.Container>
					
				</div>
				<div className="col-4">
					<div className="jumbotron jumbotron-fluid">
						<div className="container">
							<h4>Fluid jumbotron</h4>
							<p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
};
const mapStateToProps = ({commentList: { comments, loading, error}}) => {
	return { comments, loading, error };
};
const mapDispatchToProps = (dispatch, { taskService }) => {
	return {
		fetchTask: fetchTask(dispatch, taskService)
	}
};

export default compose(
	withTaskService(),
	connect(mapStateToProps, mapDispatchToProps)
 )(Task);