import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Head from "next/head"

const Faq = ({ page }) => {
  const attr = page.attributes
  const [groups, setGroups] = useState([])
  const [activeGroup, setActiveGroup] = useState("")

  useEffect(() => {
    const _groups = []
    attr.questions.forEach((question) => {
      if (!_groups.includes(question.group)) {
        _groups.push(question.group)
      }
    })
    setGroups(_groups)
  }, [])

  return (
    <Layout className="page-faq">
      <Head>
        <link rel="stylesheet" href={"/css/faq.css"} />
      </Head>
      <Seo seo={page.attributes.seo} />

      <section className="section sec-1 pb-md-0">
        <div className="container pt-48">
          <div className="row">
            <div className="col-12 text-center h1 py-48">{attr.heading}</div>
          </div>
          <div className="row search">
            <div className="col-md-9 mx-auto">
              <form action="#" method="post" className="bg-white p-1 p-md-3">
                <div className="form-floating">
                  <input type="text" className="form-control border-0 outline-0" id="search" placeholder="Search" />
                  <label htmlFor="search">Search</label>
                </div>
                <img src="/images/search-icon.png" alt="" />
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section sec-2 ">
        <div className="container pt-48">
          <div className="row">
            <div className="col-12 text-center pt-48">
              <div style={{height: "66px"}}/>
              <div className="h2 mb-3">{attr.title}</div>
              <div className="font-20">{attr.info}</div>
            </div>
          </div>
          <div className="row pt-48">
            <div className="col-lg-9 mx-auto py-48 cc-ul-list-box">
              <ul className="nav nav-pills justify-content-center mb-3 mt-1" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className={`nav-link ${activeGroup === "" ? "active" : ""}`} onClick={() => setActiveGroup("")}>
                    All
                  </button>
                </li>
                {groups ? (
                  groups.map((value) => {
                    return (
                      <li className="nav-item" role="presentation" key={value}>
                        <button className={`nav-link ${activeGroup === value ? "active" : ""}`} onClick={() => setActiveGroup(value)}>
                          {value}
                        </button>
                      </li>
                    )
                  })
                ) : (
                  <></>
                )}
              </ul>
            </div>
            <div style={{height: "58px"}}/>
            <div className="col-12 pt-48">
              <div className="accordion" id="accordionExample">
                {attr.questions ? (
                  attr.questions.map((value) => {
                    if (activeGroup !== "" && activeGroup !== value.group) {
                      return <></>
                    }
                    return (
                      <div className="accordion-item" key={value.id}>
                        <h2 className="accordion-header" id={`collapse_faq_h_${value.id}`}>
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse_faq_${value.id}`}
                            aria-expanded="false"
                            aria-controls={`collapse_faq_${value.id}`}
                          >
                            {value.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse_faq_${value.id}`}
                          className="accordion-collapse collapse"
                          aria-labelledby={`#collapse_faq_h_${value.id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>{value.answer}</p>
                          </div>
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
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps({ locale: locale }) {
  // Run API calls in parallel
  const [pageRes] = await Promise.all([
    fetchAPI("/faq", {
      locale,
      populate: ["seo", "seo.shareImage", "questions"],
    }),
  ])

  return {
    props: {
      page: pageRes.data,
    },
  }
}

export default Faq
