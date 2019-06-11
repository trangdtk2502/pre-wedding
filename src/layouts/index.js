import React from "react";
// Example Header-Component (see below)
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;