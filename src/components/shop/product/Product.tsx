import React from "react";
import "./Product.scss";

import ShopProduct from '../../../img/img-shop/shop_product.png';

const Product = () => {
	return (
		<div className="product">
			<img className="product__item" src={ShopProduct} />
			<img className="product__item" src={ShopProduct} />
			<img className="product__item" src={ShopProduct} />
			<img className="product__item" src={ShopProduct} />
			<img className="product__item" src={ShopProduct} />
			<img className="product__item" src={ShopProduct} />
			<img className="product__item" src={ShopProduct} />
			<img className="product__item" src={ShopProduct} />
			<img className="product__item" src={ShopProduct} />
		</div>
	);
};

export default Product;