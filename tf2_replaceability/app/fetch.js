const fetch = require('node-fetch');

const getUsers = async () => {

    //const res = await fetch('https://api.github.com/users/miguelpimentel');
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const user = await res.json();

    console.log(user);

    return res.status;
}

getUsers();


module.exports ={
    getUsers
}
