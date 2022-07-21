import { Navigate, Route, Routes } from "react-router-dom";
import { ProfilePage } from "ui/pages";

const InnerRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
      <Route path="/*" element={<Navigate to="/app" />} />
    </Routes>
  );
};

export default InnerRouter;
