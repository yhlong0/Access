export const USERS = '[Users]';

export const FETCH_USERS = `${USERS} Fetch`;
export const SET_USERS = `${USERS} Set`;

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
