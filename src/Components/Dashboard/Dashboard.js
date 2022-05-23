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
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label
            for="my-drawer-2"
            class="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>

          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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
