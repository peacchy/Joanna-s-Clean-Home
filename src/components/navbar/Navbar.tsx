import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./Navbar.scss";

import NavbarLogo from "./logo/NavbarLogo";
import NavbarItem from "./item/NavbarItem";
import NavbarButton from "./button/NavbarButton";
import AboutUs from "../about-us/AboutUs";
import Shop from "../shop/Shop";

const Navbar = () => {
	return (
		<BrowserRouter>
			<div className="topnav">
				<div className="topnav__elements">
					<div className="topnav__elements__logo">
						<NavbarLogo />
					</div>
					<div className="topnav__elements__item">
						<NavbarItem title="HOME" url="/home" />
						<NavbarItem title="ABOUT US" url="/aboutus" />
						<NavbarItem title="BLOG" url="/blog" />
						<NavbarItem title="SHOP" url="/shop" />
						<NavbarItem title="..." />
					</div>
					<div className="topnav__elements__button">
						<NavbarButton />
					</div>
				</div>
			</div>

			<Route path="/aboutus" exact component={AboutUs} />
			<Route path="/shop" exact component={Shop} />

		</BrowserRouter>
	);
};

export default Navbar;
