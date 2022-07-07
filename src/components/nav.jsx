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
                        <a href="" className="nav__link">
                            Books
                        </a>
                    </li>
                    <button className='btn__menu'>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
