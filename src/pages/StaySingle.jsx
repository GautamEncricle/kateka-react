import { useEffect, useState } from "react";
import axios from "axios";

export default function StaySingle() {
  const [staySingleData, setStaySingleData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/stay-single")
      .then((res) => {
        setStaySingleData(res.data);
      })
      .catch(() => {
        setStaySingleData({ title: "", description: "" });
      });
  }, []);

  if (!staySingleData) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <section className="banner py-45 pb-0 pt-180 max-1023:pt-100">
        <div className="container-fluid relative">
          <div className="title-olive text-center pb-60 sticky top-180 max-1023:top-120">
            <h2 className="h2">Stay Single</h2>
          </div>
          <div className="img relative">
            <img
              src="./src/assets/images/stay-single-banner.webp"
              className="img-ratio rounded-10"
              width="1280"
              height="620"
              alt="Stay Single Banner"
            />
          </div>
        </div>
      </section>

      <section className="common-content py-100">
        <div className="container-fluid max-w-993 mx-auto">
          <div className="title-olive">
            <h2 className="h2">{staySingleData.title}</h2>
          </div>
          <div className="content pt-30 max-w-624">
            <p>{staySingleData.description}</p>
          </div>
        </div>
      </section>

      {/* Add more stay single related content here as per the data */}
    </main>
  );
}
