const router = require('express').Router();
const jsonParser = require('body-parser').json();
const User = require('../models/user');
const token = require('../auth/token');
const request = require('request');
// const qs = require('qs');

router.get('/github', (req, res) => {
    res.send('redirecting...');    
});

router.post('/github', jsonParser, (req, res, next) => {
    console.log('headers', req.headers);
    var accessTokenUrl = 'https://github.com/login/oauth/access_token';
    var params = {
        code: req.body.code,
        client_id: process.env.GITHUB_KEY,
        client_secret: process.env.GITHUB_SECRET
    };
    console.log('body', req.body);

    // Step 1. Exchange authorization code for access token.
    request.get({ url: accessTokenUrl, qs: params }, function(err /*, response, accessToken*/) {
        if (err) return next(err);
        // accessToken = qs.parse(accessToken);
        User.findOne()
            .then(user => token.sign(user))
            .then(token => res.send({ token }));
    });
});

module.exports = router;