import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const Index = () => {
  const [navigation, setNavigation] = useState([]);
  const [banner, setBanner] = useState({});
  const [about, setAbout] = useState({});
  const [discoverImages, setDiscoverImages] = useState([]);
  const [safari, setSafari] = useState({});
  const [wellness, setWellness] = useState({});
  const [offers, setOffers] = useState([]);
  const [blog, setBlog] = useState({});
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch navigation
    axios
      .get("http://localhost:3000/navigation")
      .then((res) => setNavigation(res.data))
      .catch(console.error);
    // Fetch banner
    axios
      .get("http://localhost:3000/banner")
      .then((res) => setBanner(res.data))
      .catch(console.error);
    // Fetch about
    axios
      .get("http://localhost:3000/about")
      .then((res) => setAbout(res.data))
      .catch(console.error);
    // Fetch discover images
    axios
      .get("http://localhost:3000/discoverImages")
      .then((res) => setDiscoverImages(res.data))
      .catch(console.error);
    // Fetch safari
    axios
      .get("http://localhost:3000/safari")
      .then((res) => setSafari(res.data))
      .catch(console.error);
    // Fetch wellness
    axios
      .get("http://localhost:3000/wellness")
      .then((res) => setWellness(res.data))
      .catch(console.error);
    // Fetch offers
    axios
      .get("http://localhost:3000/offers")
      .then((res) => setOffers(res.data))
      .catch(console.error);
    // Fetch blog
    axios
      .get("http://localhost:3000/blog")
      .then((res) => setBlog(res.data))
      .catch(console.error);
    // Fetch testimonials
    axios
      .get("http://localhost:3000/testimonials")
      .then((res) => setTestimonials(res.data))
      .catch(console.error);
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* Banner Section */}
        <section className="banner py-45 pb-0 pt-180 max-1023:pt-100">
          <div className="container-fluid relative">
            <div className="logo text-center sticky top-180 max-1023:top-120 pb-110 max-1023:pb-50">
              <a href="#">
                <img
                  src={banner.logo || "/assets/images/logo.svg"}
                  className="mx-auto max-1023:max-w-250"
                  width="576"
                  height="76"
                  alt="Kateka"
                />
              </a>
              <span className="text-32 max-767:text-24 tracking-01 font-heading inline-block pt-28 uppercase">
                {banner.subtitle || "Safari & Wellness Experience"}
              </span>
            </div>
            <div className="img relative">
              <img
                src={banner.image || "/assets/images/banner-img.webp"}
                className="img-ratio rounded-10"
                width="1280"
                height="620"
                alt="Banner"
              />
            </div>
            {banner.video && (
              <div className="absolute bottom-24 left-1/2 w-[calc(100%_-_160px)] -translate-1/2 text-center">
                <a
                  href={banner.video}
                  className="text-body-4 tracking-02 text-white uppercase"
                  data-lity
                >
                  WATCH FULL VIDEO
                </a>
              </div>
            )}
          </div>
        </section>

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
                <a
                  href="#"
                  className="btn btn-link"
                  role="link"
                  aria-label="ENQUIRE NOW"
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
                  ENQUIRE NOW
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Discover Images Section */}
        <section className="discover-img-grid pb-400 max-1365:pb-300 max-1023:py-30">
          <div className="container-fluid relative">
            <div className="max-w-700 mx-auto text-center relative z-9">
              <div className="title-olive">
                <h2 className="h2">
                  {discoverImages.title ||
                    "Stay Lorem ipsum dolor sit amet, consecteturd"}
                </h2>
              </div>
              <div className="mt-30 flex justify-center">
                <a
                  href="#"
                  className="btn btn-link"
                  role="link"
                  aria-label="DISCOVER ALL"
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
                  DISCOVER ALL
                </a>
              </div>
            </div>
            <div className="discover-img-row max-1023:flex max-1023:flex-wrap max-767:justify-center max-1023:gap-x-0 max-1023:-mx-10 max-1023:mt-30">
              {discoverImages.items &&
                discoverImages.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`discover-img w-476 max-1365:w-390 max-1023:w-[33.33%] max-1023:px-10 absolute max-1023:relative ${item.positionClass || ""}`}
                  >
                    <div className="img relative">
                      <img
                        src={item.image}
                        className="rounded-10"
                        width={item.width || 476}
                        height={item.height || 529}
                        alt={item.alt || "Discover Image"}
                      />
                    </div>
                    <span className="text-body-5 tracking-05 font-normal uppercase mt-15 invisible opacity-0">
                      {item.caption}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Safari Section */}
        <section className="text-wtih-video py-100 max-1023:py-30">
          <div className="px-177 max-1365:px-50 max-1023:px-20">
            <div className="flex flex-wrap -mx-18 max-1023:mx-0 max-1023:gap-y-20">
              <div className="lg:w-7/12 w-full px-9 max-1023:px-0">
                <div className="img h-451 max-767:h-auto max-767:pt-[75.42%] relative">
                  <img
                    src={safari.image || "/assets/images/safari-img.webp"}
                    className="img-ratio rounded-10"
                    width="598"
                    height="451"
                    alt="Safari"
                  />
                </div>
              </div>
              <div className="lg:w-5/12 w-full px-9 max-1023:px-0">
                <div className="bg-olive h-451 max-767:h-auto rounded-10 p-80 max-1365:p-40 max-1023:p-20 flex flex-col justify-center">
                  <div className="title-gray">
                    <h2 className="h2">{safari.title}</h2>
                  </div>
                  <div className="content white pt-35 max-1023:pt-15">
                    <p>{safari.content}</p>
                  </div>
                  <div className="mt-35">
                    <a
                      href="#"
                      className="btn btn-link btn-link-white"
                      role="link"
                      aria-label="DISCOVER"
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
                      DISCOVER
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wellness Section */}
        <section className="wellness py-250 max-1023:py-80 max-767:py-30 pb-40 relative overflow-hidden">
          <div className="img-left absolute top-180 max-1023:top-0 left-1/2 max-1023:left-auto max-767:hidden max-1023:rotate-45 -translate-1/2 max-1023:translate-0">
            <img
              src={wellness.image1 || "/assets/images/wellness-img1.webp"}
              className="rounded-10 max-1023:w-150 max-1023:h-150"
              width="268"
              height="271"
              alt="Wellness"
            />
          </div>
          <div className="max-w-580 px-20 mx-auto text-center max-1023:py-50 max-767:py-0">
            <div className="title-olive">
              <h2 className="h2">{wellness.title}</h2>
            </div>
            <div className="content pt-35">
              <p>{wellness.content}</p>
            </div>
            <div className="mt-40 max-1023:mt-20 flex justify-center">
              <a
                href="#"
                className="btn btn-link"
                role="link"
                aria-label="DISCOVER"
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
                DISCOVER
              </a>
            </div>
          </div>
          <div className="img-right absolute bottom-0 left-1/2 max-1023:left-auto max-1023:right-0 max-767:hidden max-1023:rotate-45 -translate-x-1/2 max-1023:translate-0">
            <img
              src={wellness.image2 || "/assets/images/wellness-img2.webp"}
              className="rounded-10 max-1023:w-150 max-1023:h-150"
              width="268"
              height="271"
              alt="Wellness"
            />
          </div>
        </section>

        {/* Offers Section */}
        <section className="offer-wrapper py-100 max-1023:py-50">
          <div className="container-fluid">
            <div className="top-info max-w-531 mx-auto text-center">
              <h2 className="h2 title-olive">Offers</h2>
              <p className="pt-35">
                {offers.length > 0
                  ? offers[0].description
                  : "Lorem ipsum dolor sit amet..."}
              </p>
            </div>
            <div className="flex flex-wrap items-center mt-65 max-1023:mt-20 h-451 max-1023:h-auto relative">
              <div className="lg:w-6/12 w-full">
                <div className="offer-grid">
                  {offers.map((offer) => (
                    <div key={offer.id} className="offer-grid-content">
                      <h4>{offer.title}</h4>
                      <div className="og-content pt-20">
                        <p>{offer.description}</p>
                        <div className="mt-30">
                          <a
                            href="#"
                            className="btn btn-link"
                            aria-label="ENQUIRE NOW"
                          >
                            <span>
                              <img
                                src="/assets/images/link-arrow.svg"
                                width="16"
                                height="14"
                                alt="Arrow"
                              />
                            </span>
                            ENQUIRE NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-6/12 w-full pl-60 max-1023:hidden">
                {/* Static images can be added here if needed */}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="blog-grid py-150 max-1365:py-80 max-1023:py-50">
          <div className="container-fluid">
            <div className="flex flex-wrap items-center justify-between">
              <div className="title-olive">
                <h2 className="h2">{blog.title || "blogs"}</h2>
              </div>
              <div className="btn-custom">
                <a
                  href="#"
                  className="btn btn-olive"
                  role="link"
                  aria-label="READ ALL"
                >
                  READ ALL
                </a>
              </div>
            </div>
            <div className="blog-img-grid relative mt-35">
              <img
                src={blog.image || "/assets/images/blog-img.webp"}
                className="rounded-10 w-full h-451 block object-cover"
                width="1280"
                height="451"
                alt="Blog"
              />
              <div className="absolute top-1/2 -translate-y-1/2 max-w-790 p-100 max-1023:p-30">
                <div className="title-white">
                  <h2 className="h2">{blog.heading}</h2>
                </div>
                <div className="content white pt-25">
                  <p>{blog.content}</p>
                </div>
                <div className="mt-35">
                  <a
                    href="#"
                    className="btn btn-link btn-link-white"
                    role="link"
                    aria-label="READ ARTICLE"
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
                    READ ARTICLE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonial min-h-screen overflow-hidden py-100 pb-0 max-1023:pb-50 relative">
          <div className="container-fluid relative">
            <div className="flex flex-wrap justify-center relative h-[110rem]">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="testimonial-card !h-auto py-100 max-1023:py-50 rounded-10"
                >
                  <div className="max-w-918 mx-auto max-1023:px-30">
                    <h3 className="text-olive/78">{testimonial.text}</h3>
                    <div className="w-full text-right inline-block pt-30">
                      <span className="uppercase font-semibold text-body-3 tracking-02">
                        {testimonial.author}
                      </span>
                    </div>
                    <div className="skip-section">
                      <a
                        href="#offerWrapper"
                        className="uppercase text-body-4 tracking-02"
                        role="link"
                        aria-label="Skip"
                      >
                        Skip
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
