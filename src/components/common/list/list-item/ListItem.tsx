import React from "react";
import './ListItem.scss';
import ListItemProps from "./ListItem.props";

const ListItem = (props: ListItemProps) => {
	return (
        <li className="list-item">
            {props.children}
        </li>
    );
};

export default ListItem;
