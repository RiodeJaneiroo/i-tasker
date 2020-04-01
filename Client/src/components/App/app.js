import React, { Component } from 'react';
import * as Icon from 'react-feather';
import { Route, Switch, Link } from 'react-router-dom';

import { AddTaskPage } from '../pages';
import Header from '../header';
import Sidebar from '../sidebar';
import TaskList from '../task-list';
import Task from '../task';

import './app.css';
export default class App extends Component {
	
	
	render() {
		
		return (
			<div>
				<Header />

				<div className="container-fluid">
					<div className="row">
					
					<Sidebar />
					
					<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
						<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
							<h1 className="h2">Dashboard</h1>
							<Link to="/add-task" className="btn btn-primary">
								
								<Icon.Plus size="14" />
								Добавить задачу
							</Link>
						</div>

						<Switch>
							<Route 
								path="/"
								render={() => <TaskList />}
								exact />

							<Route
								path="/add-task"
								component={AddTaskPage}
								exact />
							<Route
								path="/task/:id"
								component={Task}
								exact />
						</Switch>						
						
							
					</main>
					</div>
				</div>
			</div>
		);
	}
};