import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <Link to= '/'>Home</Link>
            <Link to= '/review'>Order Review</Link>
            <Link to= '/about'>About</Link>
            <Link to= '/contacts'>Contacts</Link>
        </nav>
    );
};

export default Header;