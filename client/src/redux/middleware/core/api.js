import { API_REQUEST, apiError, apiSuccess } from '../../actions/api.actions';
import axios from 'axios';

export const apiMiddleware = ({dispatch}) => next => action => {
    next(action);

    if(action.type.includes(API_REQUEST)) {
        const { url, method, entity } = action.meta;
        debugger;
        axios({ method: method, url: url })
            .then(res => res.data)
            .then(data => dispatch(apiSuccess(data, entity)))
            .catch(error => dispatch(apiError(error, entity)))
        // fetch(url, { method })
        //     .then( res => res.json())
        //     .then( data => dispatch(apiSuccess(data, entity)))
        //     .catch( error => dispatch(apiError(error, entity)))
    }
}