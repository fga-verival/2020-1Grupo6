const api = require('./fetch');

class Adapter {
    async get(url) {
        return api.getResponseData(url);
    }

    async post(url, body) {
        return api.postResponseData(url, body);
    }

    async put (url, body) {
        return api.putResponseData(url, body);
    }

    async patch(url, body) {
        return api.patchResponseData(url, body);
    }

    async delete(url) {
        return api.deleteResponseData(url);
    }
}