import React from "react";

import BACKEND_URL from "../constants/server";

const Contact = () => {
  return (
    <>
      <main>
        {/* Contact Info Section */}
        <section className="contact-info py-100 mt-150">
          <div className="container-fluid">
            <div className="flex flex-wrap items-center">
              {/* Contact Details */}
              <div className="lg:w-5/12 w-full max-1023:mb-50">
                <div className="max-w-270 mx-auto">
                  <div className="title-black mb-10">
                    <h5>GENERAL CONTACT</h5>
                  </div>
                  <ul className="contact-list space-y-4">
                    <li className="flex gap-3">
                      <img
                        src="/assets/images/email-icon.svg"
                        alt="Email"
                        width={20}
                      />
                      <a href="mailto:info@kateka.com">info@kateka.com</a>
                    </li>
                    <li className="flex gap-3">
                      <img
                        src="/assets/images/phone-icon.svg"
                        alt="Phone"
                        width={20}
                      />
                      <a href="tel:+27000000000">+27 00 000 0000</a>
                    </li>
                    <li className="flex gap-3">
                      <img
                        src="/assets/images/location-icon.svg"
                        alt="Location"
                        width={20}
                      />
                      <span>123 Safari Road, Region, Country</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-7/12 w-full">
                <form className="contact-form grid gap-5 max-w-[640px] mx-auto">
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Your Email"
                    required
                  />
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Subject"
                  />
                  <textarea
                    className="form-textarea"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                  <button type="submit" className="btn btn-olive mt-5">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Optional Map Section */}
        <section className="map-section mt-50">
          <div className="container-fluid">
            <div className="rounded-10 overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=kruger%20park&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="400"
                loading="lazy"
                title="Map"
                className="rounded-10"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
