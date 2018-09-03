import axios from 'axios';

export function createSystem(system) {
    return dispatch => {
        dispatch({type: 'FETCHING'});
        axios.post('/systems', system)
             .then((res) => {
                axios.get('/systems')
                     .then((res) => {
                        dispatch({type: 'FETCH_SYSTEMS_FULFILLED', payload: res.data})
                     })
             })
             .catch((err) => {
                 dispatch({type: 'CREATE_SYSTEM_REJECTED', payload: err})
            });
    };
};

export const fetchSystems = () => {
    return dispatch => {
        dispatch({type: 'FETCHING'});
        axios.get('/systems')
             .then((res) => {
                 dispatch({type: 'FETCH_SYSTEMS_FULFILLED', payload: res.data})
             })
             .catch((err) => {
                 dispatch({type: 'FETCH_SYSTEMS_REJECTED', payload: err})
             });
    };
};

export const deleteSystem = (selected) => {
    return dispatch => {
        dispatch({type: 'FETCHING'});
        const arrayLength = selected.length;
        selected.map((id, index) => {
            axios.delete('/systems/' + id)
            .then((res) => {
                //Last one in the array.
                if(arrayLength === index + 1) {
                    dispatch({type: 'CLEAR_SELECTED', payload: []}); 
                    axios.get('/systems')
                    .then((res) => {
                       dispatch({type: 'FETCH_SYSTEMS_FULFILLED', payload: res.data})
                    });
                }
            })
            .catch((err) => {
               dispatch({type: 'DELETE_SYSTEM_REJECTED', payload: err})
           });
        });
    };
};

export const selectSystem = (selected) => {
    return {
        type: 'SELECT_SYSTEM',
        payload: selected,
    };
};

// export function fetchSystem() {
//     return {
//         type: "FETCH_SYSTEM",
//         payload: new Promise(function(resolve, reject){
//             resolve([{
//                 _id: '11111111',
//                 name: 'Customer Support',
//                 description: 'Customer support level 1',
//             }])
//         }),
//     }
// };