import React from 'react';

const Header = () => {
	return (
		<nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
			<a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#top">iTasker</a>
			<input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
			<div className="bTimer">00:00</div>
			<ul className="navbar-nav px-3">
				<li className="nav-item text-nowrap">
					<a className="nav-link" href="#top">Выход</a>
				</li>
			</ul>
		</nav>
	);
};

export default Header;