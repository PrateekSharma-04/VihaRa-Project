import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Stories from "../pages/Stories";
import AiVa from "../pages/AiVa";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/aiva" element={<AiVa />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;