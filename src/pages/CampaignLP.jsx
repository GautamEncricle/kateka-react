import React, { useEffect, useState } from "react";
import axios from "axios";

import BACKEND_URL from "../constants/server";

const CampaignLP = () => {
  const [offers, setOffers] = useState([]);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/offers")
      .then((res) => setOffers(res.data))
      .catch(console.error);
    axios
      .get("http://localhost:3000/features")
      .then((res) => setFeatures(res.data))
      .catch(console.error);
  }, []);

  return (
    <>
      <main>
        {/* Campaign Banner */}
        <section className="banner py-45 pb-0 pt-180 max-1023:pt-100">
          <div className="container-fluid relative">
            <div className="sticky top-180 max-1023:top-120 text-center pb-60">
              <div className="preheading">
                <span>KICKER ABOUT PROPERTY</span>
              </div>
              <div className="title-olive">
                <h1 className="h1 flex flex-wrap justify-center gap-x-10">
                  <span>LOREM</span>
                  <span>IPSUM</span>
                  <span>DOLOR</span>
                </h1>
              </div>
              <div className="content">
                <p>Location, Region</p>
              </div>
            </div>
            <div className="img relative">
              <img
                src="/assets/images/campaignlp-banner.webp"
                className="img-ratio rounded-10"
                width="1280"
                height="620"
                alt="Campaign"
              />
            </div>
          </div>
        </section>

        {/* Icons / USPs */}
        <section className="icon-grid py-100 max-1023:py-30">
          <div className="container-fluid flex flex-wrap justify-center gap-x-80 gap-y-20">
            {offers.slice(0, 4).map((offer, index) => (
              <div key={index} className="icon-grid-bx text-center">
                <div className="icon">
                  <img
                    src={`/assets/images/usp${index + 1}.svg`}
                    width="98"
                    height="75"
                    alt={`USP ${index + 1}`}
                  />
                </div>
                <h6>{offer.title}</h6>
              </div>
            ))}
          </div>
        </section>

        {/* Offer Description */}
        <section className="general-content py-50">
          <div className="container-fluid text-center">
            <div className="max-w-760 mx-auto">
              <div className="title-olive">
                <h2 className="h2">
                  <span>Lorem</span> ipsum dolor sit amet, consecteturd do.
                </h2>
              </div>
              <div className="content pt-35">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sit amet sapien fringilla, mattis ligula
                  consectetur.
                </p>
                <p>Valid until x date</p>
                <p>FROM RX, XXX per person per night</p>
              </div>
              <div className="flex flex-wrap justify-center gap-x-25 pt-35">
                <a href="#" className="btn btn-link" aria-label="ENQUIRE NOW">
                  <img
                    src="/assets/images/link-arrow.svg"
                    className="transition-all duration-300"
                    width="16"
                    height="14"
                    alt="Arrow"
                  />
                  ENQUIRE NOW
                </a>
                <a href="#" className="btn btn-olive" aria-label="Book Now">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* More About This Offer */}
        <section className="about-img-grid py-150 max-1023:py-30">
          <div className="container-fluid-md">
            <div className="text-center title-olive">
              <h2 className="h2 flex flex-wrap justify-center gap-x-10">
                <span>MORE</span>
                <span>ABOUT</span>
                <span>THIS</span>
                <span>OFFER</span>
              </h2>
            </div>
            <div className="grid gap-y-50 pt-50">
              {features.map((feature, idx) => (
                <div key={idx} className="img-grid flex flex-wrap items-center">
                  <div className="lg:w-4/12 w-full">
                    <img
                      src={feature.image}
                      className="rounded-10"
                      width="376"
                      height="214"
                      alt={feature.title}
                    />
                  </div>
                  <div className="lg:w-8/12 w-full">
                    <div className="about-content text-center lg:text-left">
                      <h2 className="h2 title-olive pt-10">{feature.title}</h2>
                      <p className="content pt-10">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CampaignLP;
