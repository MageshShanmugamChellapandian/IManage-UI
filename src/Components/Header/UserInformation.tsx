import React, { Component } from 'react'
import '../Header/UserInformation.css'


  interface UserState{
    show:boolean,
    onHide: ()=>void,
  }
class UserInformation extends Component<any,UserState>
{
    constructor(props:any)
    {
        super(props)
        this.state={
            show:false,
            onHide:this.handle.bind(this)
          };
    }
    handle(){
        this.setState({show:false})
      }
      openUserProfileDraw(){
        this.state.show?this.setState({show:false}):this.setState({show:true});   
      }
    render(): React.ReactNode {
        return(
            <div className="header-right">
            <div className="profilename">
              <div id="profilenamecard" className="nav-link" role="button" onClick={()=>this.openUserProfileDraw()}>
              <span data-profilecard-header={this.props.loggedInUser.firstName!==null?this.props.loggedInUser.firstName.substr(0, 1).toUpperCase()+this.props.loggedInUser.lastName.substr(0, 1).toUpperCase():""}  className="headertext profilenamecard "></span>
              </div>
              {/* {this.state.show?
              <UserProfileDraw  loggedInUser={this.props.loggedInUser} show={this.state.show} onHide={()=>this.handle()}></UserProfileDraw>:null} */}
            </div>
          </div>
        )
    }
}
export default UserInformation;