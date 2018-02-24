import React from 'react';
import test from '../../media/test.png'
import {Link} from 'react-router-dom';
import '../dashboard/dashboard.css';

const DashBoard = (props) => {
    return (
        <div className='dashboard'>
            <div>
                <div className='top-row-dashboard'>
                    <div className='profile-info'>
                        <img src={test}/>
                        <div>
                        <span>{props.firstName}</span>
                        <span>{props.lastName}</span>
                            <Link to='/profile'><button>Edit Profile</button></Link>
                        </div>
                    </div>
                    <div className='profile-description'>
                        <span>“Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</span>
                        
                    </div>
                </div>
                <div className='recommendations'>
                    <div>
                        <span>Recommended Friends</span>
                        <div>
                            sort by:
                            <select>
                                <option value='first name'>First Name</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <span>No Recommendations</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashBoard;