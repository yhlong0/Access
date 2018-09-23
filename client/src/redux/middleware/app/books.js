import { BOOKS, FETCH_BOOKS, setBooks } from '../../actions/books.action';
import { apiRequest, API_SUCCESS } from '../../actions/api.actions';

export const booksMiddleware = ({dispatch}) => next => action => {
    console.log("book Middleware triggered:", action);
    next(action);
    if(action.type === `${FETCH_BOOKS}`) {
        dispatch(apiRequest({ body: null, method: 'GET', url: '/systems', entity: '[BOOKS]'}));
    }
    if(action.type === `${BOOKS} ${API_SUCCESS}`) {
        console.log('api success' + action.payload)
        dispatch(setBooks(action.payload));
    }
}