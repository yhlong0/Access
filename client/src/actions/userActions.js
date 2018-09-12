import axios from 'axios';

export function createUser(user) {
    return async dispatch => {
        dispatch({type: 'FETCHING'});

        try{
            await axios.post('/users', user);
            let users = await axios.get('/users');

            dispatch({
                type: 'FETCH_USERS_FULFILLED',
                payload: users.data
            });
        } catch (err) {
            dispatch({
                type: 'API_CALL_REJECTED',
                payload: err
            });
        }
    };
};

export const fetchUsers = () => {
    return dispatch => {
        dispatch({ type: 'FETCHING' });
        axios.get('/users')
            .then((res) => {
                dispatch({ 
                    type: 'FETCH_USERS_FULFILLED', 
                    payload: res.data 
                });
            })
            .catch((err) => {
                dispatch({ 
                    type: 'API_CALL_REJECTED', 
                    payload: err 
                });
            });
    };
};

export const openDialog = (dialog, systems, roles) => {
    return dispatch => {
        dispatch({ type: 'SWITCH' });

        dialog === 'role' ? 
            dispatch({ type: 'SET_RENDERLIST', payload: roles }) : 
            dispatch({ type: 'SET_RENDERLIST', payload: systems })

        // axios.get(`/users/${userId}/${dialog}`)
        // .then((res) => {
        //     dispatch({
        //         type: `FETCH_${upperCaseDialog}_DATA`,
        //         payload: {
        //             userId: userId,
        //             currentAccess: res.data,
        //         }
        //     });
        // })
        // .catch((err) => {
        //     dispatch({ 
        //         type: 'API_CALL_REJECTED', 
        //         payload: err 
        //     });
        // });
    };
};

export const closeDialog = () => {
    return dispatch => {
        dispatch({ type: 'SWITCH' });
        dispatch({ type: 'CLEAR_ACCESSDATA' });
        dispatch({ type: 'CLEAR_SEARCH' });
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
    return async dispatch => {
        dispatch({ type: 'FETCHING' });
        dispatch({ type: 'SWITCH' });

        try {
            await axios.post(
                `/users/${accessData.userId}/access`, 
                { systemId: accessData.newAccess });

            let users = await axios.get('/users');

            dispatch({
                type: 'FETCH_USERS_FULFILLED',
                payload: users.data
            }); 
            dispatch({
                type: 'CLEAR_ACCESSDATA'
            });
            dispatch({
                type: 'CLEAR_SEARCH'
            });

        } catch (err) {
            dispatch({ 
                type: 'API_CALL_REJECTED', 
                payload: err 
            });
        }
    };
};

export const removeAccess = (systemId, userId) => {
    return async dispatch => {
        dispatch({ type: 'FETCHING' });

        try {
            await axios.delete(`/users/${userId}/access/${systemId}`);
            let users = await axios.get('/users');
            dispatch({
                type: 'FETCH_USERS_FULFILLED',
                payload: users.data
            });
        } catch (err) {
            dispatch({ 
                type: 'API_CALL_REJECTED', 
                payload: err 
            });
        }
    };
};

export const removeRole = (roleId, userId) => {
    return async dispatch => {
        dispatch({ type: 'FETCHING' });

        try {
            await axios.delete(`/users/${userId}/role/${roleId}`);
            let users = await axios.get('/users');
            dispatch({
                type: 'FETCH_USERS_FULFILLED',
                payload: users.data
            });
        } catch (err) {
            dispatch({
                type: 'API_CALL_REJECTED',
                payload: err
            });
        }
    };
};

export const changeStatus = (userId) => {
    return async dispatch => {
        dispatch({ type: 'FETCHING' });

        try {
            let user = await axios.get(`/users/${userId}`);
            await axios.put(`/users/${userId}`, { status: !user.data.status });

            dispatch({ type: 'CHANGE_STATUS_FULFILLED' });

            let updateUser = await axios.get('/users');

            dispatch({ 
                type: 'FETCH_USERS_FULFILLED', 
                payload: updateUser.data 
            });
        } catch (err) {
            dispatch({ 
                type: 'API_CALL_REJECTED', 
                payload: err 
            });
        }  
    };
};