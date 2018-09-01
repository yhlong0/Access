import axios from 'axios';

export function fetchRole() {
    return {
        type: "FETCH_ROLES_FULFILLED",
        payload: {
            name: 'Customer Support',
            description: 'Customer support level 1',
        }
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