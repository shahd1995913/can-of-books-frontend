import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
   
    redirectUri={window.location.origin}
    domain={process.env.REACT_APP_domain}
    clientId={process.env.REACT_APP_clientId}



  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);