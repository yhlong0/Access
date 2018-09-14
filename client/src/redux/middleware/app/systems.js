import { SYSTEMS, FETCH_SYSTEMS, setSystems } from '../../actions/systems.actions';
import { API_SUCCESS, apiRequest } from "../../actions/api.actions";
import { setLoader } from '../../actions/ui.actions';
import { API } from '../../constants/constants';

export const systemsMiddleware = ({dispatch}) => next => action => {
    next(action);

    switch (action.type) {
        case FETCH_SYSTEMS:
            dispatch(apiRequest(null, 'GET', API.SYSTEMS, SYSTEMS));
            dispatch(setLoader(true));
            break;
        case `${SYSTEMS} ${API_SUCCESS}`:
            dispatch(setSystems(action.payload));
            dispatch(setLoader(false));
            break;
    }
};