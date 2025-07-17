import { useEffect, useState } from "react";
import axios from "axios";

import BACKEND_URL from "../constants/server";

export default function Rates() {
  const [ratesData, setRatesData] = useState({ title: "", description: "" });

  useEffect(() => {
    axios
      .get(BACKEND_URL+"/rates")
      .then((res) => {
        setRatesData(res.data);
      })
      .catch(() => {
        setRatesData({ title: "", description: "" });
      });
  }, []);

  if (!ratesData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <section className="banner py-45 pb-0 pt-180 max-1023:pt-100">
        <div className="container-fluid relative">
          <div className="title-olive text-center pb-60 sticky top-180 max-1023:top-120">
            <h2 className="h2">Rates</h2>
          </div>
          <div className="img relative">
            <img
              src="./src/assets/images/rates-banner.webp"
              className="img-ratio rounded-10"
              width="1280"
              height="620"
              alt="Rates Banner"
            />
          </div>
        </div>
      </section>

      <section className="common-content py-100">
        <div className="container-fluid max-w-993 mx-auto">
          <div className="title-olive">
            <h2 className="h2">{ratesData.title}</h2>
          </div>
          <div className="content pt-30 max-w-624">
            <p>{ratesData.description}</p>
          </div>
        </div>
      </section>

      {/* Add more rates related content here as per the data */}
    </main>
  );
}
