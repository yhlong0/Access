export const BOOKS = '[Books]';

export const FETCH_BOOKS = `${BOOKS} FETCH`;
export const SET_BOOKS = `${BOOKS} SET`;

export const fetchBooks = () => ({
    type: FETCH_BOOKS
});

export const setBooks = () => ({
    type: SET_BOOKS
});