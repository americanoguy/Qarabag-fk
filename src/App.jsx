import MyRoutes from "./Routes";
import NotfoundPage from "./Pages/Notfound";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <MyRoutes />
      <Footer />
    </div>
  );
};
export default App;
