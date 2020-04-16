export const NOTIFICATION_ADD = 'NOTIFICATION_ADD';
export const NOTIFICATION_REMOVE = 'NOTIFICATION_REMOVE';

export const notificationAdd = (notification) => ({ type: NOTIFICATION_ADD, payload: notification});
export const notificationRemove = (id) => ({ type: NOTIFICATION_REMOVE, payload: id});

