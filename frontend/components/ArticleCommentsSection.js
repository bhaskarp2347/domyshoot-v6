import React, { useEffect, useState } from "react";
import ArticleCommentForm from "./ArticleCommentForm";
import ArticleCommentsList from "./ArticleCommentsList";
import { fetchAPI } from "../lib/api";
import { listToTree } from "../lib/util";


const ArticleCommentsSection = ({ articleID }) => {
  const [replyTo, setReplyTo] = useState(null);

  const replyToComment = (comment) => {
    document.querySelector(`#submitCommentFormBox`).scrollIntoView({behavior: 'smooth'});
    setReplyTo(comment)
  }

  const cancelReplay = () => {
    setReplyTo(null)
  }


  const [commentsLength, setCommentsLength] = useState(0)
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = () => {
    // Run API calls in parallel
    fetchAPI("/article-comments", {
      populate: "*",
      filters: {
        article: articleID
      },
      pagination: {
        pageSize: 200,
      }
    }).then(res => {
      setComments(listToTree(res.data))
      setCommentsLength(res.meta.pagination.total)
    })
  }


  return (
    <div className="section blogduvscomment">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <ArticleCommentForm
              articleID={articleID}
              replyTo={replyTo}
              cancelReply={cancelReplay}
              fetchComments={fetchComments}
            />
            <ArticleCommentsList
              articleID={articleID}
              replyToComment={replyToComment}
              comments={comments}
              commentsLength={commentsLength}
            />
          </div>
          <div className="col-md-2" />
        </div>
        <div id="endComment" className="row" />
      </div>
    </div>
  )
}

export default ArticleCommentsSection
