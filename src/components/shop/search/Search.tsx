import React from "react";
import Select from "react-select";
import { Styles } from "react-select/src/styles";
import SearchProps from "./Search.props";
import "./Search.scss";

const Search = (props: SearchProps) => {
	const options = [
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" }
	];

	const customStyles:Partial<Styles> = {
		control: styles => ({...styles, }),
		option: (styles) => {
			return {
				...styles,
				backgroundColor: 'gray',
				border: 'none'
				

			}
		}
	};

	return (
		<div className="search">
			<div className="search__search-bar">
				<Select
					className="search__search-bar__input"
					options={options}
					isClearable={true}
					placeholder="Search..."
					styles={customStyles}
				/>
			</div>
		</div>
	);
};

export default Search;
