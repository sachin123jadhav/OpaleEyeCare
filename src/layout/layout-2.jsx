import React from "react";
import FooterTwo from "./footer/footer-2";
import HeaderTwo from "./header/header-two";
import Footer from "./footer/footer";


const LayoutTwo = ({ children }) => {
  return (
    <>
      <HeaderTwo />
      <main>{children}</main>
      
      <Footer></Footer>
     
    </>
  );
};

export default LayoutTwo;
