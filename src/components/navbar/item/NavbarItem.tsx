import React from "react";
import { Link } from "react-router-dom";
import "./NavbarItem.scss";

import NavbarProps from "./NavbarItem.props";

const NavbarItem = (props: NavbarProps) => {
	return (
		<div className="item">
            <Link className="item__link" to={props.url || ""}>{props.title}</Link>
		</div>
	);
};

export default NavbarItem;