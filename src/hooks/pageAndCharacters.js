import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacters, getOneCharacter } from '../services/rickAndMorty';

export const handleList = () => {
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


    return {
        loading,
        page,
        lastPage,
        characters,
        setPage
    };
};

export const handleDetails = () => {
    const [loading, setLoading] = useState(true);
    const [charId, setCharId] = useState(useParams().id);
    const [oneCharacter, setOneCharacter] = useState({});

    useEffect(() => {
        (async () => {
            setLoading(true);

            const character = await getOneCharacter(charId);
            setOneCharacter(character);

            setTimeout(function () {
                setLoading(false);
            }, 1500);
        })();
    }, [charId]);

    return {
        loading,
        oneCharacter,
    };
};