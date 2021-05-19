import React from 'react';
import { loadingMessages } from '../../fixtures/loadingMessages';
import getCharacters from '../services/rickAndMorty';

const RickAndMorty = () => {
    const [loading, setLoading] = React.useState(true);
    const [page, setPage] = React.useState(1);
    const [characters, setCharacters] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            setLoading(true);
            const characters = await getCharacters(page);
            setCharacters(characters);
            setLoading(false);
        })();
    }, [page]);

    return (
        <>
            {loading &&
                <h2>{loadingMessages[Math.floor(Math.random() * loadingMessages.length)]}</h2>
            }
        </>
    );
};

export default RickAndMorty;