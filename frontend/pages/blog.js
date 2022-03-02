import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination";
import { fetchAPI } from "../lib/api"
import Head from "next/head"
import Image from "../components/image"
import Md from "../components/md"
import { useRouter } from "next/router"
import CategoriesList from "../components/categoriesList";
import ArticlesList from "../components/ArticlesList";

const Blog = ({ page, articlesRes, categories }) => {
  const router = useRouter()
  const attr = page.attributes
  const articles = articlesRes.data
  const pagination = articlesRes.meta.pagination
  const [category, setCategory] = useState(router.query.category)
  const [pageNo, setPageNo] = useState(1)

  useEffect(() => {
    setCategory(router.query.category || "")
    setPageNo(parseInt(router.query.page) || 1)
  }, [router])

  return (
    <Layout className="page-blog">
      <Head>
        <link rel="stylesheet" href={"/css/blog.css"} />
      </Head>

      <Seo seo={attr.seo} />

      <section className="section sec-1 pb-md-0 blog-headuvs">
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
          <div style={{height: "78px"}}/>
          <Md>{attr.content}</Md>
          <div style={{height: "64px"}}/>
          <div className="row">
            <div className="col-12 text-center pt-48">
              <div className="h2 mb-4">{attr.title}</div>
              <div className="font-20">{attr.info}</div>
            </div>
          </div>
          <CategoriesList categories={categories} category={category}/>
          <ArticlesList articles={articles} page="blog"/>
          <Pagination meta={pagination} pageNo={pageNo} query={{ category }} />
        </div>
      </section>
    </Layout>
  )
}

export async function getServerSideProps({ locale: locale, query: { page: page = 1, category: category = "" } }) {
  // Run API calls in parallel
  let articlesFilters = {
    showOnBlogPage: true,
  }
  if(category){
    articlesFilters.articleCategory = category
  }
  const [pageRes, articlesRes, categoriesRes] = await Promise.all([
    fetchAPI("/blog", {
      locale,
      populate: ["seo", "seo.shareImage", "image"],
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
      showOnBlogPage: true,
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

export default Blog
