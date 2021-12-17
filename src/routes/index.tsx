import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "../views/pages/errors";
import Example4 from "../views/pages/forviz/components/Example4";
import Forviz from "../views/pages/forviz/pages/Forviz";
// import Test1 from "../views/pages/Test1";
// import Test2 from "../views/pages/Test2";
// import ReduxTest from "../views/pages/reduxTest/ReduxTest";

//react-router-dom v6
import PrivateRoute from "./PrivateRoute";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        {/* //react-router-dom v6 protected*/}
        <Route
          path="/check"
          element={
            <PrivateRoute redirectTo="/login">
              <p>PublicRoute</p>
            </PrivateRoute>
          }
        />
        {/* //react-router-dom v6 protected*/}

        {/* //react-router-dom v6 un-protected*/}
        <Route path="/" element={<Forviz/>} />
        <Route path="/bookings/:filter?roomId=:roomId" element={<Example4/>} />
        {/* <Route path="/redux" element={<ReduxTest/>} />
        <Route path="/test1" element={<Test1/>} />
        <Route path="/test2" element={<Test2/>} /> */}
        {/* //react-router-dom v6 un-protected*/}
        {/* not found  */}
        <Route path="/:pageName" element={<PageNotFound/>} />
        {/* not found  */}
      </Routes>
    </BrowserRouter>
  );
}
