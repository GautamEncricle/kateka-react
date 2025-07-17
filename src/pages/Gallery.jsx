import React, { useEffect, useState } from "react";
import axios from "axios";

import BACKEND_URL from "../constants/server";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState({
    images: [],
    filters: [],
    commonContent: {},
    team: [],
  });
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    axios
      .get(BACKEND_URL+"/gallery")
      .then((res) => setGalleryData(res.data))
      .catch(console.error);
  }, []);

  const filteredImages =
    activeFilter === "all"
      ? galleryData.images
      : galleryData.images.filter((img) => img.category === activeFilter);

  return (
    <>
      <main>
        {/* Banner Section */}
        <section className="banner py-45 pb-0 pt-180 max-1023:pt-100">
          <div className="container-fluid relative">
            <div className="title-olive text-center pb-60 sticky top-180 max-1023:top-120">
              <h2 className="h2">Gallery</h2>
            </div>
            <div className="img relative">
              <img
                src={
                  galleryData.bannerImage ||
                  "/assets/images/stay-single-banner.webp"
                }
                className="img-ratio rounded-10"
                width="1280"
                height="620"
                alt="Gallery Banner"
              />
            </div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="gallery-wrapper pt-125 max-1023:pt-50">
          <div className="container-fluid">
            <div className="flex flex-wrap items-center justify-between w-full m-0 p-0 mb-38 last:mb-0">
              <div className="w-full lg:w-1/2">
                <ul className="flex flex-wrap items-center justify-start max-1023:gap-20 gap-38">
                  <li>
                    <button
                      type="button"
                      className="filter-btn-link"
                      data-filter="all"
                      onClick={() => setActiveFilter("all")}
                    >
                      All
                    </button>
                  </li>
                  {galleryData.filters.map((filter, idx) => (
                    <li key={idx}>
                      <button
                        type="button"
                        className="filter-btn-link"
                        data-filter={filter.value}
                        onClick={() => setActiveFilter(filter.value)}
                      >
                        {filter.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="relative inline-flex lg:justify-end w-full">
                  <button
                    id="dropdownBtn"
                    className="flex items-center gap-20 px-20 py-11 border border-olive rounded-10 text-olive font-body font-normal text-body-4 tracking-01"
                  >
                    <span>
                      Media: <span id="selectedOption">{activeFilter}</span>
                    </span>
                    <svg
                      className="w-24 h-24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Dropdown menu can be implemented here if needed */}
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid">
              {filteredImages.map((img, idx) => (
                <div key={idx} className={`gallery-item ${img.category}`}>
                  <a href={img.src} data-lity>
                    {img.type === "video" ? (
                      <video
                        className="w-full h-full block object-cover"
                        src={img.src}
                        autoPlay
                        muted
                      />
                    ) : (
                      <img
                        src={img.src}
                        width={img.width}
                        height={img.height}
                        alt={img.alt || "Gallery"}
                      />
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Content */}
        <section className="common-content py-210 max-1023:py-50">
          <div className="container-fluid">
            <div className="max-w-993 mx-auto">
              <div className="title-olive">
                <h2 className="h2">{galleryData.commonContent.title}</h2>
              </div>
              <div className="content pt-35">
                <p>{galleryData.commonContent.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet The Team */}
        <section className="meet-team-wrapper pb-100 max-1023:pb-50">
          <div className="container-fluid text-center">
            <div className="text-center title-olive mb-38 last:mb-0">
              <h2 className="h2">Meet The Team</h2>
            </div>
            <div className="content max-w-530 mx-auto mb-40 last:mb-0">
              <p>{galleryData.teamDescription}</p>
            </div>
            <div className="group/section relative flex max-h-[100lvh] flex-col items-center justify-center overflow-hidden mt-38">
              <div className="moving-teams flex w-[190%] shrink-0 flex-col justify-center lg:w-[110%]">
                <div className="moving-teams-row -mr-[100%] grid w-[300%] shrink-0 grid-cols-[repeat(3,1fr)]">
                  <div className="grid h-fit grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)] will-change-transform">
                    {galleryData.team.map((member, idx) => (
                      <div
                        key={idx}
                        className="h-fit w-full px-[2.75vw] py-[3.5vw] lg:px-[.8625vw] lg:py-[.8625vw] block"
                      >
                        <div className="team relative aspect-[352/200] size-full rounded-10 overflow-hidden">
                          <img
                            src={member.image}
                            className="rounded-16 aspect-[352/200] size-full object-cover object-center"
                            width="430"
                            height="240"
                            alt={member.name}
                          />
                          <button
                            type="button"
                            className="info-icon absolute top-18 left-18"
                          >
                            <img
                              src="/assets/images/info.svg"
                              width="24"
                              height="24"
                              alt="Info"
                            />
                          </button>
                          <div className="info-content hidden flex-wrap gap-10 bg-gray rounded-10 py-8 px-10 w-fit absolute top-18 left-18">
                            <div className="close">
                              <svg
                                width="9"
                                height="9"
                                viewBox="0 0 9 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="11.6838"
                                  height="0.906947"
                                  transform="matrix(-0.716639 -0.697444 -0.345254 0.938509 8.6875 8.14868)"
                                  fill="#302D2B"
                                />
                                <rect
                                  width="11.6838"
                                  height="0.906947"
                                  transform="matrix(0.716639 -0.697444 0.345254 0.938509 0 8.14868)"
                                  fill="#302D2B"
                                />
                              </svg>
                            </div>
                            <div className="ctm-content flex flex-col w-fit max-w-[calc(100%_-_9px)]">
                              <h6 className="font-extralight !text-body-4 !leading-18 inline-block !font-body">
                                {member.name}
                              </h6>
                              <span className="uppercase font-normal text-body-5 tracking-05">
                                {member.jobTitle}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default Gallery;
