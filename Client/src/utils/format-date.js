const formatDate = (date) => {
	const options = { 
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric' 
	}

	return new Date(date).toLocaleDateString("ru-RU", options);
}

export default formatDate;