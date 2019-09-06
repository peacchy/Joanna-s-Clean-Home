import React from "react";
import "./Navbar.scss";

import NavbarLogo from "./logo/NavbarLogo";
import NavbarItem from "./item/NavbarItem";
import NavbarButton from "./button/NavbarButton";

const Navbar = () => {
	return (
		<div className="topnav">
			<div className="topnav__elements">
				<div className="topnav__elements__logo">
					<NavbarLogo />
				</div>
				<div className="topnav__elements__item">
					<NavbarItem name="HOME" /> {/* zmienic to potem na petle */}
					<NavbarItem name="ABOUT US" />
					<NavbarItem name="BLOG" />
					<NavbarItem name="SHOP" />
					<NavbarItem name="..." />
				</div>
				<div className="topnav__elements__button">
					<NavbarButton />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
