import React from 'react';
import test from '../../media/test.png'
import './profile.css';

const Profile = (props) => {

    const monthList = props.months.map((e,i)=>{
        return (
            <option key={i} value={e}>{e}</option>
        )
    })

   

    return (
        <div className='profile-display'>
            <div>
                <div>
                    <img src={test}/>
                    <div className='nameContainer'>
                        <div>{props.firstName}</div>
                        <div>{props.lastName}</div>
                    </div>
                </div>
                <div>
                    <button onClick={()=> props.updateFullName(props.firstName, props.lastName)}>Update</button>
                    <button>Cancel</button>
                </div>
            </div>
            <div className='update-container'>
                <div>
                    <div>
                        First Name:
                        <input className='firstname' onChange={(e)=>props.updateFirst(e.target.value)} value={props.firstName}/>
                    </div>

                    <div>
                        Last Name:
                        <input className='lastName' onChange={(e)=>props.updateLast(e.target.value)} value={props.lastName}/>
                    </div>

                    <div>
                        Gender:
                        <select>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                    </div>

                    <div>
                        Hair Color:
                        <select>
                            <option value='Brown'>Brown</option>
                            <option value='Black'>Black</option>
                            <option value='Brown'>Blonde</option>
                            <option value='Black'>Red</option>
                        </select>
                    </div>

                    <div>
                        Eye Color:
                        <select>
                            <option value='Brown'>Brown</option>
                            <option value='Black'>Black</option>
                            <option value='Brown'>Blue</option>
                            <option value='Black'>Green</option>
                        </select>
                    </div>
                    
                </div>
                <div>
                    
                <div>
                        Hobby:
                        <select>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                    </div>

                    <div>
                        Birthday Day:
                        <select>
                            <option value='Brown'>Brown</option>
                            <option value='Black'>Black</option>
                            <option value='Brown'>Blonde</option>
                            <option value='Black'>Red</option>
                        </select>
                    </div>

                    <div>
                        Birthday Month:
                        <select>
                            {monthList};
                        </select>
                    </div>

                    <div>
                        Birthday Year:
                        <select>
                            <option value='Brown'>Brown</option>
                            <option value='Black'>Black</option>
                            <option value='Brown'>Blue</option>
                            <option value='Black'>Green</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile