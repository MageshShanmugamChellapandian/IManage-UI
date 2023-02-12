import '../Header/Header.css'
import React, { Component } from 'react'
import UserInformation from './UserInformation';
import { ILoggedInUserDetails } from '../../utilities/CommonModels';


class Header extends Component<ILoggedInUserDetails>{
    constructor(props: ILoggedInUserDetails) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div id="navHeader" className="navbar navbarposition navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                <div className="container containeroverload">
                    <div className="navbar-header pull-left">
                        <a title="EBTech" href="/" className="productlogo navbar-brand product-logo" />
                    </div>
                    <UserInformation {...this.props} ></UserInformation>
                </div>
            </div>
        )
    }
}

export default Header;