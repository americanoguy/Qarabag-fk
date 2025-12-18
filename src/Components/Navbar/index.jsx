import Container from "../Container";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-main text-white sticky z-50">
      <Container>
        <nav className="flex items-center justify-between py-2 relative">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="w-14" />
            <p className="uppercase font-semibold">Qarabag FK</p>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/">Ana səhifə</NavLink>
            <div className="relative group">
              <span className="cursor-pointer">Komanda</span>
              <div className="absolute top-full mt-1 w-36 bg-white shadow-md rounded-md flex flex-col invisible group-hover:visible">
                <NavLink className="text-slate-800 px-4 py-2 text-xs hover:bg-slate-200">
                  Məşqçilər
                </NavLink>
                <NavLink className="text-slate-800 px-4 py-2 text-xs hover:bg-slate-200">
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
