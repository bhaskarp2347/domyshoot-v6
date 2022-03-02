import React from "react";
import NjImg from "./nj_img";
import Link from "next/link";
import moment from "moment";

const ArticleCard = ({ article, page, showVideoModal: showVideoModal = () => {} }) => {
  const value = article.attributes
  const category = value.articleCategory ? value.articleCategory.data.attributes.title : ""

  const cardForBlogPage = (
    <div className="col-xl-4 col-md-6 article-card-box">
      <div className="card">
        <NjImg className="card-img-top" src={value.image} />
        <div className="card-body">
          <a className="btn buvsbutton">
            {category}
          </a>
          <span className="buvscircle font-bold">{value.readTime}</span>
          <h5 className="card-title font-bold">
            <Link href={`/article/${value.slug || ""}`}>{value.title}</Link>
          </h5>
          <p className="card-text font-bold">
            {value.author} | {moment(value.createdAt).format("Do MMM YYYY")}
          </p>
        </div>
      </div>
    </div>
  )

  const cardForLearnPage = (
    <div className="col-md-4">
      <div className="card">
        <div className="card-img">
          <NjImg className="tut-img" src={value.image} />
          <div className="tut-time">{value.readTime}</div>
          {value.showAsVideoModal && <img src="/images/tutplay.png" alt="" className="tut-play" onClick={() => showVideoModal(value)}/>}
        </div>
        <div className="card-body">
          <div className="tut-title font-bold">
            {
              value.showAsVideoModal ?
                <a onClick={() => showVideoModal(value)} className="cursor-pointer">{value.title}</a>
              :
                <Link href={`/article/${value.slug || ""}`}>{value.title}</Link>
            }
          </div>
        </div>
      </div>
    </div>
  )

  switch (page){
    case "learn":
      return cardForLearnPage
    case "blog":
      return cardForBlogPage
    default:
      return <></>
  }
}

export default ArticleCard
