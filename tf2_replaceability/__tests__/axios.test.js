const axios = require('../app/axios');
const postMock =  require('../mock/post_1.json');
const bodyMock =  require('../mock/body.json');

describe('Test HTTP GET', () => {
    test('Test get data', async () => {
        expect.assertions(1);
        const sut = await axios.getResponseData(1);
        expect(sut).toMatchObject(postMock);
    })
})

describe('Test HTTP POST', () => {
    test('Test post data', async () => {
        expect.assertions(1);
        const sut = await axios.postResponseData(bodyMock);
        expect(sut).toMatchObject(bodyMock);
    })
})

describe('Test HTTP PUT', () => {
    test('Test put data', async () => {
        expect.assertions(1);
        const sut = await axios.putResponseData(bodyMock);
        expect(sut).toMatchObject(bodyMock);
    })
})

describe('Test HTTP PATCH', () => {
    test('Test patch data', async () => {
        expect.assertions(1);
        const sut = await axios.patchResponseData(bodyMock);
        expect(sut).toMatchObject(bodyMock);
    })
})

describe('Test HTTP DELETE', () => {
    test('Test delete data', async () => {
        expect.assertions(1);
        const sut = await axios.deleteResponseData(1);
        expect(sut).toMatchObject({});
    })
})

describe('Test HTTP Status Code', () => {
    test('Test delete data', async () => {
        expect.assertions(1);
        const sut = await axios.getStatusCode();
        expect(sut).toBe(200);
    })
})

describe('Test HTTP Method', () => {
    test('Test delete data', async () => {
        expect.assertions(1);
        const sut = await axios.getHTTPMethod();
        expect(sut).toBe('get');
    })
})

describe('Test HTTP URL', () => {
    test('Test delete data', async () => {
        expect.assertions(1);
        const sut = await axios.getResponseUrl();
        expect(sut).toBe('https://jsonplaceholder.typicode.com/users');
    })
})