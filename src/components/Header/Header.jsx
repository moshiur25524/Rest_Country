import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <NavLink to='/home' className={(isActive) => isActive ? 'active' : undefined} >Home</NavLink>
                <NavLink to='/countries' >Countries</NavLink>
                <NavLink to='/about'>Contact</NavLink>
                <NavLink to='/contact'>About</NavLink>
            </nav>
            <hr />
        </div>
    );
};

export default Header;