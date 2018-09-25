export const USERS = '[Users]';

export const FETCH_USERS = `${USERS} FETCH`;
export const SET_USERS = `${USERS} SET`;
export const SELECT_USERS = `${USERS} SELECT`;
export const CREATE_USER = `${USERS} CREATE`;
export const DELETE_USER = `${USERS} DELETE`;

export const fetchUsers = () => ({
    type: FETCH_USERS
});

export const setUsers = (data) => ({
    type: SET_USERS,
    payload: data,
});

export const createUser = (user) => ({
    type: CREATE_USER,
    payload: user
});

export const deleteUser = (selected) => ({
    type: DELETE_USER,
    payload: selected
});