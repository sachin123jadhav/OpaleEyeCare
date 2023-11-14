import Count from "@/common/count";
import Link from "next/link";
import React from "react";

const AboutArea = () => {
  return (
    <>
      <section className="about-area pt-60 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-12">
              <div
                className="tp-about-thumb mb-30 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="tp-ab-img d-flex">
                  <div className="tp-ab-main-img p-relative">
                    <img
                      src="/assets/img/about/about-bg-04.jpg"
                      alt="about-thumb"
                    />
                    <div className="about__exprience tp-ab-counter">
                      <h3 className="counter">

                        <Count add_style={true} number={12} />
                      </h3>
                      <i>
                        Years of <br />
                        Experience
                      </i>
                    </div>
                  </div>
                  <div className="tp-ab-shape d-none d-md-block d-lg-none d-xl-block">
                    <img
                      className="ab-shape-one"
                      src="/assets/img/about/about-bg-05.jpg"
                      alt="about-shape"
                    />
                    <img
                      className="ab-shape-two"
                      src="/assets/img/about/about-bg-06.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 col-12">
              <div
                className="about-content about-align mb-60 wow fadeInRight"
                data-wow-delay=".3s"
              >
                <div className="tp-section">
                  <h3 className="tp-section__title ab-title mb-25">
                  Dr Uttara Karandikar More
                  </h3>
                  <a className="tp-section__link" href="#">
                  MBBS, MS ( Ophthalmology)
                  </a>
                  
                </div>
                <div className="tp-about__info-list ab-check-list mb-55">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i>Fellowship in Glaucoma
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Fellowship in ROP screening and management.
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>I am an Ophthalmologist (Eye Surgeon) with specialisation in Glaucoma.
                    </li>
                     
                  </ul>
                </div>

                <div className=" mr-20 mb-40">
                <h5>My commitment</h5>
                <p>
                After staying in four different continents we moved back to India permanently to offer my services to our Indian community. Opal eye care and glaucoma center is my first venture and a dream come true. With this I have committed myself to serve the people of the society so that every person can have access to basic as well as an advanced eye care facility and that too at an affordable cost.</p>

                <p>I wish I could reach maximum number of people and make them aware about essential eye health and check-ups which is their basic right.</p>

                <p>I have plans to conduct free diagnostic camps for the people, such as cataract, glaucoma, refraction and diabetic eye ckeck. I will be travelling to Wada, Thane once in a week to avail my services, where currently there is no ophthalmologist available. My center currently offers services on outpatient basis and I have an attachment at different center where I will be doing all surgeries.</p>

                <p>I will be going to different Neonatal intensive care units for screening babies who suffer from prematurity related eye problems.</p>

                <p>I have a future plan to start have another set up in an year time with an operation theatre of my own which is again a huge investment and I would definitely need your bank’s support then. With all this background I put up a proposal for loan on my equipments and for the infrastructure cost to start my first eye clinic</p>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
