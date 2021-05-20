import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => (
    <>
        <ul aria-label="character-list">
            {characters.map(character => (
                <li key={character.id}>
                    <a href={`/${character.id}`}>
                        <Character {...character} />
                    </a>
                </li>
            ))}
        </ul>
    </>
);

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