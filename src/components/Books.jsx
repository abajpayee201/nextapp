import React from 'react'
import Faqs from "../components/Faqs"

export default function Books() {
  return (
    <>
     

     <section className="banner classroom-coaching">
  <div className="container">
    <nav
      aria-label="breadcrumb"
      vocab="https://schema.org/"
      typeof="BreadcrumbList"
    >
      <ol className="breadcrumb">
        <li
          className="breadcrumb-item"
          property="itemListElement"
          typeof="ListItem"
        >
          <a
            href="https://www.lawentrance.com/"
            property="item"
            typeof="WebPage"
          >
            <span property="name">Home</span>
          </a>
          <meta property="position" content={1} />
        </li>
        <li
          className="breadcrumb-item active"
          aria-current="page"
          property="itemListElement"
          typeof="ListItem"
        >
          <span property="name">Study Materials</span>
          <meta property="position" content={2} />
        </li>
      </ol>
    </nav>
    <div className="row">
      <div className="col-lg-7">
        <h1>Books and study materials </h1>
        <h2>
          Looking for the best CLAT books and study materials? Make sure to
          check for these qualities:
        </h2>
        <ul>
          <li>Numerous Mock tests</li>
          <li>Sufficient amount of practice questions</li>
          <li>Specialized strategies for every section of the test</li>
          <li>Updated content as per yearly syllabus</li>
          <li>Compact and accurate to help with time management</li>
        </ul>
      </div>
      <div className="col-lg-5" id="frms">
        <p>
          With our CLAT books and study materials, you will find all of the
          above and more! Do we need to say more? Hurry and register for
          CLAT/AILET 2025 study material. Time is running out!
        </p>
        <form
          name="clForm"
          id="clForm"
          className="d-flex flex-wrap margin-top-10"
          method="post"
          action='/api/addcounselling'
          onsubmit="return false;"
        >
          
          <div className="input-group mb-3">
            <input
              className="form-control me-2"
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="Enter Mobile No."
              pattern="[6-9][0-9]{9}"
              title="Mobile number should start with 6, 7, 8, or 9 and contain at least 10 digits."
              required
            />
          </div>
          {/*<button type="submit" class="btn cta w-100" value="Get FREE Counselling" onclick="sendOtp(1)">Get FREE Counselling </button> */}
          <input
            className="btn cta w-100"
            type="submit"
            defaultValue="Get FREE Counselling"
            onclick="sendOtp(1)"
          />
        </form>
      </div>
    </div>
  </div>
</section>



<section className="bg-grey banr-slide">
  <div className="container">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item">
          <picture>
            <source
              media="(max-width: 480px)"
              srcSet="https://clsite-file1.s3.amazonaws.com/7806_topperinailet2.jpg"
            />
            <source
              media="(max-width: 800px)"
              srcSet="https://clsite-file1.s3.amazonaws.com/7806_topperinailet.jpg"
            />
            <img
              src="https://clsite-file1.s3.amazonaws.com/7806_topperinailet.jpg"
              style={{ width: "auto", maxWidth: "100%" }}
            />
          </picture>
        </div>
        <div className="carousel-item active">
          <picture>
            <source
              media="(max-width: 480px)"
              srcSet="https://clsite-file1.s3.amazonaws.com/7806_toppersinclat2.jpg"
            />
            <source
              media="(max-width: 800px)"
              srcSet="https://clsite-file1.s3.amazonaws.com/7806_toppersinclat.jpg"
            />
            <img
              src="https://clsite-file1.s3.amazonaws.com/7806_toppersinclat.jpg"
              style={{ width: "auto", maxWidth: "100%" }}
            />
          </picture>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>
 


<section className="detalts classroom-highlight">
  <div className="container">
    <h2>Why choose LST Study Material?</h2>
    <div className="row">
      <div className="col-lg-4">
        <div className="highlight">
          <img src="/assets/img/mock-analysis-and-report-card.png" />
          <h4>Comprehensive Law Study Material</h4>
          <p>
            Study at your own pace with 24*7 access to our exhaustive study
            guides. They cover concepts right from the fundamentals and explain
            them with the help of lucid examples.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="highlight">
          <img src="/assets/img/study-online-at-home.png" />
          <h4>Practice Questions with Solutions</h4>
          <p>
            Practice topic and section-wise questions are given at the end of
            each chapter. Get detailed solutions and shortcuts to improve your
            performance.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="highlight">
          <img src="/assets/img/video-analysis-of-each-mock.png" />
          <h4>Performance Analysis</h4>
          <p>
            Analyze your strong and weak areas by attempting practice questions,
            tests, and mocks. Develop your exam strategy accordingly.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="highlight">
          <img src="/assets/img/vocabulary-and-gk-updates.png" />
          <h4>CL for CLAT Preparation</h4>
          <p>
            CL-LST is a powerful tool that provides an analytics-driven
            performance breakdown of your tests. Along with exam schedules,
            online tests, GK, and Weekly Legal updates, it has every feature a
            student needs for CLAT preparation.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="highlight">
          <img src="/assets/img/legal-updates-and-quizzes.png" />
          <h4>Interactive Platform</h4>
          <p>
            Enjoy taking CLAT mock tests with ease in our interactive platform:
            set difficulty levels (Easy, Moderate, Advanced, and Expert),
            bookmark questions, and check/ hide solutions to individual
            questions.
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="highlight">
          <img src="/assets/img/exam-analysis.png" />
          <h4>Online Support</h4>
          <p>
            Get all your queries promptly and satisfactorily resolved by our
            Academic team over email.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>




<section className="program-highlight bg-grey">
  <div className="container">
    <h2 className="text-center">Choose the Right Program</h2>
    <div className="" id="products">
      <div className="row justify-content-center">
        <div className="col-lg-4 _prod _2247">
          {" "}
          <div className="program-box">
            {" "}
            <div className="rectangle-31">
              <h5>
                <strong
                  className="setOfferPrice0"
                  style={{ color: "#ff692e", fontSize: 16 }}
                >
                  {" "}
                  ₹ 8,400{" "}
                </strong>
              </h5>
              <h4>LST CLAT Books and Material</h4>
            </div>
            <div className="feature-content">
              <div className="col-md-12 checkicon">
                <div className="inercon">
                  <h4>14 books based on updated CLAT pattern</h4>
                </div>
              </div>
              <div className="col-md-12 checkicon">
                <div className="inercon">
                  <h4>Access to complete course material</h4>
                </div>
              </div>
              <div className="col-md-12 checkicon">
                <div className="inercon">
                  <h4>Access to Masterstroke</h4>
                </div>
              </div>
            </div>
            <div className="col-md-12 pricetbtn">
              <a
                href="/course-detail.jsp?prodId= trZ4Eo%2FkCU%3D&prodGroup=Books and Study Material&prodCat=LST"
                className="btn cta"
              >
                Enroll now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






<section className="success">





  <div className="container">
    <h2>Our Testimonials</h2>
    <div className="testmonials-pull">
      <div className="suces slider slick-initialized slick-slider">
        <div className="slick-list draggable">
          <div
            className="slick-track"
            style={{
              opacity: 1,
              width: 4202,
              transform: "translate3d(-1528px, 0px, 0px)"
            }}
          >
            <div
              className="slick-slide slick-cloned"
              data-slick-index={-3}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 352 }}
            >
              <div>
                <div
                  className="success-story"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <p>
                    I was a part of CL's classroom program here in Jayanagar
                    Center. I started my preparation very late and was not
                    regular with the course prep. I heavily depended on CL's
                    content and mocks which played a major role in my
                    preparation.
                  </p>
                  <div className="author">
                    <img src="/assets/img/Rohit-Hebbar.webp" alt="" title="" />
                  </div>
                  <span>
                    <h5>Rohit Hebbar</h5>
                    <h6>AIR 11, AILET 2023</h6>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={-2}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 352 }}
            >
              <div>
                <div
                  className="success-story"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <p>
                    I was a part of CL's two-year classroom program in
                    Chandigarh. CL's team not only helped me with great content
                    and interesting classes but also guidance in defining the
                    right path for my career through career counselling
                    sessions.{" "}
                  </p>
                  <div className="author">
                    <img src="/assets/img/Chahat-Bhambri.webp" />
                  </div>
                  <span>
                    <h5>Chahat Bhambri</h5>
                    <h6>AIR 29, CLAT 2023</h6>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={-1}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 352 }}
            >
              <div>
                <div
                  className="success-story"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <p>
                    I I attended the online classes in 11th because of COVID and
                    started preparing for the exam seriously in class 12th,
                    under the two-year program at CL. I believe except one mock
                    I've attempted all the mocks provided by CL.
                  </p>
                  <div className="author">
                    <img src="/assets/img/Joy-Sanskar-Kalra.webp" />
                  </div>
                  <span>
                    <h5>Joy Sanskar Kalra</h5>
                    <h6>AIR 14, CLAT 2023</h6>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="slick-slide"
              data-slick-index={0}
              aria-hidden="true"
              style={{ width: 352 }}
              tabIndex={-1}
            >
              <div>
                <div
                  className="success-story"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <p>
                    I was a part of CL's CR nuggets program that helped me
                    structure my planning and my performance in CLAT and AILET.
                    I attended all the online classes which covered most of the
                    course and gave more than 40 CL's mocks before my final
                    exams.
                  </p>
                  <div className="author">
                    <img src="/assets/img/Navya-Nair.webp" />
                  </div>
                  <span>
                    <h5>Navya Nair</h5>
                    <h6>AIR 6, CLAT 2023</h6>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-current slick-active"
              data-slick-index={1}
              aria-hidden="false"
              style={{ width: 352 }}
            >
              <div>
                <div
                  className="success-story"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <p>
                    I was a part of CL's classroom program here in Jayanagar
                    Center. I started my preparation very late and was not
                    regular with the course prep. I heavily depended on CL's
                    content and mocks which played a major role in my
                    preparation.
                  </p>
                  <div className="author">
                    <img src="/assets/img/Rohit-Hebbar.webp" alt="" title="" />
                  </div>
                  <span>
                    <h5>Rohit Hebbar</h5>
                    <h6>AIR 11, AILET 2023</h6>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-active"
              data-slick-index={2}
              aria-hidden="false"
              style={{ width: 352 }}
            >
              <div>
                <div
                  className="success-story"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <p>
                    I was a part of CL's two-year classroom program in
                    Chandigarh. CL's team not only helped me with great content
                    and interesting classes but also guidance in defining the
                    right path for my career through career counselling
                    sessions.{" "}
                  </p>
                  <div className="author">
                    <img src="/assets/img/Chahat-Bhambri.webp" />
                  </div>
                  <span>
                    <h5>Chahat Bhambri</h5>
                    <h6>AIR 29, CLAT 2023</h6>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-active"
              data-slick-index={3}
              aria-hidden="false"
              style={{ width: 352 }}
            >
              <div>
                <div
                  className="success-story"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <p>
                    I I attended the online classes in 11th because of COVID and
                    started preparing for the exam seriously in class 12th,
                    under the two-year program at CL. I believe except one mock
                    I've attempted all the mocks provided by CL.
                  </p>
                  <div className="author">
                    <img src="/assets/img/Joy-Sanskar-Kalra.webp" />
                  </div>
                  <span>
                    <h5>Joy Sanskar Kalra</h5>
                    <h6>AIR 14, CLAT 2023</h6>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={4}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 352 }}
            >
              <div>
                <div
                  className="success-story"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <p>
                    I was a part of CL's CR nuggets program that helped me
                    structure my planning and my performance in CLAT and AILET.
                    I attended all the online classes which covered most of the
                    course and gave more than 40 CL's mocks before my final
                    exams.
                  </p>
                  <div className="author">
                    <img src="/assets/img/Navya-Nair.webp" />
                  </div>
                  <span>
                    <h5>Navya Nair</h5>
                    <h6>AIR 6, CLAT 2023</h6>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={5}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 352 }}
            >
              <div>
                <div
                  className="success-story"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <p>
                    I was a part of CL's classroom program here in Jayanagar
                    Center. I started my preparation very late and was not
                    regular with the course prep. I heavily depended on CL's
                    content and mocks which played a major role in my
                    preparation.
                  </p>
                  <div className="author">
                    <img src="/assets/img/Rohit-Hebbar.webp" alt="" title="" />
                  </div>
                  <span>
                    <h5>Rohit Hebbar</h5>
                    <h6>AIR 11, AILET 2023</h6>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={6}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 352 }}
            >
              <div>
                <div
                  className="success-story"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <p>
                    I was a part of CL's two-year classroom program in
                    Chandigarh. CL's team not only helped me with great content
                    and interesting classes but also guidance in defining the
                    right path for my career through career counselling
                    sessions.{" "}
                  </p>
                  <div className="author">
                    <img src="/assets/img/Chahat-Bhambri.webp" />
                  </div>
                  <span>
                    <h5>Chahat Bhambri</h5>
                    <h6>AIR 29, CLAT 2023</h6>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={7}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 352 }}
            >
              <div>
                <div
                  className="success-story"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <p>
                    I I attended the online classes in 11th because of COVID and
                    started preparing for the exam seriously in class 12th,
                    under the two-year program at CL. I believe except one mock
                    I've attempted all the mocks provided by CL.
                  </p>
                  <div className="author">
                    <img src="/assets/img/Joy-Sanskar-Kalra.webp" />
                  </div>
                  <span>
                    <h5>Joy Sanskar Kalra</h5>
                    <h6>AIR 14, CLAT 2023</h6>
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<Faqs f="Books" />




    
    </>
  )
}
