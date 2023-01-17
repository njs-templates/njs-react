import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

// To get the active-tab class to work, it's applied to the active class in App.css.
function NavBar() {
	return (
		<div className="tabs justify-center pb-6">
			<NavLink
				className="tab tab-bordered"
				to="/"
			>
				Home
			</NavLink>

			<NavLink
				className="tab tab-bordered"
				to="/other"
			>
				Other Page
			</NavLink>
		</div>
	);
}

export default NavBar;
