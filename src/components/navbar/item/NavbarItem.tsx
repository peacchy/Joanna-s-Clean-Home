import React from 'react';
import './NavbarItem.scss';

import Props from './NavbarItem.props';

const NavbarItem = (props: Props) => {
    return(
        <div className="item">
            <a className="item__link" href={`#${props.name.toLowerCase()}`}>{props.name}</a>
        </div>
    )
}

export default NavbarItem;
