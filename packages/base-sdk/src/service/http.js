"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRequest = void 0;
const makeRequest = (params = {}) => {
    const { url, method, data, headers } = params;
    return fetch(url, {
        method,
        headers,
        body: data,
    });
};
exports.makeRequest = makeRequest;
//# sourceMappingURL=http.js.map