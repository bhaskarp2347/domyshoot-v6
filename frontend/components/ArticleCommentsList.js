import React from "react";
import moment from "moment";
import CryptoJS from "crypto-js";
import NjImg from "./nj_img";

const ArticleCommentsList = ({ articleID, comments, commentsLength, replyToComment }) => {

  const displayComment = (_comment, isParent = true, childrenLength = 0) => {
    const comment = _comment.attributes
    const avatar = "https://www.gravatar.com/avatar/" + CryptoJS.MD5(comment.userEmail.toLowerCase()).toString() + ".jpg?s=50";
    return (
      <div key={_comment.id} data-comment-id={_comment.id}>
        <div className="uvscmr">
          <div className="row">
            <div className="col-md-8 box-nameimg">
              <NjImg src={avatar} className="comment-avatar"/>
              <div className="box-nameuvs">
                {comment.userName}
                <br />
                {moment(comment.createdAt).fromNow()}
              </div>
            </div>
            <div className="col-4 uvstext-right">
              {/*<a className="cursor-pointer" >0 Likes</a>*/}
              {/*<a className="cursor-pointer" >&nbsp; . &nbsp;</a>*/}
              <a className="cursor-pointer" >{childrenLength} Reply</a>
            </div>
          </div>
          <p>{comment.comment}</p>
          <div className="linksiconss">
            {/*<img src="/images/like.png" width="20" alt="" />*/}
            {/*<a className="cursor-pointer">&nbsp;Like</a>*/}
            <img src="/images/reply.png" width="20" alt="" />
            <a className="cursor-pointer" onClick={() => replyToComment({ ...{id: _comment.id}, ...comment })}>&nbsp;Reply</a>
          </div>
          <p />
        </div>
        {childrenLength === 0 && isParent && <hr />}
      </div>
    )
  }

  const displayCommentList = (data, isParent = true) => {
    const result = []
    data.map(comment => {
      const childrenLength = comment.children.length
      if(childrenLength > 0){
        result.push(displayComment(comment, isParent, childrenLength))
        result.push(
          <div className="uvscmrinner" key={'cb-'+comment.id}>
            {displayCommentList(comment.children, false)}
          </div>
        )
      }else{
        result.push(displayComment(comment, isParent, childrenLength))
      }
    })
    return result;
  }

  return (
    <div className="commentboxuvs">
      {
        commentsLength > 0 ?
        <div className="ctitleuvs">Comments ({commentsLength})</div>
        :<></>
      }
      {displayCommentList(comments)}
    </div>
  )
}

export default ArticleCommentsList
