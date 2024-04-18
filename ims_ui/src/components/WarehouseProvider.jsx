import React, { useState, useEffect } from 'react';
import WarehouseContext from './WarehouseContext';
import { useAuth } from 'react-oidc-context';

function WarehouseProvider({ children }) {
  const [warehouse, setWarehouse] = useState([]);
  const { user } = useAuth();

  //on initial log in, user may not be set by the time the Warehouse is called in index.jsx
  // this useEffect will run when the user object is populated and fetch the Warehouse
  // whenever a component calls the context if the user object has changed 
  // for example, on first log in when rendering the first component which actually uses the Warehouse
  useEffect(() => {
    if (user) {
    fetch('https://ronaldjro.dev/api/v1/warehouse', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.access_token}`,
      },
    })
      .then(response => response.json())
      .then(data => setWarehouse(data));
}
  }, [user]);

  return (
    <WarehouseContext.Provider value={warehouse}>
      {children}
    </WarehouseContext.Provider>
  );
}

export default WarehouseProvider;