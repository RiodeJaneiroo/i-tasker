import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header';
import Sidebar from '../sidebar';

import TaskAdd from '../task-add';
import TaskList from '../task-list';
import TaskContainer from '../task';

import ProjectListContainer from '../project-list';
import ProjectContainer from '../project';
import ProjectAddContainer from '../project-add';
import ProjectEdit from '../project-edit';

import Notification from '../notification';

import './app.css';
export default class App extends Component {
	render() {
		
		return (
			<div>
				<Header />
				<Notification />

				<div className="container-fluid">
					<div className="row">
					
					<Sidebar />
					
					<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">						

						<Switch>
							<Route 
								path="/"
								component={TaskList}
								exact />

							<Route
								path="/task-add"
								component={TaskAdd}
								exact />
							<Route
								path="/task/:id"
								component={TaskContainer} />
							<Route
								path="/project"
								component={ProjectListContainer}
								exact />
								
							<Route
								path="/project-add"
								component={ProjectAddContainer}
								exact />

							<Route
								exact
								path="/project/:id"
								component={ProjectContainer} />
							<Route
								exact
								path="/project/:id/edit"
								component={ProjectEdit} />
							
						</Switch>						
						
							
					</main>
					</div>
				</div>
			</div>
		);
	}
};