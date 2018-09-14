// feature name
export const SYSTEMS = '[Systems]';

// action types
export const FETCH_SYSTEMS = `${SYSTEMS} Fetch`;
export const SET_SYSTEMS = `${SYSTEMS} Set`;


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
