import React  from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({ articles, page, showVideoModal: showVideoModal = () => {} }) => {
  return (
      <>
        <div className="uvs-blog">
          <div className="row">
            {articles.length > 0 ? (
              articles.map((article) => {
                return (
                  <ArticleCard
                    key={"article-" + article.id}
                    article={article}
                    page={page}
                    showVideoModal={showVideoModal}
                  />
                )
              })
            ) : (
              <h1 className="text-center pt-48">Records Not Found</h1>
            )}
          </div>
        </div>
      </>
    )
}

export default ArticlesList
