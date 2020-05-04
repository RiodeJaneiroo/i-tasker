export const NOTIFICATION_ADD = 'NOTIFICATION_ADD';
export const NOTIFICATION_REMOVE = 'NOTIFICATION_REMOVE';


const notificationAddAction = (notification) => ({ type: NOTIFICATION_ADD, payload: notification});
const notificationRemoveAction = (id) => ({ type: NOTIFICATION_REMOVE, payload: id});

let id = 0;
export const notificationAdd = (dispatch, notification, timeout = 4000) => {

	let idNotificaiton = id+=1;
	dispatch(notificationAddAction({...notification, id}));

	setTimeout(() => {
		dispatch(notificationRemoveAction(idNotificaiton));
	}, timeout)

}