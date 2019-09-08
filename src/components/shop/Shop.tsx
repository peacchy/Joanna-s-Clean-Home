import React from "react";
import "./Shop.scss";

import Product from "./product/Product";
import Favourite from "./favourite/Favourite";
import Search from "./search/Search";

const Shop = () => {
	return (
		<div className="shop">
			<div className="shop__items">
				<Search />
				<Favourite />
				<Product />
			</div>
		</div>
	);
};

export default Shop;
