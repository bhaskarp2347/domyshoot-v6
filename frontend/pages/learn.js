import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination";
import { fetchAPI } from "../lib/api"
import Head from "next/head"
import Md from "../components/md"
import { useRouter } from "next/router"
import NjImg from "../components/nj_img";
import CategoriesList from "../components/categoriesList";
import ArticlesList from "../components/ArticlesList";
import VideoModal from "../components/videoModal";

const Learn = ({ page, articlesRes, categories }) => {
  const router = useRouter()
  const attr = page.attributes
  const articles = articlesRes.data
  const pagination = articlesRes.meta.pagination
  const [category, setCategory] = useState(router.query.category)
  const [pageNo, setPageNo] = useState(1)

  const [video, setVideo] = useState({})
  const [videoModal, setVideoModal] = useState()


  useEffect(() => {
    setCategory(router.query.category || "")
    setPageNo(parseInt(router.query.page) || 1)

    const bs = window.bootstrap
    const vmEl = document.getElementById("videoModal")
    const vm = new bs.Modal(vmEl, {
      keyboard: false
    });
    vmEl.addEventListener('hidden.bs.modal', function () {
      setVideo({})
    })
    setVideoModal(vm)
  }, [router])

  const showVideoModal = (video) => {
    setVideo(video)
    videoModal.show()
  }

  return (
    <Layout className="page-learn">
      <Head>
        <link rel="stylesheet" href={"/css/learn.css"} />
      </Head>

      <Seo seo={attr.seo} />

      <section className="section sec-1">
        <div className="container py-48">
          <div className="row">
            <div className="col-12 text-center h1 py-48 my-3">{attr.heading}</div>
          </div>
        </div>
      </section>

      <section className="section sec-2">
        <div className="container">
          <div className="row">
            <div className="col-md-11 mx-auto">
              <div className="h2 text-center">{attr.title}</div>
              <div className="font-20 text-center">{attr.info}</div>
              <div style={{height: "175px" }}/>
              <Md>{attr.content}</Md>
            </div>
          </div>
        </div>
      </section>

      <section className="section sec-3">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="h2">{attr.tutorialsSectionTitle}</div>
              <div className="font-20">{attr.tutorialsSectionInfo}</div>
            </div>
          </div>
          <CategoriesList categories={categories} category={category}/>
          <div className="tut-tabs">
            <ArticlesList articles={articles} page="learn" showVideoModal={showVideoModal}/>
          </div>
          <Pagination meta={pagination} pageNo={pageNo} query={{ category }} />
        </div>
      </section>

      <section className="section sec-4">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="h2">{attr.learnStepsSection?.title}</div>
              <div className="font-20">{attr.learnStepsSection?.info}</div>
            </div>
          </div>
          {
            (attr.learnStepsSection?.learnSteps || []).map((value, si) => {
              if(si % 2 === 0) {
                return (
                  <div className="row align-items-center my-165" key={`learn-step-${si}`}>
                    <div className="col-md-6 text-center">
                      <NjImg className="img-fluid" src={value.image} />
                    </div>
                    <div className="col-md-6 px-md-5">
                      <a className="btn step-btn cursor-default">Step {si+1}</a>
                      <div className="h2">{value.title}</div>
                      <div className="font-20">{value.info}</div>
                    </div>
                  </div>
                )
              }else{
                return (
                  <div className="row align-items-center my-165" key={`learn-step-${si}`}>
                    <div className="col-md-6 px-md-5">
                      <a className="btn step-btn cursor-default">Step {si+1}</a>
                      <div className="h2">{value.title}</div>
                      <div className="font-20">{value.info}</div>
                    </div>
                    <div className="col-md-6 text-center">
                      <NjImg className="img-fluid" src={value.image} />
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
      </section>

      <section className="section sec-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="h2">Good To Know Facts</div>
              <div className="font-20">Some common questions to help you understand DoMyShoot better</div>
            </div>
          </div>
          <div style={{ height: "165px;" }}/>
          <div className="row">
            <div className="col-auto" style={{ minWidth: "99px;" }}/>
            <div className="col px-md-5">
              <div className="accordion" id="accordionExample">
                {
                  attr.learnFactsSection && attr.learnFactsSection.facts?
                    (() => {
                      return (attr.learnFactsSection?.facts || []).map((value, fi) => {
                        return (
                          <div className="accordion-item">
                            <h2 className="accordion-header" id={`fact-accordion-heading-${fi}`}>
                              <button
                                className={`accordion-button ${fi === 0? 'collapsed': ''}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#fact-accordion-box-${fi}`}
                                aria-expanded="true"
                                aria-controls={`fact-accordion-button-${fi}`}
                              >{value.title}</button>
                            </h2>
                            <div
                              id={`fact-accordion-box-${fi}`}
                              className={`accordion-collapse collapse ${fi === 0 ? "show" : ""}`}
                              aria-labelledby={`#fact-accordion-heading-${fi}`}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p>{value.content}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    })()
                  :<></>
                }
              </div>
            </div>
          </div>
          <div style={{ height: "75px" }}/>
        </div>
      </section>

      {
        attr.appDemo ?
          (() => {
            const value = attr.appDemo
            return (
              <section className="section sec-6">
                <div className="container">
                  <div className="row my-165 align-items-center">
                    <div className="col-md-7">
                      <div className="h2">{value?.title}</div>
                      <div className="font-20">{value?.info}</div>
                    </div>
                    <div className="col-md-5 text-center text-md-end">
                      <a href={value?.buttonLink} className="app_cta btn btn-dark">
                        {value?.buttonText + " "}
                        <span className="ms-2">&#8594;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            )
          })()
        :<></>
      }
      <VideoModal video={video}/>
    </Layout>
  )
}

export async function getServerSideProps({ locale: locale, query: { page: page = 1, category: category = "" } }) {
  // Run API calls in parallel
  let articlesFilters = {
    showOnLearnPage: true,
  }
  if(category){
    articlesFilters.articleCategory = category
  }
  const [pageRes, articlesRes, categoriesRes] = await Promise.all([
    fetchAPI("/learn", {
      locale,
      populate: [
        "seo",
        "seo.shareImage",
        "learnStepsSection",
        "learnStepsSection.learnSteps",
        "learnStepsSection.learnSteps.image",
        "learnFactsSection",
        "learnFactsSection.facts",
        "appDemo"
      ],
    }),
    fetchAPI("/articles", {
      locale,
      populate: "*",
      pagination: {
        pageSize: 3,
        page: page,
      },
      filters: articlesFilters,
      sort: ['id:desc']
    }),
    fetchAPI("/article-categories", {
      locale,
      populate: "*",
      filters: {
        showOnLearnPage: true,
      }
    }),
  ])

  return {
    props: {
      page: pageRes.data,
      articlesRes: articlesRes,
      categories: categoriesRes.data,
    },
  }
}

export default Learn
