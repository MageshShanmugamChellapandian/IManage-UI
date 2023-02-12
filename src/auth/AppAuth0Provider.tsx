import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { Auth0Config } from '../utilities/constants';


function AppAuth0Provider (children :any) {

    const onRedirectCallback = (appState: any) => {
        // var navigate = useNavigate()
        // navigate(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={Auth0Config.REACT_APP_AUTH0_DOMAIN}
            clientId={Auth0Config.REACT_APP_AUTH0_CLIENTID}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            audience={Auth0Config.REACT_APP_AUTH0_CLIENTID}
        >
            {children}
        </Auth0Provider>
    );
};

export default AppAuth0Provider;