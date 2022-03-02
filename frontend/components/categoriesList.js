import React from "react";
import Link from "next/link";
import qs from "qs";

const CategoriesList = ({ categories, category }) => {
  return (
      <>
        <div className="row pt-48">
          <div className="col-lg-9 mx-auto py-48 cc-ul-list-box">
            <ul className="nav nav-pills justify-content-center mb-3 mt-1" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <Link scroll={false} href={`?${qs.stringify({ page: 1, category: "" })}`}>
                  <a className={`nav-link cursor-pointer ${category == "" ? "active" : ""}`}>ALL</a>
                </Link>
              </li>
              {categories ? (
                categories.map((value) => {
                  return (
                    <li className="nav-item" role="presentation" key={"cat-name-" + value.id}>
                      <Link scroll={false} href={`?${qs.stringify({ page: 1, category: value.id })}`} key={"cat-name-" + value.id}>
                        <a className={`nav-link cursor-pointer ${value.id == category ? "active" : ""}`}>{value.attributes.title}</a>
                      </Link>
                    </li>
                  )
                })
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </>
    )
}

export default CategoriesList
