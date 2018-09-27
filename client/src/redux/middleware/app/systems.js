import { API } from '../../constants/constants';
import {  apiRequest, API_SUCCESS, API_ERROR } from '../../actions/api.actions';
import { setNotification } from '../../actions/notification.actions';
import { setLoader } from '../../actions/ui.actions';
import { 
    SYSTEMS, 
    FETCH_SYSTEMS, 
    CREATE_SYSTEM,
    DELETE_SYSTEM,
    setSystems 
} from '../../actions/systems.actions';

export const systemsMiddleware = () => next => action => {
    
    if(action.type.includes(SYSTEMS)) {
        next(action);
    }

    switch (action.type) {

        case FETCH_SYSTEMS:
            next(setLoader({ 
                state: true, 
                entity: SYSTEMS 
            }));
            next(apiRequest({ 
                body: null, 
                method: 'GET', 
                url: API.SYSTEMS, 
                entity: SYSTEMS 
            }));
            break;

        case CREATE_SYSTEM:
            next(setLoader({
                state: true,
                entity: SYSTEMS
            }));
            next(apiRequest({
                body: action.payload,
                method: 'POST',
                url: API.SYSTEMS,
                entity: SYSTEMS
            }));
            break;

        case DELETE_SYSTEM:
            next(setLoader({
                state: true,
                entity: SYSTEMS
            }));
            action.payload.map(select => {
                next(apiRequest({
                    body: action.payload,
                    method: 'DELETE',
                    url: `${API.SYSTEMS}/${select}`,
                    entity: SYSTEMS
                }));
                return select;
            })
            break;

        case `${SYSTEMS} ${API_SUCCESS}`:
            const { method } = action.meta;
            if (method === 'GET') {
                next(setSystems(action.payload ));
                next(setLoader({ 
                    state: false, 
                    entity: SYSTEMS 
                }));
            } else {
                next(apiRequest({
                    body: null,
                    method: 'GET',
                    url: API.SYSTEMS,
                    entity: SYSTEMS
                }));
                next(setLoader({
                    state: false,
                    entity: SYSTEMS
                }));
            }
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