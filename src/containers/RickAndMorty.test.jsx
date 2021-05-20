import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RickAndMorty from './RickAndMorty';

jest.useFakeTimers();

it('Show loading, then fire button to new page, and render return as list items', async () => {
    render(<RickAndMorty />);

    screen.getByText('Loading...');

    const button = await screen.findByRole('button');
    fireEvent.click(button);

    const ul = await screen.findByRole('list', { name: 'character-list' });


    return waitFor(() => {
        const li = screen.getAllByRole('listitem');
        expect(li).toHaveLength(20);
    });
});
