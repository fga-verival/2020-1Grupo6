const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com';
 
// Get HTTP Success

const getResponseData = async (postNumber) => {
    const res = await axios.get(`${url}/posts/${postNumber}`);
    return res.data;
}

const putResponseData = async (body) => {
    const res = await axios.put(`${url}/posts/1`, body);
    return res.data;
}

const postResponseData = async (body) => {
    const res = await axios.post(`${url}/posts`, body);
    return res.data;
}

const patchResponseData = async (body) => {
    const res = await axios.patch(`${url}/posts/1`, body);
    return res.data;
}

const deleteResponseData = async (postNumber) => {
    const res = await axios.delete(`${url}/posts/${postNumber}`);
    console.log(res.data);
    return res.data;
}

// Get HTTP Failure

const getResponseDataFailure = async () => {
    const res = await axios.get(`${url}/posts/101`);
    return res.data;
}

const putResponseDataFailure = async () => {
    const res = await axios.put(`${url}/posts/101`, body);
    return res.data;
}

const postResponseDataFailure = async () => {
    const res = await axios.post(`${url}/posts/101`);
    return res.data;
}

const patchResponseDataFailure = async () => {
    const res = await axios.patch(`${url}/posts/101`, body);
    return res.data;
}

const deleteResponseDataFailure = async () => {
    const res = await axios.delete(`${url}/posts/101`, body);
    return res.data;
}

// Get HTTP content

const getStatusCode = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.status;
}

const getHTTPMethod = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.config.method;
}

const getHeaders = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.config.headers;
}

const getResponseUrl = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.config.url;
}

deleteResponseData(1);

module.exports = {
    getStatusCode,
    getHTTPMethod,
    getHeaders,
    getResponseUrl,
    getResponseData,
    putResponseData,
    patchResponseData,
    postResponseData,
    deleteResponseData
}
