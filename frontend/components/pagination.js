import Link from "next/link"
import qs from "qs"
import React from "react"

const Pagination = ({ meta, pageNo, query = {} }) => {
  return (
    <div className="pt-3 text-center uvspagination">
      <div className="pagination">
        <ul>
          {pageNo > 1 && meta.pageCount > 0 ? (
            <li>
              <Link scroll={false} href={`?${qs.stringify({ page: pageNo == 1 ? pageNo : pageNo - 1, ...query })}`}>
                <a className={`cursor-pointer`}>Previous</a>
              </Link>
            </li>
          ) : (
            <></>
          )}
          {meta.pageCount > 1 ? (
            Array.from({ length: meta.pageCount }, (_, i) => i + 1).map((p) => {
              return (
                <li key={"page-no-" + p}>
                  {p == pageNo ? (
                    <span className="current">{p}</span>
                  ) : (
                    <Link scroll={false} href={`?${qs.stringify({ page: p, ...query })}`}>
                      <a className={`cursor-pointer`}>{p}</a>
                    </Link>
                  )}
                </li>
              )
            })
          ) : (
            <></>
          )}
          {pageNo < meta.pageCount ? (
            <li>
              <Link scroll={false} href={`?${qs.stringify({ page: pageNo == meta.pageCount ? pageNo : pageNo + 1, ...query })}`}>
                <a className={`cursor-pointer`}>Next</a>
              </Link>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Pagination
