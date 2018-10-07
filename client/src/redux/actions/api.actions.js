export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

export const apiRequest = ({ body, method, url, entity, showAll }) => ({
    type: `${entity} ${API_REQUEST}`,
    payload: body,
    meta: { body, method, url, entity, showAll }
});

export const apiSuccess = (response, {entity, method, body, showAll}) => ({
    type: `${entity} ${API_SUCCESS}`,
    payload: response,
    meta: { entity, method, body, showAll }
});

export const apiError = ({ error, entity }) => ({
    type: `${entity} ${API_ERROR}`,
    payload: error,
    meta: { entity }
})