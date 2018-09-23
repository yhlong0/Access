export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

export const apiRequest = ({ body, method, url, entity }) => ({
    type: `${entity} ${API_REQUEST}`,
    payload: body,
    meta: { method, url, entity }
});

export const apiSuccess = (test, {entity}) => ({
    type: `${entity} ${API_SUCCESS}`,
    payload: test,
    meta: {entity}
});

export const apiError = ({ error, entity }) => ({
    type: `${entity} ${API_ERROR}`,
    payload: error,
    meta: {entity}
})