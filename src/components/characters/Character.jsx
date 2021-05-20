import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ id, name, status, species, image }) => (
    <>
        <h3>
            {name} ({id})
        </h3>
        <figure>
            <img src={image} alt={name} />
            <figcaption>
                <p>{status} - {species}</p>
            </figcaption>
        </figure>
    </>
);

Character.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default Character;