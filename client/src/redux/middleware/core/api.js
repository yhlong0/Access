import { API_REQUEST, apiError, apiSucess } from '../../actions/api.actions';

export const apiMiddleware = ({dispatch}) => next => action => {
    next(action);

    if(action.type === API_REQUEST) {
        const { entity, method, url } = action.payload.meta;

        fetch(url, {method})
            .then( res => res.json())
            .then( data => dispatch(apiSucess(data, entity)))
            .catch( error => dispatch(apiError(error, entity)))
    }
}