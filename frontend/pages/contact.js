import React, { useContext, useState } from "react"
import axios from "axios"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI, getStrapiURL } from "../lib/api"
import Head from "next/head"
import Md from "../components/md"
import NjImg from "../components/nj_img"
import { GlobalContext } from "./_app"
import 'react-toastify/dist/ReactToastify.css'
import { toast } from "react-toastify"

const Contact = ({ page }) => {
  const attr = page.attributes
  const { socialLinks } = useContext(GlobalContext)
  const [attachment, setAttachment] = useState({})
  const [loading, setLoading] = useState(false)

  const onSubmitForm = (e) => {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.target)
    const data = Object.fromEntries(fd.entries())

    const sendData = (url = '') => {
      data.attachment = url
      axios.post(getStrapiURL("/api/user/contact-form-submit"), data)
        .then((response) => {
          setLoading(false)
          const res = response.data
          if (res.success) {
            setAttachment({})
            e.target.reset()
            toast.success(res.message)
          } else {
            toast.error(res.message)
          }
        })
        .catch((error) => {
          toast.error(error.message)
          setLoading(false)
        })
    }

    const sendDataWithAttachment = () => {
      const formData = new FormData()
      if(attachment){
        formData.append('files', attachment)
      }
      axios.post(getStrapiURL("/api/upload"), formData)
        .then((res) => {
          if (res.data[0] && res.data[0].url) {
            const { url } = res.data[0]
            sendData(getStrapiURL(url))
          }
        })
        .catch((error)=>{
          toast.error(error.message)
          setLoading(false)
        })
    }

    if(attachment && attachment.size){
      sendDataWithAttachment()
    }
    else{
      sendData()
    }
  }

  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href={"/css/contact.css"} />
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
        <div className="container pt-3 pb-48">
          <div className="row">
            <div className="col-lg-5 me-lg-auto">
              <div className="h2 DIS__mb-48">{attr.title}</div>
              <Md overrides={{
                p: {
                  props: {
                    className: "font-20",
                  },
                },
              }}>{attr.content}</Md>
              {/*

              Markdown content {
              DoMyShoot is the ideal product photography solution for all your eCommerce needs.

              Our A.I. gives your teams across the globe access to a central brain that supports large scale visual content creation. With an automated workflow for the backbone of your online business, increase your ROI and boost productivity. With Dresma, you make A.I. a part of your business DNA.
              <br/><br/>

              **Let’s Connect**<br/>
              Dresma Inc, 19925 Stevens Creek Blvd, <br/>
              Suite 100, Cupertino, CA, <br/>
              United States 95014<br/>
              support@dresma.com<br/>
              +91-124-4385988
              }

              Html content {
                <div className="font-20 mb-5">DoMyShoot is the ideal product photography solution for all your eCommerce needs.</div>
                <div className="font-20">
                  Our A.I. gives your teams across the globe access to a central brain that supports large scale visual content creation. With an automated workflow for the backbone
                  of your online business, increase your ROI and boost productivity. With Dresma, you make A.I. a part of your business DNA.
                </div>
                <div className="font-24 font-bold pt-48">Let’s Connect</div>
                <div className="font-20 mt-4">
                  Dresma Inc, 19925 Stevens Creek Blvd, <br />
                  Suite 100, Cupertino, CA, <br /> United States 95014
                </div>
                <a href="mailto:support@dresma.com" className="font-20 d-block my-3">
                  support@dresma.com
                </a>
                <a href="tel:+911244385988" className="font-20 d-block">
                  +91-124-4385988
                </a>
              }
              */}
              <div className="social d-flex mt-4">
                {
                  socialLinks? ((_value)=>{
                    return _value.map(value => {
                      return (
                        <a href={value.url} key={value.id} rel="nofollow" target="_blank" className="me-4">
                          <NjImg src={value.icon}/>
                        </a>
                      )
                    })
                  })(socialLinks): <></>
                }
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact">
                <form onSubmit={onSubmitForm} action="#" method="post" className="form">
                  <div className="form-floating">
                    <input name="name" type="text" className="form-control" id="name" placeholder="name" required/>
                    <label htmlFor="name">Name*</label>
                  </div>
                  <div className="form-floating">
                    <input name="email" type="email" className="form-control" id="email" placeholder="email" required/>
                    <label htmlFor="email">Email*</label>
                  </div>
                  <div className="form-floating">
                    <input name="subject" type="text" className="form-control" id="share" placeholder="share" required/>
                    <label htmlFor="share">What would you like to share?*</label>
                  </div>
                  <div className="form-floating">
                    <textarea name="message" className="form-control" placeholder="Type in your message" id="message" required/>
                    <label htmlFor="message">Type in your message*</label>
                  </div>
                  <input
                    onChange={(e) => setAttachment(e.target.files? e.target.files[0]: {})}
                    name="attachment" type="file" id="file" className="d-none" />
                  <label htmlFor="file" className="font-14 font-medium file mb-48">
                    <span className="text-decoration-underline">Attach File</span> {" "}
                    {
                      attachment && attachment.size ? <i>~<small>{attachment.name}</small></i>
                      : <></>
                  }
                  </label>
                  <button type="submit" className="font-medium btn btn-dark d-block w-100 mt-48" disabled={loading}>
                    {loading? 'Submitting...': 'Submit'}
                  </button>
                </form>
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
    fetchAPI("/contact", {
      locale,
      populate: {
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      page: pageRes.data,
    },
  }
}

export default Contact
