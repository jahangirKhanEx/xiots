import React from "react";
import { LayoutStyle } from "./Layout.style";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <LayoutStyle>
      <Navbar />
      <article className="page-content">{children}</article>
      <Footer />
    </LayoutStyle>
  );
}

export default Layout;
