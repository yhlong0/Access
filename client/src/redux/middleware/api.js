import * as actions from '../constants/constants';

const api = ({ dispatch, getState }) => next => action => {
    if (action.type !== actions.API) {
        return next(action);
    }

    const { url, success } = action.payload;
    fetch(url)
        .then(res => res.json())
        .then(data => dispatch(success(data)));
};

export default api;