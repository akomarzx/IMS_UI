import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import { AuthProvider } from "react-oidc-context";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { oidcConfig } from './security/oidcConfig.js';
import Callback from './security/Callback.jsx';
import PurchaseOrderList from './components/purchaseOrders/PurchaseOrderList.jsx';

// AuthProvider is a wrapper component that provides the OpenID Connect functionality to its children.
// Automatically handles much  of the auth flow
// all child components of the auth provider will have access to the same oidc context
// see App.jsx for an example of how to use the useAuth hook to access the oidc context for user info, token, etc
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider {...oidcConfig}>
    <Router>
      <Routes>
        <Route path="/callback" element={<Callback />} />
        <Route path="/" element={<App />} />
        <Route path="/purchaseOrderList" element={<PurchaseOrderList />} />
      </Routes>
    </Router>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();