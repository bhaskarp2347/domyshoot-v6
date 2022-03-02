import { getStrapiMediaUrl } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, className, style }) => {
  const { url, alternativeText, width, height } = image?.data?.attributes || {}

  const loader = () => {
    return getStrapiMediaUrl(image)
  }

  return url ? (
    <NextImage
      loader={loader}
      layout="responsive"
      width={width}
      height={height}
      className={className}
      objectFit="contain"
      src={getStrapiMediaUrl(image)}
      alt={alternativeText || ""}
    />
  ) : (
    <img  alt=""/>
  )
}

export default Image
