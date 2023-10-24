import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  return loggedIn !==null ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
