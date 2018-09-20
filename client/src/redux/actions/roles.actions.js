import * as actions from '../constants/constants';

export const setRoles = (payload) => ({
    type: actions.SET_ROLES,
    payload
});

export const fetchRoles = () => ({
    type: actions.API,
    payload: {
        url: '/roles',
        success: setRoles
    }
});
