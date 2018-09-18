export const USERS = '[Users]';

export const FETCH_USERS = `${USERS} FETCH`;
export const SET_USERS = `${USERS} SET`;

export const fetchUsers = (query) => ({
    type: FETCH_USERS,
    payload: {
        data: query
    }
});

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: {
        data: users
    }
});
