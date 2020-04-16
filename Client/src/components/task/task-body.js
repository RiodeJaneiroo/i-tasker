import React from 'react';
import * as Icon from 'react-feather';

const TaskBody = () => {
	return (
		<>
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
		</>
	);
};

export default TaskBody;