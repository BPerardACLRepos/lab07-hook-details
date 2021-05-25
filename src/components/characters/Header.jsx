import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
        <Link aria-label="character-list-link" to="/">
            CHARACTER LIST
        </Link>
    </nav>
);

export default Header;

