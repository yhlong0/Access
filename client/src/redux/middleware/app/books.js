import { apiRequest, API_SUCCESS, API_ERROR } from '../../actions/api.actions';
import { BOOKS, FETCH_BOOKS, setBooks } from '../../actions/books.action';
import { setNotification } from '../../actions/notification.actions';
import { setLoader } from '../../actions/ui.actions';

import { API } from '../../constants/constants';

export const booksMiddleware = () => next => action => {
    //next(action);
    switch(action.type) {
        case FETCH_BOOKS:
            next(apiRequest({ 
                body: null, 
                method: 'GET', 
                url: API.BOOKS, 
                entity: BOOKS
            }));
            next(setLoader({ 
                state: true, 
                entity: BOOKS 
            }));
        break;
        case `${BOOKS} ${API_SUCCESS}`:
            next(setBooks(action.payload));
            next(setLoader({ 
                state: false, 
                entity: BOOKS 
            }));
            break;
        case `${BOOKS} ${API_ERROR}`:
            next(setNotification({
                message: action.payload.message,
                entity: BOOKS
            }));
            next(setLoader({ 
                state: false, 
                entity: BOOKS 
            }));
            break;
        default:
            next(action);
    }
}