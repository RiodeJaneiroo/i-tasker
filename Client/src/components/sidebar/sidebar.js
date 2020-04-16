import React from 'react';
import { NavLink } from 'react-router-dom';

import * as Icon from 'react-feather';
import './sidebar.css';

const Sidebar = () => {
	return (
		<nav className="col-md-2 d-none d-md-block bg-light sidebar">
			<div className="sidebar-sticky">
				<ul className="nav flex-column">
					<li className="nav-item">
						<NavLink className="nav-link" activeClassName="active" to="/" exact>
							<Icon.Home size="14"/>
							Задачи
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/project" exact>
							<Icon.Folder size="14"/>
							Проекты
						</NavLink>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#top">
							<Icon.BarChart2 size="14"/>
							Отчет
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#top">
						<Icon.Database size="14"/>
						База знаний
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#top">
						<Icon.User size="14"/>
						Лич. кабинет
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Sidebar;