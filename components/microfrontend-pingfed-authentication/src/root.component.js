import React from "react";
import AppOne from '../../microfrontend-exercise-app-one/src/root.component'
import OAuth2Login from "react-simple-oauth2-login";

export default function Root(props) {
  const onSuccess = (response) => {
    console.log("logeado", response);
  };
  const onFailure = (response) => console.error(response);
  const logged = false;
  return (
    <React.Fragment>
    {!logged ? (
      <OAuth2Login
          authorizationUrl="https://pfeddev.wal-mart.com:8443/as/authorization.oauth2"
          responseType="code"
          // clientId="campocpingfed"
          clientId="CamPricingWf"
          redirectUri="http://localhost:3000"
          buttonText={"iniciar sesión"}
          scope={"openid profile full"}
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
        
    ) : (
      <AppOne />
    )}
    </React.Fragment>
    
  )
}
