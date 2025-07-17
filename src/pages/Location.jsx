import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Location = () => {
  const [locationData, setLocationData] = useState({});
  const [tooltipItems, setTooltipItems] = useState([]);
  const [howToGet, setHowToGet] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/location")
      .then((res) => setLocationData(res.data))
      .catch(console.error);
    axios
      .get("http://localhost:3000/locationTooltips")
      .then((res) => setTooltipItems(res.data))
      .catch(console.error);
    axios
      .get("http://localhost:3000/howToGet")
      .then((res) => setHowToGet(res.data))
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
              <h1 className="h1">{locationData.title || "LOCATION"}</h1>
            </div>
            <div className="img relative">
              <img
                src={
                  locationData.bannerImage ||
                  "/assets/images/safari-banner.webp"
                }
                className="img-ratio rounded-10"
                width="1280"
                height="620"
                alt="Location"
              />
            </div>
            {locationData.video && (
              <div className="absolute bottom-24 left-1/2 w-[calc(100%_-_160px)] -translate-1/2 text-center">
                <a
                  href={locationData.video}
                  className="text-body-4 tracking-02 text-white uppercase"
                  data-lity
                >
                  WATCH FULL VIDEO
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Common Content */}
        <section className="common-content py-100 pt-210 max-1023:py-30">
          <div className="container-fluid">
            <div className="max-w-993 mx-auto">
              <div className="title-olive">
                <h2 className="h2">{locationData.description}</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Image Tooltip Section */}
        <section className="img-tooltip relative z-9 py-100 max-767:py-30 max-767:overflow-x-hidden">
          <div className="relative">
            <div className="img relative">
              <img
                src={
                  locationData.tooltipImage || "/assets/images/about-us.webp"
                }
                className="min-1439:object-top rounded-10 w-full h-full object-cover block"
                width="1440"
                height="737"
                alt="About"
              />
              {tooltipItems.map((item, idx) => (
                <div key={idx} className={`info-grid tooltip${idx + 1}`}>
                  <div className="info-icon">
                    <img
                      src="/assets/images/info.svg"
                      width="24"
                      height="24"
                      alt="Info"
                    />
                  </div>
                  <div className="info-content flex flex-col bg-gray rounded-10 py-8 px-10">
                    <h6 className="font-normal !text-body-5 !leading-18 inline-block !font-body uppercase">
                      {item.title}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Text with Video Section */}
        <section className="text-wtih-video py-100 max-1023:py-30 relative">
          <div className="bg-tree-img absolute top-0 left-0 w-full h-screen">
            <img
              src="/assets/images/tree-bg2.svg"
              width="100%"
              height="1235"
              alt=""
            />
          </div>
          <div className="px-177 max-1365:px-50 max-1023:px-20 relative z-9">
            <div className="flex flex-wrap -mx-18 max-1023:mx-0 max-1023:gap-y-20">
              <div className="lg:w-5/12 w-full px-9 max-1023:px-0">
                <div className="img h-451 max-767:h-auto max-767:pt-[75.42%] relative">
                  <iframe
                    src={
                      howToGet.mapEmbedUrl ||
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4022.335124490098!2d31.29624307584952!3d-24.221528086178242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec323fae9cbd7ab%3A0x90a3727643d2e539!2sKateka%20Safari%20and%20Wellness!5e1!3m2!1sen!2sin!4v1747131808885!5m2!1sen!2sin"
                    }
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map"
                    className="img-ratio rounded-10"
                  />
                </div>
              </div>
              <div className="lg:w-7/12 w-full px-9 max-1023:px-0">
                <div className="bg-olive h-451 max-767:h-auto rounded-10 p-80 max-1365:p-40 max-1023:p-20 flex flex-col justify-center">
                  <div className="title-gray">
                    <h2 className="h2 flex flex-wrap gap-x-10">
                      {howToGet.title || "How To Get There"}
                    </h2>
                  </div>
                  <div className="content global-list global-list-white lightfont white pt-35 max-1023:pt-15">
                    <p>{howToGet.description}</p>
                    {howToGet.points && (
                      <ul>
                        {howToGet.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="mt-35 flex">
                    <a
                      href={howToGet.downloadLink || "#"}
                      className="btn btn-gray btn-link-white"
                      role="link"
                      aria-label="DOWNLOAD MAP"
                    >
                      DOWNLOAD MAP
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Location;
