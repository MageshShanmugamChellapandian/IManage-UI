import '../Menu/VerticalMenu';
import React, { Component } from 'react'
import VerticalMenu from '../Menu/VerticalMenu';
import { ILoggedInUser, ILoggedInUserDetails, MenuModel } from '../../utilities/CommonModels';
import { debug } from 'console';
import { Api } from '../../utilities/constants';
import axios from 'axios';


type MenuState = {
    menuData: MenuModel[],
    isProjectPage: boolean
}


class AppMenu extends Component<ILoggedInUserDetails, MenuState> {

    constructor(props: ILoggedInUserDetails) {
        console.log(props, "menu")
        super(props);
        this.state = {
            menuData: [],
            isProjectPage: false,
        }
    }
    componentDidMount(): void {
        console.log(this.state.menuData);
        this.GetMenus();
    }

    // componentDidUpdate(prevProps: Readonly<MenuProps>, prevState: Readonly<MenuState>, snapshot?: any): void {
    //     if(this.props.menuData !== this.state.menuData) {
    //         this.setState({menuData: this.props.menuData})
    //       }
    // }

    // componentWillReceiveProps(nextProps: MenuProps) {
    //     if(nextProps.menuData !== this.props.menuData) {
    //       this.setState({menuData: nextProps.menuData})
    //     }
    // }
    GetMenus() {
        axios.get(`${Api.BaseUrl}${Api.GetMenu}`)
            .then((response: any) => {
                if (!(response === undefined || response === null) && response.status === 200) {
                    var data = response.data as MenuModel[];
                    data.filter((value,i)=>{
                        if(value.linkedTo===this.props.history.location.pathname){
                            value.defaultActive=true;
                        }
                        else{
                            if(value.name==="Home"&&
                            (this.props.history.location.pathname === "/admin")){
                                value.defaultActive=true;
                            }
                            else{
                            value.defaultActive=false;
                            }
                        }
                    })
                    console.log("response", response.data);
                    console.log("data", data);
                      this.setState({menuData:data});
                    // return data;
                }
            }).catch((err) => {
                console.log(err);
            })
    }

    setStateObjectUsingHistory = () => {
        if (this.props.history.location.pathname === "/admin") {
            return true;

        } else {
            return false;
        }
    }

    onMenuChange = (menuName: string) => {
        let data = this.state.menuData.map((input, i) => {
            input.defaultActive = input.name === menuName ? input.defaultActive = true : input.defaultActive = false;
            return input;
        });
        RemoveModifiedCSS();
        let isProjectPage = this.setStateObjectUsingHistory();
        this.setState({ isProjectPage, menuData: data });
    }
    render() {
        return (
            <div className="menuitems">
                {this.state.menuData.map((input, i) => <VerticalMenu key={i} value={input} isProjectPage={this.state.isProjectPage} history={this.props.history} onMenuChange={this.onMenuChange} />)}
            </div>
        )
    }
}

function ModifyMenuCSS() {
    let divElement = document.getElementById("contentmenu") as HTMLDivElement;
    if (divElement !== null) {
        document.getElementById("contentmenu")?.classList.add('projectcontentmenu');
        //   document.getElementById("MenuText")?.classList.add('projectmenutext');

        let menuDivElement = document.getElementById("contentmenu") as HTMLDivElement;
        menuDivElement.hidden = false;

        let menuItems = document.getElementsByClassName('menutext') as HTMLCollectionOf<Element>;
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.add('projectmenutext');
        }
        //  document.getElementById("Menu-Item-Text")?.classList.add('project-menu-item-text');
        let items = document.getElementsByClassName('menu-item-text') as HTMLCollectionOf<Element>;
        for (var i = 0; i < items.length; i++) {
            items[i].classList.add('project-menu-item-text');

        }
        //              let els = document.querySelectorAll('.myclass');

        // els.forEach(function(el) {
        //   el.classList.add('hidden');
        // }); 
    }
}

function RemoveModifiedCSS() {
    let divElement = document.getElementById("contentmenu") as HTMLDivElement;
    if (divElement !== null) {
        document.getElementById("contentmenu")?.classList.remove('projectcontentmenu');
        let menuItems = document.getElementsByClassName('menutext') as HTMLCollectionOf<Element>;


        let menuDivElement = document.getElementById("contentmenu") as HTMLDivElement;
        menuDivElement.hidden = false;

        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove('projectmenutext');
        }
        //   document.getElementById("MenuText")?.classList.remove('projectmenutext');
        //  document.getElementById("Menu-Item-Text")?.classList.add('project-menu-item-text');
        let items = document.getElementsByClassName('menu-item-text') as HTMLCollectionOf<Element>;
        for (let j = 0; j < items.length; j++) {
            items[j].classList.remove('project-menu-item-text');
        }
        //              let els = document.querySelectorAll('.myclass');

        // els.forEach(function(el) {
        //   el.classList.add('hidden');
        // }); 
    }
}

function setCssToActiveMenu(activeMenu: string) {
    let items = document.getElementsByClassName("menutext") as HTMLCollectionOf<HTMLDivElement>;
    for (var i = 0; i < items.length; i++) {
        if (items[i].children[1].innerHTML === activeMenu) {
            items[i].classList.add('activemenu');
        }
        else {
            items[i].classList.remove('activemenu');
        }
    }
}

export { AppMenu, ModifyMenuCSS, RemoveModifiedCSS, setCssToActiveMenu }