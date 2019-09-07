import React from "react";
import "./App.scss";

import Navbar from "./components/navbar/Navbar";

const App = () => {
	return (
		<div className="App">
			<div className="navbar">
				<Navbar />
			</div>
		</div>
	);
};

export default App;
