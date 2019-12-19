import React from 'react';
import './Header.scss';

function Header() {
    let a = window.location.href;
    return (
        <header className="my-hheader">
            <nav>
                <ul className="header-navigation">
                    <li><a href="/"  className='header-list'>Home</a></li>
                    <li><a href='/about'  className='header-list'>About</a></li>
                    <li><a href="/archive"  className='header-list'>Archive</a></li>
                    <li><a href="/contact"  className='header-list'>Contact</a></li>
                    <li><a href="/testpage"  className='header-list'>testpage</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;