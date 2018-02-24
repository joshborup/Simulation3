const axios = require('axios');

module.exports = (req, res) => {
    const authorizationCode = req.query.code;
    axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, {
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code: authorizationCode,
        grant_type:'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }).then(accessTokenResponse => {
        return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessTokenResponse.data.access_token}`).then(userInfoResponse => {
            const userInfo = userInfoResponse.data;
            
            req.app.get('db').get_user_authid(userInfo.sub).then(users => {
                console.log(users[0].name);
                if(users.length){
                    firstName = users[0].name.split(' ').shift();
                    lastName = users[0].name.split(' ').pop();
                    const user = {
                        firstName: firstName,
                        lastName: lastName,
                        id: userInfo.sub,
                        email: userInfo.email
                    }
                req.session.user = user;
                console.log(req.session.user)
                res.redirect('/dashboard')
                }else{
                    req.app.get('db').create_user([userInfo.sub, userInfo.name, userInfo.email]).then(newUser => {
                        console.log(newUser);
                        firstName = newUser[0].name.split(' ').shift();
                        lastName = newUser[0].name.split(' ').pop();
                        const user = {
                            firstName: firstName,
                            lastName: lastName,
                            id: newUser[0].sub,
                            email: newUser[0].email
                        }
                        req.session.user = user;
                        console.log(req.session.user)
                        res.redirect('/dashboard');
                    })
                }
            }).catch(error => {console.log('findingUser',error)})



        }).catch(error => {console.log('authtoken error',error)})
    }).catch(error => {
        console.log('error:', error);
    })
}