"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import BACKEND_URL from "../constants/server"

export default function Blog() {
  const [banner, setBanner] = useState({})
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        console.log("Fetching blog data from:", BACKEND_URL)

        const [bannerRes, blogPostsRes] = await Promise.all([
          axios.get(`${BACKEND_URL}/blog-banner`).catch((err) => {
            console.error("Banner fetch failed:", err)
            return { data: {} }
          }),
          axios.get(`${BACKEND_URL}/blog-posts`).catch((err) => {
            console.error("Blog posts fetch failed:", err)
            return { data: [] }
          }),
        ])

        console.log("Fetched blog data:", {
          banner: bannerRes.data,
          blogPosts: blogPostsRes.data,
        })

        setBanner(bannerRes.data)
        setBlogPosts(blogPostsRes.data)
      } catch (err) {
        console.error("Error fetching data:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-olive-600 mx-auto"></div>
          <p className="mt-4 text-lg">Loading blog posts...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-red-600">
          <p className="text-xl">Error loading data: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-olive-600 text-white rounded hover:bg-olive-700"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <main>
      {/* Banner Section */}
      <section className="banner transparent-banner h-[calc(100vh_-_300px)] max-1023:h-[calc(100vh_-_400px)] py-100">
        <div className="container-fluid relative text-center h-full flex items-center justify-center">
          <div className="title-olive">
            <h1>{banner.title || "Blogs"}</h1>
          </div>
        </div>
      </section>

      {/* Blog Listing Section */}
      {blogPosts.length > 0 && (
        <section className="blog-listing pb-100 max-1023:pb-50">
          <div className="container-fluid grid gap-y-60 max-1023:gap-y-30">
            {blogPosts.map((blog, index) => (
              <div key={blog.id || index} className="blog-img-grid relative rounded-10 overflow-hidden mt-35">
                <img
                  src={blog.image || "/placeholder.svg"}
                  className="rounded-10 w-full h-451 block object-cover"
                  width="1280"
                  height="451"
                  alt={blog.title}
                />
                <div className="absolute top-1/2 -translate-y-1/2 max-w-790 p-100 max-1023:p-30">
                  <div className="title-white">
                    <h2 className="h2">{blog.title}</h2>
                  </div>
                  <div className="content white pt-25">
                    <p>{blog.description}</p>
                  </div>
                  <div className="mt-35">
                    <a href={blog.link || "#"} className="btn btn-link btn-link-white" role="link" aria-label="READ">
                      <span>
                        <img
                          src="./src/assets/images/link-arrow.svg"
                          className="transition-all duration-300"
                          width="16"
                          height="14"
                          alt="Arrow"
                        />
                      </span>
                      {blog.buttonText || "READ"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
