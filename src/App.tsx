import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/navbar/Navbar";
import AboutUs from "./components/about-us/AboutUs";

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="navbar">
					<Navbar />
				</div>

				<Route path="/home" exact component={App} />
				<Route path="/aboutus" exact component={AboutUs} />
			
			</BrowserRouter>
		</div>
	);
};

export default App;
