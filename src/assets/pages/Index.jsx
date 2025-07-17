import React from "react";

function Index() {
  return (
    <>
      <header className="header bg-primary">
        <div
          className="header-top fixed
                
                z-9999 w-full pt-42"
        >
          <div className="container-fluid">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex flex-wrap gap-x-50 max-1199:gap-x-30">
                <div className="menu-icon flex cursor-pointer flex-col gap-y-5">
                  <svg
                    width="32"
                    height="2"
                    viewBox="0 0 32 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="2" fill="#302D2B" />
                  </svg>
                  <svg
                    width="20"
                    height="2"
                    viewBox="0 0 20 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="2" fill="#302D2B" />
                  </svg>
                  <svg
                    width="32"
                    height="2"
                    viewBox="0 0 32 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="2" fill="#302D2B" />
                  </svg>
                </div>
                <div className="sticky-logo hidden">
                  <a href="#" role="link" aria-label="Kateka">
                    <img
                      src="../assets/images/menu-logo.svg"
                      width="194"
                      height="21"
                      alt="Kateka"
                      className="max-w-150"
                    />
                  </a>
                </div>
                <div className="menu-logo hidden">
                  <a href="#" role="link" aria-label="Kateka">
                    <img
                      src="../assets/images/menu-logo.svg"
                      width="194"
                      height="21"
                      alt="Kateka"
                    />
                  </a>
                </div>
              </div>
              <div className="header-top-right flex flex-wrap items-center gap-x-95 max-1199:gap-x-40 max-1023:hidden">
                <div className="top-navbar">
                  <ul className="flex flex-wrap gap-x-32">
                    <li>
                      <a href="#" role="link" aria-label="Stay">
                        Stay
                      </a>
                    </li>
                    <li>
                      <a href="#" role="link" aria-label="Safari">
                        Safari
                      </a>
                    </li>
                    <li>
                      <a href="#" role="link" aria-label="Wellness">
                        Wellness
                      </a>
                    </li>
                    <li>
                      <a href="#" role="link" aria-label="Experiences">
                        Experiences
                      </a>
                    </li>
                    <li>
                      <a href="#" role="link" aria-label="Offers">
                        Offers
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap items-center gap-x-28">
                  <a href="#" className="btn btn-link">
                    <span>
                      <img
                        src="../assets/images/link-arrow.svg"
                        className="transition-all duration-300"
                        width="16"
                        height="14"
                        alt="Arrow"
                      />
                    </span>
                    ENQUIRE NOW
                  </a>
                  <a
                    href="#"
                    className="btn btn-olive"
                    role="link"
                    aria-label="Book Now"
                  >
                    Book Now
                  </a>
                </div>
              </div>
              <div className="hidden max-1023:block mobile-logo">
                <div className="logo">
                  <a href="#" role="link" aria-label="Kateka">
                    <img
                      src="../assets/images/logo.svg"
                      width="150"
                      height="100"
                      alt="Kateka"
                    />
                  </a>
                </div>
              </div>
              <div className="hidden max-1023:block booknowbtn">
                <a
                  href="#"
                  className="btn btn-olive"
                  role="link"
                  aria-label="Book Now"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Nav container Start */}
      <div className="main-nav nav-container hidden">
        <div className="menu-wrapper bg-black2 relative z-99999 text-white">
          <div className="relative flex h-screen w-full">
            <div className="menu-wrapper-content max-1023:px-40 flex h-full w-full flex-wrap items-center justify-center max-992:justify-start px-110 max-1365:px-60 pt-150 max-1023:pt-100 pb-50">
              <div className="w-full h-full flex flex-wrap items-center overflow-y-auto">
                <div className="w-full lg:w-4/12">
                  <div className="mainnav-inner lgscreen:overflow-x-hidden flex justify-between">
                    <div className="mainnav-menu-left lgscreen:w-full relative">
                      <ul className="mdscreen:gap-y-[18px] nav-menu-main max-767:gap-y-12 grid w-fit gap-y-20 max-992:gap-y-10">
                        <li>
                          <a href="#" role="link" aria-label="Stay">
                            Stay
                          </a>
                        </li>
                        <li>
                          <a href="#" role="link" aria-label="Safari">
                            Safari
                          </a>
                        </li>
                        <li>
                          <a href="#" role="link" aria-label="Wellness">
                            Wellness
                          </a>
                        </li>
                        <li>
                          <a href="#" role="link" aria-label="Experiences">
                            Experiences
                          </a>
                        </li>
                        <li>
                          <a href="#" role="link" aria-label="Offers">
                            Offers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-8/12 max-1023:hidden">
                  <div className="flex flex-wrap justify-end">
                    <div className="img1">
                      <img
                        src="../assets/images/menu-img1.webp"
                        className="rounded-10"
                        width="324"
                        height="156"
                        alt="Menu Image"
                      />
                    </div>
                    <div className="img2 relative top-90 -left-60">
                      <img
                        src="../assets/images/menu-img2.webp"
                        className="rounded-10"
                        width="247"
                        height="310"
                        alt="Menu Image"
                      />
                    </div>
                    <div className="img3">
                      <img
                        src="../assets/images/menu-img3.webp"
                        className="rounded-10"
                        width="190"
                        height="178"
                        alt="Menu Image"
                      />
                    </div>
                  </div>
                </div>
                <div className="mainnav-btm max-767:mt-25 mt-50">
                  <ul className="max-767:flex-col max-1365:gap-x-25 flex flex-wrap justify-between max-992:justify-start gap-x-30 gap-y-10">
                    <li>
                      <a href="#" role="link" aria-label="About">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" role="link" aria-label="Location">
                        Location
                      </a>
                    </li>
                    <li>
                      <a href="#" role="link" aria-label="Dining">
                        Dining
                      </a>
                    </li>
                    <li>
                      <a href="#" role="link" aria-label="Conservation">
                        Conservation
                      </a>
                    </li>
                    <li>
                      <a href="#" role="link" aria-label="Facilities">
                        Facilities
                      </a>
                    </li>
                    <li>
                      <a href="#" role="link" aria-label="Faq">
                        Faq
                      </a>
                    </li>
                    <li>
                      <a href="#" role="link" aria-label="Rates">
                        Rates
                      </a>
                    </li>
                    <li>
                      <a href="#" role="link" aria-label="Gallery">
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a href="#" role="link" aria-label="Blog">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        <section className="banner py-45 pb-0 pt-180 max-1023:pt-100">
          <div className="container-fluid relative">
            <div className="logo text-center sticky top-180 max-1023:top-120 pb-110 max-1023:pb-50">
              <a href="#">
                <img
                  src="./src/assets/images/logo.svg"
                  className="mx-auto max-1023:max-w-250"
                  width="576"
                  height="76"
                  alt="Kateka"
                />
              </a>
              <span className="text-32 max-767:text-24 tracking-01 font-heading inline-block pt-28 uppercase">
                Safari & Wellness Experience
              </span>
            </div>
            <div className="img relative">
              <img
                src="../assets/images/banner-img.webp"
                className="img-ratio rounded-10"
                width="1280"
                height="620"
                alt="Banner"
              />
            </div>
            <div className="absolute bottom-24 left-1/2 w-[calc(100%_-_160px)] -translate-1/2 text-center">
              <a
                href="https://www.youtube.com/watch?v=QwYhzm70-rg"
                className="text-body-4 tracking-02 text-white uppercase"
                data-lity
              >
                WATCH FULL VIDEO
              </a>
            </div>
          </div>
        </section>

        <section className="about-intro max-1023:py-50 h-screen max-1023:hidden">
          <div className="about-intro-inner bg-tree py-100 h-full relative">
            <div className="px-216 relative z-9 max-1023:px-20">
              <div className="title-olive max-w-370">
                <h2 className="h2">About Ipsum Dolor Sit Amet</h2>
              </div>
              <div className="content pt-30 max-w-624">
                <p>
                  We are passionate about introducing guests from all over the
                  world to Kateka, our five-star home. We would love for you to
                  come and discover a wilderness meets wellness experience where
                  our love for hospitality is evident. Whether it's the wildlife
                  you encounter, the people you meet during your stay, the
                  facilities on offer or simply all of it, our hope for every
                  guest is to leave feeling like members of the family and not
                  wanting to leave!
                </p>
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
                      src="../assets/images/link-arrow.svg"
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

        <section className="discover-img-grid pb-400 max-1365:pb-300 max-1023:py-30">
          <div className="container-fluid relative">
            <div className="max-w-700 mx-auto text-center relative z-9">
              <div className="title-olive">
                <h2 className="h2">
                  Stay Lorem ipsum dolor sit amet, consecteturd
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
                      src="../assets/images/link-arrow.svg"
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
              <div className="discover-img w-476 max-1365:w-390 max-1023:w-[33.33%] max-1023:px-10 absolute max-1023:relative left-80 max-1023:left-auto -top-150 max-1023:top-auto">
                <div className="img relative">
                  <img
                    src="../assets/images/discover-img1.webp"
                    className="rounded-10"
                    width="476"
                    height="529"
                    alt="Private Villa"
                  />
                </div>
                <span className="text-body-5 tracking-05 font-normal uppercase mt-15 invisible opacity-0">
                  Private Villa
                </span>
              </div>
              <div className="discover-img w-495 max-1365:w-400 max-1023:w-[33.33%] max-1023:px-10 absolute max-1023:relative right-80 max-1023:right-auto -top-100 max-1023:top-auto">
                <div className="img relative">
                  <img
                    src="../assets/images/discover-img2.webp"
                    className="rounded-10"
                    width="495"
                    height="491"
                    alt="Private Villa"
                  />
                </div>
                <span className="text-body-5 tracking-05 font-normal uppercase mt-15 invisible opacity-0">
                  Private Villa
                </span>
              </div>
              <div className="discover-img w-385 max-1365:w-300 max-1023:w-[33.33%] max-1023:px-10 absolute max-1023:relative right-300 max-1023:right-auto -bottom-350 max-1365:-bottom-230 max-1023:bottom-auto">
                <div className="img relative">
                  <img
                    src="../assets/images/discover-img3.webp"
                    className="rounded-10"
                    width="385"
                    height="274"
                    alt="Private Villa"
                  />
                </div>
                <span className="text-body-5 tracking-05 font-normal uppercase mt-15 invisible opacity-0">
                  Private Villa
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="text-wtih-video py-100 max-1023:py-30">
          <div className="px-177 max-1365:px-50 max-1023:px-20">
            <div className="flex flex-wrap -mx-18 max-1023:mx-0 max-1023:gap-y-20">
              <div className="lg:w-7/12 w-full px-9 max-1023:px-0">
                <div className="img h-451 max-767:h-auto max-767:pt-[75.42%] relative">
                  <img
                    src="../assets/images/safari-img.webp"
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
                    <h2 className="h2">Safari</h2>
                  </div>
                  <div className="content white pt-35 max-1023:pt-15">
                    <p>
                      Lorem ipsum dolor sit amet, consecteturd do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation Lorem ipsum dolor
                      sit amet, consecteturd do eiusmod tempor incididunt.
                    </p>
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
                          src="../assets/images/link-arrow.svg"
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

        <section className="wellness py-250 max-1023:py-80 max-767:py-30 pb-40 relative overflow-hidden">
          <div className="img-left absolute top-180 max-1023:top-0 left-1/2 max-1023:left-auto max-767:hidden max-1023:rotate-45 -translate-1/2 max-1023:translate-0">
            <img
              src="../assets/images/wellness-img1.webp"
              className="rounded-10 max-1023:w-150 max-1023:h-150"
              width="268"
              height="271"
              alt="Wellness"
            />
          </div>
          <div className="max-w-580 px-20 mx-auto text-center max-1023:py-50 max-767:py-0">
            <div className="title-olive">
              <h2 className="h2">Wellness</h2>
            </div>
            <div className="content pt-35">
              <p>
                Lorem ipsum dolor sit amet, consecteturd do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation Lorem ipsum dolor sit amet,
                consecteturd do eiusmod tempor incididunt veniam.
              </p>
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
                    src="../assets/images/link-arrow.svg"
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
              src="../assets/images/wellness-img2.webp"
              className="rounded-10 max-1023:w-150 max-1023:h-150"
              width="268"
              height="271"
              alt="Wellness"
            />
          </div>
        </section>

        <section className="img-grid-slider py-100 max-1023:py-50">
          <div className="container-fluid relative">
            <div className="flex flex-wrap justify-between -mx-18 max-1023:mx-0 max-1023:mt-20 gap-y-20"></div>
            <div className="grid grid-cols-3 max-639:flex max-639:flex-col gap-20">
              <div className="card relative max-639:order-2">
                <img
                  src="../assets/images/card-img1.webp"
                  className="w-full h-full block object-cover rounded-10"
                  width="414"
                  height="509"
                  alt="experience Kateka"
                />
              </div>
              <div className="card relative max-639:order-3">
                <video
                  className="img-ratio w-full h-full block object-cover rounded-10"
                  src="../assets/images/KatekaSafari-Wellness-Experience.mp4"
                  autoPlay
                  muted
                ></video>
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
                  src="../assets/images/card-img3.webp"
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
                          src="../assets/images/link-arrow.svg"
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

        <section class="text-video pt-100 pb-250 max-1023:py-50 relative">
          <div class="bg-tree-img absolute top-0 left-0 w-full h-screen">
            <img
              src="../assets/images/tree-bg2.svg"
              width="100%"
              height="1235"
              alt=""
            />
          </div>
          <div class="max-w-826 mx-auto px-20 relative z-9">
            <div class="flex flex-wrap items-end">
              <div class="lg:w-8/12 w-full">
                <div class="max-w-507">
                  <div class="title-olive">
                    <h2 class="h2">Conservation and sustainability sit amet</h2>
                  </div>
                  <div class="content max-w-479 pt-35 max-1023:pt-15">
                    <p>
                      Lorem ipsum dolor sit amet, consecteturd do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation Lorem ipsum dolor
                      sit amet, consecteturd do eiusmod tempor incididunt.
                    </p>
                  </div>
                  <div class="mt-30">
                    <a
                      href="#"
                      class="btn btn-link"
                      role="link"
                      aria-label="LEARN MORE"
                    >
                      <span>
                        <img
                          src="../assets/images/link-arrow.svg"
                          class="transition-all duration-300"
                          width="16"
                          height="14"
                          alt="Arrow"
                        />
                      </span>
                      LEARN MORE
                    </a>
                  </div>
                </div>
              </div>
              <div class="lg:w-4/12 w-full -mb-50 max-1023:mt-30">
                <div class="video relative img-266-266 rounded-10 overflow-hidden">
                  <video class="img-ratio" controls autoplay muted>
                    <source
                      src="../assets/images/KatekaSafari-Wellness-Experience.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="testimonial min-h-screen overflow-hidden py-100 pb-0 max-1023:pb-50 relative">
          <div class="container-fluid relative">
            <div class="flex flex-wrap justify-center relative h-[110rem]">
              <div class="testimonial-card !h-auto py-100 max-1023:py-50 rounded-10">
                <div class="max-w-918 mx-auto max-1023:px-30">
                  <h3 class="text-olive/78">
                    Lorem ipsum dolor sit amet, consecteturd do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud.
                  </h3>
                  <div class="w-full text-right inline-block pt-30">
                    <span class="uppercase font-semibold text-body-3 tracking-02">
                      Name, Country
                    </span>
                  </div>
                  <div class="skip-section">
                    <a
                      href="#offerWrapper"
                      class="uppercase text-body-4 tracking-02"
                      role="link"
                      aria-label="Skip"
                    >
                      Skip
                    </a>
                  </div>
                </div>
              </div>
              <div class="testimonial-card !h-auto py-100 max-1023:py-50 rounded-10">
                <div class="max-w-918 mx-auto max-1023:px-30">
                  <h3 class="text-olive/78">
                    Lorem ipsum dolor sit amet, consecteturd do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud.
                  </h3>
                  <div class="w-full text-right inline-block pt-30">
                    <span class="uppercase font-semibold text-body-3 tracking-02">
                      Name, Country
                    </span>
                  </div>
                  <div class="skip-section">
                    <a
                      href="#offerWrapper"
                      class="uppercase text-body-4 tracking-02"
                      role="link"
                      aria-label="Skip"
                    >
                      Skip
                    </a>
                  </div>
                </div>
              </div>
              <div class="testimonial-card !h-auto py-100 max-1023:py-50 rounded-10">
                <div class="max-w-918 mx-auto max-1023:px-30">
                  <h3 class="text-olive/78">
                    Lorem ipsum dolor sit amet, consecteturd do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud.
                  </h3>
                  <div class="w-full text-right inline-block pt-30">
                    <span class="uppercase font-semibold text-body-3 tracking-02">
                      Name, Country
                    </span>
                  </div>
                  <div class="skip-section">
                    <a
                      href="#offerWrapper"
                      class="uppercase text-body-4 tracking-02"
                      role="link"
                      aria-label="Skip"
                    >
                      Skip
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="offerWrapper" class="offer-wrapper py-100 max-1023:py-50">
          <div class="container-fluid">
            <div class="top-info max-w-531 mx-auto text-center">
              <div class="title-olive">
                <h2 class="h2">Offers</h2>
              </div>
              <div class="content pt-35">
                <p>
                  Lorem ipsum dolor sit amet, consecteturd do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam,
                </p>
              </div>
            </div>
            <div class="flex flex-wrap items-center mt-65 max-1023:mt-20 h-451 max-1023:h-auto relative">
              <div class="lg:w-6/12 w-full">
                <div class="offer-grid">
                  <div class="offer-grid-content">
                    <h4>STAY LONGER FOR LESS</h4>
                    <div class="og-content">
                      <div class="content pt-20">
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Ullamcorper
                          quam pellentesque porttitor nisi quis bibendum
                          tristique consequat orci. Ut suspendisse enim egestas
                          ac.
                        </p>
                      </div>
                      <div class="mt-30">
                        <a
                          href="#"
                          class="btn btn-link"
                          role="link"
                          aria-label="ENQUIRE NOW"
                        >
                          <span>
                            <img
                              src="../assets/images/link-arrow.svg"
                              class="transition-all duration-300"
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
                  <div class="offer-grid-content">
                    <h4>15% OFF ONLINE BOOKINGS</h4>
                    <div class="og-content">
                      <div class="content pt-20">
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Ullamcorper
                          quam pellentesque porttitor nisi quis bibendum
                          tristique consequat orci. Ut suspendisse enim egestas
                          ac.
                        </p>
                      </div>
                      <div class="mt-30">
                        <a
                          href="#"
                          class="btn btn-link"
                          role="link"
                          aria-label="ENQUIRE NOW"
                        >
                          <span>
                            <img
                              src="../assets/images/link-arrow.svg"
                              class="transition-all duration-300"
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
                  <div class="offer-grid-content">
                    <h4>FAMILY FUN</h4>
                    <div class="og-content">
                      <div class="content pt-20">
                        <p>
                          Lorem ipsum dolor sit amet consectetur. Ullamcorper
                          quam pellentesque porttitor nisi quis bibendum
                          tristique consequat orci. Ut suspendisse enim egestas
                          ac.
                        </p>
                      </div>
                      <div class="mt-30">
                        <a
                          href="#"
                          class="btn btn-link"
                          role="link"
                          aria-label="ENQUIRE NOW"
                        >
                          <span>
                            <img
                              src="../assets/images/link-arrow.svg"
                              class="transition-all duration-300"
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
                </div>
              </div>
              <div class="lg:w-6/12 w-full pl-60 max-1023:hidden">
                <div class="offer-grid-img absolute top-0">
                  <img
                    src="../assets/images/offer-img1.webp"
                    class="rounded-10 w-598 h-451 block object-cover"
                    width="598"
                    height="451"
                    alt="STAY LONGER FOR LESS"
                  />
                </div>
                <div class="offer-grid-img absolute top-0">
                  <img
                    src="../assets/images/discover-img3.webp"
                    class="rounded-10 w-598 h-451 block object-cover"
                    width="598"
                    height="451"
                    alt="STAY LONGER FOR LESS"
                  />
                </div>
                <div class="offer-grid-img absolute top-0">
                  <img
                    src="../assets/images/offer-img1.webp"
                    class="rounded-10 w-598 h-451 block object-cover"
                    width="598"
                    height="451"
                    alt="STAY LONGER FOR LESS"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="blog-grid py-150 max-1365:py-80 max-1023:py-50">
          <div class="container-fluid">
            <div class="flex flex-wrap items-center justify-between">
              <div class="title-olive">
                <h2 class="h2">blogs</h2>
              </div>
              <div class="btn-custom">
                <a
                  href="#"
                  class="btn btn-olive"
                  role="link"
                  aria-label="READ ALL"
                >
                  READ ALL
                </a>
              </div>
            </div>
            <div class="blog-img-grid relative mt-35">
              <img
                src="../assets/images/blog-img.webp"
                class="rounded-10 w-full h-451 block object-cover"
                width="1280"
                height="451"
                alt="Blog"
              />
              <div class="absolute top-1/2 -translate-y-1/2 max-w-790 p-100 max-1023:p-30">
                <div class="title-white">
                  <h2 class="h2">Lorem ipsum dolor sit amet consecteturd</h2>
                </div>
                <div class="content white pt-25">
                  <p>
                    Lorem ipsum dolor sit amet, consecteturd do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation Lorem ipsum dolor
                    sit amet, consecteturd do eiusmod tempor incididunt.
                  </p>
                </div>
                <div class="mt-35">
                  <a
                    href="#"
                    class="btn btn-link btn-link-white"
                    role="link"
                    aria-label="READ ARTICLE"
                  >
                    <span>
                      <img
                        src="../assets/images/link-arrow.svg"
                        class="transition-all duration-300"
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
      </main>

      <footer class="footer pb-30">
        <div class="container-fluid">
          <div class="newsletter bg-olive rounded-tl-10 rounded-tr-10 py-70">
            <div class="max-w-766 mx-auto">
              <div class="text-center">
                <div class="title-white">
                  <h5 class="tracking-01">join our newsletter</h5>
                </div>
                <div class="content white pt-10">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
              <div class="newsletter-from"></div>
            </div>
          </div>

          <div class="footer-btm bg-black2 rounded-bl-10 rounded-br-10 px-65 max-1023:px-20 pb-40">
            <div class="flex flex-wrap max-1199:flex-col items-center justify-between py-60 max-1023:py-30 border-0 border-b-1 border-solid border-white max-1199:gap-y-20">
              <div class="logo">
                <a href="#">
                  <img
                    src="../assets/images/menu-logo.svg"
                    width="164"
                    height="48"
                    alt="Kateka"
                  />
                </a>
              </div>
              <h6 class="text-white uppercase tracking-01 max-w-436 text-center">
                Bespoke luxury lodge where wellness meets wilderness
              </h6>
              <div class="flex flex-wrap items-center gap-x-20">
                <a
                  href="#"
                  class="btn btn-link btn-link-white"
                  role="link"
                  aria-label="ENQUIRE NOW"
                >
                  <span>
                    <img
                      src="../assets/images/link-arrow.svg"
                      class="transition-all duration-300"
                      width="16"
                      height="14"
                      alt="Arrow"
                    />
                  </span>
                  ENQUIRE NOW
                </a>
                <a
                  href="#"
                  class="btn btn-white"
                  role="link"
                  aria-label="Book Now"
                >
                  Book Now
                </a>
              </div>
            </div>
            <div class="footer-navbar pt-80 max-1023:pt-30 flex flex-col gap-y-10 items-center justify-center">
              <div class="footer-navbar-top">
                <ul class="flex flex-wrap max-639:flex-col justify-center gap-x-24 gap-y-10 max-639:text-center">
                  <li>
                    <a href="#" role="link" aria-label="HOME">
                      HOME
                    </a>
                  </li>
                  <li>
                    <a href="#" role="link" aria-label="STAY">
                      STAY
                    </a>
                  </li>
                  <li>
                    <a href="#" role="link" aria-label="STAY">
                      STAY
                    </a>
                  </li>
                  <li>
                    <a href="#" role="link" aria-label="SAFARI">
                      SAFARI
                    </a>
                  </li>
                  <li>
                    <a href="#" role="link" aria-label="WELLNESS">
                      WELLNESS
                    </a>
                  </li>
                  <li>
                    <a href="#" role="link" aria-label="EXPERIENCES">
                      EXPERIENCES
                    </a>
                  </li>
                  <li>
                    <a href="#" role="link" aria-label="OFFERS">
                      OFFERS
                    </a>
                  </li>
                </ul>
              </div>
              <div class="footer-navbar-bottom">
                <ul class="flex flex-wrap max-639:flex-col justify-center gap-x-24 gap-y-10 max-639:text-center">
                  <li>
                    <a href="#" role="link" aria-label="ABOUT US">
                      ABOUT US
                    </a>
                  </li>
                  <li>
                    <a href="#" role="link" aria-label="DINING">
                      DINING
                    </a>
                  </li>
                  <li>
                    <a href="#" role="link" aria-label="CONSERVATION">
                      CONSERVATION
                    </a>
                  </li>
                  <li>
                    <a href="#" role="link" aria-label="FACILITIES">
                      FACILITIES
                    </a>
                  </li>
                  <li>
                    <a href="#" role="link" aria-label="LOCATION">
                      LOCATION
                    </a>
                  </li>
                  <li>
                    <a href="#" role="link" aria-label="BLOG">
                      BLOG
                    </a>
                  </li>
                  <li>
                    <a href="#" role="link" aria-label="RATES">
                      RATES
                    </a>
                  </li>
                  <li>
                    <a href="#" role="link" aria-label="GALLERY">
                      GALLERY
                    </a>
                  </li>
                </ul>
              </div>
              <div class="sicon flex flex-wrap gap-x-30 mt-20">
                <a href="#" role="link" aria-label="Facebook">
                  <img
                    src="../assets/images/facebook.svg"
                    width="24"
                    height="24"
                    alt="Facebook"
                  />
                </a>
                <a href="#" role="link" aria-label="Instagram">
                  <img
                    src="../assets/images/instagram.svg"
                    width="24"
                    height="24"
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
            <div class="copyright content white  max-575:text-center flex max-575:flex-col max-575:justify-center justify-between pt-40 pb-20 border-0 border-b-1 border-solid border-white">
              <p>© 2025 Kateka. All rights reserved.</p>
              <ul class="flex flex-wrap max-575:justify-center gap-x-20">
                <li>
                  <a href="#" role="link" aria-label="Terms">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" role="link" aria-label="Privacy">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Index;
