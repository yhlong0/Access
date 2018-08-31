import axios from 'axios';

export function fetchRoles() {
    return {
        type: "FETCH_ROLES_FULFILLED",
        payload: {
            name: 'Customer Support',
            description: 'Customer support level 1',
        }
    };
};

export function fetchRole() {
    return function(dispatch) {
        axios.get('/roles')
            .then((res) => {
                dispatch({type: 'FETCH_ROLE_FULFILLED', payload: res.data})
            })
            .catch((err) => {
                dispatch({type: 'FETCH_ROLE_REJECTED', payload: err})
            });
    };
};