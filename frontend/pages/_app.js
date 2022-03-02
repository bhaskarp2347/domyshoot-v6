import App from "next/app"
import Head from "next/head"
import { createContext, useEffect, useState } from "react";
import { fetchAPI } from "../lib/api"
import { getStrapiMediaUrl } from "../lib/media"
import Progress from "../components/progress"
import { staticCurrencies, currenciesWithRate, defaultCurrency, userCurrencyByIP } from "../lib/currencies";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/router";

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  useEffect(() => {
    const document = window.document
    //burger icon
    if (document.querySelector(".burger")) {
      document.querySelector(".burger").addEventListener("click", () => {
        let active = document.querySelector(".burger.show")
        if (active === null) {
          //open
          document.querySelector(".burger").classList.add("show")
          gsap.to(".burger span:nth-child(2)", { autoAlpha: 0 })
          gsap.to(".burger span:nth-child(1)", { y: 10, rotateZ: "45deg" }, "<50%")
          gsap.to(".burger span:nth-child(3)", { y: -6, rotateZ: "-45deg," }, "<")
        } else {
          //close
          document.querySelector(".burger").classList.remove("show")
          gsap.to(".burger span:nth-child(2)", { autoAlpha: 1 })
          gsap.to(".burger span:nth-child(1)", { y: 0, rotateZ: "0deg" }, "<50%")
          gsap.to(".burger span:nth-child(3)", { y: 0, rotateZ: "0deg," }, "<")
        }
      })
    }
  }, [])

  const [language, setLanguage] = useState({})
  const [languages, setLanguages] = useState([])
  const [currencies, setCurrencies] = useState(staticCurrencies)
  const [currency, setCurrency] = useState(defaultCurrency)
  const { locale } = useRouter();
  const setLanguageFromLocale = () => {
    languages.forEach(l => {
      if(l.code === locale){
        setLanguage(l)
      }
    })
  }

  useEffect(async () => {
    setCurrency(await userCurrencyByIP())
    setCurrencies(await currenciesWithRate())
    fetchAPI("/i18n/locales").then(res => {
      setLanguages(res)
      setLanguageFromLocale()
    })
  }, [])

  useEffect(() => {
      setLanguageFromLocale()
  }, [locale, languages])

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/custom.css" />
        <link rel="shortcut icon" href={getStrapiMediaUrl(global.attributes.favicon)} />
        <script defer src={"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"} />
        <script defer src={"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"} />
        <script defer src={"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"} />
        <script defer src={"https://unpkg.com/swiper@7/swiper-bundle.min.js"} />
      </Head>
      <GlobalContext.Provider value={{
        ...global.attributes, ...{
          currency, setCurrency, currencies,
          language, setLanguage, languages
        } }}>
        <Progress />
        <Component {...pageProps} />
        {/* <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        Same as */}
        <ToastContainer />

      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    locale: ctx.ctx.locale,
    populate: [
      "favicon",
      "defaultSeo",
      "defaultSeo.image",
      "socialLinks",
      "appDownloadSection",
      "appDownloadSection.image",
      "appDownloadSection.downloadLinks",
      "appDownloadSection.downloadLinks.icon",
      "socialLinks.icon",
      "footerLogo",
    ],
  })
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } }
}

export default MyApp
