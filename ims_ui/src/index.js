import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "react-oidc-context";

const oidcConfig = {
  authority: "https://ronaldjro.dev/auth/realms/IMS-Dev/",
  client_id: "664148af-85bf-4ae2-9143-32920b31a06e-IMS-Dev",
  redirect_uri: "https://ronaldjro.dev/*",
  client_secret: "8jdGrGQFgHG1OVSD63Teiy6YPIkHxJnj"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider {...oidcConfig}>
    <App />
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
