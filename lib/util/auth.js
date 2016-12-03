module.exports = {
    createJenkinsOptions: (url, username, password) => {
        return {
            baseUrl: url,
            headers: { 
                "Authorization": "Basic " + new Buffer(username + ":" + password).toString('base64') 
            }, 
        };
    }
}

