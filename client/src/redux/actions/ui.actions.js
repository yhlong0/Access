export const SET_LOADER = 'SET_LOADER';

export const setLoader = ({ state, entity }) => ({
    type: `${entity} ${SET_LOADER}`,
    payload: state,
    meta: { entity }
});