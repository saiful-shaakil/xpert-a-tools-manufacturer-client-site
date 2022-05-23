import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Dashboard = () => {
  return (
    <div>
      {" "}
      <div>
        <Navbar></Navbar>
      </div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>

          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard"> Update My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/my-orders"> My Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/add-review"> Add a Review</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
