import React from "react";
import './UnorderedList.scss';
import UnorderedListProps from "./UnorderedList.props";


const UnorderedList = (props: UnorderedListProps) => {
	return (
        <ul className="unordered-list">
            {props.children}
        </ul>
    );
};

export default UnorderedList;
