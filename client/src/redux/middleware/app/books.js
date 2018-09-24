import { BOOKS, FETCH_BOOKS, setBooks } from '../../actions/books.action';
import { apiRequest, API_SUCCESS } from '../../actions/api.actions';

export const booksMiddleware = () => next => action => {
    next(action);
    switch(action.type) {
        case FETCH_BOOKS:
            next(apiRequest({ 
                body: null, 
                method: 'GET', 
                url: '/systems', 
                entity: BOOKS
            }));
        break;
        case `${BOOKS} ${API_SUCCESS}`:
            next(setBooks(action.payload));
            break;
        default:
            next(action);
    }
}