import React from "react";
import "./NavbarLogo.scss";

import Logo_1 from '../../../img/blue_logo_1.png';
import Logo_2 from '../../../img/blue_logo_2.png';

const NavbarLogo = () => {
	return (
		<div className="logo">
			<div className="logo__img">
				<img className="logo__img__logo-1" src={Logo_1} />
				<div className="logo__img__line"></div>
				<img className="logo__img__logo-2" src={Logo_2} />
			</div>
			<div className="logo__text">Joanna's Clean House </div>
		</div>
	);
};

export default NavbarLogo;
