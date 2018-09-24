import { SYSTEMS, FETCH_SYSTEMS, setSystems } from '../../actions/systems.actions';
import { API_SUCCESS, API_ERROR, apiRequest } from '../../actions/api.actions';
import { setLoader } from '../../actions/ui.actions';
import { API } from '../../constants/constants';
import { setNotification } from '../../actions/notification.actions';

export const systemsMiddleware = () => next => action => {
    next(action);
    switch (action.type) {
        case FETCH_SYSTEMS:
            next(apiRequest({ body: null, method: 'GET', url: API.SYSTEMS, entity: SYSTEMS }));
            next(setLoader({ state: true, entity: SYSTEMS }));
            break;
        case `${SYSTEMS} ${API_SUCCESS}`:
            console.log("actionpayload " + action.payload)
            next(setSystems({ systems: action.payload }));
            next(setLoader({ state: false, entity: SYSTEMS }));
            break;
        case `${SYSTEMS} ${API_ERROR}`: 
            next(setNotification({
                message: action.payload.message, 
                entity: SYSTEMS
            }));
            next(setLoader({ state: false, entity: SYSTEMS}));
            break; 
        default: 
            next(action);          
    }
};