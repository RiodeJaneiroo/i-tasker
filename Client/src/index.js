import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import store from './store';
import TaskService from './services/task-service';
import { TaskServiceProvider } from './components/task-service-context/task-service-context';

const taskService = new TaskService();
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<TaskServiceProvider value={taskService}>
				<App />
			</TaskServiceProvider>
		</Router>
	</Provider>,
	document.getElementById('root')
);
