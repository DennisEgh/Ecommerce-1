import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.svg';

const Nav = () => {
    return (
        <nav>
            <div className="nav__container">
                <a href="">
                    <img className='logo' src={LibraryLogo} alt="" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <a href="" className="nav__link">
                            Home
                        </a>
                    </li>
                    <li className="nav__list">
                        <a href="/" className="nav__link">
                            Books
                        </a>
                    </li>
                    <button className='btn__menu'>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__icon">
                        <a href="/cart" className='nav__link'>
                            <FontAwesomeIcon icon="shopping-cart" />
                        </a>
                        <span className='cart__length'>2</span>
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close">
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list"></li>
                        <a href="/" className='menu__link'>
                            Home
                        </a>
                        <li className="menu__list"></li>
                        <a href="/books" className='menu__link'>
                            Books
                        </a>
                        <li className="menu__list"></li>
                        <a href="/cart" className='menu__link'>
                            Cart
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
