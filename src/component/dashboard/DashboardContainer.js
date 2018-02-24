import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Header from '../common/Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {fetchUserData} from '../../redux/reducer';
import DashBoard from './Dashboard';

class DashboardContainer extends Component {
    constructor(props){
        super(props)
        this.state= {
            header:'Dashboard',
            user: null,
            recommended: null
        }
    }
    componentDidMount(){
        axios.get(`/api/user-data`).then(response => {
            console.log(response.data)
            this.setState({
                user: response.data
            })
            this.props.getUserData(response.data);
        })
    }
    render() {
        
        return (
            <div>
                <Header headerName={this.state.header}/>
                {this.props.user ?
                    <Dashboard 
                    firstName={this.props.user.firstName}
                    lastName={this.props.user.lastName}
                    />: 'loading'
                }
                
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
    getUserData: fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)