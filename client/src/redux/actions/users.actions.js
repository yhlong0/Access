export const USERS = '[Users]';

export const FETCH_USERS = `${USERS} FETCH`;
export const SET_USERS = `${USERS} SET`;
export const SELECT_USERS = `${USERS} SELECT`;
export const CREATE_USER = `${USERS} CREATE`;
export const DELETE_USER = `${USERS} DELETE`;
export const CHANGE_STATUS = `${USERS} CHANGE STATUS`;
export const REMOVE_ROLE = `${USERS} REMOVE ROLE`;

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

export const changeStatus = (userId, userStatus, showAllUsers) => ({
    type: CHANGE_STATUS,
    payload: userId,
    status: userStatus
});

export const removeRole = (roleId, userId) => ({
    type: REMOVE_ROLE,
    roleId: roleId,
    userId: userId
});