import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./Components/Home/Blogs";
import LandingPage from "./Components/LandingPage/LandingPage";
import NotFound from "./Components/Shared/NotFound";
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
