import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "typeface-roboto";
import "typeface-poppins";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Config } from './utilities/constants';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const onRedirectCallback = (appState:any) => {
  // history.push(
  //   appState && appState.returnTo ? appState.returnTo : window.location.pathname
  // );
};

const providerConfig = {
  domain: Auth0Config.REACT_APP_AUTH0_DOMAIN,
  clientId: Auth0Config.REACT_APP_AUTH0_DOMAIN,
  ...(Auth0Config.audience ? { audience: Auth0Config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

root.render(
  <Auth0Provider {...providerConfig}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
