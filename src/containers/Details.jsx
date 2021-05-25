import React from 'react';
import {
    useParams,
} from 'react-router-dom';
import { getOneCharacter } from '../services/rickAndMorty';
import Character from '../components/characters/Character';
import { loadingMessages } from '../../fixtures/loadingMessages';
import Header from '../components/characters/Header';
import Loading from '../components/characters/Loading';

const Details = () => {
    const [loading, setLoading] = React.useState(true);
    const [charId, setCharId] = React.useState(useParams().id);
    const [oneCharacter, setOneCharacter] = React.useState({});

    React.useEffect(() => {
        (async () => {
            setLoading(true);
            const character = await getOneCharacter(charId);
            setTimeout(function () {
                setOneCharacter(character);
                setLoading(false);
            }, 2000);
        })();
    }, [charId]);

    if (loading) return <Loading />;

    return (
        <>
            <Header />
            <Character {...oneCharacter} />
        </>
    );
};

export default Details;