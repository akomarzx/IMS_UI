import React, { useEffect } from 'react';
import './App.css';
import { useAuth } from 'react-oidc-context';
//import Header from "./components/header"
import Footer from "./components/footer"
//import SignUp from "./components/signup"
//import AddSupplierForm from "./components/addsupplier";
//import AddInventoryForm from "./components/addinventory";
//import SideNavBar from "./components/sidenavbar";
//import CustomerList from "./components/customerlist";
//import SupplierList from "./components/supplierlist";
//import SalesOrderList from "./components/salesorderlist";
//import Dashboard from "./components/dashboard";
import PurchaseOrderList from './components/PurchaseOrderList.jsx';
//inactive paths are commented out please use as needed for testing purpose


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
    return <>
      <div>
        {/*Add desired component names below for testing purposes*/}
        <PurchaseOrderList></PurchaseOrderList>
        <Footer></Footer>
      </div>
    </>
  } else {
    return <h1>You will be redirected to the login screen...</h1>
  }
};

export default App;