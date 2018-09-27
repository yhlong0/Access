import { API_REQUEST, apiError, apiSuccess } from '../../actions/api.actions';
import axios from 'axios';

export const apiMiddleware = ({dispatch}) => next => action => {
    next(action);
    if(action.type.includes(API_REQUEST)) {

        const { url, method, entity } = action.meta;

        axios({ 
            method: method, 
            url: url,
            data: action.payload, 
        })
            .then(res => res.data)
            .then(data => {
                dispatch(apiSuccess(data, { entity, method }))
            })
            .catch(error => dispatch(apiError({ error, entity })))
    }
}