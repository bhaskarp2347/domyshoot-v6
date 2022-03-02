import React, { useEffect, useState } from "react"
import Layout from "/components/layout"
import Seo from "/components/seo"
import { fetchAPI } from "/lib/api"
import Head from "next/head"
import Link from "next/link"
import moment from "moment";
import Markdown from "markdown-to-jsx";
import ArticleCard from "/components/ArticleCard";
import ArticleCommentsSection from "/components/ArticleCommentsSection";


const BlogDetail = ({ page }) => {
  const attr = page.attributes
  const category = attr.articleCategory ? attr.articleCategory.data.attributes.title : ""
  const [step, setStep] = useState(0)
  const [url, setUrl] = useState("")

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const gotoStep = (_step) => {
    document.querySelector(`div[tc-step="${_step}"]`).scrollIntoView({behavior: 'smooth'});
    setStep(_step)
  }

  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href={"/css/article.css"} />
      </Head>

      <Seo seo={attr.seo} />

      <section className="section">
        <div className="container pt-30">
          <nav
            className="article-heading-bg"
            aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/blog">Blog</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{attr.title}</li>
            </ol>
          </nav>
        </div>
        <div className="uvsboximg"/>
      </section>

      <section className="section blogduvs">
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <div className="uvslinksss">
                  <p>TABLE OF CONTENTS</p>
                  <ul>
                    {attr.content.map((value) => {
                      return (
                        <li key={"tc-title-"+value.id}>
                          <a onClick={() => gotoStep(value.id)} className={`cursor-pointer ${value.id === step ? "active" : ""}`}>{value.title}</a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="bluvsinfo">
                  <a href="#" className="btn buvsbutton2">{category}</a>
                  <h1>{attr.title}</h1>
                  <div className="auvsdiv">
                    <img src="/images/as.png" width="60" alt="" />
                    <b>&nbsp;{attr.author}</b> | {moment(attr.createdAt).format("Do MMM YYYY")}
                  </div>
                  <div className="textuvs">
                    {attr.content.map((value) => {
                      return <Markdown tc-step={value.id} key={"tc-content-"+value.id}>{value.content}</Markdown>;
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="uvsicons">
                  <p>Share with:</p>
                  <ul>
                    <li><a target="_blank" href={`https://www.facebook.com/sharer.php?u=${url}`}><img src="/images/facebook-icon.png" width="24" alt="Facebook"/></a></li>
                    {/*<li><a target="_blank" href="#"><img src="/images/instagram-icon.png" width="24" alt="" /></a></li>*/}
                    <li><a target="_blank" href={`https://twitter.com/share?url=${url}`}><img src="/images/twitter-icon.png" width="24" alt="Twitter" /></a></li>
                    <li><a target="_blank" href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}><img src="/images/linkedin-icon.png" width="24" alt="Linkedin" /></a></li>
                    <li><a target="_blank" href={`https://api.whatsapp.com/send?text=${attr.title} ${url}`}><img src="/images/whatsapp-icon.png" width="24" alt="Whatsapp" /></a></li>
                    <li><a target="_blank" href={`mailto:?Subject=${attr.title}&Body=${url}`}><img src="/images/email-icon.png" width="24" alt="Email" /></a></li>
                    <li><a className="cursor-pointer" onClick={() =>  navigator.clipboard.writeText(url)}><img src="/images/link-icon.png" width="24" alt="Copy link" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ArticleCommentsSection articleID={page.id}/>
      </section>
      {attr.relatedArticles && attr.relatedArticles.data.length > 0 ? (
        <section className="section sec-2 ">
          <div className="container pt-48">
            <div className="row">
              <div className="col-12 text-center pt-48">
                <div className="h2 mb-3">Related Articles</div>
                <div className="font-20">Similar Topics that you may find Interesting</div>
              </div>
            </div>
            <div className="uvs-blog">
              <div className="row">
                {
                  attr.relatedArticles.data.map((article) => {
                    return (
                      <ArticleCard key={"article-" + article.id} article={article} />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </Layout>
  )
}

export async function getServerSideProps({ locale: locale, query: {slug: slug = ""} }) {
  // Run API calls in parallel
  const [pageRes] = await Promise.all([
    fetchAPI("/articles", {
      locale,
      populate: [
        "seo",
        "seo.shareImage",
        "image",
        "articleCategory",
        "content",
        "relatedArticles",
        "relatedArticles.image",
        "relatedArticles.articleCategory",
      ],
      filters:{
        slug
      }
    }),
  ])

  return {
    props: {
      page: pageRes.data[0],
    },
  }
}

export default BlogDetail
