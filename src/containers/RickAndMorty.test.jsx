import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import rickAndMortyCharacters from '../../fixtures/rickAndMortyCharacters.json';
import RickAndMorty from './RickAndMorty';

const server = setupServer(
    rest.get(`https://rickandmortyapi.com/api/character?page=1`,
        (req, res, ctx) => {
            return res(
                ctx.json(rickAndMortyCharacters)
            );
        })
);

jest.useFakeTimers();

describe('RickAndMorty Container custom hooks', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('Show loading, then fire button to new page, and render return as list items', async () => {
        render(<RickAndMorty />);

        screen.getByText('Loading...');


        const button = await screen.findByRole('button', { name: 'next-button' });
        fireEvent.click(button);

        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', { name: 'character-list' });
        expect(ul).toMatchSnapshot();

    });
});
