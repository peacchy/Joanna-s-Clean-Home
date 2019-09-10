import React from "react";
import Select from "react-select";
import "./Search.scss";
import { Styles } from "react-select/src/styles";

const Search = () => {
	const options = [
		{ value: "option1", label: "Option 1" },
		{ value: "option2", label: "Option 2" },
		{ value: "option3", label: "Option 3" },
		{ value: "option4", label: "Option 4" },
		{ value: "option5", label: "Option 5" },
		{ value: "option6", label: "Option 6" }
	];

	// const [isFocused, setIsFocused] = useState(false);

	const customStyles: Partial<Styles> = {
		control: styles => ({
			...styles
			// "&:focus": {
			// 	width: isFocused ? 400 : 600
			// }
		}),
		option: styles => {
			return {
				...styles
			};
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
