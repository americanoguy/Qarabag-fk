import { Route, Routes } from "react-router";
import Home from "../Pages/Home.jsx";
import Notfound from "../Pages/Notfound.jsx";
import Trainers from "../Pages/Trainers.jsx";
import Players from "../Pages/players.jsx";
import Trainerdetail from "../Pages/Trainerdetail.jsx";
import Playerdetail from "../Pages/playerdetail.jsx";
import Newspage from "../Pages/newspage.jsx";
import Contact from "../Pages/contact.jsx";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/trainer/:id" element={<Trainerdetail />} />
        <Route path="/player/:id" element={<Playerdetail />} />
        <Route path="/players" element={<Players />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/news" element={<Newspage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
