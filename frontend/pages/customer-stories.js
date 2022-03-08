import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Head from "next/head"
import NjImg from "../components/nj_img"
import Image from "../components/image"
import Md from "../components/md"
import { useRouter } from "next/router"
import LoadMore from "../components/load_more"
import VideoModal from "../components/videoModal";

const CustomerStories = ({ page }) => {
  const router = useRouter()
  const attr = page.attributes
  const m3 = attr.main3stories.data
  const [stories, setStories] = useState([])
  const [pagination, setPagination] = useState({})
  const [pageNo, setPageNo] = useState(1)
  const [video, setVideo] = useState({})
  const [videoModal, setVideoModal] = useState()
  const shownStories = [];

  const getStories = async (page) => {
    const [stories] = await Promise.all([
      fetchAPI("/customer-story-articles", {
        locale: router.locale,
        populate: "*",
        pagination: {
          pageSize: 6,
          page: page,
        },
        sort: ['id:desc']
      })
    ])
    return stories
  }

  useEffect(async () => {
    const storiesRes = await getStories(pageNo)
    setPagination(storiesRes.meta.pagination)
    setStories([...stories, ...storiesRes.data])
    const bs = window.bootstrap
    const vmEl = document.getElementById("videoModal")
    const vm = new bs.Modal(vmEl, {
      keyboard: false
    });
    vmEl.addEventListener('hidden.bs.modal', function () {
      setVideo({})
    })
    setVideoModal(vm)
  }, [pageNo])

  const showVideoModal = (video) => {
    setVideo(video)
    videoModal.show()
  }

  return (
    <Layout className="page-customer-stories">
      <Head>
        <link rel="stylesheet" href={"/css/customer-stories.css"} />
      </Head>

      <Seo seo={attr.seo} />

      <section className="section sec-1 pb-md-0 cs-headuvs">
        <div className="container pt-48">
          <div className="row">
            <div className="col-12 text-center h1 py-48">{attr.heading}</div>
          </div>
        </div>
      </section>

      <div className="searchuvs">
        <div className="container">
          <Image image={attr.image} className="img-fluid" />
        </div>
      </div>

      <section className="section sec-2">
        <div style={{height: "168px"}}/>
        <div className="container">
          <Md>{attr.content}</Md>
          <div style={{height: "117px"}}/>
          <div className="row">
            <div className="col-12 text-center">
              <div className="h2 mb-3">{attr.title}</div>
              <div className="font-20">{attr.info}</div>
            </div>
          </div>
          <div className="mt-2 uvs-review">
            {Array.isArray(m3) && m3.length > 0 && m3[0] ? (
              <div className="mt-48 row">
                <div className="col-md-6">
                  <div className="card uvshcard">
                    <NjImg src={m3[0].attributes.image} />
                    <img src="/images/quote.png" className="smallquote" />
                    <div className="card-body">
                      <p className="card-text font-20">{m3[0].attributes.content}</p>
                      <h5>
                        {m3[0].attributes.customer} | {m3[0].attributes.company}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="pl-5">
                    {m3[1] ? (
                      <div className="card uvshcard1">
                        <NjImg src={m3[1].attributes.image} />
                        <NjImg onClick={() => showVideoModal(m3[1].attributes)} src="/images/play2.png" className="smallvid cursor-pointer" />
                        <div className="card-body">
                          <p className="card-text font-20 custompa">{m3[1].attributes.content}</p>
                          <h5>
                            {m3[1].attributes.customer} | {m3[1].attributes.company}
                          </h5>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                    {m3[2] ? (
                      <div className="card uvshcard1">
                        <NjImg src={m3[2].attributes.image} />
                        <div className="card-body">
                          <p className="card-text font-20">{m3[2].attributes.content}</p>
                          <h5>
                            {m3[2].attributes.customer} | {m3[2].attributes.company}
                          </h5>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="section uvs-reviewss" />
        <div className="container pt-48">
          <NjImg src="/images/Quote-c.png" className="paimg" />
          <div className="uvs-review1">
            <div className="row">
              {stories.length > 0 ? (
                stories.map((_value, vi) => {
                  const value = _value.attributes
                  if(shownStories.includes(_value.id)){
                    return;
                  }
                  shownStories.push(_value.id)
                  return vi % 2 === 0 ? (
                    <div className="col-xl-4 col-md-6" key={"story-" + _value.id}>
                      <div className="review-wrapper">
                        <NjImg src="/images/q2.png" className="quote" />
                        <div className="review-info">
                          <NjImg src={value.avatar} className="review-img" />
                          <div className="review-meta mb-2">
                            <div className="font-16 font-bold">{value.customer}</div>
                          </div>
                        </div>
                        <div className="reviewuvssss">{value.content}</div>
                        <NjImg src={value.logo} className="review-thumb" />
                      </div>
                    </div>
                  ) : (
                    <div className="col-xl-4 col-md-6" key={"story-" + _value.id}>
                      <div className="card uvshcard1">
                        <NjImg src={value.image} />
                        <NjImg onClick={() => showVideoModal(value)} src="/images/play2.png" className="smallvid cursor-pointer" />
                        <div className="card-body">
                          <p className="card-text">{value.content}</p>
                          <h5>
                            {value.customer} | {value.company}
                          </h5>
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <h1 className="text-center pt-48">Records Not Found</h1>
              )}
            </div>
          </div>
          <LoadMore meta={pagination} pageNo={pageNo} setPageNo={setPageNo} />
        </div>
      </section>
      <VideoModal video={video}/>
    </Layout>
  )
}

export async function getServerSideProps({ locale: locale, query: { page: page = 1 } }) {
  // Run API calls in parallel
  const [pageRes] = await Promise.all([
    fetchAPI("/customer-story", {
      locale,
      populate: ["seo", "seo.shareImage", "image", "main3stories", "main3stories.avatar", "main3stories.image", "main3stories.logo"],
    }),
  ])

  return {
    props: {
      page: pageRes.data,
    },
  }
}

export default CustomerStories
