import { useEffect, useState } from "react";
import axios from "axios";

export default function Offers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/offers")
      .then((res) => setOffers(res.data));
  }, []);

  return (
    <section className="offer-wrapper py-100">
      <div className="container-fluid">
        <div className="top-info max-w-531 mx-auto text-center">
          <h2 className="h2 title-olive">Offers</h2>
          <p className="pt-35">Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="mt-65 flex flex-wrap items-center h-451 relative">
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
            {/* Keep static images or convert this to dynamic if needed */}
          </div>
        </div>
      </div>
    </section>
  );
}
