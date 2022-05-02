import React from "react";
import "./ContentLayout.css";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import BackToTop from "components/molecules/BackToTop/BackToTop";

const ContentLayout = (props) => {
  return (
    <>
      <Navbar />
      <div className="layout">{props.children}</div>
      <BackToTop />
      <Footer />
    </>
  );
};

export default ContentLayout;
