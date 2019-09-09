import React from "react";
import NavbarButton from "./button/NavbarButton";
import NavbarItem from "./item/NavbarItem";
import NavbarLogo from "./logo/NavbarLogo";
import "./Navbar.scss";


const Navbar = () => {
	return (
			<div className="topnav">
				<div className="topnav__elements">
					<div className="topnav__elements__logo">
						<NavbarLogo />
					</div>
					<div className="topnav__elements__menu">
						<div className="topnav__elements__menu__item">
							<NavbarItem title="HOME" url="/home" />
							<NavbarItem title="ABOUT US" url="/aboutus" />
							<NavbarItem title="BLOG" url="/blog" />
							<NavbarItem title="SHOP" url="/shop" />
							<NavbarItem title="..." />
							<NavbarButton />

						</div>
					</div>
				</div>
			</div>


	);
};

export default Navbar;
