import { apiRequesst, API_SUCCESS, API_ERROR } from '../../actions/api.action';
import { DIALOG, DIALOG_OPEN, closeDialog } from '../../actions/dialog.action';
import { setNotification } from '../../actions/notification.actions';
import { switchModalView, setLoader } from '../../actions/ui.actions';

import { API } from '../../constants/constants';

export const dialogMiddleware = () => next => action => {
    
    switch (action.type) {
        
        case DIALOG_OPEN:
            next(switchModalView(DIALOG));
            next(setLoader({ 
                state: true, 
                entity: DIALOG 
            }));
            next(apiRequesst({
                body: null,
                method: 'GET',
                url: API.BOOKS,
                entity: DIALOG
            }));
            break;
    
        case `${DIALOG} ${API_SUCCESS}`:
            next(setBooks(action.payload));
            next(setLoader({ 
                state: false, 
                entity: DIALOG 
            }));
            break;

        case `${DIALOG} ${API_ERROR}`:
            next(setNotification({
                message: action.payload.message,
                entity: DIALOG
            }));
            next(setLoader({ 
                state: false, 
                entity: DIALOG 
            }));
            break;

        default:
            next(action);
    }

}