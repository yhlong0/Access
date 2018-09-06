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

export const openDialog = (userId) => {
    return dispatch => {
        dispatch({
            type: 'SWITCH'
        });
        axios.get(`/users/${userId}/access`)
             .then((res) => {
                 dispatch({
                     type: 'FETCH_ACCESS_DATA',
                     payload: {
                         userId: userId,
                         currentAccess: res.data,
                     }
                 })
             });
    };
};

export const closeDialog = () => {
    return dispatch => {
        dispatch({
            type: 'SWITCH'
        });
        dispatch({
            type: 'CLEAR_ACCESSDATA'
        });
    };
};

export const clickedAccess = (accessId) => {
    return dispatch => {
        dispatch({
            type: 'CLICKED_ACCESS',
            payload: accessId
        });
    };
};

export const addAccess = (accessData) => {
    return dispatch => {
        dispatch({ type: 'FETCHING' });
        dispatch({
            type: 'SWITCH'
        });
        axios.post(`/users/${accessData.userId}/access`, { systemId: accessData.newAccess })
             .then((res) => {
                axios.get('/users')
                .then((res) => {
                    dispatch({
                        type: 'FETCH_USERS_FULFILLED', 
                        payload: res.data
                    });
                    dispatch({
                        type: 'CLEAR_ACCESSDATA'
                    });
                });
             })
             .catch((err) => {
                dispatch({ type: 'ADD_ACCESS_REJECTED', payload: err })
             });
    };
};

export const removeAccess = (accessData) => {
    return dispatch => {
        dispatch({ type: 'FETCHING' });
        axios.delete(`/users/${accessData.userId}/access`, { systemId: accessData.newAccess })
            .then((res) => {
                axios.get('/users')
                    .then((res) => {
                        dispatch({
                            type: 'FETCH_USERS_FULFILLED',
                            payload: res.data
                        });
                        dispatch({
                            type: 'CLEAR_ACCESSDATA'
                        });
                    });
            })
            .catch((err) => {
                dispatch({ type: 'ADD_ACCESS_REJECTED', payload: err })
            });
    };
};
