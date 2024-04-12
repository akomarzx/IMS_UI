import React, { useEffect } from 'react';
import './App.css';
import { useAuth } from 'react-oidc-context';
import Header from "./components/header"
import Footer from "./components/footer"
//import SignUp from "./components/signup"


function App() {
  // useAuth can be destrctured for useful Authentication related properties and funtions
  // uses the react-oidc-context library (same library as our authProvider- this is the oidc context)
  // user contains the user object if the user is logged in, get your token for authenticating requests or user information from this property
  // the useAuth hook will contain the same context as the AuthProvider (all child components of the auth provider will have access to the same oidc context)
  const { user, signinRedirect } = useAuth();

  useEffect(() => {
    if (!user) {
      signinRedirect();
    }
  }, [user, signinRedirect]);

  if (user) {
    return <h1>You are logged in!</h1>;
  } else {
    return <h1>You will be redirected to the login screen...</h1>;
  }
<div>
  <Header/>
  <Footer
    year={new Date().getFullYear()}
    />
</div>
  
}

export default App;