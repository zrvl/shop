import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <>
      <header>
        <NavLink to="admin_brands">Brands</NavLink>
        <NavLink to="admin_types">Types</NavLink>
        <NavLink to="admin_users">Users</NavLink>
        <NavLink to="admin_products">Products</NavLink>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">footer</footer>
    </>
  );
};

export default LayoutAdmin;
