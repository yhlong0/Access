import { apiRequesst, API_SUCCESS, API_ERROR } from '../../actions/api.action';
import { DIALOG, DIALOG_OPEN, closeDialog } from '../../actions/dialog.action';

import { API } from '../../constants/constants';
import { switchModalView } from '../../actions/ui.actions';

export const dialogMiddleware = () => next => action => {
    switch (action.type) {
        case DIALOG_OPEN:
            next(switchModalView({

            }));
            next(apiRequesst({
                body: null,
                method: 'GET',
                url: API.BOOKS,
                entity: DIALOG
            }));
            break;
    
        default:
            next(action);
    }

}