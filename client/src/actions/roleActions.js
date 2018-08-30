export function fetchRoles() {
    return {
        type: "FETCH_ROLES_FULFILLED",
        payload: {
            name: 'Customer Support',
            description: 'Customer support level 1',
        }
    };
};