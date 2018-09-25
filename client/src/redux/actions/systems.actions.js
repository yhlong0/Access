// feature name
export const SYSTEMS = '[Systems]';

// action types
export const FETCH_SYSTEMS = `${SYSTEMS} FETCH`;
export const SET_SYSTEMS = `${SYSTEMS} SET`;
export const SELECT_SYSTEM = `${SYSTEMS} SELECT`;
export const CREATE_SYSTEM = `${SYSTEMS} CREATE`;
export const DELETE_SYSTEM = `${SYSTEMS} DELETE`;

// action creators
export const fetchSystems = () => ({
    type: FETCH_SYSTEMS
});

export const setSystems = (data) => ({
    type: SET_SYSTEMS,
    payload: data,
});

export const createSystem = (system) => ({
    type: CREATE_SYSTEM,
    payload: system
});

export const deleteSystem = (selected) => ({
    type: DELETE_SYSTEM,
    payload: selected
});

