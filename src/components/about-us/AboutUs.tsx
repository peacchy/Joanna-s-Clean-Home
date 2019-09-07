import React from "react";
import "./AboutUs.scss";

import Picture from "./picture/Picture";
import Title from "./title/Title";
import Text from "./text/Text";

const AboutUs = () => {
	return (
		<div className="about_us">
			<div className="about_us__title">
				<Title />
			</div>
			<div className="about_us__content">
				<div className="about_us__content__text">
					<Text />
				</div>
				<div className="about_us__content__picture">
					<Picture />
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
