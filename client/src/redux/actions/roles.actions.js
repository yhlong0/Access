import * as actions from '../constants/constants';

export const setRoles = (payload) => ({
    type: actions.SET_ROLES,
    payload
});

export const fetchRoles = () => ({
    type: actions.API,
    payload: {
        url: '/roles',
        success: setRoles,
    }
});

export const selectRole = (selected) => {
    return {
        type: 'SELECT_ROLE',
        payload: selected,
    };
};
