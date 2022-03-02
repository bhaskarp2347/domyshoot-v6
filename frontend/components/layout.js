import Link from "next/link"
import React, { useContext } from "react";
import NjImg from "./nj_img"
import { useRouter } from "next/router"
import { GlobalContext } from "../pages/_app";

const Layout = ({ children, className }) => {
  const { asPath } = useRouter();
  const { currency, setCurrency, currencies, language, setLanguage, languages } = useContext(GlobalContext)
  const attr = useContext(GlobalContext)

  return (
    <div className={className}>
      <header className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid p-0">
              <Link href="/">
                <a className="navbar-brand" href="#">
                  <NjImg src="/images/logo.png" />
                </a>
              </Link>
              <button
                id="burger"
                className="burger btn btn-border navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                {/*<!-- <span className="navbar-toggler-icon"></span> -->*/}
                <span />
                <span />
                <span />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto align-items-lg-center">
                  <li className="nav-item">
                    <Link href="/#pricing">
                      <a className="nav-link">Pricing</a>
                    </Link>
                  </li>
                  <li className="me-2 nav-item">
                    <Link href="/learn">
                      <a className="nav-link">Learn</a>
                    </Link>
                  </li>
                  <li className="me-3 nav-item">
                    <span className="font-40" style={{borderRight: '2px solid'}}/>
                  </li>
                  <li className="nav-item me-0">
                    <div className="dropdown h--dd-box">
                      <button
                        className="btn btn-gray btn-header-menu-dd btn me-3 dropdown-toggle text-uppercase"
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >{language.code}</button>
                      <ul className="dropdown-menu dropdownuvs" aria-labelledby="dropdownMenuButton2">
                        <li><h6 className="select-title-text">Select your preferred language</h6></li>
                        {languages.map(lang => {
                          return (
                            <li key={`locale-${lang.id}`}>
                              <Link href={asPath} locale={lang.code} onClick={() => setLanguage(lang)}>
                                <a className={`dropdown-item ${lang.code === language.code ? "active" : ""}`}>{lang.name}</a>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item me-0">
                    <div className="dropdown h--dd-box">
                      <button
                        className="btn btn-gray btn-header-menu-dd btn me-3 dropdown-toggle text-uppercase"
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >{`${currency.code}`}</button>
                      <ul className="dropdown-menu dropdownuvs" aria-labelledby="dropdownMenuButton2">
                        <li><h6 className="select-title-text">Select your preferred currency</h6></li>
                        { Object.values(currencies).map(c => {
                          return (
                            <li key={`ccl-${c.code}`}>
                              <a
                                onClick={() => setCurrency(c)}
                                className={`dropdown-item ${c.code === currency.code ? "active" : ""}`}
                                dangerouslySetInnerHTML={{ __html: `${c.code} - ${c.name}` }}
                              />
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="d-flex align-items-center">
                      <a className="nav-link btn-border btn me-3 btn-header-menu-link">Login</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {children}
      {
        attr.appDownloadSection ? ((value)=>{
          return (
            <section className="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-5">
                    <NjImg src={value.image} className="img-fluid mt-48" />
                  </div>
                  <div className="col-md-6 offset-md-1 pt-48">
                    <div dangerouslySetInnerHTML={{ __html: value.title }} />
                    <div className="font-20 uvsfotn-20">{value.info}</div>
                    <div className="my-48 ">
                      <div className="row">
                        {
                          value.downloadLinks.map((dv, dvi) => {
                            return (
                              <div className="col-4" key={`dvi-${dvi}`}>
                                <a href={dv.url}>
                                  <NjImg src={dv.icon} className={`img-fluid ${dvi === 0? '': 'mb-4 mb-md-0 me-0 me-md-3'}`} />
                                </a>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })(attr.appDownloadSection): <></>
      }
      <footer className="footer">
        <div className="container">
          <div className="row widgets">
            <div className="col">
              <div className="widget">
                <div className="widget-wrapper">
                  <div className="widget-title">Resources</div>
                  <div className="widget-content">
                    <Link href="/learn">Learn</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/webinar">Webinar</Link>
                    <Link href="/customer-stories">Customer Stories</Link>
                    <Link href="/features">Features</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="widget">
                <div className="widget-wrapper">
                  <div className="widget-title">Support</div>
                  <div className="widget-content">
                    <Link href="/faq">FAQs</Link>
                    <Link href="/contact">Contact Us</Link>
                    <a href="#">Request a Demo</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="widget">
                <div className="widget-wrapper">
                  <div className="widget-title">Company</div>
                  <div className="widget-content">
                    <a href="#">About</a>
                    <a href="#">Press</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="widget">
                <div className="widget-wrapper">
                  <div className="widget-title">
                    <NjImg src={attr.footerLogo}/>
                  </div>
                  <div className="widget-content">
                    <p>{attr.footerAboutText}</p>
                    <div className="social">
                      {
                        attr.socialLinks? ((_value)=>{
                          return _value.map(value => {
                            return (
                              <a href={value.url} key={`sl-${value.id}`} rel="nofollow" target="_blank">
                                <NjImg src={value.icon}/>
                              </a>
                            )
                          })
                        })(attr.socialLinks): <></>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center copyright">{attr.copyrightText}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Layout
