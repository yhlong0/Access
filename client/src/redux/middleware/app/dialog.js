import { apiRequesst, API_SUCCESS, API_ERROR } from '../../actions/api.action';
import { DIALOG, DIALOG_OPEN, closeDialog } from '../../actions/dialog.action';
import { switchModalView } from '../../actions/ui.actions';

import { API } from '../../constants/constants';

export const dialogMiddleware = () => next => action => {
    switch (action.type) {
        case DIALOG_OPEN:
            next(switchModalView(DIALOG));
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