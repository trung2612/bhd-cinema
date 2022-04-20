import React from "react";
import "./ContentLayout.css";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const ContentLayout = (props) => {
  return (
    <>
      <Navbar />
      <div className='layout'>{props.children}</div>
      <Footer />
    </>
  );
};

export default ContentLayout;