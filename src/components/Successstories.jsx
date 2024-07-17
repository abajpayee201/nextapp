import React from 'react'

export default function () {
  return (
    <>
    <section className="banner results">
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
          <span property="name">Success Stories</span>
          <meta property="position" content={2} />
        </li>
      </ol>
    </nav>
    <div className="row d-flex align-items-end">
      <div className="col-lg-5">
        <h1>CLAT &amp; AILET Results 2024</h1>
        <h2>5/10 Top AIRs in CLAT 2024 | 7/10 Top AIRs in AILET 2024</h2>
        <div className="row">
          <div className="col-lg-4 col-6">
            <div className="result-boxes">
              <h5>7/10 Top AIR in</h5>
              <h6>CLAT 2023</h6>
            </div>
          </div>
          <div className="col-lg-4  col-6">
            <div className="result-boxes">
              <h5>6/10 Top AIR in</h5>
              <h6>CLAT 2023</h6>
            </div>
          </div>
          <div className="col-lg-4  col-6">
            <div className="result-boxes">
              <h5>8/10 Top AIR in</h5>
              <h6>CLAT 2022</h6>
            </div>
          </div>
          <div className="col-lg-4  col-6">
            <div className="result-boxes">
              <h5>9/10 Top AIRs in</h5>
              <h6>AILET 2022</h6>
            </div>
          </div>
          <div className="col-lg-4  col-6">
            <div className="result-boxes">
              <h5>9/10 Top AIRs in</h5>
              <h6>CLAT 2021</h6>
            </div>
          </div>
          <div className="col-lg-4  col-6">
            <div className="result-boxes">
              <h5>AIR 1, 2, 3, 4, 5 in</h5>
              <h6>AILET 2021</h6>
            </div>
          </div>
          <div className="col-lg-6  col-6">
            <div className="result-boxes">
              <h5>7/10 Top AIRs in</h5>
              <h6>CLAT 2020</h6>
            </div>
          </div>
          <div className="col-lg-6  col-6">
            <div className="result-boxes">
              <h5>7/10 Top AIRs in </h5>
              <h6>in AILET 2020</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="row">
          <div className="col-lg-6">
            <div className="reslt-videp">
              <div className="toppers">
                <div className="video-frame">
                  <div className="youtube-player" data-id="of9pJ2q54zE">
                    <div data-id="of9pJ2q54zE">
                      <img src="https://i.ytimg.com/vi/of9pJ2q54zE/hqdefault.jpg" />
                      <div className="play" />
                    </div>
                  </div>
                </div>
                {/* <h3>Diya Agrawal</h3>
<h5>AIR 1 - AILET - 2024</h5> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="reslt-videp">
              <div className="toppers">
                <div className="video-frame">
                  <div className="youtube-player" data-id="byhw8gp_lTg">
                    <div data-id="byhw8gp_lTg">
                      <img src="https://i.ytimg.com/vi/byhw8gp_lTg/hqdefault.jpg" />
                      <div className="play" />
                    </div>
                  </div>
                </div>
                {/* <h3>Pradhyot Shah</h3>
<h5>AIR 2 - CLAT - 2024</h5> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="reslt-videp">
              <div className="toppers">
                <div className="video-frame">
                  <div className="youtube-player" data-id="TQe3c6NSoVg">
                    <div data-id="TQe3c6NSoVg">
                      <img src="https://i.ytimg.com/vi/TQe3c6NSoVg/hqdefault.jpg" />
                      <div className="play" />
                    </div>
                  </div>
                </div>
                {/* <h3>Nandita Matolli</h3>
<h5>AIR 3 - AILET - 2024</h5> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="reslt-videp">
              <div className="toppers">
                <div className="video-frame">
                  <div className="youtube-player" data-id="2dBGlkSZ4gM">
                    <div data-id="2dBGlkSZ4gM">
                      <img src="https://i.ytimg.com/vi/2dBGlkSZ4gM/hqdefault.jpg" />
                      <div className="play" />
                    </div>
                  </div>
                </div>
                {/* <h3>Pragnya Amireddy</h3>
<h5>AIR 4 - CLAT - 2024</h5> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="reslt-videp">
              <div className="toppers">
                <div className="video-frame">
                  <div className="youtube-player" data-id="uE_I4vrOmQo">
                    <div data-id="uE_I4vrOmQo">
                      <img src="https://i.ytimg.com/vi/uE_I4vrOmQo/hqdefault.jpg" />
                      <div className="play" />
                    </div>
                  </div>
                </div>
                {/* <h3>Aanya Dhandha</h3>
<h5>AIR 4 - AILET - 2024</h5> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>









<section className="success pt-0">
  <div className="container">
    <div className="row copnth" id="myList">
      <li className="col-lg-4" style={{ display: "list-item" }}>
        <div className="success-story">
          <p>
            A friend recommended CL-LST to me. Although I started late compared
            to others, fortunately, my first class was with one of my favorite
            teachers, which made everything easier. With the amount of support I
            got at all stages of my journey, I was able to ace the exam.
          </p>
          <div className="author">
            <img src="assets/img/top-achievers/Pradhyot-Shah.webp" />
          </div>
          <span>
            <h5>Pradhyot Shah</h5>
            <h6>AIR - 2 CLAT 2024 | CL Id - 30661072</h6>
          </span>
        </div>
      </li>
      <li className="col-lg-4" style={{ display: "list-item" }}>
        <div className="success-story">
          <p>
            I was confident about my preparation but never expected to secure
            rank 4 in CLAT. I believe this is because of the adept guidance and
            quality material provided by CL-LST, which helped me adapt to the
            new exam pattern. Despite the uncertainties, I was confident in my
            preparation.
          </p>
          <div className="author">
            <img src="assets/img/top-achievers/Pragnya-Amireddy.webp" />
          </div>
          <span>
            <h5>Pragnya Amireddy</h5>
            <h6>AIR 4 - CLAT 2024 | CL Id - 11827264</h6>
          </span>
        </div>
      </li>
      <li className="col-lg-4" style={{ display: "list-item" }}>
        <div className="success-story">
          <p>
            I believe attempting mocks was the essential part of my strategy. I
            focused on analyzing the mock after each attempt, which made me
            realize my mistakes, and then helped me capitalize on the learnings
            after each attempt, which was aided by guidance from CL-LST
            faculties.{" "}
          </p>
          <div className="author">
            <img src="assets/img/top-achievers/Ashutosh-Kar.webp" />
          </div>
          <span>
            <h5>Ashutosh Kar</h5>
            <h6>AIR 10 - CLAT 2024 | CL Id - 11913164</h6>
          </span>
        </div>
      </li>
      <li className="col-lg-4">
        <div className="success-story">
          <p>
            I joined CL-LST around March after my 11th exams. The entire
            curriculum was quite comprehensive, aided by well-versed faculties
            at the center. I was highly satisfied with the faculty, as they were
            available to resolve my queries at any time of the day.
          </p>
          <div className="author">
            <img src="assets/img/top-achievers/Diya-Agrawal.webp" />
          </div>
          <span>
            <h5>Diya Agrawal</h5>
            <h6>AIR 1 - AILET 2024 | CL Id - 30262917</h6>
          </span>
        </div>
      </li>
      <li className="col-lg-4">
        <div className="success-story">
          <p>
            I always looked forward to the Quant &amp; English classes of
            CL-LST. The faculty helped us to enjoy the preparation process
            rather than just cracking an exam. It helped me keep my cool for the
            AILET exam even when my CLAT exam did not go as I expected.
          </p>
          <div className="author">
            <img src="assets/img/top-achievers/Nandita-Matolli.webp" />
          </div>
          <span>
            <h5>Nandita Matolli</h5>
            <h6>AIR 3 - AILET 2024 | CL Id - 30661355</h6>
          </span>
        </div>
      </li>
      <li className="col-lg-4">
        <div className="success-story">
          <p>
            I took the 2-year online course with LST. The faculty and the
            comprehensive study material, especially monthly GK magazines,
            helped me a lot. Attempting mocks regularly and comprehensively
            analyzing them contributed to 25-40% growth in my marks. It
            reflected in the exam as well.
          </p>
          <div className="author">
            <img src="assets/img/top-achievers/Aanya-Dhandha.webp" />
          </div>
          <span>
            <h5>Aanya Dhandha</h5>
            <h6>AIR 4 - AILET 2024 | CL Id - 11947087</h6>
          </span>
        </div>
      </li>
      <li className="col-lg-4">
        <div className="success-story">
          <p>
            Law Entrance Examinations require consistent practice, clarity on
            approach to problem-solving, and adequate guidance. With each mock I
            attempted, I nurtured the habit of problem-solving from the
            examiner's perspective. CL-LST faculties were always there to guide
            me during this process.
          </p>
          <div className="author">
            <img src="assets/img/top-achievers/Divas.webp" />
          </div>
          <span>
            <h5>Divas Upadhyay</h5>
            <h6>AIR 6 - AILET 2024 | CL Id - 11901292</h6>
          </span>
        </div>
      </li>
      <li className="col-lg-4">
        <div className="success-story">
          <p>
            I believe my success is majorly attributed to the rigorous
            curriculum of the CL-LST course and the competitive culture of the
            coaching center, which never let me settle and motivated me to move
            forward. My mentors helped me with the mental part of the exam as
            well.
          </p>
          <div className="author">
            <img src="assets/img/top-achievers/Diya-Agrawal.webp" />
          </div>
          <span>
            <h5>Preeyal Seghal</h5>
            <h6>AIR 12- AILET | CL Id - 30260949</h6>
          </span>
        </div>
      </li>
      <li className="col-lg-4">
        <div className="success-story">
          <p>
            I was a part of CL's CR nuggets program that helped me structure my
            planning and my performance in CLAT and AILET. I attended all the
            online classes which covered most of the course and gave more than
            40 CL's mocks before my final exams. I believe that is what helped
            me with my preparation. I'm very grateful for enrolling in this
            course. Thank you.
          </p>
          <div className="author">
            <img src="assets/img/top-achievers/profile.png" />
          </div>
          <span>
            <h5>Navya Nair</h5>
            <h6>AIR 6 - CLAT 2023</h6>
          </span>
        </div>
      </li>
      <li className="col-lg-4">
        <div className="success-story">
          <p>
            I was a part of CL's classroom program here in Jayanagar Center. I
            started my preparation very late and was not regular with the course
            prep. I heavily depended on CL's content and mocks which played a
            major role in my preparation.
          </p>
          <div className="author">
            <img src="assets/img/top-achievers/profile.png" />
          </div>
          <span>
            <h5>Rohit Hebbar</h5>
            <h6>AIR 11 - AILET 2023</h6>
          </span>
        </div>
      </li>
      <li className="col-lg-4">
        <div className="success-story">
          <p>
            I was a part of CL's two-year classroom program in Chandigarh. CL's
            team not only helped me with great content and interesting classes
            but also guidance in defining the right path for my career through
            career counseling sessions. Throughout my preparation my mock scores
            were inconsistent but CL as a community kept me motivated to do
            more.
          </p>
          <div className="author">
            <img src="assets/img/top-achievers/profile.png" />
          </div>
          <span>
            <h5>Chahat Bhambri</h5>
            <h6>AIR 29 - CLAT 2023</h6>
          </span>
        </div>
      </li>
      <li className="col-lg-4">
        <div className="success-story">
          <p>
            I attended the online classes in 11th because of COVID and started
            preparing for the exam seriously in class 12th, under the two-year
            program at CL. I believe except for one mock I've attempted all the
            mocks provided by CL. The mocks played a huge role in pushing my
            score from 40-50 to 90's. CL's program made a huge impact on my prep
            and is thus evident in the results.
          </p>
          <div className="author">
            <img src="assets/img/top-achievers/profile.png" />
          </div>
          <span>
            <h5>Joy Sanskar Kalra</h5>
            <h6>AIR 14 - CLAT 2023</h6>
          </span>
        </div>
      </li>
      <div className="gap-2 d-md-block">
        <a className="btn cta" id="loadMore">
          Show more
        </a>
        <a className="btn cta bg-white" id="showLess">
          Show less
        </a>
      </div>
    </div>
  </div>
</section>

    




<section className="courses-slide bg-grey">
  <div className="container">
    <div className="position-relative">
      <h5 className="brand-orange">Courses</h5>
      <h2>Most Popular Courses</h2>
      <a href="/courses.jsp" className="btn cta all-couses">
        View All Courses
      </a>
    </div>
    <p>
      Our story begins with your trust in us and ends with your progress. We do
      not believe that one size fits all, and that is showcased in our course
      offerings. From CLAT and AILET dedicated courses to courses catering to
      other law entrance tests, including SLAT, NMIMS LAT, MAH-CET, and PU
      Entrance exams; our course structures cover it all.
    </p>
    <div className="testmonials-pull">
      <div className="cousrs slider slick-initialized slick-slider">
        <button
          className="slick-prev slick-arrow"
          aria-label="Previous"
          type="button"
          style={{}}
        >
          Previous
        </button>
        <div className="slick-list draggable" style={{ padding: "0px 120px" }}>
          <div
            className="slick-track"
            style={{
              opacity: 1,
              width: 6840,
              transform: "translate3d(-2052px, 0px, 0px)"
            }}
          >
            <div
              className="slick-slide slick-cloned"
              data-slick-index={-4}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 312 }}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="https://clsite-file1.s3.amazonaws.com/7890_LST-Bullet-Premium-Online.jpg.jpg" />
                  <h5>
                    <span>Target Year: 2025</span>
                  </h5>
                  <hr />
                  <a
                    href="/course-detail.jsp?prodId=GF6pvRT3d%2Fo%3D&prodCategory=LST&prodGroup=Online%20Coaching&rt=&rl="
                    tabIndex={-1}
                  >
                    <h4>LST Bullet Premium Online</h4>
                  </a>
                  <p>Ideal for students retaking CLAT, AILET, &amp; OLETs*</p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn blue" tabIndex={-1}>
                      Online
                    </a>
                    <a href="" className="btn pink" tabIndex={-1}>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={-3}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 312 }}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="https://clsite-file1.s3.amazonaws.com/7890_LST2025TestSeries.jpg" />
                  <h5>
                    <span>Target Year: 2025</span>
                  </h5>
                  <hr />
                  <a
                    href="/course-detail.jsp?prodId=UxJ7ugUUy3A%3D&prodCategory=LST&prodGroup=Test%20Series&rt=&rl="
                    tabIndex={-1}
                  >
                    <h4>LST 2025 Test Series</h4>
                  </a>
                  <p>
                    Ideal for students looking for mock test series of CLAT,
                    AILET, &amp; OLETs*
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn purple" tabIndex={-1}>
                      Offline
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={-2}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 312 }}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="assets/img/LST-Plus-Classroom.jpg" />
                  <h5>
                    <span>Target Year: 2025</span>
                  </h5>
                  <hr />
                  <a href="/courses.jsp?type=Classroom" tabIndex={-1}>
                    <h4>LST Plus</h4>
                  </a>
                  <p>
                    Ideal for students looking for face-to-face preparation of
                    CLAT, AILET, &amp; OLETs* within 1 year
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn purple" tabIndex={-1}>
                      Offline
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={-1}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 312 }}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="https://clsite-file1.s3.amazonaws.com/7890_CLAT-Plus-Premium-Online.jpg" />
                  <h5>
                    <span>Target Year: 2025</span>
                  </h5>
                  <hr />
                  <a
                    href="/course-detail.jsp?prodId=FPWhN1xcHsY%3D&prodCategory=LST&prodGroup=Online%20Coaching&rt=&rl="
                    tabIndex={-1}
                  >
                    <h4>LST Plus Premium Online</h4>
                  </a>
                  <p>
                    Ideal for students preparing for CLAT, AILET, &amp; OLETs*
                    within 1 year
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn blue" tabIndex={-1}>
                      Online
                    </a>
                    <a href="" className="btn pink" tabIndex={-1}>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide"
              data-slick-index={0}
              aria-hidden="true"
              style={{ width: 312 }}
              tabIndex={-1}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="https://clsite-file1.s3.amazonaws.com/7890_Law-Express-2024.jpg" />
                  <h5>
                    <span>Target Year: 2024</span>
                  </h5>
                  <hr />
                  <a
                    href="/course-detail.jsp?prodId=%20Ds30CTQOKg%3D&prodCategory=LST&prodGroup=Online%20Coaching&rt=&rl="
                    tabIndex={-1}
                  >
                    <h4>LAW Express 2024 Online</h4>
                  </a>
                  <p>
                    Ideal for students preparing for OLETs* (SLAT, NMIMS-LAT,
                    MAH-CET, etc.)
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn blue" tabIndex={-1}>
                      Online
                    </a>
                    <a href="" className="btn pink" tabIndex={-1}>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide"
              data-slick-index={1}
              aria-hidden="true"
              style={{ width: 312 }}
              tabIndex={-1}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="assets/img/LST-Span-Classroom.jpg" />
                  <h5>
                    <span>Target Year: 2025/2026</span>
                  </h5>
                  <hr />
                  <a href="/courses.jsp?type=Classroom" tabIndex={-1}>
                    <h4>LST Span</h4>
                  </a>
                  <p>
                    Ideal for students looking for face-to-face preparation of
                    CLAT, AILET, &amp; OLETs* within 2 years
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn purple" tabIndex={-1}>
                      Offline
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-active"
              data-slick-index={2}
              aria-hidden="false"
              style={{ width: 312 }}
              tabIndex={-1}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="https://clsite-file1.s3.amazonaws.com/7890_LST-Span-Premium-Online.jpg" />
                  <h5>
                    <span>Target Year: 2026</span>
                  </h5>
                  <hr />
                  <a
                    href="/course-detail.jsp?prodId=2g4R36nHHZA%3D&prodCategory=LST&prodGroup=Online%20Coaching&rt=&rl="
                    tabIndex={0}
                  >
                    <h4>LST Span Premium Online</h4>
                  </a>
                  <p>
                    Ideal for students preparing for CLAT, AILET, &amp; OLETs*
                    within 2 years
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn blue" tabIndex={0}>
                      Online
                    </a>
                    <a href="" className="btn pink" tabIndex={0}>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-current slick-active slick-center"
              data-slick-index={3}
              aria-hidden="false"
              style={{ width: 312 }}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="assets/img/Law-Express-Classroom.jpg" />
                  <h5>
                    <span>Target Year: 2024</span>
                  </h5>
                  <hr />
                  <a href="/courses.jsp?type=Classroom" tabIndex={0}>
                    <h4>Law Express</h4>
                  </a>
                  <p>
                    Ideal for students looking for face-to-face preparation of
                    OLETs* (SLAT, NMIMS-LAT, MAH-CET, etc.)
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn purple" tabIndex={0}>
                      Offline
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-active"
              data-slick-index={4}
              aria-hidden="false"
              style={{ width: 312 }}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="https://clsite-file1.s3.amazonaws.com/7890_LST-Bullet-Premium-Online.jpg.jpg" />
                  <h5>
                    <span>Target Year: 2025</span>
                  </h5>
                  <hr />
                  <a
                    href="/course-detail.jsp?prodId=GF6pvRT3d%2Fo%3D&prodCategory=LST&prodGroup=Online%20Coaching&rt=&rl="
                    tabIndex={0}
                  >
                    <h4>LST Bullet Premium Online</h4>
                  </a>
                  <p>Ideal for students retaking CLAT, AILET, &amp; OLETs*</p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn blue" tabIndex={0}>
                      Online
                    </a>
                    <a href="" className="btn pink" tabIndex={0}>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide"
              data-slick-index={5}
              aria-hidden="true"
              style={{ width: 312 }}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="https://clsite-file1.s3.amazonaws.com/7890_LST2025TestSeries.jpg" />
                  <h5>
                    <span>Target Year: 2025</span>
                  </h5>
                  <hr />
                  <a
                    href="/course-detail.jsp?prodId=UxJ7ugUUy3A%3D&prodCategory=LST&prodGroup=Test%20Series&rt=&rl="
                    tabIndex={-1}
                  >
                    <h4>LST 2025 Test Series</h4>
                  </a>
                  <p>
                    Ideal for students looking for mock test series of CLAT,
                    AILET, &amp; OLETs*
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn purple" tabIndex={-1}>
                      Offline
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide"
              data-slick-index={6}
              aria-hidden="true"
              style={{ width: 312 }}
              tabIndex={-1}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="assets/img/LST-Plus-Classroom.jpg" />
                  <h5>
                    <span>Target Year: 2025</span>
                  </h5>
                  <hr />
                  <a href="/courses.jsp?type=Classroom" tabIndex={-1}>
                    <h4>LST Plus</h4>
                  </a>
                  <p>
                    Ideal for students looking for face-to-face preparation of
                    CLAT, AILET, &amp; OLETs* within 1 year
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn purple" tabIndex={-1}>
                      Offline
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide"
              data-slick-index={7}
              aria-hidden="true"
              style={{ width: 312 }}
              tabIndex={-1}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="https://clsite-file1.s3.amazonaws.com/7890_CLAT-Plus-Premium-Online.jpg" />
                  <h5>
                    <span>Target Year: 2025</span>
                  </h5>
                  <hr />
                  <a
                    href="/course-detail.jsp?prodId=FPWhN1xcHsY%3D&prodCategory=LST&prodGroup=Online%20Coaching&rt=&rl="
                    tabIndex={-1}
                  >
                    <h4>LST Plus Premium Online</h4>
                  </a>
                  <p>
                    Ideal for students preparing for CLAT, AILET, &amp; OLETs*
                    within 1 year
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn blue" tabIndex={-1}>
                      Online
                    </a>
                    <a href="" className="btn pink" tabIndex={-1}>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={8}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 312 }}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="https://clsite-file1.s3.amazonaws.com/7890_Law-Express-2024.jpg" />
                  <h5>
                    <span>Target Year: 2024</span>
                  </h5>
                  <hr />
                  <a
                    href="/course-detail.jsp?prodId=%20Ds30CTQOKg%3D&prodCategory=LST&prodGroup=Online%20Coaching&rt=&rl="
                    tabIndex={-1}
                  >
                    <h4>LAW Express 2024 Online</h4>
                  </a>
                  <p>
                    Ideal for students preparing for OLETs* (SLAT, NMIMS-LAT,
                    MAH-CET, etc.)
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn blue" tabIndex={-1}>
                      Online
                    </a>
                    <a href="" className="btn pink" tabIndex={-1}>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={9}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 312 }}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="assets/img/LST-Span-Classroom.jpg" />
                  <h5>
                    <span>Target Year: 2025/2026</span>
                  </h5>
                  <hr />
                  <a href="/courses.jsp?type=Classroom" tabIndex={-1}>
                    <h4>LST Span</h4>
                  </a>
                  <p>
                    Ideal for students looking for face-to-face preparation of
                    CLAT, AILET, &amp; OLETs* within 2 years
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn purple" tabIndex={-1}>
                      Offline
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={10}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 312 }}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="https://clsite-file1.s3.amazonaws.com/7890_LST-Span-Premium-Online.jpg" />
                  <h5>
                    <span>Target Year: 2026</span>
                  </h5>
                  <hr />
                  <a
                    href="/course-detail.jsp?prodId=2g4R36nHHZA%3D&prodCategory=LST&prodGroup=Online%20Coaching&rt=&rl="
                    tabIndex={-1}
                  >
                    <h4>LST Span Premium Online</h4>
                  </a>
                  <p>
                    Ideal for students preparing for CLAT, AILET, &amp; OLETs*
                    within 2 years
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn blue" tabIndex={-1}>
                      Online
                    </a>
                    <a href="" className="btn pink" tabIndex={-1}>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={11}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 312 }}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="assets/img/Law-Express-Classroom.jpg" />
                  <h5>
                    <span>Target Year: 2024</span>
                  </h5>
                  <hr />
                  <a href="/courses.jsp?type=Classroom" tabIndex={-1}>
                    <h4>Law Express</h4>
                  </a>
                  <p>
                    Ideal for students looking for face-to-face preparation of
                    OLETs* (SLAT, NMIMS-LAT, MAH-CET, etc.)
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn purple" tabIndex={-1}>
                      Offline
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={12}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 312 }}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="https://clsite-file1.s3.amazonaws.com/7890_LST-Bullet-Premium-Online.jpg.jpg" />
                  <h5>
                    <span>Target Year: 2025</span>
                  </h5>
                  <hr />
                  <a
                    href="/course-detail.jsp?prodId=GF6pvRT3d%2Fo%3D&prodCategory=LST&prodGroup=Online%20Coaching&rt=&rl="
                    tabIndex={-1}
                  >
                    <h4>LST Bullet Premium Online</h4>
                  </a>
                  <p>Ideal for students retaking CLAT, AILET, &amp; OLETs*</p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn blue" tabIndex={-1}>
                      Online
                    </a>
                    <a href="" className="btn pink" tabIndex={-1}>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={13}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 312 }}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="https://clsite-file1.s3.amazonaws.com/7890_LST2025TestSeries.jpg" />
                  <h5>
                    <span>Target Year: 2025</span>
                  </h5>
                  <hr />
                  <a
                    href="/course-detail.jsp?prodId=UxJ7ugUUy3A%3D&prodCategory=LST&prodGroup=Test%20Series&rt=&rl="
                    tabIndex={-1}
                  >
                    <h4>LST 2025 Test Series</h4>
                  </a>
                  <p>
                    Ideal for students looking for mock test series of CLAT,
                    AILET, &amp; OLETs*
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn purple" tabIndex={-1}>
                      Offline
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={14}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 312 }}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="assets/img/LST-Plus-Classroom.jpg" />
                  <h5>
                    <span>Target Year: 2025</span>
                  </h5>
                  <hr />
                  <a href="/courses.jsp?type=Classroom" tabIndex={-1}>
                    <h4>LST Plus</h4>
                  </a>
                  <p>
                    Ideal for students looking for face-to-face preparation of
                    CLAT, AILET, &amp; OLETs* within 1 year
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn purple" tabIndex={-1}>
                      Offline
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={15}
              id=""
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 312 }}
            >
              <div>
                <div
                  className="mentor-descrip"
                  style={{ width: "100%", display: "inline-block" }}
                >
                  <img src="https://clsite-file1.s3.amazonaws.com/7890_CLAT-Plus-Premium-Online.jpg" />
                  <h5>
                    <span>Target Year: 2025</span>
                  </h5>
                  <hr />
                  <a
                    href="/course-detail.jsp?prodId=FPWhN1xcHsY%3D&prodCategory=LST&prodGroup=Online%20Coaching&rt=&rl="
                    tabIndex={-1}
                  >
                    <h4>LST Plus Premium Online</h4>
                  </a>
                  <p>
                    Ideal for students preparing for CLAT, AILET, &amp; OLETs*
                    within 1 year
                  </p>
                  <hr />
                  <div className="d-flex align-items-center three-btns">
                    <a href="" className="btn blue" tabIndex={-1}>
                      Online
                    </a>
                    <a href="" className="btn pink" tabIndex={-1}>
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="slick-next slick-arrow"
          aria-label="Next"
          type="button"
          style={{}}
        >
          Next
        </button>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}
