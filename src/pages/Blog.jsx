import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/blogs")
      .then((res) => setBlogs(res.data))
      .catch(console.error);
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* Banner Section */}
        <section className="banner transparent-banner h-[calc(100vh_-_300px)] max-1023:h-[calc(100vh_-_400px)] py-100">
          <div className="container-fluid relative text-center h-full flex items-center justify-center">
            <div className="title-olive">
              <h1>Blogs</h1>
            </div>
          </div>
        </section>

        {/* Blog Listings */}
        <section className="blog-listing pb-100 max-1023:pb-50">
          <div className="container-fluid grid gap-y-60 max-1023:gap-y-30">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="blog-img-grid relative rounded-10 overflow-hidden mt-35"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-10 w-full h-451 block object-cover"
                  width="1280"
                  height="451"
                />
                <div className="absolute top-1/2 -translate-y-1/2 max-w-790 p-100 max-1023:p-30">
                  <div className="title-white">
                    <h2 className="h2">{blog.title}</h2>
                  </div>
                  <div className="content white pt-25">
                    <p>{blog.description}</p>
                  </div>
                  <div className="mt-35">
                    <a
                      href={blog.link || "#"}
                      className="btn btn-link btn-link-white"
                      role="link"
                      aria-label="READ"
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
                      READ
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
