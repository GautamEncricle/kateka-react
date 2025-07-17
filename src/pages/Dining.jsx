import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dining = () => {
  const [dining, setDining] = useState({});
  const [galleryImages, setGalleryImages] = useState([]);
  const [stayListings, setStayListings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/dining")
      .then((res) => setDining(res.data))
      .catch(console.error);
    axios
      .get("http://localhost:3000/diningGallery")
      .then((res) => setGalleryImages(res.data))
      .catch(console.error);
    axios
      .get("http://localhost:3000/stayListings")
      .then((res) => setStayListings(res.data))
      .catch(console.error);
  }, []);

  // Defensive checks to avoid undefined errors
  const safeGalleryImages = Array.isArray(galleryImages) ? galleryImages : [];
  const safeStayListings = Array.isArray(stayListings) ? stayListings : [];

  return (
    <>
      <Header />

      <main>
        {/* Banner Section */}
        <section className="banner py-45 pb-0 pt-180 max-1023:pt-100">
          <div className="container-fluid relative">
            <div className="title-olive text-center pb-60 sticky top-180 max-1023:top-120">
              <h1 className="h1">Dining</h1>
            </div>
            <div className="img relative">
              <img
                src={dining.bannerImage || "/assets/images/dining-banner.webp"}
                className="img-ratio rounded-10"
                width="1280"
                height="620"
                alt="Dining"
              />
            </div>
          </div>
        </section>

        {/* Common Content */}
        <section className="common-content py-100 pt-210 max-1023:py-30 relative">
          <div className="bg-tree-img addshadow absolute top-0 left-0 w-full h-screen"></div>
          <div className="container-fluid relative z-9">
            <div className="max-w-993 mx-auto">
              <div className="title-olive">
                <h2 className="h2">{dining.title}</h2>
              </div>
              <div className="content pt-35">
                <p>{dining.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Slider */}
        <section className="gallery-slider-wrapper py-100 max-1023:py-30 relative z-9">
          <div className="container-fluid">
            <div className="gallery-slider swiper rounded-10 mb-30">
              <div className="swiper-wrapper">
                {safeGalleryImages.map((image, idx) => (
                  <div key={idx} className="swiper-slide">
                    <div className="img relative">
                      <img
                        src={image.src}
                        className="img-ratio"
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="autoplay-progress">
                <div className="progress-bar"></div>
              </div>
            </div>
            <div className="gallery-thumb-slider swiper">
              <div className="swiper-wrapper">
                {safeGalleryImages.map((image, idx) => (
                  <div key={idx} className="swiper-slide">
                    <div className="img relative">
                      <img
                        src={image.src}
                        className="img-ratio rounded-10"
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stay Listing */}
        <section className="stay-listing py-100 max-1023:py-30">
          <div className="container-fluid grid gap-y-225 max-1023:gap-y-50">
            {safeStayListings.map((stay, idx) => {
              const safeKeyFacts = Array.isArray(stay.keyFacts)
                ? stay.keyFacts
                : [];
              return (
                <div
                  key={idx}
                  className={`stay-listing-group ${stay.groupClass} imgFadeup`}
                >
                  <div className="flex flex-wrap items-start">
                    <div
                      className={`lg:w-${stay.imageWidth} w-full relative ${stay.orderClass} pl-50 max-1023:pl-0`}
                    >
                      <div className="listing-info justify-end">
                        <div className="left-content">
                          <div className="title-olive max-w-370">
                            <h2 className="h2">{stay.title}</h2>
                          </div>
                          <div className="content-listing pt-35">
                            <ul>
                              {safeKeyFacts.map((fact, i) => (
                                <li key={i}>{fact}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="content max-w-448 pt-15">
                            <p>{stay.description}</p>
                          </div>
                          <div className="pt-35 flex flex-wrap">
                            <a
                              href={stay.enquireLink}
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
                            {stay.downloadLink && (
                              <a
                                href={stay.downloadLink}
                                className="btn btn-olive"
                                role="link"
                                aria-label="DOWNLOAD MENU"
                              >
                                DOWNLOAD MENU
                                <span>
                                  <img
                                    src="/assets/images/download-ico.svg"
                                    className="transition-all duration-300"
                                    width="9"
                                    height="9"
                                    alt="Arrow"
                                  />
                                </span>
                              </a>
                            )}
                          </div>
                        </div>
                        {stay.imageSecondary && (
                          <div className="img imgAnim w-329 max-1365:w-300 max-1023:w-full hidden max-1023:block max-992:mt-20 max-992:pt-[56.86%] max-767:pt-[40.00%] relative rounded-10 overflow-hidden">
                            <img
                              src={stay.imageSecondary}
                              className="w-full h-full object-cover block"
                              width="329"
                              height="219"
                              alt={stay.title}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      className={`lg:w-${stay.contentWidth} w-full max-1023:mt-30 ${stay.orderContentClass}`}
                    >
                      <div className="img imgAnim relative img-503-286">
                        <img
                          src={stay.imagePrimary}
                          className="img-ratio rounded-10"
                          width="503"
                          height="286"
                          alt={stay.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Discover Text Overlay */}
        <section className="discover-text-overlay py-100 max-1023:py-50">
          <div className="container-fluid">
            <div className="text-center title-olive">
              <h2 className="h2">Discover more at kateka</h2>
            </div>
            <div className="discover-grid py-80 max-1023:pt-30 max-1023:pb-0 overflow-hidden">
              <div className="flex flex-col gap-y-20">
                <a
                  href="#"
                  className="w-full text-center relative discover-item"
                >
                  <div className="discover-item-row">
                    <div className="discover-bx">
                      <h2>Wellness</h2>
                    </div>
                    <div className="discover-img max-1023:hidden">
                      <img
                        src="/assets/images/wellness.webp"
                        className="hidden-img rounded-10"
                        width="264"
                        height="267"
                        alt="Wellness"
                      />
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="w-full text-center relative discover-item"
                >
                  <div className="discover-item-row">
                    <div className="discover-bx">
                      <h2>Safari</h2>
                    </div>
                    <div className="discover-img max-1023:hidden">
                      <img
                        src="/assets/images/safari.webp"
                        className="hidden-img rounded-10"
                        width="264"
                        height="267"
                        alt="Safari"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Dining;
