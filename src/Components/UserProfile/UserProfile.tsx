import '../UserProfile/UserProfile.css'
import React, { Component } from 'react';

class UserProfile extends Component {
    constructor(props:any)
    {
        super(props);
    }
    componentDidMount(): void {
        
    }
    render() {
        return(
            <span className='UserProfile'>
                UserProfile
            </span>
        )
    }
  }
  
  export default UserProfile;
