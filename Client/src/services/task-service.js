export default class TaskService {
	data = [
		{ id: 1, title: 'Доработки https://continent-nw.ru', project: 'continent-nw', time: '0:00'},
		{ id: 2, title: 'Доработка таблицы - Вадим нужно сделать, если сможешь кого то давай привлечем!!', project: 'Бриг', time: '0:00'},
		{ id: 3, title: 'Доработка нашего сайта', project: 'seokey', time: '0:00'}
	];
	comments = [
		{ id: 1, taskId: 1, text: "Доработка таблицы - Вадим нужно сделать, если сможешь кого то давай привлечем!!", author: "Вадим Змиевский", date: 1585554612000},
		{ id: 2, taskId: 1, text: "+800 руб.", author: "Вадим Змиевский", date: 1585554660408}
	];
	getTask() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if(Math.random() > 0.80) {
					reject(new Error('Someting wrong'));
				} else {
					resolve(this.data);
				}
			}, 600)
		});
	}
	
	getComment(postId) {
		return new Promise((resolve) => {
			setTimeout(() => {
				const listComment = this.comments.filter((comment) => comment.postId === postId);
				resolve(listComment);
			}, 600)
		});
	}
}