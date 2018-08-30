export default function userReducer(state = {}, action) {
    switch(action.type) {
        case 'CREATE_USER':
            return {
                ...state, 
                lastname: action.lastname,
                firstname: action.firstname 
            };
        default: 
            return state;
    }
};