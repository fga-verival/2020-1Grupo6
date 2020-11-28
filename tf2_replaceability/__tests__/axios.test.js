const axios = require('../app/axios');
const postMock = require('../mock/post_1.json');
const postBodyMock = require('../mock/post_body.json');

const url = 'https://jsonplaceholder.typicode.com';

describe('Test HTTP GET', () => {
    test('Test get data', async (done) => {
        axios.getResponseData(`${url}/posts/1`).then(({status, data, config}) => {
            expect(status).toBe(200);
            expect(data).toMatchObject(postMock);
            expect(config.url).toBe('https://jsonplaceholder.typicode.com/posts/1');
            done();
        });
    });

    test('Test should not return data from post id greater than last post', async (done) => {
        axios.getResponseData(`${url}/posts/101`).catch(({status}) => {
            expect(status).toBe(404);
            done();
        });
    });

    test('Test should not return data from invalid post id', async (done) => {
        axios.getResponseData(`${url}/posts/-1`).catch(({status}) => {
            expect(status).toBe(404);
            done();
        });
    });
});

describe('Test HTTP POST', () => {
    test('Test post data', async (done) => {
        axios.postResponseData(`${url}/posts`, postBodyMock).then(({status, data, config}) => {
            expect(status).toBe(201);
            expect(data).toMatchObject(postBodyMock);
            expect(config.url).toBe('https://jsonplaceholder.typicode.com/posts');
            done();
        });
    });
});

describe('Test HTTP PUT', () => {
    test('Test put data', async (done) => {
        const postId = 1;
        const updatedPost = JSON.parse(JSON.stringify(postBodyMock));

        updatedPost.title = "updated title";
        updatedPost.id = postId;

        axios.putResponseData(`${url}/posts/${postId}`, updatedPost).then(({ status, data, config }) => {
            expect(status).toBe(200);
            expect(data).toMatchObject(updatedPost);
            expect(config.url).toBe('https://jsonplaceholder.typicode.com/posts/1');
            done();
        });
    });

    test('Test put should not update data of post id greater than last post', async (done) => {
        const postId = 101;
        const updatedPost = JSON.parse(JSON.stringify(postBodyMock));

        updatedPost.title = "updated title";
        updatedPost.id = postId;

        updatedPost.id = postId;

        axios.putResponseData(`${url}/posts/${postId}`, updatedPost).catch(({ status }) => {
            expect(status).toBe(500);
            done();
        });
    });


    test('Test put should not update data of invalid post id', async (done) => {
        const postId = -1;
        const updatedPost = JSON.parse(JSON.stringify(postBodyMock));

        updatedPost.title = "updated title";
        updatedPost.id = postId;

        axios.putResponseData(`${url}/posts/${postId}`, updatedPost).catch(({ status }) => {
            expect(status).toBe(500);
            done();
        });
    });
});

describe('Test HTTP PATCH', () => {
    test('Test patch data', async (done) => {
        const postId = 1;
        const updatedPost = JSON.parse(JSON.stringify(postBodyMock));

        updatedPost.title = "updated title";
        updatedPost.id = postId;

        axios.patchResponseData(`${url}/posts/${postId}`, updatedPost).then(({ status, data, config }) => {
            expect(status).toBe(200);
            expect(data).toMatchObject(updatedPost);
            expect(config.url).toBe('https://jsonplaceholder.typicode.com/posts/1');
            done();
        });
    });
});

describe('Test HTTP DELETE', () => {
    test('Test delete data', async (done) => {

        axios.deleteResponseData(`${url}/posts/1`).then(({status, data}) => {
            expect(status).toBe(200);
            expect(data).toMatchObject({});
            done();
        });
    });
});
