export const BOOKS = '[Books]';

export const FETCH_BOOKS = `${BOOKS} FETCH`;

export const fetchBooks = () => ({
    type: FETCH_BOOKS
});