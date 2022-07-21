import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import InnerRouter from "./InnerRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const { isAuthenticated } = useSelector((state) => state.app);
  const [sessionData, setSessionData] = useState(
    JSON.parse(sessionStorage.getItem("isAuthenticated"))
  );

  useEffect(() => {
    if (isAuthenticated) {
      setSessionData(JSON.parse(sessionStorage.getItem("isAuthenticated")));
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      {/* Login & Sing up */}
      <Route
        path="auth/*"
        element={
          <PublicRoute isAuthenticated={sessionData}>
            <AuthRouter />
          </PublicRoute>
        }
      />

      {/* App */}
      <Route
        path="app/*"
        element={
          <PrivateRoute isAuthenticated={sessionData}>
            <InnerRouter />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};

export default AppRouter;
