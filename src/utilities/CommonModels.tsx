export type ILoggedInUser =
{
    email: string,
    firstName: string,
    lastName: string
    displayName: string
}

export interface ILoggedInUserDetails
{
    loggedInUser:ILoggedInUser,
    history:any
}

export interface MenuModel {
    id:string,
    name: string;
    defaultActive: boolean;
    iconName: string;
    linkedTo: string;
}

export interface IUser {
    id: string,
    name: string,
    fullName: string,
    emailId: string,
    picture: string,
    isExfactory: boolean
}

export interface IModalInterfaceProps {
    handleClose(): void,
    handleAccept(): void,
    showModal: boolean,
}