import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchAPI } from "../lib/api";

const ArticleCommentsForm = ({ articleID, replyTo, cancelReply, fetchComments }) => {

  const postCommentFormSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const data = Object.fromEntries(fd.entries());

    data.article = articleID

    if(replyTo){
      data.parent = replyTo.id
    }

    fetchAPI("/article-comments", {},{
      method: "post",
      body: JSON.stringify({data})
    }).then(res => {
      e.target.reset()
      fetchComments()
      cancelReply()

      if(replyTo){
        document.querySelector(`div[data-comment-id="${replyTo.id}"]`).scrollIntoView({behavior: 'smooth'});
      }
      else{
        document.querySelector(`#endComment`).scrollIntoView({behavior: 'smooth'});
      }

      toast.success("Your comment was placed successfully!")
    })

    return false;
  }

  return (
    <div id="submitCommentFormBox">
      <div className="ctitleuvs">Leave a Comment</div>
      {
        replyTo && <h5>
          Reply To: &nbsp;
          {replyTo?.id} &nbsp;
          {replyTo?.userName} &nbsp;
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => cancelReply()
          }>Cancel Reply</button>
        </h5>
      }
      <div className="comment-formuvs">
        <form onSubmit={(e) => postCommentFormSubmit(e)} className="row clearfix" method="post">
          <div className="col-sm-6">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Name*" name="userName" required/>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Email*" name="userEmail" required/>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <textarea rows="4" className="form-control no-resize" placeholder="Comment*" name="comment" required/>
            </div>
            <button type="submit" className="btn btn-secondary">Post Comment</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ArticleCommentsForm
