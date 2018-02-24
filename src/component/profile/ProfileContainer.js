import React, { Component } from 'react';
import Header from '../common/Header';
import Profile from './Profile';
import {connect} from 'react-redux';
import {updateFirst, updateLast} from '../../redux/reducer';
import axios from 'axios';


class ProfileContainer extends Component {
    constructor(props){
        super()
        this.state = {
            header: 'Profile',
            monthNames: ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"],
        }
        this.updateUserName = this.updateUserName.bind(this)
    }

    updateUserName(first, last){
        axios.post('/api/user/update', {firstName: first, lastName: last})
    }

    render() {
        return (
            <div className='profile'>
                <Header headerName={this.state.header}/>
                <Profile 
                firstName={this.props.user.firstName}
                lastName={this.props.user.lastName}
                months={this.state.monthNames}
                updateFirst={this.props.updateFirst}
                updateLast={this.props.updateLast}
                updateFullName={this.updateUserName}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    updateFirst: updateFirst,
    updateLast: updateLast
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)