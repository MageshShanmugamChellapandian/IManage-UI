import { Component } from 'react'
import { IUser } from '../../utilities/CommonModels';
import '../Admin/UserGrid.css'
import { ConfirmationPopup } from '../uicommon/uievents/commonevents';


type UserGridProps = {
    listofusers: IUser[],
    handleDelete: (id: string) => void,
    confirmModalShow: (show: boolean) => void,
    onSuccessDeletion(IsSuccess: boolean): void
    userToDelete?: string,
}

type UserGridState = {
    listofusers: IUser[],
    DeleteModal: boolean,
    usertoDeleteId: string,
    usertoDeleteName: string,
    confirmModalShow: boolean,
}

const ProfileCardColorArray = {
    "color": ["color1", "color2", "color3", "color4"]
}

class UserGrid extends Component<UserGridProps, UserGridState>{
    constructor(props: UserGridProps) {
        super(props);
        this.state = {
            listofusers: [
                {
                    emailId:"mageshshanmugam.c@gmail.com",
                    fullName:"Magesh Shanmugam",
                    id:"1",
                    isExfactory:false,
                    name:"Magesh Shanmugam",
                    picture:""
                },
                {
                    emailId:"mageshshanmugam.c@gmail.com",
                    fullName:"Magesh Shanmugam",
                    id:"1",
                    isExfactory:false,
                    name:"Magesh Shanmugam",
                    picture:""
                },{
                    emailId:"mageshshanmugam.c@gmail.com",
                    fullName:"Magesh Shanmugam",
                    id:"1",
                    isExfactory:false,
                    name:"Magesh Shanmugam",
                    picture:""
                }
            ],
            DeleteModal: false,
            usertoDeleteId: "",
            usertoDeleteName: "",
            confirmModalShow: false,
        };
    }

    componentDidUpdate(prevProps : UserGridProps) {
        if(!(this.props.listofusers, prevProps.listofusers)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        {
          this.setState({listofusers:this.props.listofusers});
        }
      } 


    handleAccept() {
    }

    handleClose = () => {
        this.setState({ confirmModalShow: false });
    }

    handleDelete = (id: string) => {
        this.setState({confirmModalShow:true,usertoDeleteId:id});
        this.props.confirmModalShow(true)
        this.props.handleDelete(id);
    }

    handleEdit = (id: string) => {
        this.setState({usertoDeleteId:id});
        this.props.handleDelete(id);
    }

    profileCard = (index: any): string => {
        let profilecardspan = document.getElementById("profilecard")! as HTMLSpanElement;
        let selector = index % 4;
        console.log(profilecardspan);
        // profilecardspan.className = ProfileCardColorArray.color[selector];
        return ProfileCardColorArray.color[selector];
    }

    render() {
        return (
            <div className="grid-content">
                <div className="grid-header">
                    <div className="row">
                        <div className="col-md-1 grid-heading "></div>
                        <div className="col-md-2 grid-heading ">Name</div>
                        <div className="col-md-4 grid-heading ">Email Id</div>
                        <div className="col-md-2 grid-heading "></div>
                    </div>
                </div>
                <div className='add-scrollbar'>
                {this.state.listofusers.map((value, i) => {
                    return (
                        <div key={i} className="grid-header">
                            <div className="row">
                                <div data-toggle="tooltip" data-placement="top" title={value.fullName} className="col-md-1 grid-name truncateellipsis"></div>
                                <div className="col-md-2 grid-role font-innercontent-b12r">
                                    {value.fullName !== null ? value.fullName : null}
                                </div>
                                <div data-toggle="tooltip" data-placement="top" title={value.emailId} className="col-md-4 grid-email font-innercontent-b12r truncateellipsis">{value.emailId !== null ? value.emailId : null}</div>
                                <div className="col-md-1 grid-delete"><p data-id={value.id} className="delete-button" onClick={() => this.handleDelete(value.id)} /></div>
                                <div className="col-md-1 grid-edit"><p data-id={value.id} className="edit-button" onClick={() => this.handleEdit(value.id)} /></div>
                            </div>
                        </div>
                    )
                })}
                </div>
                <ConfirmationPopup show={this.state.confirmModalShow}
                    confirmationMessage={"Delete User"}
                    confirmationMessageDetail=""
                    onHandleClose={this.handleClose} onHandleAccept={this.handleAccept} />
                </div>
        )
    }
}

export default UserGrid;