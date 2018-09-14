// feature name
export const SYSTEMS = '[Systems]';

// action types
export const FETCH_SYSTEMS = `${SYSTEMS} FETCH`;
export const SET_SYSTEMS = `${SYSTEMS} SET`;

// action creators
export const fetchSystems = (query) => ({
    type: FETCH_SYSTEMS,
    payload: {
        data: query
    }
});

export const setSystems = (systems) => ({
    type: SET_SYSTEMS,
    payload: {
        data: systems
    }
});
