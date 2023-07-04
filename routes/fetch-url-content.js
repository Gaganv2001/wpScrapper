const axios = require('axios')


//if the URL is valid return its contents else throw exception
exports.fetchUrlContent = url => {
  return axios.get(url)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
}