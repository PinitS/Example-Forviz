import React from "react";
import { Route, Link, Navigate } from "react-router-dom";

function PrivateRoute({ children , redirectTo }: any) {
  const auth: boolean = true;
  return auth ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoute;
