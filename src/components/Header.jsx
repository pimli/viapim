import React from 'react';
import Logo from '../header-logo-large.png'

const Header = () => {
    return (
        <div id="page-header">
            <img src={Logo}></img>
        </div>
    );
}

export default Header;