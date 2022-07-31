import React from 'react'

export default function Template() {
  return (
    <div>
        <div id="__next" data-reactroot="">
      <div style="opacity: 1, z-index: 9999" className="preloader">
        <img
          width="60"
          src="/_next/static/media/loader.9d1b84e3.png"
          alt=""
          className="preloader__image"
        />
      </div>
      <main style={{opacity: '0'}} className="page-wrapper">
        <header className="main-header clearfix">
          <div className="main-header__top">
            <div className="container">
              <div className="main-header__top-inner clearfix">
                <div className="main-header__top-left">
                  <ul className="list-unstyled main-header__top-address">
                    <li>
                      <div className="icon">
                        <span className="icon-phone-call"></span>
                      </div>
                      <div className="text">
                        <a href="tel:+ 92 666 999 0000">+ 92 666 999 0000</a>
                      </div>
                    </li>
                    <li>
                      <div className="icon"><span className="icon-at"></span></div>
                      <div className="text">
                        <a href="mailto:needhelp@company.com"
                          >needhelp@company.com</a
                        >
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="main-header__top-right">
                  <div className="main-header__top-right-inner">
                    <div className="main-header__top-right-social">
                      <a href=""><i className="fab fa-facebook-square"></i></a
                      ><a href=""><i className="fab fa-twitter"></i></a
                      ><a href=""><i className="fab fa-instagram"></i></a
                      ><a href=""><i className="fab fa-pinterest-p"></i></a>
                    </div>
                    <div className="main-header__top-right-btn-box">
                      <a href="#" className="thm-btn main-header__top-right-btn"
                        >Become a local guide</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="main-menu slideIn animated clearfix">
            <div className="main-menu-wrapper clearfix">
              <div className="clearfix container">
                <div className="main-menu-wrapper-inner clearfix">
                  <div className="main-menu-wrapper__left clearfix">
                    <div className="main-menu-wrapper__logo">
                      <a href="/"
                        ><img
                          src="/_next/static/media/logo-1.279e19a3.png"
                          alt=""
                          className=""
                      /></a>
                    </div>
                    <div className="main-menu-wrapper__main-menu">
                      <span className="mobile-nav__toggler"
                        ><i className="fa fa-bars"></i
                      ></span>
                      <ul className="main-menu__list">
                        <li className="dropdown current">
                          <a href="/">Home</a>
                          <ul>
                            <li className="">
                              <a href="/">Home One</a>
                              <ul></ul>
                            </li>
                            <li className="">
                              <a href="/">Home Two</a>
                              <ul></ul>
                            </li>
                            <li className="dropdown">
                              <a href="/">Header Styles</a>
                              <ul>
                                <li><a href="/">Header One</a></li>
                                <li><a href="/">Header Two</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="/destinations">Destinations</a>
                          <ul>
                            <li className="">
                              <a href="/destinations">Destinations</a>
                              <ul></ul>
                            </li>
                            <li className="">
                              <a href="/destinations">Destinations Detail</a>
                              <ul></ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="/tours">Tours</a>
                          <ul>
                            <li className="">
                              <a href="/tours">Tours</a>
                              <ul></ul>
                            </li>
                            <li className="">
                              <a href="/tours">Tours List</a>
                              <ul></ul>
                            </li>
                            <li className="">
                              <a href="/tours">Tours Details</a>
                              <ul></ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="">Pages</a>
                          <ul>
                            <li className="">
                              <a href="">About</a>
                              <ul></ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="/news">News</a>
                          <ul>
                            <li className="">
                              <a href="/news">News</a>
                              <ul></ul>
                            </li>
                            <li className="">
                              <a href="/news">News Details</a>
                              <ul></ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="/contact">Contact</a>
                          <ul></ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="main-menu-wrapper__right">
                    <span
                      // style="cursor: pointer"
                      className="main-menu__search search-toggler icon-magnifying-glass"
                    ></span
                    >
                    {/* <a href="#" className="main-menu__user icon-avatar"></a> */}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section className="main-slider">
          <div className="swiper thm-swiper__slider">
            <div className="swiper-wrapper"></div>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  // style="
                  //   background-image: url(/_next/static/media/main-slider-1-1.62fecf08.jpg),
                  // "
                ></div>
                <div className="image-layer-overlay"></div>
                <div className="container">
                  <div className="swiper-slide-inner">
                    <div className="row">
                      <div className="col-xl-12">
                        <h2>Travel &amp, Adventures</h2>
                        <p>Where Would You Like To Go?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  // style="
                  //   background-image: url(/_next/static/media/main-slider-1-2.4865c85b.jpg),
                  // "
                ></div>
                <div className="image-layer-overlay"></div>
                <div className="container">
                  <div className="swiper-slide-inner">
                    <div className="row">
                      <div className="col-xl-12">
                        <h2>Travel &amp, Adventures</h2>
                        <p>Where Would You Like To Go?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div
                  className="image-layer"
                  // style="
                  //   background-image: url(/_next/static/media/main-slider-1-3.fe6aff2e.jpg),
                  // "
                ></div>
                <div className="image-layer-overlay"></div>
                <div className="container">
                  <div className="swiper-slide-inner">
                    <div className="row">
                      <div className="col-xl-12">
                        <h2>Travel &amp, Adventures</h2>
                        <p>Where Would You Like To Go?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-slider-nav">
              <div
                id="main-slider__swiper-button-prev"
                className="main-slider-button-prev"
              >
                <span className="icon-right-arrow"></span>
              </div>
              <div
                id="main-slider__swiper-button-next"
                className="main-slider-button-next"
              >
                <span className="icon-right-arrow"></span>
              </div>
            </div>
          </div>
        </section>
        <section className="tour-search">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tour-search-box">
                  <form className="tour-search-one">
                    <div className="tour-search-one__inner">
                      <div className="tour-search-one__inputs">
                        <div className="tour-search-one__input-box">
                          <label for="place">Where to</label
                          ><input
                            type="text"
                            placeholder="Enter keywords"
                            name="place"
                            id="place"
                          />
                        </div>
                        <div className="tour-search-one__input-box">
                          <label>When</label>
                          <div className="react-datepicker-wrapper">
                            <div className="react-datepicker__input-container">
                              <input
                                type="text"
                                value="04/11/2022"
                                placeholder="September"
                                className="hasDatepicker"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="tour-search-one__input-box tour-search-one__input-box-last"
                        >
                          <label for="type">Type</label
                          >
                          {/* <style data-emotion="css lojqc1-container">
                            .css-lojqc1-container {
                              position = relative,
                              box-sizing =  border-box,
                              z-index = 100000,
                            }
                          </style> */}
                          <div className="css-lojqc1-container">
                            {/* <style data-emotion="css 7pg0cj-a11yText">
                              .css-7pg0cj-a11yText {
                                z-index: 9999,
                                border: 0,
                                clip: rect(1px, 1px, 1px, 1px),
                                height: 1px,
                                width: 1px,
                                position: absolute,
                                overflow: hidden,
                                padding: 0,
                                white-space: nowrap,
                              }</style> */}
                            <span
                              id="react-select-tourTypeSelect-live-region"
                              className="css-7pg0cj-a11yText"
                            ></span
                            ><span
                              aria-live="polite"
                              aria-atomic="false"
                              aria-relevant="additions text"
                              className="css-7pg0cj-a11yText"
                            ></span
                            >
                            {/* <style data-emotion="css 147ic3q-control">
                              .css-147ic3q-control {
                                -webkit-align-items: center,
                                -webkit-box-align: center,
                                -ms-flex-align: center,
                                align-items: center,
                                background-color: hsl(0, 0%, 100%),
                                border-color: transparent,
                                border-radius: 8px,
                                border-style: solid,
                                border-width: 1px,
                                box-shadow: none,
                                cursor: default,
                                display: -webkit-box,
                                display: -webkit-flex,
                                display: -ms-flexbox,
                                display: flex,
                                -webkit-box-flex-wrap: wrap,
                                -webkit-flex-wrap: wrap,
                                -ms-flex-wrap: wrap,
                                flex-wrap: wrap,
                                -webkit-box-pack: justify,
                                -webkit-justify-content: space-between,
                                justify-content: space-between,
                                min-height: 38px,
                                outline: 0 !important,
                                position: relative,
                                -webkit-transition: all 100ms,
                                transition: all 100ms,
                                box-sizing: border-box,
                                height: 0,
                              }
                              .css-147ic3q-control:hover {
                                border-color: transparent,
                              }
                            </style> */}
                            <div className="css-147ic3q-control">
                              {/* <style data-emotion="css zl2g27">
                                .css-zl2g27 {
                                  -webkit-align-items: center,
                                  -webkit-box-align: center,
                                  -ms-flex-align: center,
                                  align-items: center,
                                  display: grid,
                                  -webkit-flex: 1,
                                  -ms-flex: 1,
                                  flex: 1,
                                  -webkit-box-flex-wrap: wrap,
                                  -webkit-flex-wrap: wrap,
                                  -ms-flex-wrap: wrap,
                                  flex-wrap: wrap,
                                  padding: 0,
                                  -webkit-overflow-scrolling: touch,
                                  position: relative,
                                  overflow: hidden,
                                  box-sizing: border-box,
                                }
                              </style> */}
                              <div className="css-zl2g27">
                                {/* <style data-emotion="css 1qddvk-singleValue">
                                  .css-1qddvk-singleValue {
                                    color: hsl(0, 0%, 20%),
                                    grid-area: 1/1/2/3,
                                    margin-left: 2px,
                                    margin-right: 2px,
                                    max-width: 100%,
                                    overflow: hidden,
                                    text-overflow: ellipsis,
                                    white-space: nowrap,
                                    box-sizing: border-box,
                                    cursor: pointer,
                                  }
                                </style> */}
                                <div className="css-1qddvk-singleValue">
                                  Adventure
                                </div>
                                {/* <style data-emotion="css 1hac4vs-dummyInput">
                                  .css-1hac4vs-dummyInput {
                                    background: 0,
                                    border: 0,
                                    caret-color: transparent,
                                    font-size: inherit,
                                    grid-area: 1/1/2/3,
                                    outline: 0,
                                    padding: 0,
                                    width: 1px,
                                    color: transparent,
                                    left: -100px,
                                    opacity: 0,
                                    position: relative,
                                    -webkit-transform: scale(0.01),
                                    -moz-transform: scale(0.01),
                                    -ms-transform: scale(0.01),
                                    transform: scale(0.01),
                                  }</style> */}
                                  <input
                                  id="react-select-tourTypeSelect-input"
                                  tabindex="0"
                                  inputmode="none"
                                  value=""
                                  aria-autocomplete="list"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  aria-controls="react-select-tourTypeSelect-listbox"
                                  aria-owns="react-select-tourTypeSelect-listbox"
                                  role="combobox"
                                  aria-readonly="true"
                                  className="css-1hac4vs-dummyInput"
                                />
                              </div>
                              {/* <style data-emotion="css 1wy0on6">
                                .css-1wy0on6 {
                                  -webkit-align-items: center,
                                  -webkit-box-align: center,
                                  -ms-flex-align: center,
                                  align-items: center,
                                  -webkit-align-self: stretch,
                                  -ms-flex-item-align: stretch,
                                  align-self: stretch,
                                  display: -webkit-box,
                                  display: -webkit-flex,
                                  display: -ms-flexbox,
                                  display: flex,
                                  -webkit-flex-shrink: 0,
                                  -ms-flex-negative: 0,
                                  flex-shrink: 0,
                                  box-sizing: border-box,
                                }
                              </style> */}
                              <div className="css-1wy0on6"></div>
                            </div>
                            <input
                              type="hidden"
                              name="type"
                              value="Adventure"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="tour-search-one__btn-wrap">
                        <button
                          type="submit"
                          className="thm-btn tour-search-one__btn"
                        >
                          Find now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="destinations-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Destination lists</span>
              <h2 className="section-title__title">Go Exotic Places</h2>
            </div>
            <div className="masonary-layout row">
              <div className="col-xl-3 col-lg-3">
                <div className="destinations-one__single">
                  <div className="destinations-one__img">
                    <img
                      src="/_next/static/media/destination-1-1.f32b89c3.png"
                      alt=""
                      className=""
                    />
                    <div className="destinations-one__content">
                      <h2 className="destinations-one__title">
                        <a href="/destinations-details">Spain</a>
                      </h2>
                    </div>
                    <div className="destinations-one__button">
                      <a href="#"
                        >6
                        tours</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="destinations-one__single">
                  <div className="destinations-one__img">
                    <img
                      src="/_next/static/media/destination-1-2.6b007ca8.png"
                      alt=""
                      className=""
                    />
                    <div className="destinations-one__content">
                      <p className="destinations-one__sub-title">Wildlife</p>
                      <h2 className="destinations-one__title">
                        <a href="/destinations-details">Thailand</a>
                      </h2>
                    </div>
                    <div className="destinations-one__button">
                      <a href="#"
                        >6
                        tours</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="destinations-one__single">
                  <div className="destinations-one__img">
                    <img
                      src="/_next/static/media/destination-1-3.d37d50e6.png"
                      alt=""
                      className=""
                    />
                    <div className="destinations-one__content">
                      <h2 className="destinations-one__title">
                        <a href="/destinations-details">Africa</a>
                      </h2>
                    </div>
                    <div className="destinations-one__button">
                      <a href="#"
                        >6
                        tours</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="destinations-one__single">
                  <div className="destinations-one__img">
                    <img
                      src="/_next/static/media/destination-1-4.0ba8a85a.png"
                      alt=""
                      className=""
                    />
                    <div className="destinations-one__content">
                      <h2 className="destinations-one__title">
                        <a href="/destinations-details">Australia</a>
                      </h2>
                    </div>
                    <div className="destinations-one__button">
                      <a href="#"
                        >6
                        tours</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="destinations-one__single">
                  <div className="destinations-one__img">
                    <img
                      src="/_next/static/media/destination-1-5.a1a8d71b.png"
                      alt=""
                      className=""
                    />
                    <div className="destinations-one__content">
                      <p className="destinations-one__sub-title">Adventure</p>
                      <h2 className="destinations-one__title">
                        <a href="/destinations-details">Switzerland</a>
                      </h2>
                    </div>
                    <div className="destinations-one__button">
                      <a href="#"
                        >6
                        tours</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-one">
          <div className="about-one-shape-1 animated slideInLeft">
            <img
              src="/_next/static/media/about-one-shape-1.fc847235.png"
              alt=""
              className=""
            />
          </div>
          <div className="about-one-shape-2 float-bob-y">
            <img
              src="/_next/static/media/about-one-shape-2.8a3e5cec.png"
              alt=""
              className=""
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="animated fadeInLeft col-xl-6">
                <div className="about-one__left">
                  <div className="about-one__img-box">
                    <div className="about-one__img">
                      <img
                        src="/_next/static/media/about-one-img-1.e526a0a5.png"
                        alt=""
                        className=""
                      />
                    </div>
                    <div className="about-one__call">
                      <div className="about-one__call-icon">
                        <span className="icon-phone-call"></span>
                      </div>
                      <div className="about-one__call-number">
                        <p>Book Tour Now</p>
                        <h4><a href="tel:666-888-0000">666-888-0000</a></h4>
                      </div>
                    </div>
                    <div className="about-one__discount">
                      <h2>30%</h2>
                      <h3>Discount</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-one__right">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">Get to know us</span>
                    <h2 className="section-title__title">
                      Plan Your Trip with Trevily
                    </h2>
                  </div>
                  <p className="about-one__right-text">
                    There are many variations of passages of available but the
                    majority have suffered alteration in some form, by injected
                    hum randomised words which don&#x27,t look even slightly.
                  </p>
                  <ul className="list-unstyled about-one__points">
                    <li>
                      <div className="icon"><i className="fa fa-check"></i></div>
                      <div className="text">
                        <p>Invest in your simply neighborhood</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon"><i className="fa fa-check"></i></div>
                      <div className="text">
                        <p>Support people in free text extreme need</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon"><i className="fa fa-check"></i></div>
                      <div className="text">
                        <p>Largest global industrial business community</p>
                      </div>
                    </li>
                  </ul>
                  <a href="#" className="about-one__btn thm-btn"
                    >Book with us now</a
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="popular-tours">
          <div className="popular-tours__container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Featured tours</span>
              <h2 className="section-title__title">Most Popular Tours</h2>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="popular-tours__carousel"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="video-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="video-one__left">
                  <div className="video-one__video-link">
                    <div
                      style="cursor: pointer, width: min-content"
                      className="video-popup"
                    >
                      <div className="video-one__video-icon">
                        <span className="icon-play-button"></span
                        ><i className="ripple"></i>
                      </div>
                    </div>
                  </div>
                  <p className="video-one__tagline">Are you ready to travel?</p>
                  <h2 className="video-one__title">
                    Tevily is a World Leading Online Tour Booking Platform
                  </h2>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="video-one__right">
                  <ul className="list-unstyled video-one__four-icon-boxes">
                    <li>
                      <div className="video-one__icon-box">
                        <span className="icon-deer"></span>
                      </div>
                      <h4 className="video-one__icon-box-title">
                        <a href="#"
                          ><span>Wildlife </span><br /><span> Tours</span><br
                        /></a>
                      </h4>
                    </li>
                    <li>
                      <div className="video-one__icon-box">
                        <span className="icon-paragliding"></span>
                      </div>
                      <h4 className="video-one__icon-box-title">
                        <a href="#"
                          ><span>Paragliding </span><br /><span> Tours</span
                          ><br
                        /></a>
                      </h4>
                    </li>
                    <li>
                      <div className="video-one__icon-box">
                        <span className="icon-flag"></span>
                      </div>
                      <h4 className="video-one__icon-box-title">
                        <a href="#"
                          ><span>Adventure </span><br /><span> Tours</span><br
                        /></a>
                      </h4>
                    </li>
                    <li>
                      <div className="video-one__icon-box">
                        <span className="icon-hang-gliding"></span>
                      </div>
                      <h4 className="video-one__icon-box-title">
                        <a href="#"
                          ><span>Hang Gliding </span><br /><span> Tours</span
                          ><br
                        /></a>
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="brand-one">
          <div
            className="brand-one-shape"
            style="
              background-image: url(/_next/static/media/brand-one-shape.ced0a150.png),
            "
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-3">
                <div className="brand-one__title"><h2>Our partners</h2></div>
              </div>
              <div className="col-xl-9">
                <div className="brand-one__main-content">
                  <div className="swiper thm-swiper__slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img
                          src="/_next/static/media/brand-one-1.2f819844.png"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/_next/static/media/brand-one-2.046d3620.png"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/_next/static/media/brand-one-3.3f3e68ee.png"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/_next/static/media/brand-one-4.8ac15055.png"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/_next/static/media/brand-one-5.e9ffdc28.png"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/_next/static/media/brand-one-1.2f819844.png"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/_next/static/media/brand-one-2.046d3620.png"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/_next/static/media/brand-one-3.3f3e68ee.png"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/_next/static/media/brand-one-4.8ac15055.png"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="swiper-slide">
                        <img
                          src="/_next/static/media/brand-one-5.e9ffdc28.png"
                          alt=""
                          className=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonial-one">
          <div className="testimonial-one-shape-2 float-bob-y">
            <img
              src="/_next/static/media/testimonial-one-shape-2.9107e0fe.png"
              alt=""
              className=""
            />
          </div>
          <div className="testimonial-one-shape-3 animated slideInRight">
            <img
              src="/_next/static/media/testimonial-one-shape-3.a9af98b7.png"
              alt=""
              className=""
            />
          </div>
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline"
                >Testimonials &amp, reviews</span
              >
              <h2 className="section-title__title">What They’re Saying</h2>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="testimonial-one__carousel"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery-one">
          <div
            className="gallery-one-bg"
            style="
              background-image: url(/_next/static/media/gallery-map.ffcf86e6.png),
            "
          ></div>
          <div className="gallery-one__container-box clearfix">
            <ul className="list-unstyled gallery-one__content clearfix">
              <li className="animated fadeInUp">
                <div className="gallery-one__img-box">
                  <img
                    src="/_next/static/media/gallery-one-img-1.6d00fce7.jpg"
                    alt=""
                    className=""
                  />
                  <div className="gallery-one__iocn">
                    <a href="@/images/gallery/gallery-one-img-1.jpg"
                      ><i className="fab fa-instagram"></i
                    ></a>
                  </div>
                </div>
              </li>
              <li className="animated fadeInUp">
                <div className="gallery-one__img-box">
                  <img
                    src="/_next/static/media/gallery-one-img-2.a73a23cd.jpg"
                    alt=""
                    className=""
                  />
                  <div className="gallery-one__iocn">
                    <a href="@/images/gallery/gallery-one-img-2.jpg"
                      ><i className="fab fa-instagram"></i
                    ></a>
                  </div>
                </div>
              </li>
              <li className="animated fadeInUp">
                <div className="gallery-one__img-box">
                  <img
                    src="/_next/static/media/gallery-one-img-3.69c58dea.jpg"
                    alt=""
                    className=""
                  />
                  <div className="gallery-one__iocn">
                    <a href="@/images/gallery/gallery-one-img-3.jpg"
                      ><i className="fab fa-instagram"></i
                    ></a>
                  </div>
                </div>
              </li>
              <li className="animated fadeInUp">
                <div className="gallery-one__img-box">
                  <img
                    src="/_next/static/media/gallery-one-img-4.a8e275d7.jpg"
                    alt=""
                    className=""
                  />
                  <div className="gallery-one__iocn">
                    <a href="@/images/gallery/gallery-one-img-4.jpg"
                      ><i className="fab fa-instagram"></i
                    ></a>
                  </div>
                </div>
              </li>
              <li className="animated fadeInUp">
                <div className="gallery-one__img-box">
                  <img
                    src="/_next/static/media/gallery-one-img-5.6af8a0fd.jpg"
                    alt=""
                    className=""
                  />
                  <div className="gallery-one__iocn">
                    <a href="@/images/gallery/gallery-one-img-5.jpg"
                      ><i className="fab fa-instagram"></i
                    ></a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="why-choose">
          <div className="why-choose__container">
            <div className="why-choose__left">
              <div
                className="why-choose__left-bg"
                style="
                  background-image: url(/_next/static/media/why-choose-left-bg.ef1bd558.jpg),
                "
              ></div>
              <div className="why-choose__toggle">
                <p><span> Trips </span><br /><span> &amp, tours</span><br /></p>
              </div>
            </div>
            <div className="why-choose__right">
              <div
                className="why-choose__right-map"
                style="
                  background-image: url(/_next/static/media/why-choose-right-map.f0ca8326.png),
                "
              ></div>
              <div className="why-choose__right-content">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Our benefit lists</span>
                  <h2 className="section-title__title">Why Choose Tevily</h2>
                </div>
                <p className="why-choose__right-text">
                  There are many variations of passages of Lorem Ipsum is simply
                  free text available in the market for you, but the majority
                  have suffered alteration in some form.
                </p>
                <ul className="list-unstyled why-choose__list">
                  <li>
                    <div className="icon"><span className="icon-travel"></span></div>
                    <div className="text">
                      <h4>Professional and Certified</h4>
                      <p>
                        Lorem ipsum is simply free text dolor sit but the
                        majority have suffered amet, consectetur notted.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-travel-map"></span>
                    </div>
                    <div className="text">
                      <h4>Get Instant Tour Bookings</h4>
                      <p>
                        Lorem ipsum is simply free text dolor sit but the
                        majority have suffered amet, consectetur notted.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="news-one">
          <div className="container">
            <div className="news-one__top">
              <div className="row">
                <div className="col-xl-9 col-lg-9">
                  <div className="news-one__top-left">
                    <div className="section-title text-left">
                      <span className="section-title__tagline"
                        >From the blog post</span
                      >
                      <h2 className="section-title__title">News &amp, Articles</h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                  <div className="news-one__top-right">
                    <a className="news-one__btn thm-btn" href="/news-details"
                      >View All posts</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div className="news-one__bottom">
              <div className="row">
                <div className="animated fadeInUp col-xl-4 col-lg-4">
                  <div className="news-one__single" style="user-select: unset">
                    <div className="news-one__img">
                      <img
                        src="/_next/static/media/news-one-img-1.24849fac.jpg"
                        alt=""
                        className=""
                      /><a href="/news-details"
                        ><span className="news-one__plus"></span
                      ></a>
                      <div className="news-one__date">
                        <p><span>28</span><br /><span>Aug</span><br /></p>
                      </div>
                    </div>
                    <div className="news-one__content">
                      <ul className="list-unstyled news-one__meta">
                        <li>
                          <a href="/news-details"
                            ><i className="far fa-user-circle"></i>Admin</a
                          >
                        </li>
                        <li>
                          <a href="/news-details"
                            ><i className="far fa-comments"></i>2
                            Comments</a
                          >
                        </li>
                      </ul>
                      <h3 className="news-one__title">
                        <a href="/news-details"
                          >Things to See and Do When Visiting Japan</a
                        >
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="animated fadeInUp col-xl-4 col-lg-4">
                  <div className="news-one__single" style="user-select: unset">
                    <div className="news-one__img">
                      <img
                        src="/_next/static/media/news-one-img-2.ca8b0dda.jpg"
                        alt=""
                        className=""
                      /><a href="/news-details"
                        ><span className="news-one__plus"></span
                      ></a>
                      <div className="news-one__date">
                        <p><span>28</span><br /><span>Aug</span><br /></p>
                      </div>
                    </div>
                    <div className="news-one__content">
                      <ul className="list-unstyled news-one__meta">
                        <li>
                          <a href="/news-details"
                            ><i className="far fa-user-circle"></i>Admin</a
                          >
                        </li>
                        <li>
                          <a href="/news-details"
                            ><i className="far fa-comments"></i>2
                            Comments</a
                          >
                        </li>
                      </ul>
                      <h3 className="news-one__title">
                        <a href="/news-details"
                          >Journeys are Best Measured in New Friends</a
                        >
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="animated fadeInUp col-xl-4 col-lg-4">
                  <div className="news-one__single" style="user-select: unset">
                    <div className="news-one__img">
                      <img
                        src="/_next/static/media/news-one-img-3.de2a706e.jpg"
                        alt=""
                        className=""
                      /><a href="/news-details"
                        ><span className="news-one__plus"></span
                      ></a>
                      <div className="news-one__date">
                        <p><span>28</span><br /><span>Aug</span><br /></p>
                      </div>
                    </div>
                    <div className="news-one__content">
                      <ul className="list-unstyled news-one__meta">
                        <li>
                          <a href="/news-details"
                            ><i className="far fa-user-circle"></i>Admin</a
                          >
                        </li>
                        <li>
                          <a href="/news-details"
                            ><i className="far fa-comments"></i>2
                            Comments</a
                          >
                        </li>
                      </ul>
                      <h3 className="news-one__title">
                        <a href="/news-details"
                          >Travel the Most Beautiful Places in the World</a
                        >
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="site-footer">
          <div className="site-footer__top">
            <div className="container">
              <div className="site-footer__top-inner">
                <div className="row">
                  <div className="animated fadeInUp col-xl-4 col-lg-6 col-md-6">
                    <div className="footer-widget__column footer-widget__about">
                      <div className="footer-widget__about-logo">
                        <a href="/"
                          ><img
                            src="/_next/static/media/footer-logo.2eb548ed.png"
                            alt=""
                            className=""
                        /></a>
                      </div>
                      <p className="footer-widget__about-text">
                        Welcome to our Trip and Tour Agency. Lorem simply text
                        amet cing elit.
                      </p>
                      <ul className="footer-widget__about-contact list-unstyled">
                        <li>
                          <div className="icon">
                            <i className="fas fa-phone-square-alt"></i>
                          </div>
                          <div className="text">
                            <a href="tel:+ 92 666 999 0000"
                              >+ 92 666 999 0000</a
                            >
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fas fa-envelope"></i>
                          </div>
                          <div className="text">
                            <a href="mailto:needhelp@company.com"
                              >needhelp@company.com</a
                            >
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                          </div>
                          <div className="text">
                            <p>666 road, broklyn street new york</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="animated fadeInUp col-xl-2 col-lg-6 col-md-6">
                    <div
                      className="footer-widget__column footer-widget__company clearfix"
                    >
                      <h3 className="footer-widget__title">Company</h3>
                      <ul className="footer-widget__company-list list-unstyled">
                        <li><a href="/about">About Us</a></li>
                        <li>
                          <a target="_blank" rel="noreferrer" href="#"
                            >Community Blog</a
                          >
                        </li>
                        <li>
                          <a target="_blank" rel="noreferrer" href="#"
                            >Rewards</a
                          >
                        </li>
                        <li>
                          <a target="_blank" rel="noreferrer" href="#"
                            >Work with Us</a
                          >
                        </li>
                        <li>
                          <a target="_blank" rel="noreferrer" href="#"
                            >Meet the Team</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="animated fadeInUp col-xl-2 col-lg-6 col-md-6">
                    <div className="footer-widget__column footer-widget__explore">
                      <h3 className="footer-widget__title">Explore</h3>
                      <ul className="list-unstyled footer-widget__explore-list">
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Affilitate Program</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="animated fadeInUp col-xl-4 col-lg-6 col-md-6">
                    <div
                      className="footer-widget__column footer-widget__newsletter"
                    >
                      <h3 className="footer-widget__title">Newsletter</h3>
                      <form className="footer-widget__newsletter-form mc-form">
                        <div className="footer-widget__newsletter-input-box">
                          <input
                            type="email"
                            placeholder="Email address"
                            name="email"
                            required=""
                          /><button
                            type="submit"
                            className="footer-widget__newsletter-btn"
                          >
                            Subscribe
                          </button>
                        </div>
                      </form>
                      <div className="mc-form__response text-center"></div>
                      <div className="footer-widget__newsletter-bottom">
                        <div className="footer-widget__newsletter-bottom-icon">
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="footer-widget__newsletter-bottom-text">
                          <p>I agree to all terms and policies</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-footer__bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="site-footer__bottom-inner">
                    <div className="site-footer__bottom-left">
                      <div className="footer-widget__social">
                        <a href=""><i className="fab fa-twitter"></i></a
                        ><a href=""><i className="fab fa-facebook-square"></i></a
                        ><a href=""><i className="fab fa-pinterest-p"></i></a
                        ><a href=""><i className="fab fa-instagram"></i></a>
                      </div>
                    </div>
                    <div className="site-footer__bottom-right">
                      <p>
                        @ All Copyright
                        2022, <a href="#">Tevily</a>
                      </p>
                    </div>
                    <div className="site-footer__bottom-left-arrow">
                      <a href="#" className="scroll-to-target scroll-to-top"
                        ><span className="icon-right-arrow"></span
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <div className="search-popup">
        <div className="search-popup__overlay search-toggler"></div>
        <div className="search-popup__content">
          <form>
            <label for="search" className="sr-only">search here</label
            ><input
              type="text"
              id="search"
              name="search"
              placeholder="Search Here..."
            /><button type="submit" aria-label="search submit" className="thm-btn">
              <i className="icon-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
