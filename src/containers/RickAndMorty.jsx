import React from 'react';
import { loadingMessages } from '../../fixtures/loadingMessages';
import CharacterList from '../components/characters/CharacterList';
import getCharacters from '../services/rickAndMorty';

const RickAndMorty = () => {
    const [page, setPage] = React.useState(1);
    const [lastPage, setLastPage] = React.useState(2);
    const [loading, setLoading] = React.useState(true);
    const [characters, setCharacters] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            setLoading(true);
            console.log(page, 'BEFORE');
            const infoAndResults = await getCharacters(page);
            console.log(infoAndResults, 'res');
            setTimeout(function () {
                setCharacters(infoAndResults.results);
                setLastPage(infoAndResults.info.pages);
                setLoading(false);
            }, 2000);
            console.log(characters, page, lastPage, 'AFTER');
        })();
    }, [page]);

    return (
        <>
            {loading && <>
                <p>Loading...</p>
                <h1>
                    {loadingMessages[Math.floor(Math.random() * loadingMessages.length)]}
                </h1>
            </>}
            {!loading && <>
                <div id="controls">
                    {page > 1 &&
                        <button onClick={() => setPage(page - 1)}>
                            Previous Page
                        </button>}
                    <p>{page}</p>
                    {page < lastPage &&
                        <button onClick={() => setPage(page + 1)}>
                            Next Page
                        </button>}
                </div>
                <div id="character-list">
                    <CharacterList characters={characters} />
                </div>
            </>}

        </>
    );
};

export default RickAndMorty;