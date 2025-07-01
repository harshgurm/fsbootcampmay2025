const jwt = require('jsonwebtoken');

function verifyUser(request, response, next){
    const token = request.header('Authorization');
    console.log(token);
    if(!token) {
        return response.status(400).json({message: 'Please provide a token'});
    }

    try {
        const verified_token = jwt.verify(token, 'thisIsMyEncryptionKey');
        console.log(verified_token);
        next();
    } catch(errors){
        return response.json(errors);
    }
}

module.exports = verifyUser;