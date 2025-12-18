import { Route, Routes } from "react-router";
import Home from "../Pages/Home.jsx";
import Notfound from "../Pages/Notfound.jsx";
const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
