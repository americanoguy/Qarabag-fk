import { Route, Routes } from "react-router";
import Home from "../Pages/Home.jsx";
import Notfound from "../Pages/Notfound.jsx";
import Trainers from "../Pages/Trainers.jsx";
import Players from "../Pages/players.jsx";
const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Notfound />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/players" element={<Players />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
