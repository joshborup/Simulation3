const app = require('express')();
const axios = require('axios');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const checkUserStatus = require('./middlewares/checkUserStatus');
require('dotenv').config();

app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        //two weeks
        maxAge: 60 * 60 * 24 * 14 * 1000
    }
}))

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('connected to database');
    app.set('db', db);
})

app.get('/auth/callback', authController);
app.get('/api/user-data', checkUserStatus, userController.getUser);

app.post('/api/logout', userController.logout);
app.post('/api/user/update', userController.update);

const port = process.env.SERVER_PORT || 4000;
app.listen(port, ()=> console.log(`running on port ${port}`));
