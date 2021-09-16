import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useAuth0 } from '@auth0/auth0-react';

function LoginBtn() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <Button  variant="danger" size="lg" onClick={() => {
      logout({ returnTo: window.location.origin });
    }}>Log out</Button>
  );
}

export default LoginBtn;