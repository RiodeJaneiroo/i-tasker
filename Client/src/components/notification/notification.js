import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

const Notification = () => {

	const notify = useSelector(state => state.notify);

	return (
		<div className="bNotify">
			{
				notify.map(el => <Alert variant={el.type}>{el.text}</Alert>)
			}
		</div>
	)
}

export default Notification;