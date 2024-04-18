import React, { useState, useEffect } from 'react';
import CodeBookContext from './CodeBookContext';
import { useAuth } from 'react-oidc-context';

function CodeBookProvider({ children }) {
  const [codeBook, setCodeBook] = useState([]);
  const { user } = useAuth();

  //on initial log in, user may not be set by the time the codebook is called in index.jsx
  // this useEffect will run when the user object is populated and fetch the codebook
  // whenever a component calls the context if the user object has changed 
  // for example, on first log in when rendering the first component which actually uses the codebook
  useEffect(() => {
    if (user) {
    fetch('https://ronaldjro.dev/api/v1/code', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.access_token}`,
      },
    })
      .then(response => response.json())
      .then(data => setCodeBook(data));
}
  }, [user]);

  return (
    <CodeBookContext.Provider value={codeBook}>
      {children}
    </CodeBookContext.Provider>
  );
}

export default CodeBookProvider;