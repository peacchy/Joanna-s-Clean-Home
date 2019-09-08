import React from "react";
import "./Search.scss";

const Search = () => {
	return (
		<div className="search">
			<div className="search__search-bar">
				<i className="fa fa-search" />
				<input
					className="search__search-bar__input"
					type="text"
					placeholder="Search..."
				/>
				<i className="fa fa-times" />
			</div>
		</div>
	);
};

export default Search;
