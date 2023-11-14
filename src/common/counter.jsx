import React from "react";
import Count from "./count";

//  counter_text;
const counter_text = [
  {
    id: 1,
    color: "blue-hard",
    counter: 12,
    text: "Years Experience in Cataract, Glaucoma, Refraction",
  },
  {
    id: 2,
    color: "pink-hard",
    counter: 4,
    text: "Different Continents Serving the people",
  },
  {
    id: 3,
    color: "sky-hard",
    counter: 100,
    text: "Free Diagnostic Camps (cataract, glaucoma, refraction and diabetic eye ckeck)",
  },
  {
    id: 4,
    color: "green-hard",
    counter: 2017,
    text: "fellowship in Diagnosis and management of Glaucoma",
  },
];

const Counter = ({ cls = "pt-40 pb-100"  }) => {
  return (
    <>
      <section className={`counter-area ${cls}`}>
        <div className="container">
          <div className="row">
            {counter_text.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="counter__item blue-border mb-30 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className={`counter__icon ${item.color} mb-15`}>
                    <i></i>
                  </div>
                  <div className="counter__content">
                    <h4 className="counter__title">
                      <span className="counter">
                        <Count  number={item.counter} />
                      </span>
                    </h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
