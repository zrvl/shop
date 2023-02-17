import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  const authUser = useSelector((state) => state.usersReducer);
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default Layout;
