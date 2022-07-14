import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bookinfo = () => {
    return (
        <div className="books__body">
            <main id="books_main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left"></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Bookinfo;
