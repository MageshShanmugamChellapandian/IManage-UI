import './App.css';
import Header from './Components/Header/Header'
import { AppMenu } from './Components/Menu/AppMenu'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from 'history';
import React, { useEffect } from 'react';
import Admin from './Components/Admin/Admin';
import { ILoggedInUser, MenuModel } from './utilities/CommonModels';
import Project from './Components/Project/Project';
import axios from 'axios';
import { Api } from './utilities/constants';



export const history = createBrowserHistory();

function App(props: any) {

  const [loggedInUser, setLoggedInUser] = React.useState<ILoggedInUser>({ displayName: "Magesh", firstName: "Magesh Shanmugam", email: "mageshshanmugam.c@gmail.com", lastName: "C" });
  const [isFreshApplication, setIsFreshApplication] = React.useState<boolean>(true);
  const [menuData, setMenuData] = React.useState<MenuModel[]>([]);

  useEffect(() => {
    GetMenus();
  }, [])

  function GetMenus() {
    axios.get(`${Api.BaseUrl}${Api.GetMenu}`)
      .then((response: any) => {
        if (!(response === undefined || response === null) && response.status === 200) {
          var data = response.data as MenuModel[];
          console.log("response", response.data);
          console.log("data", data);
            setMenuData(data);
          return data;
        }
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="app">
      <Header history={history} loggedInUser={loggedInUser} />
      {isFreshApplication ?
        <div className="appChild">
          <div id="contentmenu" className="contentmenu" >
            <AppMenu loggedInUser={loggedInUser} history={history}></AppMenu>
          </div>
          <div className="content">
            <Admin {...loggedInUser} key={1}></Admin>
          </div>
        </div> : <Project {...loggedInUser}></Project>}
    </div>
  );
}

export default App;
