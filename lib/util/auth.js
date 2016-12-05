module.exports = {
  createJenkinsOptions: (url, username, password) =>
         ({
           baseUrl: url,
           headers: {
             "Authorization": `Basic ${new Buffer(`${username}:${password}`).toString('base64')}`
           },
         })

};

