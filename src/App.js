import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./Components/LandingPage/LandingPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
