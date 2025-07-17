import { useEffect, useState } from "react";
import axios from "axios";

import BACKEND_URL from "../constants/server";

export default function Stay() {
  const [stayData, setStayData] = useState({ title: "", description: "" });

  useEffect(() => {
    axios
      .get(BACKEND_URL+"/stay")
      .then((res) => {
        setStayData(res.data);
      })
      .catch(() => {
        setStayData({ title: "", description: "" });
      });
  }, []);

  if (!stayData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <section className="banner py-45 pb-0 pt-180 max-1023:pt-100">
        <div className="container-fluid relative">
          <div className="title-olive text-center pb-60 sticky top-180 max-1023:top-120">
            <h2 className="h2">Stay</h2>
          </div>
          <div className="img relative">
            <img
              src="./src/assets/images/stay-banner.webp"
              className="img-ratio rounded-10"
              width="1280"
              height="620"
              alt="Stay Banner"
            />
          </div>
        </div>
      </section>

      <section className="common-content py-100">
        <div className="container-fluid max-w-993 mx-auto">
          <div className="title-olive">
            <h2 className="h2">{stayData.title}</h2>
          </div>
          <div className="content pt-30 max-w-624">
            <p>{stayData.description}</p>
          </div>
        </div>
      </section>

      {/* Add more stay related content here as per the data */}
    </main>
  );
}
