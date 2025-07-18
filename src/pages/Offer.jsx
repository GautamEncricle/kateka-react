"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import BACKEND_URL from "../constants/server"

export default function Offers() {
  const [banner, setBanner] = useState({})
  const [commonContent, setCommonContent] = useState({})
  const [offers, setOffers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        console.log("Fetching offers data from:", BACKEND_URL)

        const [bannerRes, commonContentRes, offersRes] = await Promise.all([
          axios.get(`${BACKEND_URL}/offers-banner`).catch((err) => {
            console.error("Banner fetch failed:", err)
            return { data: {} }
          }),
          axios.get(`${BACKEND_URL}/offers-common-content`).catch((err) => {
            console.error("Common content fetch failed:", err)
            return { data: {} }
          }),
          axios.get(`${BACKEND_URL}/offers-list`).catch((err) => {
            console.error("Offers list fetch failed:", err)
            return { data: [] }
          }),
        ])

        console.log("Fetched offers data:", {
          banner: bannerRes.data,
          commonContent: commonContentRes.data,
          offers: offersRes.data,
        })

        setBanner(bannerRes.data)
        setCommonContent(commonContentRes.data)
        setOffers(offersRes.data)
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
          <p className="mt-4 text-lg">Loading offers...</p>
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
            <h1>{banner.title || "OFFERS"}</h1>
          </div>
        </div>
      </section>

      {/* Common Content Section */}
      <section className="common-content pb-100 max-1023:pb-30">
        <div className="container-fluid">
          <div className="max-w-993 mx-auto">
            <div className="title-olive">
              <h2 className="h2">
                {commonContent.title ||
                  "Lorem ipsum dolor sit amet, consecteturd do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offerWrapper" className="offer-wrapper py-100 max-1023:py-50">
        <div className="container-fluid">
          <div className="flex flex-wrap items-start relative">
            <div className="lg:w-6/12 w-full">
              <div className="offer-grid">
                {offers.length > 0 ? (
                  offers.map((offer, index) => (
                    <div key={offer.id || index} className="offer-grid-content">
                      <h5>{offer.title}</h5>
                      <div className="og-content">
                        <div className="content pt-20">
                          <p>{offer.description}</p>
                        </div>
                        <div className="mt-30">
                          <a href={offer.link || "#"} className="btn btn-link" role="link" aria-label="ENQUIRE NOW">
                            <span>
                              <img
                                src="./src/assets/images/link-arrow.svg"
                                className="transition-all duration-300"
                                width="16"
                                height="14"
                                alt="Arrow"
                              />
                            </span>
                            {offer.buttonText || "ENQUIRE NOW"}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-50">
                    <p className="text-lg text-gray-600">No offers available</p>
                  </div>
                )}
              </div>
            </div>
            <div className="lg:w-6/12 w-full pl-60 max-1023:hidden">
              <div className="offer-right h-full">
                {offers.length > 0 &&
                  offers.map((offer, index) => (
                    <div key={`img-${offer.id || index}`} className="offer-grid-img">
                      <img
                        src={offer.image || "./src/assets/images/offer-img1.webp"}
                        className="rounded-10 w-598 h-451 block object-cover"
                        width="598"
                        height="451"
                        alt={offer.title || "Offer"}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
