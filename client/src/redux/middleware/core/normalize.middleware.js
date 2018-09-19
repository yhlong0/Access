import { dataNormalized } from '../actions/data';
import { setSystems } from '../actions/books';

export const normalizeMiddleware = ({dispatch}) => (next) => (action) => {
    if(action.type.includes('SET') && action.meta.normalizeKey) {
        //normalize the raw data
        dispatch(dataNormalized({ feature: action.meta.feature }));

        //transform the data structure
        const systems = action.payload.reduce((acc, item) => {
            acc[item[action.meta.normalizeKey]] = item;
            return acc;
        }, {});

        next({ ...action, payload: systems, normalizeKey: null });
    } else {
        next(action);
    }
};