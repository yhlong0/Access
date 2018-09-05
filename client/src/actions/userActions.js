import axios from 'axios';

export function createUser(user) {
    return dispatch => {
        dispatch({type: 'FETCHING'});
        axios.post('/users', user)
             .then((res) => {
                 axios.get('/users')
                      .then((res) => {
                          dispatch({type: 'FETCH_USERS_FULFILLED', payload: res.data})
                      })
             })
             .catch((err) => {
                 dispatch({type: 'CREATE_USER_REJECTED', payload: err})
             });
    };
};

export const fetchUsers = () => {
    return dispatch => {
        dispatch({ type: 'FETCHING' });
        axios.get('/users')
            .then((res) => {
                dispatch({ type: 'FETCH_USERS_FULFILLED', payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: 'FETCH_USERS_REJECTED', payload: err })
            });
    };
};

export const openDialog = () => {
    return dispatch => {
        dispatch({
            type: 'SWITCH'
        });
    };
};
