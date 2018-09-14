import { SYSTEMS, FETCH_SYSTEMS, setSystems } from '../../actions/systems.actions';
import { API_SUCCESS, apiRequest } from "../../actions/api.actions";
import { setLoader } from '../../actions/ui.actions';
import { API } from '../../constants/constants';

export const systemsMiddleware = () => next => action => {
    next(action);

    switch (action.type) {
        case FETCH_SYSTEMS:
            next(apiRequest(null, 'GET', API.SYSTEMS, SYSTEMS));
            next(setLoader(true));
            break;
        case `${SYSTEMS} ${API_SUCCESS}`:
            next(setSystems(action.payload));
            next(setLoader(false));
            break;
    }
};