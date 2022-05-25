import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./Components/Admin/AddProduct";
import AllOrders from "./Components/Admin/AllOrders";
import AllProducts from "./Components/Admin/AllProducts";
import MakeAdmin from "./Components/Admin/MakeAdmin";
import Dashboard from "./Components/Dashboard/Dashboard";
import Blogs from "./Components/Home/Blogs";
import Featured from "./Components/Home/Featured";
import NewArrivalsProducts from "./Components/Home/NewArrivalsProducts";
import TopRated from "./Components/Home/TopRated";
import LandingPage from "./Components/LandingPage/LandingPage";
import MyPortfolio from "./Components/OtherPage/MyPortfolio";
import Purchase from "./Components/Purchase/Purchase";
import Navbar from "./Components/Shared/Navbar";
import NotFound from "./Components/Shared/NotFound";
import RequireAdmin from "./Components/Shared/RequireAdmin";
import RequireAuth from "./Components/Shared/RequireAuth";
import AddReview from "./Components/User/AddReview";
import Login from "./Components/User/Login";
import MyOrders from "./Components/User/MyOrders";
import MyProfile from "./Components/User/MyProfile";
import Register from "./Components/User/Register";
import UpdateMyProfile from "./Components/User/UpdateMyProfile";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Featured />}></Route>
          <Route path="/top-rated" element={<TopRated />}></Route>
          <Route path="/new-arrivals" element={<NewArrivalsProducts />}></Route>
        </Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<UpdateMyProfile></UpdateMyProfile>}></Route>
          <Route
            path="/dashboard/my-orders"
            element={<MyOrders></MyOrders>}
          ></Route>
          <Route
            path="/dashboard/add-review"
            element={<AddReview></AddReview>}
          ></Route>
          <Route
            path="/dashboard/add-products"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/all-orders"
            element={
              <RequireAdmin>
                <AllOrders></AllOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/all-products"
            element={
              <RequireAdmin>
                <AllProducts></AllProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/all-user"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/my-profile" element={<MyProfile />}></Route>
        <Route path="/my-portfolio" element={<MyPortfolio />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
