import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Blog = () => {
  const [blog, setBlog] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/blog")
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error("Error fetching blog:", err));

    fetch("/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div>
      <Navigation />

      <section className="banner">
        <h2>{blog.title}</h2>
        {blog.image && <img src={blog.image} alt={blog.title} />}
      </section>

      <section className="blog-posts">
        <h2>Blogs</h2>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <img src={post.image} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a href={post.link}>Read Article</a>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
