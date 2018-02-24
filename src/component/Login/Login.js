import React, { Component } from 'react';
import logo from '../../media/logo.png';
import {Link} from 'react-router-dom';

import './login.css'

const Login = () =>  {
    function login(){
        const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback');
        window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}`;
    }
    
        return (
            <div className='login'>
                <div>
                    <img src={logo} alt={logo}/>
                    <h1>Helo</h1>
                    <button onClick={login}>
                        Login / Register
                    </button>
                </div>
            </div>
        );
    
}

export default Login;