import React from 'react';
import getCharacters from '../services/rickAndMorty';

const RickAndMorty = () => {
    const [loading, setLoading] = React.useState(true);
    const [page, setPage] = React.useState(1);
    const [characters, setCharacters] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            const characters = await getCharacters(page);
            setCharacters(characters);
            setLoading(false);
        })();
    }, [page]);

    return (
        <>
            Yo
        </>
    );
};

export default RickAndMorty;