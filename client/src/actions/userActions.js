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

export const openDialog = (userId, dialog) => {
    const upperCaseDialog = dialog.toUpperCase()
    return dispatch => {
        dispatch({
            type: 'SWITCH'
        });
        axios.get(`/users/${userId}/${dialog}`)
             .then((res) => {
                 dispatch({
                     type: `FETCH_${upperCaseDialog}_DATA`,
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
        dispatch({
            type: 'CLEAR_SEARCH'
        });
    };
};

export const updateSearch = (search) => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_SEARCH',
            payload: search
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
                    dispatch({
                        type: 'CLEAR_SEARCH'
                    });
                });
             })
             .catch((err) => {
                dispatch({ type: 'ADD_ACCESS_REJECTED', payload: err })
             });
    };
};

export const removeAccess = (systemId, userId) => {
    return dispatch => {
        dispatch({ type: 'FETCHING' });
        axios.delete(`/users/${userId}/access/${systemId}`)
            .then((res) => {
                axios.get('/users')
                    .then((res) => {
                        dispatch({
                            type: 'FETCH_USERS_FULFILLED',
                            payload: res.data
                        });
                    });
            })
            .catch((err) => {
                dispatch({ type: 'REMOVE_ACCESS_REJECTED', payload: err });
            });
    };
};

export const changeStatus = (userId) => {
    return dispatch => {
        dispatch({ type: 'FETCHING' });
        axios.put(`/users/${userId}`)
            .then((res) => {
                dispatch({
                    type: 'CHANGE_STATUS_FULFILLED',
                    payload: res.data
                });
            })
            .catch((err) => {
                dispatch({ type: 'ChANGE_STATUS_REJECTED', payload: err });
            });
    };
};