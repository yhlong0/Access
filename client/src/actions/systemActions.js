import axios from 'axios';

export function createSystem(system) {
    return async dispatch => {
        dispatch({type: 'FETCHING'});
        try {
            await axios.post('/systems', system);
            let systems = await axios.get('/systems')
            dispatch({
                type: 'FETCH_SYSTEMS_FULFILLED', 
                payload: systems.data
            })
        } catch (err) {
            dispatch({
                type: 'CREATE_SYSTEM_REJECTED', 
                payload: err
            });
        }
    };
};

export const fetchSystems = () => {
    return dispatch => {
        dispatch({type: 'FETCHING'});
        axios.get('/systems')
             .then((res) => {
                dispatch({
                     type: 'FETCH_SYSTEMS_FULFILLED', 
                     payload: res.data
                });
             })
             .catch((err) => {
                dispatch({
                     type: 'FETCH_SYSTEMS_REJECTED', 
                     payload: err
                });
             });
    };
};

export const deleteSystem = (selected) => {
    return async dispatch => {
        dispatch({type: 'FETCHING'});
        try {
            const promises = selected.map(async id => {
                await axios.delete('/systems/' + id);
            });
    
            await Promise.all(promises);
    
            dispatch({
                type: 'CLEAR_SELECTED', 
                payload: []
            }); 
    
            let systems = await axios.get('/systems');

            dispatch({
                type: 'FETCH_SYSTEMS_FULFILLED', 
                payload: systems.data
            });
        } catch (err) {
            dispatch({
                type: 'FETCH_SYSTEMS_REJECTED', 
                payload: err
            });
        }

    };
};

export const selectSystem = (selected) => {
    return {
        type: 'SELECT_SYSTEM',
        payload: selected,
    };
};

