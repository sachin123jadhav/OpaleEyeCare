import VideoPopup from "@/modals/video-popup";
import Link from "next/link";
import React, { useState } from "react";

const About = () => {
  // about content data
  const about_content = {
     
    about_img: "/assets/img/about/about-bg-02.png",
   
    about_thumb: "/assets/img/about/about-bg-03.png",
    title: "Dr Uttara Karandikar More",
    degree: "MBBS, MS (Ophthalmology)",
    sub_title: "About",
    des_1: (
      <>
        <ul>
          <li> <i className="fa-solid fa-check"></i> MBBS, MS(Ophthalmology)</li>
          <li> <i className="fa-solid fa-check"></i>Fellowship in Glaucoma</li>
          <li> <i className="fa-solid fa-check"></i>Fellowship in ROP screening and management</li>

        </ul>
      </>
    ),
    dex_2: (
      <>
       After staying in four different continents we moved back to India permanently to offer my services to our Indian community. Opal eye care and glaucoma center is my first venture and a dream come true. With this I have committed myself to serve the people of the society so that every person can have access to basic as well as an advanced eye care facility and that too at an affordable cost.
      </>
    ),
    btn: "Talk with Expart",

    // booking data
    booking_bg: "/assets/img/shape/shape-bg-04.png",
    b_sub_title: "book Appointment",
    b_title: (
      <>
        book your eye care appointment today <br/> and embrace a brighter, sharper vision
      </>
    ),
    b_btn: "Book Now",
    b_img: "/assets/img/shape/logo-shape-1.png",
  };
  const {
    about_img,
    about_thumb,
    sub_title,
    title,
    degree,
    des_1,
    dex_2,
    btn,
    booking_bg,
    b_sub_title,
    b_title,
    b_btn,
    b_img,
  } = about_content;

  
  return (
    <>
      <section
        className="about-area pt-130 tp-box-space pb-130 ml-30 mr-30"
        
      >
        <div className="about-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-thumb text-lg-center p-relative ml-85 mb-60 wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <img src={about_img} alt="about-thumb" />
                  
                  <div className="about-thumb-shape d-none d-md-block">
                    <img src={about_thumb} alt="about-shape" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-content ml-60 mb-60 wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div className="tp-section">
                    <span className="tp-section__sub-title left-line mb-25">
                      {sub_title}
                    </span>
                    <h3 className="tp-section__title mb-5">{title}</h3>
                    <h4 className="mb-45"> {degree} </h4>

                    <i>{des_1}</i>
                    <p className=" mr-20 mb-35">{dex_2}</p>
                  </div>
                  <div className="about-content__btn">
                    <Link href="/about" className="tp-btn">
                      {btn}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-area pt-75 ">
          <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
              <div className="col-lg-12">
                <div
                  className="tp-cta-bg p-relative theme-light-bg pt-65 pb-70"
                  style={{
                    backgroundImage: `url(${booking_bg})`,
                  }}
                >
                  <div className="cta-content ml-90">
                    <div className="tp-section">
                      <span className="tp-section__sub-title sub-title-white left-line-white mb-20">
                        {b_sub_title}
                      </span>
                    </div>
                    <h2 className="cta-title mb-30">{b_title}</h2>
                    <div className="cta-btn">
                      <button className="tp-btn-second">{b_btn}</button>
                    </div>
                    <div className="cta-shape d-none d-md-block">
                      <img src={b_img} alt="cta-logo-shape" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       
    </>
  );
};

export default About;
