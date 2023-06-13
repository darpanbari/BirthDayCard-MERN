import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div
        className="text-center mx-auto z-1 shadow"
        style={{ width: "10%", float: "left", position: "fixed" }}
      >
        <div>
          <NavLink to="/joining-admin" className="list-group-item rounded-0">
            Admin
          </NavLink>
          <NavLink to="/joining-user" className="list-group-item ">
            User
          </NavLink>
          <NavLink to="/" className="list-group-item ">
            Upcoming
          </NavLink>
          <NavLink to="/" className="list-group-item ">
            Upcoming
          </NavLink>
          <NavLink to="/" className="list-group-item ">
            Upcoming
          </NavLink>

          <NavLink
            to="/"
            className="list-group-item border-1 hide-1"
            style={{ height: "100vh", zIndex: "-2" }}
          ></NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
