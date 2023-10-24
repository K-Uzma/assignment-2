import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  return loggedIn !== null ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
