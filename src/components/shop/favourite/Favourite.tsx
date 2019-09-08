import React from "react";
import "./Favourite.scss";

import ShopFavourite from '../../../img/img-shop/shop_favourite.png';


const Favourite = () => {
	return (
		<div className="favourite">
			<img className="favourite__item" src={ShopFavourite} />
			<img className="favourite__item" src={ShopFavourite} />
			<img className="favourite__item" src={ShopFavourite} />
			<img className="favourite__item" src={ShopFavourite} />			
		</div>
	);
};

export default Favourite;