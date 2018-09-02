import axios from 'axios';

export function createRole(role) {
    return dispatch => {
        axios.post('/roles', role)
             .then((res) => {
                axios.get('/roles')
                     .then((res) => {
                        dispatch({type: 'FETCH_ROLES_FULFILLED', payload: res.data})
                     })
             })
             .catch((err) => {
                 dispatch({type: 'CREATE_ROLE_REJECTED', payload: err})
            });
    };
};

export const fetchRoles = () => {
    return dispatch => {
        axios.get('/roles')
             .then((res) => {
                 dispatch({type: 'FETCH_ROLES_FULFILLED', payload: res.data})
             })
             .catch((err) => {
                 dispatch({type: 'FETCH_ROLES_REJECTED', payload: err})
             });
    };
};

export const deleteRole = (id) => {
    return dispatch => {
        axios.delete('/roles/' + id)
             .then((res) => {
                axios.get('/roles')
                .then((res) => {
                   dispatch({type: 'FETCH_ROLES_FULFILLED', payload: res.data})
                })
             })
             .catch((err) => {
                dispatch({type: 'DELETE_ROLE_REJECTED', payload: err})
            });
    };
};

export const selectRole = (selected) => {
    return {
        type: 'SELECT_ROLE',
        payload: selected,
    }
};

// export function fetchRole() {
//     return {
//         type: "FETCH_ROLE",
//         payload: new Promise(function(resolve, reject){
//             resolve([{
//                 _id: '11111111',
//                 name: 'Customer Support',
//                 description: 'Customer support level 1',
//             }])
//         }),
//     }
// };