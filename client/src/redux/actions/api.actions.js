export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

export const apiRequest = ({ body, method, url, entity }) => ({
    type: `${entity} ${API_REQUEST}`,
    payload: body,
    meta: { method, url, entity, body }
});

export const apiSuccess = (response, {entity, method, body}) => ({
    type: `${entity} ${API_SUCCESS}`,
    payload: response,
    meta: {entity, method, body}
});

export const apiError = ({ error, entity }) => ({
    type: `${entity} ${API_ERROR}`,
    payload: error,
    meta: {entity}
})