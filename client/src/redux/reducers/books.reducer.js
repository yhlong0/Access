import { SET_BOOKS } from '../actions/books.action';

const initState = ['TextTrackCueList'];

export default function booksReducer(books = initState, action) {
    switch (action.type) {
        case SET_BOOKS:
            return action.payload;
        default: 
            return books;
    }
}