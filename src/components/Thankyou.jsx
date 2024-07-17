import React from 'react'

export default function () {
  return (
    <>
  <section className="login">
  <div className="container">
    <div className="row d-flex align-items-center">
      <div className="col-lg-6">
        <div className="login-testi">
          <div className="slideshow">
            <div className="sliderss slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{ opacity: 1, width: 1052 }}
                >
                  <div
                    className="slick-slide"
                    data-slick-index={0}
                    aria-hidden="true"
                    style={{
                      width: 496,
                      position: "relative",
                      left: 0,
                      top: 0,
                      zIndex: 998,
                      opacity: 0,
                      transition: "opacity 800ms linear 0s"
                    }}
                    tabIndex={-1}
                  >
                    <div>
                      <div
                        className="item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <p>
                          A friend recommended CL-LST to me. Although I started
                          late compared to others, fortunately, my first class
                          was with one of my favorite teachers, which made
                          everything easier. With the amount of support I got
                          from the institute at all stages of my journey, I was
                          able to ace the exam.
                        </p>
                        <img src="/assets/img/top-achievers/Pradhyot-Shah.jpg" />
                        <h3>Pradhyot Shah</h3>
                        <h5>AIR-3, CLAT 2024</h5>
                        <div className="star-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star gry" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-current slick-active"
                    data-slick-index={1}
                    aria-hidden="false"
                    style={{
                      width: 496,
                      position: "relative",
                      left: "-526px",
                      top: 0,
                      zIndex: 999,
                      opacity: 1
                    }}
                  >
                    <div>
                      <div
                        className="item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <p>
                          I was confident about my preparation, but never
                          expected to secure rank 4 in CLAT. I believe this is
                          because of the adept guidance &amp; quality material
                          provided by CL-LST, which helped me adapt to the new
                          exam pattern. Despite the uncertainties, I was
                          confident of my preparation.
                        </p>
                        <img src="/assets/img/top-achievers/Pragnya-Amireddy.jpg" />
                        <h3>Pragnya Amireddy</h3>
                        <h5>AIR-4, CLAT 2024</h5>
                        <div className="star-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star gry" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="login-page thanks">
          <div className="mb-4">
            <h3 className="text-center">
              Thank you for showing your interest.
            </h3>
            <p className="text-center">
              Our academic counselor will connect you with you soon.
            </p>
            <p className="margin-top-20 text-center">
              Meanwhile, you can check out our FREE Whatsapp community to join
              law aspirants like yourself.
            </p>
            <a
              href="https://chat.whatsapp.com/HReXSvOPleD8RZFOaTmBsD"
              className="btn cta w-100 margin-top-20"
            >
              Whatsapp community
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}
