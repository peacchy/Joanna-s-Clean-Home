import React from "react";
import { Link } from "react-router-dom";
import "./NavbarItem.scss";

import Props from "./NavbarItem.props";

const NavbarItem = (props: Props) => {
	return (
		<div className="item">
            <Link className="item__link" to={`/aboutus`}>{props.name}</Link>
		</div>
	);
};

export default NavbarItem;
// to={`/${props.name.toLowerCase()}`}
// name={props.name}

