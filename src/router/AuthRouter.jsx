import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, SignUpPage } from "ui/pages";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};

export default AuthRouter;
