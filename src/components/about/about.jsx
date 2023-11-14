import Counter from "@/common/counter";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import AboutArea from "./about-area";
import Banner from "./banner";
import Footer from "@/layout/footer/footer";



const About = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <AboutArea />
      <Counter cls="pb-10" />
      <Footer></Footer>
      
    </>
  );
};

export default About;
