import React from "react"
import { getStrapiMediaUrl } from "../lib/media"
const NjImg = (props) => {
  let prp = {}
  Object.keys(props).forEach((k) => {
    if (k !== "children") {
      prp[k] = props[k]
    }
  })
  return <img {...prp} src={getStrapiMediaUrl(prp.src)} />
}

export default NjImg
