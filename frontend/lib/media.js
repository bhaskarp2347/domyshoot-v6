import { getStrapiURL } from "./api"
import React from "react";

export function getStrapiMediaUrl(media) {
  if (typeof media != "object") {
    return media
  }
  let url = media?.data?.attributes?.url || ""
  // const urls = typeof media == "object" ? media?.data?.attributes?.url || "" : media
  return url.startsWith("/") ? getStrapiURL(url) : url
}
