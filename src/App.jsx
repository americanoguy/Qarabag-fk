import { NavLink } from "react-router";
import MyRoutes from "./Routes";
import NotfoundPage from "./Pages/Notfound";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <MyRoutes />
    </div>
  );
};
export default App;
