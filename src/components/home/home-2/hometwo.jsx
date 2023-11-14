import Brands from "@/common/brands";
import Counter from "@/common/counter";
import React from "react";
import About from "./about";
import Appointment from "./appointment";
import Choose from "./choose";
import Gallery from "./gallery-1";
import HeroBanner from "./hero-banner";
import NewsLetter from "./news-letter";
import Service from "./service";
import Team from "./team";
import Testimonial from "../../../common/testimonial";
import Blog from "./blog";
import ServiceArea from "../home-2/service-area";

const HomeTwo = () => {
  return (
    <>
      <HeroBanner />
 <ServiceArea></ServiceArea>
      <About />
     <Counter cls="pt-0 pb-20" />
      <Appointment/>
      <Testimonial bg_img={true} />
      
    </>
  );
};

export default HomeTwo;
