import React, { Fragment }  from 'react';
import * as Icon from 'react-feather';
import DraftEditor from '../draft-editor';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TaskBody = ({ listTask }) => {

	const btnTodo = (
		<Button variant="secondary" size="sm" className="bAddTask__done">
			<Icon.Check size="18"/>
		</Button>
	);
	const btnDone = <div className="btn btn-success disabled btn-sm bAddTask__done">Решено</div>;
	
	return (
		<Fragment >
			{
				listTask.map((el, idx) => {
					if(el.hasOwnProperty('editor')) {
						let button;
						if(el.done) {
							button = <div className="btn btn-success disabled btn-sm bAddTask__done">Решено</div>;
						} else {
							button = <button type="button" className="btn btn-secondary btn-sm bAddTask__done"><Icon.Check size="18"/></button>;
						}
						return (
							<div key={idx} className="card rounded-0 mb-3 bAddTask__box">
								{ el.done ? btnDone : btnTodo }
								<div className="card-body">
								<DraftEditor content={el.editor} readOnly={true} />
								</div>
							</div>
						)
					}
					return null;
				})
			}
		</Fragment>
	);
};
TaskBody.propTypes = {
	listTask: PropTypes.arrayOf(PropTypes.object)
}
export default TaskBody;