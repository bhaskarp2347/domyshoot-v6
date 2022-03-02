import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Head from "next/head"
import Link from "next/link"
import Md from "../components/md";

const Features = ({ page }) => {
	const attr = page.attributes

	return (
		<Layout className="page-features">
			<Head>
				<link rel="stylesheet" href={"/css/features.css"} />
			</Head>
			<Seo seo={page.attributes.seo} />
			<div className="banner">
				<div>
					<svg
						width="34"
						height="35"
						viewBox="0 0 34 35"
						fill="none"
						className="icon1"
					>
						<path
							d="M16.9256 34.4053L9.98127e-05 17.4798C1.41431 16.0656 1.37829 16.1016 2.82853 14.6514L14.1422 3.33762C15.5924 1.88739 16.2635 1.21628 16.9706 0.509189L33.9411 17.4797L16.9256 34.4053Z"
							fill="#292A31"
							fillOpacity="0.1"
						/>
					</svg>
					<svg
						width="47"
						height="29"
						viewBox="0 0 47 29"
						fill="none"
						className="icon2"
					>
						<path
							d="M2.77273 28.1292C2.22463 28.129 1.68885 27.9665 1.23305 27.6621C0.777259 27.3577 0.421897 26.925 0.211814 26.4188C0.00173058 25.9126 -0.0536413 25.3554 0.052695 24.8177C0.159031 24.2801 0.422321 23.7859 0.809287 23.3978L14.9008 9.2666C15.1201 9.04547 15.3812 8.8701 15.6688 8.75067C15.9565 8.63124 16.2649 8.57014 16.5764 8.57089H16.578C16.8891 8.57 17.1973 8.63082 17.4847 8.74985C17.7721 8.86887 18.0331 9.04374 18.2525 9.26431L24.788 15.7997C24.9196 15.9322 25.0762 16.0372 25.2487 16.1087C25.4213 16.1801 25.6063 16.2167 25.793 16.2161H25.7937C25.9804 16.2166 26.1654 16.1801 26.3379 16.1085C26.5103 16.037 26.6669 15.9318 26.7984 15.7993L36.0254 6.55676C36.0694 6.51276 36.1043 6.46054 36.1281 6.40305C36.1518 6.34555 36.164 6.28392 36.164 6.22171C36.1639 6.1595 36.1516 6.09791 36.1277 6.04047C36.1038 5.98302 36.0688 5.93084 36.0247 5.88693L33.0394 2.90649C32.8403 2.70789 32.7048 2.45469 32.6497 2.17896C32.5946 1.90322 32.6225 1.61734 32.73 1.35751C32.8375 1.09769 33.0197 0.875584 33.2534 0.71933C33.4872 0.563076 33.7621 0.479696 34.0432 0.479736H44.6469C45.0237 0.480149 45.3849 0.63001 45.6513 0.896423C45.9177 1.16284 46.0676 1.52405 46.068 1.90082V12.4978C46.0681 12.7789 45.9848 13.0537 45.8287 13.2874C45.6726 13.5212 45.4507 13.7034 45.191 13.811C44.9313 13.9186 44.6455 13.9468 44.3698 13.892C44.0941 13.8371 43.8409 13.7018 43.6422 13.503L40.6522 10.5128C40.6083 10.4689 40.556 10.4339 40.4986 10.4101C40.4411 10.3863 40.3795 10.3741 40.3173 10.3741C40.2551 10.3741 40.1935 10.3863 40.1361 10.4101C40.0786 10.4339 40.0264 10.4689 39.9824 10.5128L27.4877 22.9991C27.2683 23.2196 27.0073 23.3945 26.7199 23.5135C26.4325 23.6325 26.1244 23.6933 25.8133 23.6925H25.8131C25.5019 23.6933 25.1938 23.6324 24.9063 23.5133C24.6189 23.3942 24.3579 23.2192 24.1385 22.9986L17.5998 16.4599C17.329 16.2016 16.9692 16.0575 16.595 16.0575C16.2208 16.0575 15.8609 16.2016 15.5901 16.4599L4.73342 27.3164C4.47662 27.5748 4.17106 27.7798 3.83449 27.9193C3.49793 28.0588 3.13706 28.1301 2.77273 28.1292V28.1292Z"
							fill="#292A31"
							fillOpacity="0.1"
						/>
					</svg>
					<svg
						width="24"
						height="25"
						viewBox="0 0 24 25"
						fill="none"
						className="icon3"
					>
						<path
							d="M22.0799 10.5597H13.9201V2.39983C13.9201 1.89059 13.7178 1.40221 13.3577 1.04212C12.9976 0.682033 12.5092 0.479736 12 0.479736C11.4908 0.479736 11.0024 0.682033 10.6423 1.04212C10.2822 1.40221 10.0799 1.89059 10.0799 2.39983V10.5597H1.92009C1.41085 10.5597 0.922469 10.7619 0.562383 11.122C0.202297 11.4821 0 11.9705 0 12.4797V12.4797C0 12.989 0.202297 13.4774 0.562383 13.8374C0.922469 14.1975 1.41085 14.3998 1.92009 14.3998H10.0799V22.5596C10.0799 23.0689 10.2822 23.5573 10.6423 23.9174C11.0024 24.2774 11.4908 24.4797 12 24.4797V24.4797C12.5092 24.4797 12.9976 24.2774 13.3577 23.9174C13.7178 23.5573 13.9201 23.0689 13.9201 22.5596V14.3998H22.0799C22.5892 14.3998 23.0775 14.1975 23.4376 13.8374C23.7977 13.4774 24 12.989 24 12.4797V12.4797C24 11.9705 23.7977 11.4821 23.4376 11.122C23.0775 10.7619 22.5892 10.5597 22.0799 10.5597V10.5597Z"
							fill="#292A31"
							fillOpacity="0.1"
						/>
					</svg>
					<svg
						width="24"
						height="25"
						viewBox="0 0 24 25"
						fill="none"
						className="icon4"
					>
						<path
							d="M12 24.4797C18.6274 24.4797 24 19.1072 24 12.4797C24 5.85232 18.6274 0.479736 12 0.479736C5.37258 0.479736 0 5.85232 0 12.4797C0 19.1072 5.37258 24.4797 12 24.4797Z"
							fill="#292A31"
							fillOpacity="0.1"
						/>
					</svg>
					<svg
						width="73"
						height="45"
						viewBox="0 0 73 45"
						fill="none"
						className="icon5"
					>
						<path
							d="M8.71417 44.28H0.807581C0.593481 44.2797 0.388218 44.1582 0.236821 43.9424C0.0854232 43.7265 0.000255515 43.4338 0 43.1286V27.587C0.000255515 27.2817 0.0854232 26.989 0.236821 26.7732C0.388218 26.5573 0.593481 26.4359 0.807581 26.4355H8.71417C8.92827 26.4359 9.13353 26.5573 9.28493 26.7732C9.43633 26.989 9.5215 27.2817 9.52175 27.587V43.1286C9.5215 43.4338 9.43633 43.7265 9.28493 43.9424C9.13353 44.1582 8.92827 44.2797 8.71417 44.28V44.28Z"
							fill="#292A31"
							fillOpacity="0.1"
						/>
						<path
							d="M40.4533 44.2798H32.5467C32.3326 44.2795 32.1274 44.1646 31.976 43.9604C31.8246 43.7562 31.7394 43.4794 31.7391 43.1906V14.5467C31.7394 14.2579 31.8246 13.9811 31.976 13.7769C32.1274 13.5727 32.3326 13.4578 32.5467 13.4575H40.4533C40.6674 13.4578 40.8727 13.5727 41.0241 13.7769C41.1755 13.9811 41.2606 14.2579 41.2609 14.5467V43.1906C41.2606 43.4794 41.1755 43.7562 41.0241 43.9604C40.8727 44.1646 40.6674 44.2795 40.4533 44.2798Z"
							fill="#292A31"
							fillOpacity="0.1"
						/>
						<path
							d="M24.5843 44.2799H16.6777C16.4636 44.2794 16.2583 44.1139 16.1069 43.8195C15.9555 43.5251 15.8704 43.126 15.8701 42.7097V21.5167C15.8704 21.1004 15.9555 20.7013 16.1069 20.4069C16.2583 20.1126 16.4636 19.947 16.6777 19.9465H24.5843C24.7984 19.947 25.0037 20.1126 25.155 20.4069C25.3064 20.7013 25.3916 21.1004 25.3919 21.5167V42.7097C25.3916 43.126 25.3064 43.5251 25.155 43.8195C25.0037 44.1139 24.7984 44.2794 24.5843 44.2799V44.2799Z"
							fill="#292A31"
							fillOpacity="0.1"
						/>
						<path
							d="M56.3235 44.2794H48.4169C48.2076 44.2857 48.0052 44.1767 47.8538 43.9766C47.7024 43.7764 47.6145 43.5012 47.6093 43.2114V8.03675C47.6145 7.74693 47.7024 7.47179 47.8538 7.27161C48.0052 7.07143 48.2076 6.96252 48.4169 6.96876H56.3235C56.5327 6.96252 56.7352 7.07143 56.8865 7.27161C57.0379 7.47179 57.1258 7.74693 57.131 8.03675V43.2114C57.1258 43.5012 57.0379 43.7764 56.8865 43.9766C56.7352 44.1767 56.5327 44.2857 56.3235 44.2794Z"
							fill="#292A31"
							fillOpacity="0.1"
						/>
						<path
							d="M72.1924 44.2798H64.2858C64.0717 44.2795 63.8665 44.1707 63.7151 43.9772C63.5637 43.7838 63.4785 43.5215 63.4782 43.248V1.51157C63.4785 1.238 63.5637 0.975718 63.7151 0.782282C63.8665 0.588845 64.0717 0.480041 64.2858 0.479736H72.1924C72.4065 0.480041 72.6118 0.588845 72.7632 0.782282C72.9146 0.975718 72.9997 1.238 73 1.51157V43.248C72.9997 43.5215 72.9146 43.7838 72.7632 43.9772C72.6118 44.1707 72.4065 44.2795 72.1924 44.2798Z"
							fill="#292A31"
							fillOpacity="0.1"
						/>
					</svg>

					<svg
						width="24"
						height="25"
						viewBox="0 0 24 25"
						fill="none"
						className="icon6"
					>
						<path
							d="M0 24.4161V0.479877C2 0.479877 1.94905 0.479877 4 0.479877L20 0.47977C22.0509 0.47977 23 0.479736 24 0.479757V24.4797L0 24.4161Z"
							fill="#292A31"
							fillOpacity="0.1"
						/>
					</svg>
				</div>
				<div className="container DIS__org">
					<h2>{attr.heading}</h2>
				</div>
			</div>
			<div className="banner-bottom">
				<div className="container org">
					<div className="bottom-title-text">
						<h2>{attr.title}</h2>
						<h4>{attr.info}</h4>
					</div>
					<div className="banner-bottom-body">
						<Md>{attr.content}</Md>
					</div>
				</div>
			</div>
			{/*{JSON.stringify(attr)}*/}
			<div className="main-content">
				<div className="container DIS__org">
					<div className="bottom-title-text">
						<h2>{attr.featuresSection?.title}</h2>
						<h4>{attr.featuresSection?.info}</h4>
					</div>
					{
						attr.featuresSection?.features ? (() => {
								return attr.featuresSection?.features.map((value, ifk) => {
									return ifk % 2 === 0?
										<div className="row align-items-center content" key={'features-'+ifk}>
											<div className="col-lg-7 content-image">
												<div className="content-image-wrapper">
													<img src="/images/1.jpeg" alt="" />
												</div>
											</div>
											<div className="col-lg-5 content-desc">
												<h2>{value.title}</h2>
												<p>{value.info}</p>
												<div className="align-items-center buttons justify-content-lg-around row">
													<div className="explore-button">
														<a href={value.mainButtonLink}>{value.mainButtonText}</a>
													</div>
													{
														value.article ? ((value) => {
															value = value.article.data.attributes
															return (
																<div className="readmore-button">
																	<Link href={`article/${value.slug}`}>
																		<a>
																			<span>Read More</span>
																			<svg
																				width="18"
																				height="12"
																				viewBox="0 0 18 12"
																				fill="none"
																			>
																				<path
																					fillRule="evenodd"
																					clipRule="evenodd"
																					d="M0.25 5.99994C0.25 5.83418 0.315848 5.67521 0.433058 5.558C0.550268 5.44079 0.70924 5.37494 0.875 5.37494H15.6163L11.6825 1.44244C11.5651 1.32508 11.4992 1.16591 11.4992 0.999942C11.4992 0.833973 11.5651 0.6748 11.6825 0.557442C11.7999 0.440084 11.959 0.374153 12.125 0.374153C12.291 0.374153 12.4501 0.440084 12.5675 0.557442L17.5675 5.55744C17.6257 5.6155 17.6719 5.68447 17.7034 5.7604C17.7349 5.83633 17.7511 5.91773 17.7511 5.99994C17.7511 6.08215 17.7349 6.16355 17.7034 6.23948C17.6719 6.31542 17.6257 6.38439 17.5675 6.44244L12.5675 11.4424C12.4501 11.5598 12.291 11.6257 12.125 11.6257C11.959 11.6257 11.7999 11.5598 11.6825 11.4424C11.5651 11.3251 11.4992 11.1659 11.4992 10.9999C11.4992 10.834 11.5651 10.6748 11.6825 10.5574L15.6163 6.62494H0.875C0.70924 6.62494 0.550268 6.55909 0.433058 6.44188C0.315848 6.32467 0.25 6.1657 0.25 5.99994Z"
																					fill="#262626"
																				/>
																			</svg>
																		</a>
																	</Link>
																</div>
															)
														})(value)
														: <></>
													}
												</div>
											</div>
										</div>
									:
										<div className="row align-items-center content" key={'features-'+ifk}>
											<div className="col-lg-5 content-desc">
												<h2>{value.title}</h2>
												<p>{value.info}</p>
												<div
													className="align-items-center buttons justify-content-lg-around row"
												>
													<div className="explore-button">
														<a href={value.mainButtonLink}>{value.mainButtonText}</a>
													</div>
													{
														value.article ? ((value) => {
															value = value.article.data.attributes
															return (
																<div className="readmore-button">
																	<Link href={`article/${value.slug}`}>
																		<a>
																			<span>Read More</span>
																			<svg
																				width="18"
																				height="12"
																				viewBox="0 0 18 12"
																				fill="none"
																			>
																				<path
																					fillRule="evenodd"
																					clipRule="evenodd"
																					d="M0.25 5.99994C0.25 5.83418 0.315848 5.67521 0.433058 5.558C0.550268 5.44079 0.70924 5.37494 0.875 5.37494H15.6163L11.6825 1.44244C11.5651 1.32508 11.4992 1.16591 11.4992 0.999942C11.4992 0.833973 11.5651 0.6748 11.6825 0.557442C11.7999 0.440084 11.959 0.374153 12.125 0.374153C12.291 0.374153 12.4501 0.440084 12.5675 0.557442L17.5675 5.55744C17.6257 5.6155 17.6719 5.68447 17.7034 5.7604C17.7349 5.83633 17.7511 5.91773 17.7511 5.99994C17.7511 6.08215 17.7349 6.16355 17.7034 6.23948C17.6719 6.31542 17.6257 6.38439 17.5675 6.44244L12.5675 11.4424C12.4501 11.5598 12.291 11.6257 12.125 11.6257C11.959 11.6257 11.7999 11.5598 11.6825 11.4424C11.5651 11.3251 11.4992 11.1659 11.4992 10.9999C11.4992 10.834 11.5651 10.6748 11.6825 10.5574L15.6163 6.62494H0.875C0.70924 6.62494 0.550268 6.55909 0.433058 6.44188C0.315848 6.32467 0.25 6.1657 0.25 5.99994Z"
																					fill="#262626"
																				/>
																			</svg>
																		</a>
																	</Link>
																</div>
															)
														})(value)
															: <></>
													}
												</div>
											</div>
											<div className="col-lg-7 content-image">
												<div className="content-image-wrapper m-auto">
													<img src="/images/2.jpeg" alt="" />
												</div>
											</div>
										</div>
								})
							})() :
							<></>
					}
					{/*<div className="row align-items-center content">
						<div className="col-lg-7 content-image">
							<div className="content-image-wrapper">
								<img src="/images/1.jpeg" alt="" />
							</div>
						</div>
						<div className="col-lg-5 content-desc">
							<h2>Dynamic Templates</h2>
							<p>
								Choose from Tropical, Flatlay, and much more. Our
								DoMyShoot app is a cutting edge image manipulation
								and data sciences to enable online sellers to
								generate high quality, effective images at a
								fraction of the cost and time.
							</p>
							<div
								className="align-items-center buttons justify-content-lg-around row"
							>
								<div className="explore-button">
									<a href="#">Explore Templates</a>
								</div>
								<div className="readmore-button">
									<a href="#">
										<span>Read More</span>
										<svg
											width="18"
											height="12"
											viewBox="0 0 18 12"
											fill="none"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M0.25 5.99994C0.25 5.83418 0.315848 5.67521 0.433058 5.558C0.550268 5.44079 0.70924 5.37494 0.875 5.37494H15.6163L11.6825 1.44244C11.5651 1.32508 11.4992 1.16591 11.4992 0.999942C11.4992 0.833973 11.5651 0.6748 11.6825 0.557442C11.7999 0.440084 11.959 0.374153 12.125 0.374153C12.291 0.374153 12.4501 0.440084 12.5675 0.557442L17.5675 5.55744C17.6257 5.6155 17.6719 5.68447 17.7034 5.7604C17.7349 5.83633 17.7511 5.91773 17.7511 5.99994C17.7511 6.08215 17.7349 6.16355 17.7034 6.23948C17.6719 6.31542 17.6257 6.38439 17.5675 6.44244L12.5675 11.4424C12.4501 11.5598 12.291 11.6257 12.125 11.6257C11.959 11.6257 11.7999 11.5598 11.6825 11.4424C11.5651 11.3251 11.4992 11.1659 11.4992 10.9999C11.4992 10.834 11.5651 10.6748 11.6825 10.5574L15.6163 6.62494H0.875C0.70924 6.62494 0.550268 6.55909 0.433058 6.44188C0.315848 6.32467 0.25 6.1657 0.25 5.99994Z"
												fill="#262626"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="row align-items-center content">
						<div className="col-lg-5 content-desc">
							<h2>Social Media Formats</h2>
							<p>
								Choose from Posts, Stories and much more. Our
								DoMyShoot app is a cutting edge image manipulation
								and data sciences to enable online sellers to
								generate high quality, effective images at a
								fraction of the cost and time.
							</p>
							<div
								className="align-items-center buttons justify-content-lg-around row"
							>
								<div className="explore-button">
									<a href="#">Explore Templates</a>
								</div>
								<div className="readmore-button">
									<a href="#">
										<span>Read More</span>
										<svg
											width="18"
											height="12"
											viewBox="0 0 18 12"
											fill="none"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M0.25 5.99994C0.25 5.83418 0.315848 5.67521 0.433058 5.558C0.550268 5.44079 0.70924 5.37494 0.875 5.37494H15.6163L11.6825 1.44244C11.5651 1.32508 11.4992 1.16591 11.4992 0.999942C11.4992 0.833973 11.5651 0.6748 11.6825 0.557442C11.7999 0.440084 11.959 0.374153 12.125 0.374153C12.291 0.374153 12.4501 0.440084 12.5675 0.557442L17.5675 5.55744C17.6257 5.6155 17.6719 5.68447 17.7034 5.7604C17.7349 5.83633 17.7511 5.91773 17.7511 5.99994C17.7511 6.08215 17.7349 6.16355 17.7034 6.23948C17.6719 6.31542 17.6257 6.38439 17.5675 6.44244L12.5675 11.4424C12.4501 11.5598 12.291 11.6257 12.125 11.6257C11.959 11.6257 11.7999 11.5598 11.6825 11.4424C11.5651 11.3251 11.4992 11.1659 11.4992 10.9999C11.4992 10.834 11.5651 10.6748 11.6825 10.5574L15.6163 6.62494H0.875C0.70924 6.62494 0.550268 6.55909 0.433058 6.44188C0.315848 6.32467 0.25 6.1657 0.25 5.99994Z"
												fill="#262626"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-7 content-image">
							<div className="content-image-wrapper m-auto">
								<img src="/images/2.jpeg" alt="" />
							</div>
						</div>
					</div>
					<div className="row align-items-center content">
						<div className="col-lg-7 content-image">
							<div className="content-image-wrapper">
								<img src="/images/3.jpeg" alt="" />
							</div>
						</div>
						<div className="col-lg-5 content-desc">
							<h2>All Marketplaces</h2>
							<p>
								Choose from Amazon, Etsy and much more. Our
								DoMyShoot app is a cutting edge image manipulation
								and data sciences to enable online sellers to
								generate high quality, effective images at a
								fraction of the cost and time.
							</p>
							<div
								className="align-items-center buttons justify-content-lg-around row"
							>
								<div className="explore-button">
									<a href="#">Explore Templates</a>
								</div>
								<div className="readmore-button">
									<a href="#">
										<span>Read More</span>
										<svg
											width="18"
											height="12"
											viewBox="0 0 18 12"
											fill="none"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M0.25 5.99994C0.25 5.83418 0.315848 5.67521 0.433058 5.558C0.550268 5.44079 0.70924 5.37494 0.875 5.37494H15.6163L11.6825 1.44244C11.5651 1.32508 11.4992 1.16591 11.4992 0.999942C11.4992 0.833973 11.5651 0.6748 11.6825 0.557442C11.7999 0.440084 11.959 0.374153 12.125 0.374153C12.291 0.374153 12.4501 0.440084 12.5675 0.557442L17.5675 5.55744C17.6257 5.6155 17.6719 5.68447 17.7034 5.7604C17.7349 5.83633 17.7511 5.91773 17.7511 5.99994C17.7511 6.08215 17.7349 6.16355 17.7034 6.23948C17.6719 6.31542 17.6257 6.38439 17.5675 6.44244L12.5675 11.4424C12.4501 11.5598 12.291 11.6257 12.125 11.6257C11.959 11.6257 11.7999 11.5598 11.6825 11.4424C11.5651 11.3251 11.4992 11.1659 11.4992 10.9999C11.4992 10.834 11.5651 10.6748 11.6825 10.5574L15.6163 6.62494H0.875C0.70924 6.62494 0.550268 6.55909 0.433058 6.44188C0.315848 6.32467 0.25 6.1657 0.25 5.99994Z"
												fill="#262626"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="row align-items-center content">
						<div className="col-lg-5 content-desc">
							<h2>Various App Features</h2>
							<p>
								Choose from Camera settings, angles, and much more.
								Our DoMyShoot app is a cutting edge image
								manipulation and data sciences to enable online
								sellers to generate high quality, effective images
								at a fraction of the cost and time.
							</p>
							<div
								className="align-items-center buttons justify-content-lg-around row"
							>
								<div className="explore-button">
									<a href="#">Explore Templates</a>
								</div>
								<div className="readmore-button">
									<a href="#">
										<span>Read More</span>
										<svg
											width="18"
											height="12"
											viewBox="0 0 18 12"
											fill="none"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M0.25 5.99994C0.25 5.83418 0.315848 5.67521 0.433058 5.558C0.550268 5.44079 0.70924 5.37494 0.875 5.37494H15.6163L11.6825 1.44244C11.5651 1.32508 11.4992 1.16591 11.4992 0.999942C11.4992 0.833973 11.5651 0.6748 11.6825 0.557442C11.7999 0.440084 11.959 0.374153 12.125 0.374153C12.291 0.374153 12.4501 0.440084 12.5675 0.557442L17.5675 5.55744C17.6257 5.6155 17.6719 5.68447 17.7034 5.7604C17.7349 5.83633 17.7511 5.91773 17.7511 5.99994C17.7511 6.08215 17.7349 6.16355 17.7034 6.23948C17.6719 6.31542 17.6257 6.38439 17.5675 6.44244L12.5675 11.4424C12.4501 11.5598 12.291 11.6257 12.125 11.6257C11.959 11.6257 11.7999 11.5598 11.6825 11.4424C11.5651 11.3251 11.4992 11.1659 11.4992 10.9999C11.4992 10.834 11.5651 10.6748 11.6825 10.5574L15.6163 6.62494H0.875C0.70924 6.62494 0.550268 6.55909 0.433058 6.44188C0.315848 6.32467 0.25 6.1657 0.25 5.99994Z"
												fill="#262626"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-7 content-image">
							<div className="content-image-wrapper m-auto">
								<img src="/images/4.jpeg" alt="" />
							</div>
						</div>
					</div>*/}
				</div>
				<div className="content-bottom">
					<div className="content-bottom-texts">
						<h2>{attr.readOurBlogSection?.title}</h2>
						<h4>{attr.readOurBlogSection?.info}</h4>
					</div>
					<div className="read-button">
						<a href={attr.readOurBlogSection?.buttonLink}>
							<span>{attr.readOurBlogSection?.buttonText}</span>
							<svg
								width="18"
								height="12"
								viewBox="0 0 18 12"
								fill="none"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M0.25 6C0.25 5.83424 0.315848 5.67527 0.433058 5.55806C0.550268 5.44085 0.70924 5.375 0.875 5.375H15.6163L11.6825 1.4425C11.5651 1.32514 11.4992 1.16597 11.4992 1C11.4992 0.834034 11.5651 0.674861 11.6825 0.557503C11.7999 0.440145 11.959 0.374214 12.125 0.374214C12.291 0.374214 12.4501 0.440145 12.5675 0.557503L17.5675 5.5575C17.6257 5.61556 17.6719 5.68453 17.7034 5.76046C17.7349 5.83639 17.7511 5.91779 17.7511 6C17.7511 6.08221 17.7349 6.16361 17.7034 6.23955C17.6719 6.31548 17.6257 6.38445 17.5675 6.4425L12.5675 11.4425C12.4501 11.5599 12.291 11.6258 12.125 11.6258C11.959 11.6258 11.7999 11.5599 11.6825 11.4425C11.5651 11.3251 11.4992 11.166 11.4992 11C11.4992 10.834 11.5651 10.6749 11.6825 10.5575L15.6163 6.625H0.875C0.70924 6.625 0.550268 6.55915 0.433058 6.44194C0.315848 6.32473 0.25 6.16576 0.25 6Z"
									fill="white"
								/>
							</svg>
						</a>
					</div>
				</div>
				<div className="wanna-know">
					<div className="container org wanna-contents">
						<div className="wanna-texts">
							<h2>{attr.readOurFaqSection?.title}</h2>
							<h4>{attr.readOurFaqSection?.info}</h4>
						</div>
						<div className="read-button">
							<a href={attr.readOurFaqSection?.buttonLink}>
								<span>{attr.readOurFaqSection?.buttonText}</span>
								<svg
									width="18"
									height="12"
									viewBox="0 0 18 12"
									fill="none"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M0.25 6C0.25 5.83424 0.315848 5.67527 0.433058 5.55806C0.550268 5.44085 0.70924 5.375 0.875 5.375H15.6163L11.6825 1.4425C11.5651 1.32514 11.4992 1.16597 11.4992 1C11.4992 0.834034 11.5651 0.674861 11.6825 0.557503C11.7999 0.440145 11.959 0.374214 12.125 0.374214C12.291 0.374214 12.4501 0.440145 12.5675 0.557503L17.5675 5.5575C17.6257 5.61556 17.6719 5.68453 17.7034 5.76046C17.7349 5.83639 17.7511 5.91779 17.7511 6C17.7511 6.08221 17.7349 6.16361 17.7034 6.23955C17.6719 6.31548 17.6257 6.38445 17.5675 6.4425L12.5675 11.4425C12.4501 11.5599 12.291 11.6258 12.125 11.6258C11.959 11.6258 11.7999 11.5599 11.6825 11.4425C11.5651 11.3251 11.4992 11.166 11.4992 11C11.4992 10.834 11.5651 10.6749 11.6825 10.5575L15.6163 6.625H0.875C0.70924 6.625 0.550268 6.55915 0.433058 6.44194C0.315848 6.32473 0.25 6.16576 0.25 6Z"
										fill="white"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export async function getServerSideProps({ locale: locale }) {
	// Run API calls in parallel
	const [pageRes] = await Promise.all([
		fetchAPI("/feature", {
			locale,
			populate: [
				"seo", "seo.shareImage",
				"featuresSection",
				"featuresSection.features",
				"featuresSection.features.article",
				"readOurBlogSection",
				"readOurFaqSection",
			],
		}),
	])

	return {
		props: {
			page: pageRes.data,
		},
	}
}

export default Features
