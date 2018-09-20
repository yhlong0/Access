import * as actions from '../constants/constants';

const api = ({ dispatch, getState }) => next => action => {
    if (action.type !== actions.API) {
        return next(action);
    }
    console.log('YUYYYY');
};

export default api;