import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const hero_slider = [
  {
    id: 1,
    title: (
      <>
       See Clearly,  <br /> Live Brightly
      </>
    ),
    des: (
      <>
        At Opale, we blend tradition with innovation for cutting-edge eye care. {" "}
        <br /> See the world in a new light with our advanced treatments.
      </>
    ),
    appointment: "Appointment",
    about: "About us",
    img_1: "/assets/img/slider/slider-bg-3.jpg",
    img_2: "/assets/img/slider/slider-bg-2.png",
  },
  {
    id: 2,
    title: (
      <>
        Your Eyes,  <br />Our Expertise
      </>
    ),
    des: (
      <>
       Your eyes deserve the best. Opale Eye Care is committed to your visual health. {" "}
        <br /> Schedule your appointment today and invest in your eyes.
      </>
    ),
    appointment: "Appointment",
    about: "About us",
    img_1: "/assets/img/slider/slider-bg-1.png",
    img_2: "/assets/img/slider/slider-bg-2_1.png",
  },
];
const hero_box = [
  {
    id: 1,
    icon: "flaticon-slit-lamp",
    des: "Comprehensive Eye Examinations",
    color: "",
  },
  {
    id: 2,
    icon: "flaticon-eye-drops",
    des: "State-of-the-Art Equipment",
    color: "pink-icon",
    border: "pink-border",
  },
  {
    id: 3,
    icon: "flaticon-optometrist-8",
    des: "Emergency Eye Care Services",
    color: "green-icon",
    border: "green-border",
  },
];
// slider setting
const setting = {
  // Optional parameters
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".slider-n",
    prevEl: ".slider-p",
  },
};

// social_links

const HeroBanner = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section className="slider-area slider-tp-top pt-30 p-relative">
        <div className="slider-social">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 d-none d-md-block">
              <div className="banner__box-item">
                <div className="row">
                  {hero_box.map((item) => (
                    <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                      <div
                        className={`banner__item d-flex ${item.border} align-items-center mb-30 wow fadeInUp`}
                        data-wow-delay=".2s"
                      >
                        <div className={`banner__item-icon ${item.color}`}>
                          <i className={item.icon}></i>
                        </div>
                        <div className="banner__item-content">
                          <span>{item.des}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </div>
              <div className="col-lg-4 col-md-2 col-12 d-none d-md-block">
                <div className="slider-content__arrow d-flex align-items-center">
                  <div className="slider-p">
                    <i className="fa-regular fa-arrow-left"></i>
                  </div>
                  <div className="slider-n">
                    <i className="fa-regular fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          loop={isLoop}
          {...setting}
          className="swiper-container tp-slider slider-active"
        >
          {hero_slider.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="swiper-slide bg-white">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12 col-12 order-2 order-lg-1">
                      <div className="slider-content pt-60">
                        <h2 className="slider-content__title mb-45">
                          {item.title}
                        </h2>
                        <p>{item.des}</p>
                        <div className="slider-content__btn mb-165">
                          <Link className="tp-btn" href="/contact">
                            {item.appointment}
                          </Link>
                          <Link className="tp-btn-second ml-25" href="/about">
                            {item.about}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-12 order-1 order-lg-2">
                      <div className="slider-content__bg">
                        <img src={item.img_1} alt="slider-img" />
                      </div>
                      <div className="slider-content__shape d-none d-md-block">
                        <img src={item.img_2} alt="slider-shape" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default HeroBanner;
