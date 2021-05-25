import React from 'react';

import CharacterList from '../components/characters/CharacterList';
import Loading from '../components/characters/Loading';
import Pagination from '../components/characters/Pagination';

import { handleList } from '../hooks/pageAndCharacters';

const RickAndMorty = () => {
    const { loading, page, lastPage, characters, setPage } = handleList();

    if (loading) return <Loading />;

    return (
        <>
            <Pagination
                page={page}
                lastPage={lastPage}
                setPage={setPage}
            />
            <CharacterList characters={characters} />
        </>
    );
};

export default RickAndMorty;