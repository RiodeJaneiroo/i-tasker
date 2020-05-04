import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

import "./notification.css";

const Notification = () => {
	let notify = useSelector(state => state.notify);

	return (
		<div className="bNotify">
			{
				notify.map(({ id, type = "success", text }) => <Alert key={id} variant={type}>{text}</Alert>)
			}
		</div>
	)
}

export default Notification;