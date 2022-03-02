import React, { useEffect, useState } from "react";
import Layout from "../components/layout"
import Seo from "../components/seo"
import Image from "../components/image"
import { fetchAPI } from "../lib/api"
import Head from "next/head"
import NjImg from "../components/nj_img"
import Md from "../components/md";
import Amount from "../components/amount";

const Home = ({ page }) => {
  const attr = page.attributes
  const [isAfter, setIsAfter] = useState(false)
  const [showMonthlyPlans, setShowMonthlyPlans] = useState(false)

  useEffect(() => {
    if (document.querySelector(".swiper")) {
      new Swiper(".swiper", {
        // Optional parameters'
        //direction: 'vertical',
        slidesPerView: 2.5,
        spaceBetween: 32,
        loop: true,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 26,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 32,
          },
        },

        // Navigation arrows
        navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
        },
      })
    }
  })

  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href={"/css/index.css"} />
        <title>Home</title>
      </Head>

      <Seo seo={attr.seo} />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="h1 mt-48">{attr.banner.title}</div>
              <p className="font-20 mb-48">{attr.banner.info}</p>
              <div className="cta d-flex d-lg-inline-flex flex-column text-center mt-48">
                <a href={attr.banner.buttonLink} className="btn btn-dark">
                  {attr.banner.buttonText}
                </a>
                <span className="font-14 mt-3">{attr.banner.belowButtonText}</span>
              </div>
            </div>
            <div className="col-lg-6">
              <Image image={attr.banner.image} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className={`section sec-2`}>
        <div className="container">
          <div className="row pb-48">
            <div className="col-lg-5 me-auto mb-4 mb-lg-0">
              <div className="h2">{attr.shootYourProduct.title}</div>
              <p className="font-20 mb-48">{attr.shootYourProduct.info}</p>
              <a href={attr.shootYourProduct.buttonLink} className="mt-48 font-20 text-decoration-underline">
                {attr.shootYourProduct.buttonText}
              </a>
            </div>
            <div className="col-lg-6 grid-wrapper">
              <div className="grid">
                {attr.shootYourProduct.images ? (
                  attr.shootYourProduct.images.map((value) => {
                    return (
                      <div className="grid-item" key={'syp-'+value.id}>
                        <Image image={value.image} className="grid-image" />
                        <div className="grid-title">{value.title}</div>
                      </div>
                    )
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="row stats mt-4">
            <div className="col-12 text-center font-20 py-48">{attr.happyCustomers.heading}</div>
            <div className="col-12 stats-container">
              {attr.happyCustomers.blocks ? (
                attr.happyCustomers.blocks.map((value) => {
                  return (
                    <div className="col-6 mb-4 mb-md-0 col-md-3 text-center" key={'hc-'+value.id}>
                      <div className="stats-title" dangerouslySetInnerHTML={{ __html: value.title }} />
                      <div className="stats-meta" dangerouslySetInnerHTML={{ __html: value.info }} />
                    </div>
                  )
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section sec-3">
        <div className="container">
          <div className="row pb-48">
            <div className="col-lg-6 grid-wrapper mb-4 mb-lg-0">
              <div className="grid">
                {attr.enhanceYourPhotos.images ? (
                  attr.enhanceYourPhotos.images.map((value) => {
                    return (
                      <div className="grid-item" key={'eyp-'+value.id}>
                        <div className="grid-title">{value.title}</div>
                        <Image image={value.image} className="grid-image" />
                      </div>
                    )
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="col-lg-5 ms-auto">
              <div className="h2">{attr.enhanceYourPhotos.title}</div>
              <div className="font-20 pb-48 mb-48">{attr.enhanceYourPhotos.info}</div>
              <a href={attr.enhanceYourPhotos.buttonLink} className="font-20 text-decoration-underline">
                {attr.enhanceYourPhotos.buttonText}
              </a>
            </div>
          </div>
          <div className="row toggle pb-48">
            <div className="col-12 font-24 text-center py-48">{attr.baImagesSection.heading}</div>
            <div className="col-12 text-center pt-2">
              <div className="toggle-wrapper">
                <div className="toggle-action">Before</div>
                <div className={`toggle-btn ${isAfter ? "active" : ""}`} onClick={() => setIsAfter(!isAfter)}>
                  <span />
                </div>
                <div className="toggle-action active">After</div>
              </div>
            </div>
          </div>
          <div className={`row toggle-images ${isAfter ? "active" : ""}`} id="after">
            {attr.baImagesSection.images ? (
              attr.baImagesSection.images.map((value) => {
                return (
                  <div className="col-md-3" key={'bai1-'+value.id}>
                    <Image image={value.after} className="grid-image" />
                  </div>
                )
              })
            ) : (
              <></>
            )}
          </div>
          <div className={`row toggle-images ${isAfter ? "" : "active"}`} id="before">
            {attr.baImagesSection.images ? (
              attr.baImagesSection.images.map((value) => {
                return (
                  <div className="col-md-3" key={'bai2-'+value.id}>
                    <Image image={value.before} className="grid-image" />
                  </div>
                )
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>

      <section className="top pt-48 mb-48">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center pt-48">
              <div className="h2 mb-3">{attr.shareYourProduct.title}</div>
              <div className="font-20 mb-48">{attr.shareYourProduct.info}</div>
              <NjImg src={attr.shareYourProduct.image} className="img-fluid mt-48" />
            </div>
          </div>
        </div>
      </section>

      <section className="section sec-4 pt-0">
        <div className="container pb-48">
          <div className="row">
            <div className="col-12 text-center">
              <div className="font-20 py-48">{attr.features.heading}</div>
            </div>
            <div className="col-lg-10 mx-auto">
              <div className="row">
                {attr.features.blocks ? (
                  attr.features.blocks.map((value) => {
                    return (
                      <div className="col-6 mb-3 mb-md-0 col-md-3 text-center" key={'ftb-'+value.id}>
                        <div className="font-24 font-bold" dangerouslySetInnerHTML={{ __html: value.title }} />
                        <div className="font-16 text-light" dangerouslySetInnerHTML={{ __html: value.info }} />
                      </div>
                    )
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section sec-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="h2 text-white pt-4">{attr.pricingSection.title}</div>
              <div className="font-16 text-white mb-3">{attr.pricingSection.info}</div>
              <div className="plan-btn mt-3">
                <button className={`btn font-14 me-3 ${showMonthlyPlans ? "active" : ""}`} onClick={() => setShowMonthlyPlans(true)}>
                  Monthly
                </button>
                <button className={`btn font-14 ${showMonthlyPlans ? "" : "active"}`} onClick={() => setShowMonthlyPlans(false)}>
                  Annual
                </button>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-48">
            {attr.pricingSection.plans && attr.pricingSection.plans.data ? (
              attr.pricingSection.plans.data.map((_value) => {
                const value = _value.attributes
                if (
                  (showMonthlyPlans && value.type !== "monthly") ||
                  (!showMonthlyPlans && value.type !== "annual")
                ) {
                  return;
                }
                return (
                  <div className="col-lg-5 mb-4" key={'plan-'+_value.id}>
                    <div className="plan-item">
                      <div className="plan-title text-center">{value.title}</div>
                      <div className="plan-price font-20 text-center">
                        <span className="font-bold font-24">
                          <Amount amount={value.price}/>
                        </span>
                        {` / ${value.price_info}`}
                      </div>
                      <div className="font-14 text-center" dangerouslySetInnerHTML={{ __html: value.info }} />
                      <Md className="plan-features">{value.features}</Md>
                      {/*
                      markdown content {
                        - 500 credits per year
                        - Catalog images
                        - Free generation of adaptations
                        - Lifetime storage of images
                        - ~~Lifestyle images~~
                        - ~~Multiple user support~~
                      }

                      html content{
                        <ul className="plan-features">
                          <li>500 credits per year</li>
                          <li>Catalog images</li>
                          <li>Free generation of adaptations</li>
                          <li>Lifetime storage of images</li>
                          <li className="disabled text-decoration-line-through">Lifestyle images</li>
                          <li className="disabled text-decoration-line-through">Multiple user support</li>
                        </ul>
                      }
                      */}
                      <a href={value.buttonLink} className="btn plan-cta text-center d-block">
                        {value.buttonText}
                      </a>
                      <div className="font-14 text-center">{value.belowButtonText}</div>
                    </div>
                  </div>
                )
              })
            ) : (
              <></>
            )}
          </div>
          <div className="row justify-content-center">
            <div className="col-12 text-center mt-4 my-48">
              <div className="font-16 text-white">*Prices in USD. Taxes may apply.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sec-6 swiper p-0">
        <div className="container pt-48">
          <div className="row align-items-center pt-4 mb-48">
            <div className="col-md-4">
              <div className="font-30 text-black mb-3 text-center">{attr.testimonialSection.heading}</div>
            </div>
            <div className="col text-center text-md-end ">
              <div className="slider-nav d-inline-flex">
                <div className="button-prev me-3 disabled">
                  <img src="/images/arrow.png" alt="prev" className="img-fluid" />
                </div>
                <div className="button-next ms-3">
                  <img src="/images/arrow.png" alt="prev" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mb-48">
          <div className="row swiper">
            <div className="swiper-wrapper">
              {/* Slides */}
              {attr.testimonialSection.testimonials ? (
                attr.testimonialSection.testimonials.map((value) => {
                  return (
                    <div className="swiper-slide col-md-5" key={'tm-'+value.id}>
                      <div className="review-wrapper">
                        <img src="/images/q.png" alt="quote" className="quote" />
                        <div className="review-info">
                          <NjImg src={value.avatar} className="review-img" />
                          <div className="review-meta mb-2">
                            <div className="font-16 font-bold">{value.name}</div>
                            <div className="font-14 ">{value.designation}</div>
                          </div>
                        </div>
                        <div className="review font-14" dangerouslySetInnerHTML={{ __html: value.content }} />
                        <NjImg src={value.logo} className="review-thumb mb-48" />
                      </div>
                    </div>
                  )
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps({locale: locale}) {
  // Run API calls in parallel
  const [pageRes] = await Promise.all([
    fetchAPI("/home", {
      locale,
      populate: [
        "seo.shareImage",
        "banner.image",
        "shootYourProduct.images.image",
        "happyCustomers.blocks",
        "enhanceYourPhotos.images.image",
        "baImagesSection.images.before",
        "baImagesSection.images.after",
        "shareYourProduct.image",
        "features.blocks",
        "pricingSection.plans",
        "testimonialSection.testimonials.avatar",
        "testimonialSection.testimonials.logo",
      ],
    }),
  ])

  return {
    props: {
      page: pageRes.data,
    },
  }
}

export default Home
