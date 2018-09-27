export const ROLES = '[Roles]';

export const FETCH_ROLES = `${ROLES} FETCH`;
export const SET_ROLES = `${ROLES} SET`;
export const SELECT_ROLE = `${ROLES} SELECT`;
export const CREATE_ROLE = `${ROLES} CREATE`;
export const DELETE_ROLE = `${ROLES} DELETE`;

export const fetchRoles = () => ({
    type: FETCH_ROLES
});

export const setRoles = (data) => ({
    type: SET_ROLES,
    payload: data
});

export const createRole = (role) => ({
    type: CREATE_ROLE,
    payload: role
});

export const deleteRole = (selected) => ({
    type: DELETE_ROLE,
    payload: selected
});
