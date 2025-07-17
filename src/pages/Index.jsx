import { useEffect, useState } from "react";
import axios from "axios";

import BACKEND_URL from "../constants/server";

export default function Index() {
  const [banner, setBanner] = useState({});
  const [about, setAbout] = useState({});
  const [offers, setOffers] = useState([]);
  const [safari, setSafari] = useState({});
  const [wellness, setWellness] = useState({});
  const [experience, setExperience] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [conservation, setConservation] = useState({});
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get(BACKEND_URL+"/banner").then((res) => setBanner(res.data));
    axios.get(BACKEND_URL+"/about").then((res) => setAbout(res.data));
    axios.get(BACKEND_URL+"/offers").then((res) => setOffers(Array.isArray(res.data) ? res.data : []));
    axios.get(BACKEND_URL+"/safari").then((res) => setSafari(res.data));
    axios.get(BACKEND_URL+"/wellness").then((res) => setWellness(res.data));
    axios.get(BACKEND_URL+"/experience").then((res) => setExperience(res.data));
    axios.get(BACKEND_URL+"/blogs").then((res) => setBlogs(res.data));
    axios.get(BACKEND_URL+"/conservation").then((res) => setConservation(res.data));
    axios.get(BACKEND_URL+"/testimonials").then((res) => setTestimonials(Array.isArray(res.data) ? res.data : []));
  }, []);
  console.log(BACKEND_URL);
  return (
    <main>
      {/* About Intro Section */}
      <section className="about-intro max-1023:py-50 h-screen max-1023:hidden">
        <div className="about-intro-inner bg-tree py-100 h-full relative">
          <div className="px-216 relative z-9 max-1023:px-20">
            <div className="title-olive max-w-370">
              <h2 className="h2">{about.title}</h2>
            </div>
            <div className="content pt-30 max-w-624">
              <p>{about.content}</p>
            </div>
            <div className="mt-40">
              <a href="#" className="btn btn-link" role="link" aria-label="ENQUIRE NOW">
                <span>
                  <img src="./src/assets/images/link-arrow.svg" width="16" height="14" alt="Arrow" />
                </span>
                ENQUIRE NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offerWrapper" className="offer-wrapper py-100 max-1023:py-50">
        <div className="container-fluid">
          <div className="top-info max-w-531 mx-auto text-center">
            <div className="title-olive">
              <h2 className="h2">Offers</h2>
            </div>
            <div className="content pt-35">
              <p>Explore exclusive deals and seasonal offers at Kateka.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-65 max-1023:mt-20">
            <div className="lg:w-6/12 w-full">
              <div className="offer-grid">
                {offers.map((offer, index) => (
                  <div className="offer-grid-content" key={index}>
                    <h4>{offer.title}</h4>
                    <div className="content pt-20">
                      <p>{offer.description}</p>
                    </div>
                    <div className="mt-30">
                      <a href={offer.link} className="btn btn-link" aria-label="ENQUIRE NOW">
                        <span>
                          <img src="./src/assets/images/link-arrow.svg" width="16" height="14" alt="Arrow" />
                        </span>
                        ENQUIRE NOW
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Section */}
      <section className="text-video pt-100 pb-250 max-1023:py-50 relative">
        <div className="bg-tree-img absolute top-0 left-0 w-full h-screen">
          <img src="./src/assets/images/tree-bg2.svg" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="max-w-826 mx-auto px-20 relative z-9">
          <div className="flex flex-wrap items-end">
            <div className="lg:w-8/12 w-full">
              <div className="max-w-507">
                <div className="title-olive">
                  <h2 className="h2">{conservation.title}</h2>
                </div>
                <div className="content max-w-479 pt-35 max-1023:pt-15">
                  <p>{conservation.content}</p>
                </div>
                <div className="mt-30">
                  <a href="#" className="btn btn-link" role="link" aria-label="LEARN MORE">
                    <span>
                      <img src="./src/assets/images/link-arrow.svg" width="16" height="14" alt="Arrow" />
                    </span>
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-4/12 w-full -mb-50 max-1023:mt-30">
              <div className="video relative img-266-266 rounded-10 overflow-hidden">
                <video className="img-ratio" controls autoPlay muted>
                  <source src={conservation.video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section with Background and Dynamic Data */}
      <section className="testimonial min-h-screen overflow-hidden py-100 pb-0 max-1023:pb-50 relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img src="./src/assets/images/tree-bg2.svg" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="container-fluid relative z-10">
          <div className="flex flex-wrap justify-center relative min-h-[30rem]">
            {testimonials.map((item, index) => (
              <div className="testimonial-card !h-auto py-100 max-1023:py-50 rounded-10" key={index}>
                <div className="max-w-918 mx-auto max-1023:px-30">
                  <h3 className="text-olive/78">{item.message}</h3>
                  <div className="w-full text-right inline-block pt-30">
                    <span className="uppercase font-semibold text-body-3 tracking-02">{item.name}, {item.country}</span>
                  </div>
                  <div className="skip-section">
                    <a href="#offerWrapper" className="uppercase text-body-4 tracking-02" role="link" aria-label="Skip">Skip</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}