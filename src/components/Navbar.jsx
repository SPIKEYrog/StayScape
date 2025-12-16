import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <nav
 className={`
  fixed top-0 left-0 z-50
  w-full flex items-center justify-between
  px-6 md:px-16 lg:px-24 py-4 transition-all duration-300
  ${
    isHome
      ? isScrolled
        ? "bg-white text-black shadow-md"
        : "bg-transparent text-white"
      : "bg-white text-black shadow-sm"
  }
`}

>
      <div className="flex items-center gap-2">
        <img src="/logo.jpg" className="h-9" />
        <h2 className="text-xl font-semibold">StayScape</h2>
      </div>

      <ul className="hidden md:flex items-center gap-10 font-medium">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Hotels">Hotels</NavLink></li>
        <li><NavLink to="/experience">Experience</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>

      <NavLink
        to="/Login"
        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
        ${
          isHome
            ? isScrolled
              ? "bg-black text-white"
              : "bg-white text-black"
            : "bg-black text-white"
        }`}
      >
        Login
      </NavLink>
    </nav>
  );
}
