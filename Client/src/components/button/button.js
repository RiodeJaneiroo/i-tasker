import React from 'react';

const Button = (props) => {
	const { icon, children, className, type = "button" } = props;
	return (
		<button type={type} className={className}>
			{icon && <span data-feather={icon}></span>}
			{children}
		</button>
	);
};

export default Button;