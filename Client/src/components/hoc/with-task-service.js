import React from 'react';
import { TaskServiceConsumer } from '../task-service-context/task-service-context';

const withTaskService = () => (Wrapper) => {

	return (props) => {
		return (
			<TaskServiceConsumer>
				{
					(TaskService) => {
						return (<Wrapper {...props} taskService={TaskService} />)
					}
				}
			</TaskServiceConsumer>
		);
	}

};

export default withTaskService;