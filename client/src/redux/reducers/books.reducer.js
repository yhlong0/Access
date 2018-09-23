import { SET_BOOKS } from '../actions/books.action';

const initState = [];

export default function booksReducer(books = initState, action) {
    switch (action.type) {
        case SET_BOOKs:
            return action.payload;
        default: 
            return books;
    }
}