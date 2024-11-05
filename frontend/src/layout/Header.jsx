import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
const Header = () => {
  return (
    <header className="py-4">
      <div className="container flex items-center justify-between">
        <Link to={"/"}>
          <img src={assets.logo} alt="logo" className="w-36 sm:w-full" />
        </Link>
        <nav className="navlink">
          <ul className="capitalize hidden lg:flex gap-10 lg:gap-20">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">menu</NavLink>
            </li>
            <li>
              <NavLink to="/mobile-app">mobile-app</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4 md:gap-8">
          <img src={assets.search_icon} alt="search icon" />
          <img src={assets.basket_icon} alt="basket icon" />
          <Link to="/login">
            <button className="btn-primary">Sign In</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
