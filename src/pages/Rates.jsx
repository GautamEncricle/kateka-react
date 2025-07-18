"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import BACKEND_URL from "../constants/server"

export default function Rates() {
  const [banner, setBanner] = useState({})
  const [rateYears, setRateYears] = useState([])
  const [ratesData, setRatesData] = useState({})
  const [additionalInfo, setAdditionalInfo] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeYear, setActiveYear] = useState("")
  const [activeAccordion, setActiveAccordion] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        console.log("Fetching rates data from:", BACKEND_URL)

        const [bannerRes, rateYearsRes, ratesDataRes, additionalInfoRes] = await Promise.all([
          axios.get(`${BACKEND_URL}/rates-banner`),
          axios.get(`${BACKEND_URL}/rates-years`),
          axios.get(`${BACKEND_URL}/rates-data`),
          axios.get(`${BACKEND_URL}/rates-additional-info`),
        ])

        console.log("✅ Fetched rates data successfully:", {
          banner: bannerRes.data,
          rateYears: rateYearsRes.data,
          ratesData: ratesDataRes.data,
          additionalInfo: additionalInfoRes.data,
        })

        setBanner(bannerRes.data)
        setRateYears(rateYearsRes.data)
        setRatesData(ratesDataRes.data)
        setAdditionalInfo(additionalInfoRes.data)

        // Set first year as active by default
        if (rateYearsRes.data.length > 0) {
          const firstYear = rateYearsRes.data[0].id
          setActiveYear(firstYear)
          console.log("🎯 Setting active year to:", firstYear)
          console.log("🎯 Available data for this year:", ratesDataRes.data[firstYear])
        }
      } catch (err) {
        console.error("❌ Error fetching data:", err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleYearChange = (yearId) => {
    console.log("🔄 Switching to year:", yearId)
    console.log("🔄 Data available for year:", ratesData[yearId])
    setActiveYear(yearId)
  }

  const handleAccordionToggle = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-olive-600 mx-auto"></div>
          <p className="mt-4 text-lg">Loading rates...</p>
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

  const activeRateData = ratesData[activeYear]

  // Enhanced debugging
  console.log("🔍 Current state:", {
    activeYear,
    availableYears: rateYears,
    availableDataKeys: Object.keys(ratesData),
    activeRateData,
    hasSeasons: activeRateData?.seasons?.length || 0,
    hasPremiumDates: !!activeRateData?.premiumDates,
  })

  return (
    <main>
      {/* Banner Section */}
      <section className="banner transparent-banner h-[calc(100vh_-_300px)] max-1023:h-[calc(100vh_-_400px)] py-100">
        <div className="container-fluid relative text-center h-full flex items-center justify-center">
          <div className="title-olive">
            <h1>{banner.title || "Rates"}</h1>
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section className="rates relative z-9">
        <div className="container-fluid-md">
          <div className="tabs">
            <ul className="tabs-nav flex flex-wrap gap-x-40 justify-center">
              {rateYears.map((year) => (
                <li key={year.id}>
                  <a
                    href={`#${year.id}`}
                    className={`cursor-pointer ${activeYear === year.id ? "active font-bold text-olive-600" : ""}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleYearChange(year.id)
                    }}
                  >
                    {year.year}
                  </a>
                </li>
              ))}
            </ul>

            <div className="tabs-stage">
              {activeRateData ? (
                <div className="tab-content pt-35" key={activeYear}>
                  <div className="text-center py-30">
                    <h6 className="!text-24 tracking-1">
                      {activeRateData.validityText || "RATES VALID UNTIL FURTHER NOTICE"}
                    </h6>
                  </div>

                  <div className="table w-full">
                    <table>
                      <thead>
                        <tr>
                          <th>Season Rate</th>
                          <th>
                            Daily Rate
                            <span>(Up to 4 guests)</span>
                          </th>
                          <th>
                            Price Per Additional Person
                            <span>(Up to 6 adults max in house)</span>
                          </th>
                          <th>
                            Price Per Additional Child
                            <span>(Children 0 - 4 stay free of charge)</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeRateData.seasons && activeRateData.seasons.length > 0 ? (
                          activeRateData.seasons.map((season, index) => (
                            <tr key={`${activeYear}-season-${index}`}>
                              <td>
                                {season.name}
                                <div className="date-info">
                                  {season.dates?.map((date, dateIndex) => (
                                    <span key={dateIndex}>{date}</span>
                                  ))}
                                </div>
                              </td>
                              <td>
                                {season.dailyRate}
                                <div className="date-info">
                                  <span>per night</span>
                                </div>
                              </td>
                              <td>
                                {season.additionalPersonRate}
                                <div className="date-info">
                                  <span>per night</span>
                                </div>
                              </td>
                              <td>
                                {season.childRate}
                                <div className="date-info">
                                  <span>per Child (5-11 years)</span>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4" className="text-center py-20">
                              No rate data available for {activeYear}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {activeRateData.premiumDates && (
                    <div className="pdf-info text-center py-60">
                      <div className="title-olive">
                        <h4>{activeRateData.premiumDates.title || "Premium DATES"}</h4>
                      </div>
                      <div className="content lightfont pt-20">
                        <p>
                          {activeRateData.premiumDates.description || "Additional charges apply during premium dates."}
                        </p>
                      </div>
                      <div className="mt-35 flex justify-center">
                        <a
                          href={activeRateData.pdfDownloadLink || "#"}
                          className="btn btn-olive"
                          role="link"
                          aria-label="DOWNLOAD RATES PDF"
                        >
                          {activeRateData.pdfButtonText || "DOWNLOAD RATES PDF"}
                          <span>
                            <img
                              src="./src/assets/images/download-ico.svg"
                              className="transition-all duration-300"
                              width="9"
                              height="9"
                              alt="Download"
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="tab-content pt-35">
                  <div className="text-center py-60">
                    <p className="text-lg text-gray-600">No rate data available for the selected year ({activeYear})</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Available data keys: {Object.keys(ratesData).join(", ")}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Accordion */}
      <section className="accordion-wrapper pt-130 max-1023:pt-50 pb-50">
        <div className="max-w-1008 mx-auto max-1023:px-20">
          <div className="accordion-row">
            <div className="title-olive text-center">
              <h2 className="h2 flex flex-wrap justify-center gap-x-10">
                <span>ADDITIONAL</span> <span>INFORMATION</span>
              </h2>
            </div>
            <div className="accordion-container pt-40 max-1023:pt-20">
              {additionalInfo.length > 0 ? (
                additionalInfo.map((item, index) => (
                  <div key={item.id} className="accordion-grid">
                    <div
                      className="acc-head relative py-20 card p-3 rounded-0 cursor-pointer"
                      onClick={() => handleAccordionToggle(index)}
                    >
                      <h5 className="font-heading tracking-01">{item.title}</h5>
                    </div>
                    <div
                      className={`acc-body content global-list rounded-0 pl-5 transition-all duration-300 ${
                        activeAccordion === index ? "block" : "hidden"
                      }`}
                    >
                      <p>{item.content}</p>
                      {item.list && (
                        <ul>
                          {item.list.map((listItem, listIndex) => (
                            <li key={listIndex}>{listItem}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-50">
                  <p className="text-lg text-gray-600">No additional information available</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
