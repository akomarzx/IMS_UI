import { Route, Navigate } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';

function ProtectedRoute({ element, ...rest }) {
  const { isAuthenticated } = useAuth();

  // If authenticated, render the route, otherwise redirect to App.jsx which handles auth for the app nicely already
  // Prevents direct object reference to protected routes (they can't type the url and see the page 
  // (and won't get a broken page when auth is required for content either))
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/" />
  );
}


/* 
example of use:  
<ProtectedRoute path="/protected" element={<ProtectedComponent />} />
*/

export default ProtectedRoute;