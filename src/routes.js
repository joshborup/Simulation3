import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import Login from './component/Login/Login';
import DashboardContainer from './component/dashboard/DashboardContainer';
import ProfileContainer from './component/profile/ProfileContainer';

export default <Fragment>
                <Route exact path='/' component={Login}/>
                <Route path='/dashboard' component={DashboardContainer}/>
                <Route path='/profile' component={ProfileContainer}/>
            </Fragment>
