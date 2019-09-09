import React, { useState } from "react";
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

	const [isFocused, setIsFocused] = useState(false);

	const customStyles:Partial<Styles> = {
		control: styles => ({
			...styles, 
			"&:focus": {
				width: isFocused ? 400 : 600
			}
		}),
		option: (styles) => {
			return {
				...styles,
				backgroundColor: 'gray',
				border: 'none',

				
				

			}
		}
	};

	return (
		<div className="search">
				<Select
					className="search__input"
					options={options}
					isClearable={true}
					placeholder="Search..."
					styles={customStyles}
				/>
		</div>
	);
};

export default Search;
