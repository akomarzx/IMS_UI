import React, { useState, useEffect } from 'react';
import CategoryContext from './CategoryContext';
import { useAuth } from 'react-oidc-context';

function CategoryProvider({ children }) {
  const [category, setCategory] = useState([]);
  const { user } = useAuth();

  //on initial log in, user may not be set by the time the Category is called in index.jsx
  // this useEffect will run when the user object is populated and fetch the Category
  // whenever a component calls the context if the user object has changed 
  // for example, on first log in when rendering the first component which actually uses the Category
  useEffect(() => {
    if (user) {
    fetch('https://ronaldjro.dev/api/v1/category', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.access_token}`,
      },
    })
      .then(response => response.json())
      .then(data => setCategory(data));
}
  }, [user]);

  return (
    <CategoryContext.Provider value={category}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;