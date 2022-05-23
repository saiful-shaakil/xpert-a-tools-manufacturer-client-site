import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  const menu = (
    <>
      <li className="text-2xl">
        <Link to="/">Home</Link>
      </li>
      <li className="text-2xl">
        <Link to="/reviews">Reviews</Link>
      </li>
      <li className="text-2xl">
        <Link to="/blogs">Blogs</Link>
      </li>
      {user && (
        <li className="text-2xl">
          <Link to="/dashboard">Dasboard</Link>
        </li>
      )}
      {user && (
        <li className="text-2xl">
          <Link to="/my-profile">{user.displayName}</Link>
        </li>
      )}
      {user ? (
        <li className="text-2xl">
          <button onClick={logOut}>Sign Out</button>
        </li>
      ) : (
        <li className="text-2xl">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-gray-700 bg-opacity-20 text-white px-4 lg:px-10">
      <div className="navbar-start" style={{ width: "30%" }}>
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box"
          >
            {menu}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-5xl font-semibold normal-case italic"
        >
          Xpert
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex" style={{ width: "70%" }}>
        <ul className="menu menu-horizontal p-0">{menu}</ul>
      </div>
    </div>
  );
};

export default Navbar;
