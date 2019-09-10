import React from "react";
import "./Picture.scss";

import Living_Room from "../../../img/img-aboutus/living_room.png";
import Stars from "../../../img/img-aboutus/stars.png";

const Picture = () => {
	return (
		<div className="picture">
			<img className="picture__stars" src={Stars} />
			<img className="picture__living_room" src={Living_Room} />
			<div className="picture__square" />
		</div>
	);
};

export default Picture;
