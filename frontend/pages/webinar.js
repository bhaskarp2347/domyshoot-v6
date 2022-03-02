import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Md from "../components/md"
import Pagination from "../components/pagination"
import VideoModal from "../components/videoModal";
import { fetchAPI } from "../lib/api"
import Head from "next/head"
import NjImg from "../components/nj_img"
import Image from "../components/image"
import { useRouter } from "next/router"

const Webinar = ({ page, videosRes }) => {
  const router = useRouter()
  const attr = page.attributes
  const videos = videosRes.data
  const pagination = videosRes.meta.pagination
  const [pageNo, setPageNo] = useState(1)
  const [video, setVideo] = useState({})
  const [videoModal, setVideoModal] = useState()

  useEffect(() => {
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
    <Layout>
      <Head>
        <link rel="stylesheet" href={"/css/webinar.css"} />
      </Head>

      <Seo seo={attr.seo} />

      <section className="section sec-1 pb-md-0 wb-headuvs">
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

      <section className="section sec-2 ">
        <div className="container pt-48">
          <Md>{attr.content}</Md>
          <div className="row">
            <div className="col-12 text-center pt-48">
              <div className="h2 mb-3">{attr.title}</div>
              <div className="font-20">{attr.info}</div>
            </div>
          </div>
          <div className="uvs-webinar">
            <div className="row">
              {videos.length > 0 ? (
                videos.map((_value) => {
                  const value = _value.attributes
                  return (
                    <div className="col-xl-6 col-md-12" key={"webinar-video-" + _value.id}>
                      <div className="card">
                        <p className="card-text">
                          <NjImg src="/images/view.png" /> {value.views || 0} views
                        </p>
                        <div className="row">
                          <div className="col-md-6">
                            <h5>{value.title}</h5>
                            <a onClick={() => showVideoModal(value)} className="btn wbuvsbtn">Watch Now</a>
                          </div>
                          <div className="col-md-6">
                            <div className="imgboxss">
                              <NjImg src={value.poster} />
                              <a onClick={() => showVideoModal(value)} className="btn wbuvsvbtn">
                                <NjImg src="/images/play.png" />
                              </a>
                            </div>
                          </div>
                          <p className="card-text">
                            <NjImg src="/images/time.png" />
                            {value.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })
              ) : (
                <h1 className="text-center pt-48">Records Not Found</h1>
              )}
            </div>
            <Pagination meta={pagination} pageNo={pageNo} />
          </div>
        </div>
      </section>

      <VideoModal video={video}/>
    </Layout>
  )
}

export async function getServerSideProps({ locale: locale, query: { page: page = 1 } }) {
  // Run API calls in parallel
  const [pageRes, videosRes] = await Promise.all([
    fetchAPI("/webinar", {
      locale,
      populate: ["seo", "seo.shareImage", "image"],
    }),
    fetchAPI("/webinar-videos", {
      locale,
      populate: "*",
      pagination: {
        pageSize: 6,
        page: page,
      },
      sort: ['id:desc']
    }),
  ])

  return {
    props: {
      page: pageRes.data,
      videosRes: videosRes,
    },
  }
}

export default Webinar
