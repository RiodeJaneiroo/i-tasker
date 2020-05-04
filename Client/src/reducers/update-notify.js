import { NOTIFICATION_ADD, NOTIFICATION_REMOVE } from '../actions/notify-actions';

const updateNotify = (state, action) => {

	if(state === undefined) {
		return [];
	}

	switch (action.type) {
		case NOTIFICATION_ADD:
			const notifications = [
				...state.notify,
				action.payload
			];
			return notifications;

		case NOTIFICATION_REMOVE:
			const idx = state.notify.findIndex(el => el.id === action.payload);

			return [
				...state.notify.slice(0, idx),
				...state.notify.slice(idx + 1)
			];
		
		default:
			return state.notify;
	}
}
export default updateNotify;