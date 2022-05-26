import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import LoadingPage from "../Shared/LoadingPage";
import Navbar from "../Shared/Navbar";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin, isLoading] = useAdmin(user);
  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <div className="pt-20">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden ml-10"
          >
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

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          {admin ? (
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-info font-pop">
              <li>
                <Link to="/dashboard"> Update My Profile</Link>
              </li>
              <li>
                <Link to="/dashboard/add-products"> Add a Product</Link>
              </li>
              <li>
                <Link to="/dashboard/all-orders"> Manage All Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/all-products"> Manage All Products</Link>
              </li>
              <li>
                <Link to="/dashboard/all-user"> Make Admin</Link>
              </li>
            </ul>
          ) : (
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-info font-pop">
              <li>
                <Link to="/dashboard">My Profile</Link>
              </li>
              <li>
                <Link to="/dashboard/my-orders"> My Orders</Link>
              </li>
              <li>
                <Link to="/dashboard/add-review"> Add a Review</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
