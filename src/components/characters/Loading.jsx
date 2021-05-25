import React from 'react';
import { loadingMessages } from '../../../fixtures/loadingMessages';

const Loading = () => (
    <>
        <p>Loading...</p>
        <h1>
            {loadingMessages[Math.floor(Math.random() * loadingMessages.length)]}
        </h1>
    </>
);

export default Loading;