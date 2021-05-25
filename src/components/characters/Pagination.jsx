import React from 'react';
import { page, lastPage, setPage, handlePage } from '../../hooks/pageAndCharacters';

const Pagination = ({ page, lastPage, setPage }) => {

    return (
        <div aria-label="page-controls">
            <button disabled={page <= 1} onClick={() => { setPage(page - 1) }}>
                PREV
            </button>
            <strong>{page}</strong>
            <button disabled={page >= lastPage} onClick={() => { setPage(page + 1) }}>
                NEXT
            </button>
        </div>
    );
};

export default Pagination;