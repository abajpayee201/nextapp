import React from 'react'
import Faqs from './Faqs'

export default function () {
  return (
    <>
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
            <span property="name">Test Series</span>
            <meta property="position" content={2} />
          </li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-lg-7">
          <h1>CLAT Test Series 2025</h1>
          <h2>
            Get an in-depth analysis to formulate the perfect CLAT &amp; AILET
            test-taking strategy. We have a variety of test series, which
            include:
          </h2>
          <ul>
            <li>60 All India mocks (48 CLAT and 12 AILET)</li>
            <li>All India ranking and benchmarking</li>
            <li>Access to video solutions of select mocks</li>
          </ul>
        </div>
        <div className="col-lg-5" id="frms">
          <p>Experience CLAT and AILET before the actual test.</p>
          <form
            name="clForm"
            id="clForm"
            className="d-flex flex-wrap margin-top-10"
            method="post"
            onsubmit="return false;"
            action='/api/addcounselling'
          >
            <input type="hidden" name="utm_source" defaultValue="Website" />
            <input
              type="hidden"
              name="utm_campaign"
              defaultValue="LST test series"
            />
            <input
              type="hidden"
              name="utm_term"
              defaultValue="https://www.lawentrance.com/test-series/"
            />
            <input type="hidden" name="utm_medium" defaultValue="SEO" />
            <input
              type="hidden"
              name="cl_target_list"
              defaultValue="LST test series"
            />
            <input
              type="hidden"
              name="cl_prod_category"
              id="cl_prod_category"
              defaultValue="LST"
            />
            {/*<input type="hidden" name="cl_prod_group" value='LOC'> */}
            <input type="hidden" name="cl_exam_category" defaultValue="CLAT" />
            <input
              type="hidden"
              name="cl_campaign"
              defaultValue="LST test series"
            />
            <input type="hidden" id="url" name="url" />
            <input
              type="hidden"
              name="listId"
              defaultValue="49e039a9-9782-11e7-8dc3-22000aa8e760"
            />
            <input
              type="hidden"
              name="trigger"
              defaultValue="LST test series"
            />
            <input type="hidden" name="centerFlag" defaultValue="no" />
            <input type="hidden" name="leadsquared" defaultValue="yes" />
            <input type="hidden" name="eventId" defaultValue={123456} />
            <input type="hidden" name="webxSession" defaultValue="no" />
            <input
              type="hidden"
              name="redirectUrl"
              defaultValue="https://www.lawentrance.com/thankyou.jsp"
            />
            <input type="hidden" name="eOtp" id="eOtp" defaultValue="" />
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
            <input
              className="btn cta w-100"
              type="submit"
              defaultValue="Access FREE Mocks"
              onclick="sendOtp(1)"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
  <section className="detalts classroom-highlight bg-grey">
    <div className="container">
      <h2>Why Should You Take the CLAT Test Series?</h2>
      <div className="row">
        <div className="col-lg-3">
          <div className="highlight">
            <img src="/assets/img/mock-analysis-and-report-card.png" />
            <h4>Report Card with In-depth Analysis</h4>
            <p>
              A detailed breakdown of section-by-section and topic-by-topic
              errors to clarify concepts and redirect your preparation toward
              improvement.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="highlight">
            <img src="/assets/img/legal-updates-and-quizzes.png" />
            <h4>Simulated Test-taking Experience</h4>
            <p>
              LST's mock test interface is a replica of the actual test which
              helps students get comfortable with the test pattern well before
              the actual test.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="highlight">
            <img src="/assets/img/vocabulary-and-gk-updates.png" />
            <h4>Live Mock Attempts by our Mentors</h4>
            <p>
              Learn the ideal way to take a mock test with our experts. Tap into
              the right mindset, technique, and strategy to fetch marks in every
              mock.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="highlight">
            <img src="/assets/img/live-telegram.png" />
            <h4>Telegram Group &amp; Video Solutions</h4>
            <p>
              Revisit the video solutions until you master the topic. Get all
              your queries by your peers or mentor in the live telegram group.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="detalts classroom-highlight">
    <div className="container">
      <h2>Make The Most of the CLAT Test Series</h2>
      <p>
        All aspirants understand sooner or later that understanding all the
        concepts is one thing and taking a mock is another. Mastering the art of
        taking a mock effectively and efficiently will make a difference in your
        temperament and scores on D-day.
      </p>
      <p>
        <strong>Here's how you can master this art.</strong>
      </p>
      <div className="row">
        <div className="col-lg-4">
          <div className="highlight">
            <span className="count-box">1</span>
            <h4>Take your first mock on Day 1</h4>
            <p>Yes. Trust us with this.</p>
            <p>
              Take your first mock as soon as you enroll so that you have a
              clear idea of where you stand on Day 1 and can immediately form a
              corrective plan and then eventually get onto the path of
              improvement.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="highlight">
            <span className="count-box">2</span>
            <h4>Attempt mocks as per schedule</h4>
            <p>Stick to the schedule.</p>
            <p>
              All the Countdown CLAT Mocks will be open for 2 days (Saturdays
              and Sundays) so do it in time to avoid any spoilers from your
              peers. However, Prime Mocks can be attempted at your convenience.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="highlight">
            <span className="count-box">3</span>
            <h4>Analysis is the key to success</h4>
            <p>Learn from your mistakes.</p>
            <p>
              This is the single most important point that will make all the
              difference in the long run. After taking every mock, ensure that
              you spend at least 3 hours analyzing that mock so you never repeat
              that mistake.
            </p>
          </div>
        </div>
      </div>
      <div className="d-md-block margin-top-30 text-center">
        <p>
          To know about the best offers on the CLAT Test Series, speak to our
          counselor.
        </p>
        <a href="#frms" className="btn cta smothscroll">
          Schedule a Call{" "}
        </a>
      </div>
    </div>
  </section>
  <section className="detalts classroom-highlight bg-grey">
    <div className="container">
      <h2>Analysis tools available with CLAT Test Series</h2>
      <div className="row">
        <div className="col-lg-4">
          <div className="highlight">
            <span className="count-box">1</span>
            <h4>Overall Performance Analysis</h4>
            <p>
              Get a comparative section-wise analysis and overall analysis for
              each mock that you take, so you have a targeted approach for every
              section.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="highlight">
            <span className="count-box">2</span>
            <h4>All India Rankings</h4>
            <p>
              The Percentile Predictor tells you where you stand compared to
              45000+ students who write or have written our mocks over the years
              and cracked CLAT/AILET.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="highlight">
            <span className="count-box">3</span>
            <h4>Drill-down Analysis</h4>
            <p>
              Experience a detailed breakdown analysis of each mock. Know the
              topics that you are performing well in by analyzing the correct
              and incorrect attempts in each topic.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="program-highlight">
    <div className="container">
      <h2 className="text-center">Choose the Right Test Series</h2>
      <p className="text-center">
        Whether you are looking for a specialized CLAT/AILET test series or want
        a diversified all-encompassing test series for all the law entrance
        exams, we have got you covered!
      </p>
      <ul className="nav nav-tabs justify-content-center pt-3" role="tablist">
        {/* <li class="nav-item" role="presentation">
<a class="nav-link active" id="fill-tab-0" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="fill-tabpanel-0" aria-selected="true"> Target Year 2024 </a>
</li> */}
      </ul>
      <div className="" id="products">
        {" "}
      </div>
    </div>
  </section>
  <section className="why-choose">
    <div className="container">
      {/* <h5 class="brand-orange">Why Us?</h5> */}
      <h2>Testimonials</h2>
      <div className="testmonials-pull">
        <div className="choose-why slider">
          <div className="single-testimonial-style3">
            <div className="open-div">
              <p>
                I am a student of NLU Banglore and I have secured a rank of 12
                in CLAT 2024. Career Launcher has been a guiding light in this
                journey and has helped me crack the exam. CL-LST's mock test,
                test series, and mentorship helped me crack the exam on the
                first attempt.
              </p>
            </div>
            <div className="inner-content">
              <div className="client-info">
                <div className="image">
                  {" "}
                  <img src="/assets/img/top-achievers/dev-shanker.webp" />{" "}
                </div>
                <div className="title">
                  CLAT- AIR <span>12</span>
                </div>
                <h3>Dev Shanker</h3>
              </div>
              <div />
            </div>
          </div>
          <div className="single-testimonial-style3">
            <div className="open-div">
              <p>
                I will be heading to NLU Delhi. I was enrolled in CL-LST for a
                two-year program. This institute helped me immensely,
                specifically by talking about how great the teachers are. The
                mocks are very nice and very helpful. Specifically, the mock
                analysis that the aspiration account provides is very detailed
                and useful.
              </p>
            </div>
            <div className="inner-content">
              <div className="client-info">
                <div className="image">
                  {" "}
                  <img src="/assets/img/top-achievers/aanya-singh.webp" />{" "}
                </div>
                <div className="title">
                  AILET- AIR <span>36</span>
                </div>
                <h3>Aanya Singh</h3>
              </div>
              <div />
            </div>
          </div>
          <div className="single-testimonial-style3">
            <div className="open-div">
              <p>
                I got AIR 171 and am admitted to NUJS Kolkata. CL-LST Rajouri
                Garden has helped me a lot throughout this journey. The mocks
                and the faculty were extremely helpful in the preparation. Achal
                Sir, Abhishek Sir, and Prashant Sir changed my way of thinking
                and made it easy for me throughout the process.
              </p>
            </div>
            <div className="inner-content">
              <div className="client-info">
                <div className="image">
                  {" "}
                  <img src="/assets/img/top-achievers/ishika-tanwar.webp" />{" "}
                </div>
                <div className="title">
                  CLAT- AIR <span>171</span>
                </div>
                <h3>Ishika Tanwar</h3>
              </div>
              <div />
            </div>
          </div>
          <div className="single-testimonial-style3">
            <div className="open-div">
              <p>
                I got AIR 520. I studied at the CP branch of CL-LST and it was a
                very good journey for me. Though it was a roller coaster. But
                the faculty was very good at supporting me. Also, the mocks were
                really good, specifically the countdown mocks of CL-LST.
              </p>
            </div>
            <div className="inner-content">
              <div className="client-info">
                <div className="image">
                  {" "}
                  <img src="/assets/img/top-achievers/shubhi-agarwal.webp" />{" "}
                </div>
                <div className="title">
                  CLAT- AIR <span>520</span>
                </div>
                <h3>Shubhi Agarwal</h3>
              </div>
              <div />
            </div>
          </div>
          <div className="single-testimonial-style3">
            <div className="open-div">
              <p>
                I was allotted NLU Lucknow. I have prepared it from the CL-LST
                Bullet batch. The faculty and mocks were very good. I will
                suggest you all take the mocks very seriously and not skip them.
              </p>
            </div>
            <div className="inner-content">
              <div className="client-info">
                <div className="image">
                  {" "}
                  <img src="/assets/img/top-achievers/yash-kaushik.webp" />{" "}
                </div>
                <div className="title">
                  CLAT- AIR <span>1954</span>
                </div>
                <h3>Yash Kaushik</h3>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="toppers-talk">
    <div className="container">
      <h2>Toppers Talk</h2>
      {/* <p class="withd"></p> */}
      <div className="testmonials-pull">
        <div className="regular-mentorss slider">
          <div className="toppers">
            <div className="video-frame">
              <div className="youtube-player" data-id="of9pJ2q54zE" />
            </div>
            <h3>Dev Shanker</h3>
            <h5>NLU Converted - Bangalore</h5>
          </div>
          <div className="toppers">
            <div className="video-frame">
              <div className="youtube-player" data-id="byhw8gp_lTg" />
            </div>
            <h3>Aanya Singh </h3>
            <h5>NLU Converted - Delhi</h5>
          </div>
          <div className="toppers">
            <div className="video-frame">
              <div className="youtube-player" data-id="AS6R1-LPbds" />
            </div>
            <h3>Sahil Yadav</h3>
            <h5>NLU Converted - Bhopal</h5>
          </div>
          <div className="toppers">
            <div className="video-frame">
              <div className="youtube-player" data-id="DK2NUsX3A90" />
            </div>
            <h3>Dia Singh</h3>
            <h5>NLU Converted - Prayagra</h5>
          </div>
          <div className="toppers">
            <div className="video-frame">
              <div className="youtube-player" data-id="N9v17V7rKto" />
            </div>
            <h3>Anmol Singh</h3>
            <h5>NLU Converted - Tripura</h5>
          </div>
          <div className="toppers">
            <div className="video-frame">
              <div className="youtube-player" data-id="6rI3w1vZBx0" />
            </div>
            <h3>Yash Kaushik</h3>
            <h5>NLU Converted - Lucknow</h5>
          </div>
          <div className="toppers">
            <div className="video-frame">
              <div className="youtube-player" data-id="uE_I4vrOmQo" />
            </div>
            <h3>Kashish Malhotra</h3>
            <h5>NLUs Converted - Raipur, Punjab</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
<Faqs f="Test" />
    
    
    </>
  )
}
