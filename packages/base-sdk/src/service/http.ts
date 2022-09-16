export const makeRequest = (params: any = {}) => {
    const { url, method, data, headers } = params;
    return fetch(url, {
        method,
        headers,
        body: data,
    });
}