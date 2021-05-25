import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacters, getOneCharacter } from '../services/rickAndMorty';

export const handlePage = () => {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(2);

    useEffect(() => {
        (async () => {
            setLoading(true);

            const infoAndResults = await getCharacters(page);
            setCharacters(infoAndResults.results);
            setLastPage(infoAndResults.info.pages);

            setTimeout(function () {
                setLoading(false);
            }, 1500);
        })();
    }, [page]);



    console.log(page, characters, 'bot');
    return {
        loading,
        page,
        lastPage,
        characters,
        setPage
    };
};
