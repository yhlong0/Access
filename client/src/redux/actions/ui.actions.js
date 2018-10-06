export const SET_LOADER = 'SET_LOADER';
export const SELECT_ITEM = 'SELECT_ITEM';
export const SWITCH_NEW_USER_VIEW = 'SWITCH_NEW_USER_VIEW';
export const SWITCH_MODAL_VIEW = 'SWITCH_MODAL_VIEW';
export const SWITCH_FULL_USER_VIEW = 'SWITCH_FULL_USER_VIEW';

export const setLoader = ({ state, entity }) => ({
    type: `${entity} ${SET_LOADER}`,
    payload: state,
    meta: { entity }
});

export const selectItem = (selected, entity) => {
    return {
        type: `${entity} ${SELECT_ITEM}`,
        payload: selected,
    };
};

export const switchNewUserView = () => {
    return {
        type: SWITCH_NEW_USER_VIEW
    }
}

export const switchFullUsersView = (showAllUsers) => {
    return {
        type: SWITCH_FULL_USER_VIEW,
        payload: !showAllUsers
    }
}

export const switchModalView = (entity) => {
    return {
        type: `${entity} ${SWITCH_MODAL_VIEW}`
    }
}