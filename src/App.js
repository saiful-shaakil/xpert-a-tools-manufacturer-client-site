import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Blogs from "./Components/Home/Blogs";
import LandingPage from "./Components/LandingPage/LandingPage";
import NotFound from "./Components/Shared/NotFound";
import AddReview from "./Components/User/AddReview";
import Login from "./Components/User/Login";
import MyOrders from "./Components/User/MyOrders";
import Register from "./Components/User/Register";
import UpdateMyProfile from "./Components/User/UpdateMyProfile";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<UpdateMyProfile></UpdateMyProfile>}></Route>
          <Route
            path="/dashboard/my-orders"
            element={<MyOrders></MyOrders>}
          ></Route>
          <Route
            path="/dashboard/add-review"
            element={<AddReview></AddReview>}
          ></Route>
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
