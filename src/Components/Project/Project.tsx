import React, { Component } from 'react'
import { ILoggedInUser } from '../../utilities/CommonModels';

class Project extends Component<ILoggedInUser>{

    constructor(props: ILoggedInUser) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="appChild">
                <div className='content'>Create new Project</div>
            </div>
        )
    }
}

export default Project;