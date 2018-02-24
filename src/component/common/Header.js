import React from 'react';
import {Link} from 'react-router-dom';
import home from '../../media/home.png';
import search from '../../media/search.png';
import axios from 'axios'

const Header = (props) => {
    return (
        <div className='header'>
            <div>
                <div>
                    <span>Helo</span>
                    <Link to='/dashboard'><img src={home} alt={home}/></Link>
                    <img src={search} alt={search}/>
                </div>
                    <span>{props.headerName}</span>
                <div>
                </div>
                <div>
                    <Link to='/'><span onClick={()=> axios.post('/api/logout')}>Logout</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;