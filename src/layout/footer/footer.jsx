import SocialLinks from "@/common/social-links";
import Link from "next/link";
import React from "react";

const footer_content = {
  footer_info: [
    {
      id: 1,
      title: "Useful links",
      cls: "footer-col-2",
      links: [
        { name: "Contact us", link: "/contact-us" },
        { name: "Help & About us", link: "/about" },
        
      ],
    },
    {
      id: 2,
      title: "Contact info",
      cls: "footer-col-3",
      links: [
        { name: "Opal eye care, 1 st floor, building T1, Flower valley, Opposite Viviana mall, Thane west-400601" },
        { name: "+91 9137359205" },
        { name: "drkiranmore@yahoo.com" },
        
      ],
    },
  ],
  contact_info: [
    {
      id: 1,
      title: "Quick Links",
      support_info: [
        " Opal eye care, 1 st floor, building T1, Flower valley, Opposite Viviana mall, Thane west-400601",
        "+91 9137359205",
        "drkiranmore@yahoo.com",
      ],
      office_time: "Office Hours: 9AM - 4PM",
      off_day: " Friday - Wekend Day",
    },
  ],
  copy_right_text: (
    <>
      © Copyright © {new Date().getFullYear()}
      <Link href="/"> Opal Eye Care & Glaucoma Center</Link>.<i> All Rights Reserved.</i>
    </>
  ),
};

const { footer_info, copy_right_text } = footer_content;
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area theme-bg pt-30 pb-0">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-1 mb-30 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h4 className="footer-widget__title mb-30">
                    <a href="index">
                      <img src="/assets/img/logo/OplaeLogo.png" alt="logo" />
                    </a>
                  </h4>
                  <p>
                  After staying in four different continents we moved back to India permanently to offer my services to our Indian community. Opal eye care and glaucoma center is my first venture and a dream come true.
                  </p>
                  
                </div>
              </div>
              {
                footer_info.map(item =>  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className={`footer-widget ${item.cls} mb-50 wow fadeInUp`}
                  data-wow-delay=".4s"
                >
                  <h4 className="footer-widget__title mb-20">{item.title}</h4>
                  <div className="footer-widget__links">
                    <ul>

                      {
                        item.links.map((link, i) => <li key={i}>
                        <Link href={`${link?.link ? link.link : "/"}`}>{link.name}</Link>
                      </li> )
                      }
                    
                    </ul>
                  </div>
                </div>
              </div>)
              }
              {/* <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-2 mb-50 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h4 className="footer-widget__title mb-20">Useful links</h4>
                  <div className="footer-widget__links">
                    <ul>
                      <li>
                        <Link href="/contact">Contact us</Link>
                      </li>
                      <li>
                        <Link href="/about">Help & About us</Link>
                      </li>
                      <li>
                        <Link href="/shop-details">Shipping & Returns</Link>
                      </li>
                      <li>
                        <Link href="/shop-details">Refund Policy</Link>
                      </li>
                      <li>
                        <Link href="/about">About us</Link>
                      </li>
                      <li>
                        <Link href="/services-details">Services</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-3 mb-50 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h4 className="footer-widget__title mb-20">Contact info</h4>
                  <div className="footer-widget__info">
                    <ul>
                      <li>
                        <a href="#">Ta-134/A, Gulshan Badda Link </a>
                      </li>
                      <li>
                        <a href="tel:+9159008855">(+880)155 69569 365</a>
                      </li>
                      <li>
                        <a href="mailto:support@rstheme.com">
                          support@rstheme.com
                        </a>
                      </li>
                      <li>Office Hours: 8AM - 11PM</li>
                      <li>Sunday - Wekend Day</li>
                    </ul>
                  </div>
                </div>
              </div> */}
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div
                  className="footer-widget footer-col-4 mb-50 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <h4 className="footer-widget__title mb-20">
                  Opening Hours
                  </h4>
                <p> Weekdays - Mon-Sat: 8am-6pm<br></br>

Weekend - Sun: Closed</p> 

<div className="footer-widget__social">
                    <SocialLinks />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-area-bottom theme-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                <div className="footer-widget__copyright text-center">
                  <span cl>{copy_right_text}</span>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
