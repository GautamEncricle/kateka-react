import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Conservation = () => {
  const [conservation, setConservation] = useState({});
  const [impactItems, setImpactItems] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/conservation")
      .then((res) => setConservation(res.data))
      .catch(console.error);
    axios
      .get("http://localhost:3000/impactItems")
      .then((res) => setImpactItems(res.data))
      .catch(console.error);
    axios
      .get("http://localhost:3000/projects")
      .then((res) => setProjects(res.data))
      .catch(console.error);
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* Banner Section */}
        <section className="banner py-45 pb-0 pt-180 max-1023:pt-100">
          <div className="container-fluid relative">
            <div className="title-olive text-center pb-60 sticky top-180 max-1023:top-120">
              <h1 className="h1">{conservation.title || "CONSERVATION"}</h1>
            </div>
            <div className="img relative">
              <img
                src={
                  conservation.bannerImage ||
                  "/assets/images/conservation-banner.webp"
                }
                className="img-ratio rounded-10"
                width="1280"
                height="620"
                alt="Conservation"
              />
            </div>
          </div>
        </section>

        {/* Common Content */}
        <section className="common-content py-100 pt-210 max-1023:py-30">
          <div className="container-fluid">
            <div className="max-w-993 mx-auto">
              <div className="title-olive">
                <h2 className="h2">{conservation.description}</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Text with Video (Approach Section) */}
        <section className="text-with-video py-100 max-1023:py-30 relative">
          <div className="bg-tree-img absolute top-0 left-0 w-full h-screen -z-10">
            <img
              src="/assets/images/tree-bg2.svg"
              width="100%"
              height="1235"
              alt="Tree Background"
            />
          </div>
          <div className="px-177 max-1365:px-50 max-1023:px-20 relative z-10">
            <div className="flex flex-wrap -mx-18 max-1023:mx-0 max-1023:gap-y-20">
              <div className="lg:w-7/12 w-full px-9 max-1023:px-0">
                <div className="img h-451 max-767:h-auto max-767:pt-[75.42%] relative">
                  <img
                    src={
                      conservation.approachImage ||
                      "/assets/images/approach.webp"
                    }
                    className="img-ratio rounded-10"
                    width="598"
                    height="451"
                    alt="Approach"
                  />
                </div>
              </div>
              <div className="lg:w-5/12 w-full px-9 max-1023:px-0">
                <div className="bg-olive h-451 max-767:h-auto rounded-10 p-80 max-1365:p-40 max-1023:p-20 flex flex-col justify-center">
                  <div className="title-gray">
                    <h2 className="h2">
                      {conservation.approachTitle ||
                        "Our Conservation Approach"}
                    </h2>
                  </div>
                  <div className="content white pt-20">
                    <p>{conservation.approachDescription}</p>
                  </div>
                  <div className="mt-35">
                    <a
                      href={conservation.approachLink || "#"}
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

        {/* Our Impact Section */}
        <section className="icon-grid relative z-9 py-100 max-1023:py-30">
          <div className="container-fluid">
            <div className="text-center title-olive pb-50">
              <h2 className="h2 flex flex-wrap justify-center gap-x-10">
                OUR IMPACT
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-x-80 gap-y-20">
              {impactItems.map((item, idx) => (
                <div key={idx} className="icon-grid-bx">
                  <div className="icon">
                    <img
                      src={item.image}
                      width="98"
                      height="75"
                      alt={item.title}
                    />
                  </div>
                  <h6>{item.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Listing Section */}
        <section className="img-listing py-100 max-1023:py-30 relative z-9">
          <div className="container-fluid-lg">
            <div className="grid gap-y-25">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="img-listing-grid flex flex-wrap items-center"
                >
                  <div className="lg:w-4/12 w-full">
                    <div className="img relative">
                      <img
                        src={project.image}
                        className="w-full h-full object-cover rounded-10 block"
                        width="266"
                        height="266"
                        alt={project.title}
                      />
                    </div>
                  </div>
                  <div className="lg:w-8/12 w-full max-1023:pt-30">
                    <div className="right-content pl-45 max-1023:pl-0">
                      <div className="title-olive">
                        <h2 className="h2 flex flex-wrap gap-x-10">
                          {project.title}
                        </h2>
                      </div>
                      <div className="content pt-45 max-1023:pt-20">
                        <p>{project.description}</p>
                      </div>
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

export default Conservation;
