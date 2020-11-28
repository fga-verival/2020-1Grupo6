const fetch = require('../app/fetch');

describe('Fetch Lib', () => {
    test('get users', async () => {
        expect.assertions(1);
        const ans = await fetch.getUsers();
        console.log(ans);

        expect(ans).toBe(200);
    })
})