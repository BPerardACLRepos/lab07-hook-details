import React from 'react';
import {
    useParams,
} from 'react-router-dom';
import { getOneCharacter } from '../services/rickAndMorty';
import Character from '../components/characters/Character';
import { loadingMessages } from '../../fixtures/loadingMessages';

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

    return (
        <>
            {loading && <>
                <p>Loading...</p>
                <h1>
                    {loadingMessages[Math.floor(Math.random() * loadingMessages.length)]}
                </h1>
            </>}
            {!loading && <>
                <div id="link">
                    <a href="/">
                        <p>Character List</p>
                    </a>
                </div>
                <div>
                    <Character {...oneCharacter} />
                </div>
            </>}
        </>
    );
};

export default Details;