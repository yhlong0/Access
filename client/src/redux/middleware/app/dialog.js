import { apiRequest, API_SUCCESS, API_ERROR } from '../../actions/api.actions';
import { setNotification } from '../../actions/notification.actions';
import { switchModalView, setLoader } from '../../actions/ui.actions';
import {
    DIALOG,
    DIALOG_OPEN,
    DIALOG_CLOSE,
    setRenderList
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
            next(apiRequest({
                body: { 
                    systems: action.systems, 
                    roles: action.roles
                },
                method: 'GET',
                url: `${API.USERS}/${action.userId}`,
                entity: DIALOG
            }));
            break;

        case DIALOG_CLOSE:
            next(switchModalView(DIALOG));
            break;
    
        case `${DIALOG} ${API_SUCCESS}`:
            console.log(action.meta.body.roles);
            let roleList = action.payload.roles.map(item => item._id);
            let result = action.meta.body.roles.filter(item => !roleList.includes(item._id));
            next(setRenderList(result));
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