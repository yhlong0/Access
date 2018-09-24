import { BOOKS, FETCH_BOOKS, setBooks } from '../../actions/books.action';
import { apiRequest, API_SUCCESS } from '../../actions/api.actions';

export const booksMiddleware = () => next => action => {
    console.log("book Middleware triggered:", action.type);
    next(action);
    // if(action.type === `${FETCH_BOOKS}`) {
    //     next(apiRequest({ body: null, method: 'GET', url: '/systems', entity: '[BOOKS]'}));
    // }
    // if(action.type === `${BOOKS} ${API_SUCCESS}`) {
    //     console.log('api success' + action.payload)
    //     next(setBooks(action.payload));
    // }.
    console.log("book Middleware triggered:", action.type);
    switch(action.type) {
        case FETCH_BOOKS:
            next(apiRequest({ 
                body: null, 
                method: 'GET', 
                url: '/systems', 
                entity: BOOKS
            }));
        break;
        case `${BOOKS} API_SUCCESS`:
            console.log('api success' + action.payload)
            next(setBooks(action.payload));
            break;
        //default:
            //next(setBooks(action.payload));
    }
}