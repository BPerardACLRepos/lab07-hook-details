import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link, BrowserRouter as Router } from 'react-router-dom';


const CharacterList = ({ characters }) => {

    return (
        <ul aria-label="character-list">
            {characters.map(character => (
                <li key={character.id}>
                    <Router>
                        <Link to={`/${character.id}`}>
                            <Character {...character} />
                        </Link>
                    </Router>
                </li>
            ))}
        </ul>
    );
};

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            species: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CharacterList;