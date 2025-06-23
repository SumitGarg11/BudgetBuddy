import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

const App = () => {
  return <div className=""> 
  <Router>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/login" exact element={<Login/>} />
      <Route path="/signUp" exact  element={<SignUp/>} />
    </Routes>
  </Router>
  </div>;
};

export default App;
