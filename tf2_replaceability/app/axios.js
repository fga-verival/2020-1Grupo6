import axios from 'axios';
 
const getResponseData = async (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(({ status, data, config }) => {

                if (status == 200) {
                    resolve({status, data, config});
                } else {
                    reject({status});
                }
            })
            .catch(({response}) => {
                reject(response);
            })
    });
}

const postResponseData = async (url, body) => {
    return new Promise((resolve, reject) => {
        axios.post(url, body)
            .then(({status, data, config}) => {
                if (status == 201) {
                    resolve({status, data, config});
                } else {
                    reject({status});
                }
            }).catch(({response}) => {
                reject(response);
            });
    });
}

const putResponseData = async (url, body) => {
    return new Promise((resolve, reject) => {
        axios.put(url, body)
            .then(({status, data, config}) => {
                if (status == 200) {
                    resolve({status, data, config});
                } else {
                    reject({status});
                }
            }).catch(({response}) => {
                reject(response);
            });
    });
}

const patchResponseData = async (url, body) => {
    return new Promise((resolve, reject) => {
        axios.patch(url, body)
            .then(({status, data, config}) => {
                if (status == 200) {
                    resolve({status, data, config});
                } else {
                    reject({status});
                }
            }).catch(({response}) => {
                reject(response);
            });
    });
}

const deleteResponseData = async (url) => {
    return new Promise((resolve, reject) => {
        axios.delete(url)
            .then(({status, data}) => {
                if (status == 200) {
                    resolve({status, data});
                } else {
                    reject({status});
                }
            }).catch(({response}) => {
                reject(response);
            });
    });
}

export {
    getResponseData,
    putResponseData,
    patchResponseData,
    postResponseData,
    deleteResponseData
};
