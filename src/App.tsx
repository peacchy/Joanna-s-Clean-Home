import React from "react";
import "./App.scss";

import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import AboutUs from "./components/about-us/AboutUs";
import Shop from "./components/shop/Shop";

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<div className="navbar">
					<Navbar />
				</div>
			</div>
			<Route path="/aboutus" exact component={AboutUs} />
			<Route path="/shop" exact component={Shop} />
		</BrowserRouter>
	);
};

export default App;
