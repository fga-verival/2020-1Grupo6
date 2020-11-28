const axios = require('axios');
 
axios.get('https://api.github.com/users/miguelpimentel')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });