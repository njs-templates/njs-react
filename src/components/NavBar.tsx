import React from "react";
import { NavLink } from "react-router-dom";

interface NavBarProps {
	active: number;
}

function NavBar() {
	return (
		<main>
			<ul className="tabs justify-center pb-6">
				<li className="tab tab-bordered">
					<NavLink to="/">Home</NavLink>
				</li>
				<li className="tab tab-bordered">
					<NavLink to="/other">Other Page</NavLink>
				</li>
			</ul>
		</main>
	);
}

export default NavBar;
