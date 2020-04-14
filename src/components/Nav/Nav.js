import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => (
    <nav className='nav'>
        <ul>
            <li>
                <Link to='/'>Today</Link>
            </li>
            <li>
                <Link to='/next'>Next days</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;
