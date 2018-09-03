import axios from 'axios';

export function createRole(role) {
    return dispatch => {
        dispatch({type: 'FETCHING'});
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
        dispatch({type: 'FETCHING'});
        axios.get('/roles')
             .then((res) => {
                 dispatch({type: 'FETCH_ROLES_FULFILLED', payload: res.data})
             })
             .catch((err) => {
                 dispatch({type: 'FETCH_ROLES_REJECTED', payload: err})
             });
    };
};

export const deleteRole = (selected) => {
    return dispatch => {
        dispatch({type: 'FETCHING'});
        const arrayLength = selected.length;
        selected.map((id, index) => {
            axios.delete('/roles/' + id)
            .then((res) => {
                //Last one in the array.
                if(arrayLength === index + 1) {
                    dispatch({type: 'CLEAR_SELECTED', payload: []}); 
                    axios.get('/roles')
                    .then((res) => {
                       dispatch({type: 'FETCH_ROLES_FULFILLED', payload: res.data})
                    });
                }
            })
            .catch((err) => {
               dispatch({type: 'DELETE_ROLE_REJECTED', payload: err})
           });
        });
    };
};

export const selectRole = (selected) => {
    return {
        type: 'SELECT_ROLE',
        payload: selected,
    };
};

// export const fetching = () => {
//     return {
//         type: 'FETCHING',
//         payload: true,
//     };
// };

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