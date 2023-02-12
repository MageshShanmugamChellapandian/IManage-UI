import '../Menu/VerticalMenu.css'
import React, { Component } from 'react';

interface MenuProps {
    key:number,
    value:{ name:string;
        //classname:string;
        defaultActive:boolean;
        iconName: string;
        //highlightedIconFileName: string;
        linkedTo: string;
    },
    onMenuChange: any,
    isProjectPage:boolean,
    history:any,
} 

class VerticalMenu extends Component<MenuProps> {
    constructor(props: MenuProps) {
        super(props);
    }

    componentDidMount(): void {

    }

    onMenuChangeEnable = () =>
    {
        this.props.history.push(this.props.value.linkedTo);
        this.props.onMenuChange(this.props.value.name);
    }

    render() {
        return (
            <a href={this.props.value.linkedTo} style={{ textDecoration: 'none' }} onClick={this.onMenuChangeEnable}>
            <div id="MenuText" className={this.props.value.defaultActive ? `activemenu menutext` : `menutext`}>
                <img src={require(`../../images/${this.props.value.iconName}`)} alt="icon" className="img-responsive" />
                <div id="Menu-Item-Text" className="menu-item-text">{this.props.value.name}</div>
            </div>
            </a> 
        )
    }
}

export default VerticalMenu;