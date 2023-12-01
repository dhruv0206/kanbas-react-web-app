import ProjectHome from "./home";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
import ProjectNav from "./nav";
import Signin from "../Users/signin";
import Signup from "../Users/signup";
import UserTable from "../Users/table";
import UserAccount from "../Users/account";
function Project() {
  return (
    <div className="container">
      <div className="row">
        <Nav />
      </div>
      <div className="row mt-3">
        <div className="col-2">
          <ProjectNav />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/home" element={<ProjectHome />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<UserAccount />} />
            <Route path="/account/:id" element={<UserAccount />} />
            <Route path="/users" element={<UserTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Project;