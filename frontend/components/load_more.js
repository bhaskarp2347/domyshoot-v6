import React from "react"

const LoadMore = ({ meta, pageNo, setPageNo = () => {} }) => {
  return (
    <div className="uvspagination1 text-center">
      <p>
        {pageNo < meta.pageCount ? (
          <>
            <div style={{height: "84px"}}/>
            <a
              className={`cursor-pointer`}
              onClick={() => setPageNo(pageNo == meta.pageCount ? pageNo : pageNo + 1)}
            >See More</a>
          </>
        ) : pageNo > 1 ? (
          <>
            <div style={{height: "84px"}}/>
            <span>No More Records</span>
          </>
        ) : (
          <></>
        )}
      </p>
    </div>
  )
}

export default LoadMore
