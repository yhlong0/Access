import  { FETCH_BOOKS, SET_BOOKS, setBooks } from '../../actions/books.action';

export const booksMiddleware = () => next => action => {
    if(action.type === `${FETCH_BOOKS}`) {
        console.log('haha')
        next(setBooks());
    }
    if (action.type === `${SET_BOOKS}`) {
        console.log('set book');
        next(action);
    }
}