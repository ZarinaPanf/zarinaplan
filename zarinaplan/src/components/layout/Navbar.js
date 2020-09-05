import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks.js';
import SignedOutLinks from './SignedOutLinks.js';

const NavBar = () => {
    return (
        <nav className="nav-wrapper blue-grey lighten-4">
            <div className="container">
                <Link to='/' className="brand-logo">ZarinaPlan</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default NavBar;