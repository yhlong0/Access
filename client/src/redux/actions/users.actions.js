export const USERS = '[Users]';

export const CHANGE_STATUS = `${USERS} CHANGE STATUS`;
export const CREATE_USER = `${USERS} CREATE`;
export const DELETE_USER = `${USERS} DELETE`;
export const FETCH_USERS = `${USERS} FETCH`;
export const OPEN_DIALOG = `${USERS} OPEN DIALOG`;
export const REMOVE_ACCESS = `${USERS} REMOVE ACCESS`;
export const REMOVE_ROLE = `${USERS} REMOVE ROLE`;
export const SET_USERS = `${USERS} SET`;
export const SELECT_USERS = `${USERS} SELECT`;

export const fetchUsers = () => ({
    type: FETCH_USERS
});

export const deleteUser = (userId) => ({
    type: DELETE_USER,
    payload: userId
});

export const setUsers = (data) => ({
    type: SET_USERS,
    payload: data,
});

export const createUser = (user) => ({
    type: CREATE_USER,
    payload: user
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

export const removeAccess = (systemId, userId) => ({
    type: REMOVE_ACCESS,
    systemId: systemId,
    userId: userId
});

export const openDialog = (userId, dialog, systems, roles) => ({
    type: OPEN_DIALOG,
    userId: userId,
    dialog: dialog,
    systems: systems,
    roles: roles
});