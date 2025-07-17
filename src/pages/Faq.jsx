import React, { useEffect, useState } from "react";
import axios from "axios";

import BACKEND_URL from "../constants/server";

const Faq = () => {
  const [faqData, setFaqData] = useState({ sections: [] });
  const [activeIndexes, setActiveIndexes] = useState({});

  useEffect(() => {
    axios
      .get(BACKEND_URL+"/faq")
      .then((res) => setFaqData(res.data))
      .catch(() => setFaqData({ sections: [] }));
  }, []);

  const toggleAccordion = (sectionIndex, questionIndex) => {
    setActiveIndexes((prev) => {
      const key = `${sectionIndex}-${questionIndex}`;
      return { ...prev, [key]: !prev[key] };
    });
  };

  const safeSections = Array.isArray(faqData.sections) ? faqData.sections : [];

  return (
    <>
      <main>
        {/* Banner Section */}
        <section className="banner py-45 pb-0 pt-180 max-1023:pt-100">
          <div className="container-fluid relative">
            <div className="title-olive text-center pb-60 sticky top-180 max-1023:top-120">
              <h2 className="h2">FAQ</h2>
            </div>
            <div className="img relative">
              <img
                src="/assets/images/faq-banner.webp"
                className="img-ratio rounded-10"
                width="1280"
                height="620"
                alt="FAQ Banner"
              />
            </div>
          </div>
        </section>

        {/* Accordion Wrapper */}
        <section className="accordion-wrapper pt-130 max-1023:pt-50 pb-50">
          <div className="max-w-1008 mx-auto max-1023:px-20 grid gap-y-100">
            {safeSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="accordion-row">
                <div className="accordion-container">
                  <div className="title-olive text-center pb-50">
                    <h2 className="h2 flex flex-wrap justify-center gap-x-10">
                      {section.title}
                    </h2>
                  </div>
                  {section.questions.map((question, questionIndex) => {
                    const key = `${sectionIndex}-${questionIndex}`;
                    const isActive = activeIndexes[key];
                    return (
                      <div key={questionIndex} className="accordion-grid">
                        <div
                          className="acc-head relative py-20 card p-3 rounded-0 cursor-pointer"
                          onClick={() =>
                            toggleAccordion(sectionIndex, questionIndex)
                          }
                        >
                          <h5 className="font-heading tracking-01">
                            {question.question}
                          </h5>
                        </div>
                        {isActive && (
                          <div className="acc-body content global-list rounded-0 pl-5">
                            <ul>
                              {question.answers.map((answer, idx) => (
                                <li key={idx}>{answer}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Image Grid Slider */}
        <section className="img-grid-slider py-100 max-1023:py-50">
          <div className="container-fluid relative">
            <div className="flex flex-wrap justify-between -mx-18 max-1023:mx-0 max-1023:mt-20 gap-y-20"></div>
            <div className="grid grid-cols-3 max-639:flex max-639:flex-col gap-20">
              <div className="card relative max-639:order-2">
                <img
                  src="/assets/images/card-img1.webp"
                  className="w-full h-full block object-cover rounded-10"
                  width="414"
                  height="509"
                  alt="experience Kateka"
                />
              </div>
              <div className="card relative max-639:order-3">
                <video
                  className="img-ratio w-full h-full block object-cover rounded-10"
                  src="/assets/images/KatekaSafari-Wellness-Experience.mp4"
                  autoPlay
                  muted
                />
                <div className="vol absolute top-20 right-20 cursor-pointer">
                  <svg
                    width="14"
                    height="18"
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 17V7M7 17V1M1 17V11"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="card relative max-639:order-4">
                <img
                  src="/assets/images/card-img3.webp"
                  className="w-full h-full block object-cover rounded-10"
                  width="414"
                  height="509"
                  alt="experience Kateka"
                />
              </div>
              <div className="row-start-2 pt-30 max-639:pt-0 max-639:order-1">
                <div className="img-info max-w-321 max-1023:relative bottom-0">
                  <div className="title-olive">
                    <h2 className="h2">experience Kateka</h2>
                  </div>
                  <div className="mt-40 max-1023:mt-20">
                    <a
                      href="#"
                      className="btn btn-link"
                      role="link"
                      aria-label="EXPLORE"
                    >
                      <span>
                        <img
                          src="/assets/images/link-arrow.svg"
                          className="transition-all duration-300"
                          width="16"
                          height="14"
                          alt="Arrow"
                        />
                      </span>
                      EXPLORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Faq;
