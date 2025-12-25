import Container from "../Container";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (searchValue.trim()) {
      axios("http://localhost:3000/searchdata").then((res) => {
        if (res.status === 200) {
          const filteredData = res.data.filter(({ name }) =>
            name.toLowerCase().includes(searchValue.trim().toLowerCase())
          );
          setData(filteredData);
        }
      });
    }
  }, [searchValue]);
  return (
    <header className="bg-main text-white sticky top-0 z-10">
      <Container>
        <nav className="flex items-center justify-between py-2 relative">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="w-14" />
            <p className="uppercase font-semibold">Qarabag FK</p>
          </Link>
          <div className="relative">
            <input
              type="search"
              placeholder="Axtar..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="hidden md:block px-4 py-2 rounded bg-white/10 text-white outline-none"
            />
            <div className="bg-purple-600 text-white p-2 mt-1 flex flex-col absolute w-full ">
              {data.map(({ name }) => {
                return <Link>{name}</Link>;
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/">Ana səhifə</NavLink>
            <div className="relative group">
              <span className="cursor-pointer">Komanda</span>
              <div className="absolute top-full w-36 bg-white shadow-md rounded-md flex flex-col invisible group-hover:visible">
                <NavLink
                  className="text-slate-800 px-2 py-5 text-xs hover:bg-slate-200"
                  to={"/trainers"}
                >
                  Məşqçilər
                </NavLink>
                <NavLink
                  className="text-slate-800 px-2 py-5 text-xs hover:bg-slate-200"
                  to={"/players"}
                >
                  Oyunçular
                </NavLink>
              </div>
            </div>

            <NavLink to="/news">Xəbər</NavLink>
            <NavLink to="/contact">Əlaqə</NavLink>
          </div>

          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </div>

          <div
            className={`md:hidden items-center gap-6 flex-col bg-main absolute top-full right-0 w-48 p-4 ${
              showMobileMenu ? "flex" : "hidden"
            }`}
          >
            <NavLink to="/" className="hover:bg-slate-700 px-4 py-2 rounded">
              Ana səhifə
            </NavLink>
            <div className="relative group">
              <span className="cursor-pointer px-4 py-2 block">Komanda</span>
              <div className="flex flex-col mt-1 bg-white text-black rounded-md shadow-md">
                <NavLink className="px-4 py-1 text-xs hover:bg-slate-200">
                  Məşqçilər
                </NavLink>
                <NavLink className="px-4 py-1 text-xs hover:bg-slate-200">
                  Oyunçular
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/news"
              className="hover:bg-slate-700 px-4 py-2 rounded"
            >
              Xəbər
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:bg-slate-700 px-4 py-2 rounded"
            >
              Əlaqə
            </NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
