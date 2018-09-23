import  { FETCH_BOOKS, SET_BOOKS, setBooks } from '../../actions/books.action';
import axios from 'axios';

export const booksMiddleware = () => next => action => {
    next(action);
    if(action.type === `${FETCH_BOOKS}`) {
        axios({method: 'GET', url: '/systems'})
            .then(res => res.data)
            .then(data => {
                console.log(data);
                next(setBooks(data));
            })
    }
}