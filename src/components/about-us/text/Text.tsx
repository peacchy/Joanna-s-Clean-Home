import React from "react";
import "./Text.scss";

import UnorderedList from "../../common/list/unordered/UnorderedList";
import ListItem from "../../common/list/list-item/ListItem";

const Text = () => {
	return (
		<div className="text">
			<p className="text__main">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
				iaculis, dui non mattis consectetur, leo nisl sodales orci, non
				mattis augue eros ac felis. Praesent accumsan neque nec massa
				condimentum ornare. Sed at enim vitae nisl mattis pharetra quis
				eget risus. Suspendisse potenti. Mauris sed lorem sed urna
				sagittis vulputate vitae vel ligula. Vivamus sed lacus nunc.
			</p>

			<UnorderedList>
				<ListItem>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Morbi iaculis, dui non mattis consectetur, leo nisl sodales
					orci, non mattis augue eros ac felis.
				</ListItem>

				<ListItem>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Morbi iaculis, dui non mattis consectetur, leo nisl sodales
					orci, non mattis augue eros ac felis.
				</ListItem>

				<ListItem>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Morbi iaculis, dui non mattis consectetur, leo nisl sodales
					orci, non mattis augue eros ac felis.
				</ListItem>
			</UnorderedList>
		</div>
	);
};

export default Text;
