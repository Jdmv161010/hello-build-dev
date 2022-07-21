import { Navigate } from "react-router-dom";

const PublicRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? <Navigate to="/app" /> : children;
};

export default PublicRoute;
