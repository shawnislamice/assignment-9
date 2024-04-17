import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import profileAvatar from "../assets/profile.jpg";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Update Profile</NavLink>
            </li>
            <li>
              <NavLink to="/estate">Estate</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <Link to="/favourites">Favourites</Link>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/" className=" gap-0 font-semibold  md:text-2xl">
          Prebon<span className="text-[#F00]">Builders</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#F00]  border px-2 py-2 border-[#F00] rounded-lg hover:bg-[#F00] hover:text-black duration-300"
                  : "px-2 py-2"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#F00]  border px-2 py-2 border-[#F00] rounded-lg hover:bg-[#F00] hover:text-black duration-300"
                  : "px-2 py-2"
              }
              to="/profile"
            >
              Update Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#F00]  border px-2 py-2 border-[#F00] rounded-lg hover:bg-[#F00] hover:text-black duration-300"
                  : "px-2 py-2"
              }
              to="/estate"
            >
              Estate
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#F00]  border px-2 py-2 border-[#F00] rounded-lg hover:bg-[#F00] hover:text-black duration-300"
                  : "px-2 py-2"
              }
              to="/cart"
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#F00]  border px-2 py-2 border-[#F00] rounded-lg hover:bg-[#F00] hover:text-black duration-300"
                  : "px-2 py-2"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-[#F00]  border px-2 py-2 border-[#F00] rounded-lg hover:bg-[#F00] hover:text-black duration-300"
                  : "px-2 py-2"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className="navbar-end flex gap-3 "
        data-tip={user?.displayName || "Unknwon User"}
      >
        {user ? (
          <div className="dropdown dropdown-end bg-white">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || profileAvatar} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10  p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm  btn-ghost">
                  {user?.displayName || "user name not found"}
                </button>
              </li>
              <li className="btn btn-sm btn-ghost w-full">
                <Link to="/profile">Your Profile</Link>
              </li>
              <li className="btn btn-sm btn-ghost w-full">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="btn btn-sm btn-ghost w-full">
                <Link to="/favourites">Favourites</Link>
              </li>

              <li>
                <button
                  onClick={() => {
                    window.location.reload();
                    logOut();
                    navigate("/signin");
                  }}
                  className="btn btn-sm  btn-ghost"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2 md:gap-3">
            <Link to="/signin">
              <button className="btn bg-[#23BE0A] text-white border-none outline-none">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="btn btn-secondary text-white border-none outline-none">
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
