export const USERS = '[Users]';

export const FETCH_USERS = `${USERS} FETCH`;
export const SET_USERS = `${USERS} SET`;

export const fetchUsers = () => ({
    type: FETCH_USERS
});

export const setUsers = ({ users }) => ({
    type: SET_USERS,
    payload: users,
});
