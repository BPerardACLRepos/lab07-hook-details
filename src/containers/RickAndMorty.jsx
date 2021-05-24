import React from 'react';
import { loadingMessages } from '../../fixtures/loadingMessages';
import CharacterList from '../components/characters/CharacterList';
import { getCharacters } from '../services/rickAndMorty';

const RickAndMorty = () => {
    const [page, setPage] = React.useState(1);
    const [lastPage, setLastPage] = React.useState(2);
    const [loading, setLoading] = React.useState(true);
    const [characters, setCharacters] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            setLoading(true);
            const infoAndResults = await getCharacters(page);
            setTimeout(function () {
                setCharacters(infoAndResults.results);
                setLastPage(infoAndResults.info.pages);
                setLoading(false);
            }, 2000);
        })();
    }, [page]);

    if (loading) return (
        <>
            <p>Loading...</p>
            <h1>
                {loadingMessages[Math.floor(Math.random() * loadingMessages.length)]}
            </h1>
        </>
    );

    return (
        <>
            <div id="controls">
                <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
                    PREV
                    </button>
                <p>{page}</p>
                <button disabled={page >= lastPage} onClick={() => setPage(page + 1)}>
                    NEXT
                    </button>
            </div>
            <div id="character-list">
                <CharacterList characters={characters} />
            </div>
        </>
    );
};

export default RickAndMorty;