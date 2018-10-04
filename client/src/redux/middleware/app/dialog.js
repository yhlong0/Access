import { apiRequest, API_SUCCESS, API_ERROR } from '../../actions/api.actions';
import { setNotification } from '../../actions/notification.actions';
import { switchModalView, setLoader } from '../../actions/ui.actions';
import { USERS } from '../../actions/users.actions';
import {
    DIALOG,
    DIALOG_OPEN,
    DIALOG_CLOSE,
    DIALOG_ADD_ITEM,
    setRenderList,
    setUserId,
    setDialog,
    closeDialog
} from '../../actions/dialog.action';

import { API } from '../../constants/constants';

export const dialogMiddleware = () => next => action => {
    switch (action.type) {
        
        case DIALOG_OPEN:
            next(switchModalView(DIALOG));
            next(setLoader({ 
                state: true, 
                entity: DIALOG 
            }));
            next(setDialog(action.dialog));
            next(apiRequest({
                body: { 
                    systems: action.systems, 
                    roles: action.roles,
                    dialog: action.dialog,
                    userId: action.userId
                },
                method: 'GET',
                url: `${API.USERS}/${action.userId}`,
                entity: DIALOG
            }));
            break;

        case DIALOG_ADD_ITEM:
            let payload = action.payload
            next(apiRequest({
                body: {
                    id: payload.checkedItem,
                },
                method: 'POST',
                url: `${API.USERS}/${payload.userId}/${payload.dialog}`,
                entity: DIALOG
            }));
            next(switchModalView(DIALOG));
            next(closeDialog());
            next(apiRequest({
                body: null,
                method: 'GET',
                url: API.USERS,
                entity: USERS
            }));
            break;

        case DIALOG_CLOSE:
            next(switchModalView(DIALOG));
            next(closeDialog());
            break;
    
        case `${DIALOG} ${API_SUCCESS}`:
            let body = action.meta.body;
            let roleList = action.payload.roles.map(item => item._id);
            let sysList = action.payload.sysAccess.map(item => item._id);
            let result = [];

            if(body.dialog === 'role') {
                result = body.roles.filter(item => !roleList.includes(item._id));
            } else {
                result = body.systems.filter(item => !sysList.includes(item._id)); 
            }
            
            next(setRenderList(result));
            next(setLoader({ 
                state: false, 
                entity: DIALOG 
            }));
            next(setUserId(body.userId));
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