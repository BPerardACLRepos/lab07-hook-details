import React from 'react';
import Character from '../components/characters/Character';
import Header from '../components/characters/Header';
import Loading from '../components/characters/Loading';
import { handleDetails } from '../hooks/pageAndCharacters';

const Details = () => {
    const { loading, oneCharacter } = handleDetails();

    if (loading) return <Loading />;

    return (
        <>
            <Header />
            <Character {...oneCharacter} />
        </>
    );
};

export default Details;