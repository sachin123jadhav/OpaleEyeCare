import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";

// slider setting
const setting = {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".services-n",
    prevEl: ".services-p",
  },
};

// slider_content
const slider_content = [
  {
    id: 1,
    icon: "flaticon-optometrist-1",
    title: "Cataract Services",
    des: "The cornea is the eye's outermost layer. It is dome-shaped surface front part of the eye that covers the iris, pupil, and anterior chamber.",
    color_icon: "sky-icon",
    color: "sky-hexa",
  },
  {
    id: 2,
    icon: "flaticon-eye-1",
    title: "Glaucoma Services",
    des: "Glaucoma is a group of eye diseases which result in damage to the optic nerve and vision loss. A major risk factor is increased pressure in the eye.",
    color_icon: "pink-icon",
    color: "pink-hexa",
  },
  {
    id: 3,
    icon: "flaticon-optometrist",
    title: "Refractive Services",
    des: "The retina is the inner coat of the eye which is a light-sensitive layer of tissue. The optics of the eye create an image of the visual world on the retina.",
    color_icon: "green-icon",
    color: "green-hexa",
  },
  {
    id: 4,
    icon: "flaticon-eye-2",
    title: "Retinopathy of prematurity (ROP) Screening and Management",
    des: "Refractive eye surgery is improve the refractive state of the eye and decreases or eliminates dependency on glasses or contact lenses.",
    color_icon: "sky-icon",
    color: "sky-hexa",
  },
  {
    id: 5,
    icon: "flaticon-shared-vision",
    title: "Diabetic eye check",
    des: "A contact lens is a thin lens placed directly on the surface of the eye. Contact lenses can be worn to correct vision, cosmetic or therapeutic reason.",
    color_icon: "pink-icon",
    color: "pink-hexa",
  },
  {
    id: 6,
    icon: "flaticon-optometrist-4",
    title: "Investigative modalities",
    des: "A comprehensive eye exam performed by Optometrist, a variety of procedures to evaluate the health of your eyes and the quality of your vision.",
    color_icon: "green-icon",
    color: "green-hexa",
  },
  {
    id: 7,
    icon: "flaticon-optometrist-5",
    title: "Pachymetry",
    des: "A comprehensive eye exam performed by Optometrist, a variety of procedures to evaluate the health of your eyes and the quality of your vision.",
    color_icon: "sky-icon",
    color: "sky-hexa",
  },
   
];

const ServiceArea = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section  id="service"
        className="services-area pt-95 pb-90 grey-bg mt-60 fix"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20">
                  our Services
                </span>
                <h3 className="tp-section__title mb-50">Eye Care Services We Offer</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="tp-services d-flex align-items-center">
                <div className="services-p">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="services-n">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="services-slider  wow fadeInUp" data-wow-delay=".3s">
            <div>
              <Swiper
                {...setting}
                loop={isLoop}
                modules={[Navigation]}
                className="service-active"
              >
                {slider_content.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="services-item mb-40">
                      <div
                        className={`services-item__icon ${item.color_icon} mb-30`}
                      >
                        <i className={`${item.icon}`}></i>
                      </div>
                      <div className="services-item__content">
                        <h4 className="services-item__tp-title mb-30">
                          <Link href="/services-details">{item.title}</Link>
                        </h4>
                        <p>{item.des}</p>
                       
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
