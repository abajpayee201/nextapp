import React from 'react'
import Faqs from './Faqs'

export default function () {
  return (
    <>
    <section className="banner lstfreezone classroom-coaching">
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
          <span property="name">Freezone</span>
          <meta property="position" content={2} />
        </li>
      </ol>
    </nav>
    <div className="row">
      <div className="col-lg-7 col-12">
        <h1>CLAT Mock Test</h1>
        <ul>
          <li>Free-full length mocks</li>
          <li>Sectional tests from CL-LST’s national-level test series</li>
          <li>Tests ranging from beginner to advanced levels</li>
        </ul>
        <div className="gap-2 d-md-block margin-bottom-20">
          <a href="#mba" className="btn cta smothscroll bg-white">
            Start Writing Sectional Tests{" "}
          </a>
          <a href="#fulltest" className="btn cta smothscroll bg-white">
            Start Writing Full-length Mocks
          </a>
        </div>
      </div>
      <div className="col-lg-5" id="frms">
        <h2>Test yourself with mock tests for FREE.</h2>
        <p>
          For an exam as competitive as CLAT or AILET, it is best to know where
          you stand in the competition of over 45,000 legal aspirants. And
          nothing prepares you for a challenge better than taking it head on!
        </p>
        <form
          name="clForm"
          id="clForm"
          className="d-flex flex-wrap margin-top-10"
          method="post"
          onsubmit="return false;"
        >
          <input type="hidden" name="utm_source" defaultValue="Website" />
          <input
            type="hidden"
            name="utm_campaign"
            defaultValue="LST - FreeZone"
          />
          <input
            type="hidden"
            name="utm_term"
            defaultValue="https://www.lawentrance.com/freezone/"
          />
          <input type="hidden" name="utm_medium" defaultValue="SEO" />
          <input
            type="hidden"
            name="cl_target_list"
            defaultValue="LST - FreeZone"
          />
          <input
            type="hidden"
            name="cl_prod_category"
            id="cl_prod_category"
            defaultValue="LST"
          />
          <input type="hidden" name="cl_prod_group" defaultValue="OC" />
          <input type="hidden" name="cl_exam_category" defaultValue="Law" />
          <input
            type="hidden"
            name="cl_campaign"
            defaultValue="LST - FreeZone"
          />
          <input type="hidden" id="url" name="url" />
          <input
            type="hidden"
            name="listId"
            defaultValue="853c4925-b25c-11ea-a14c-02db544adc82"
          />
          <input type="hidden" name="trigger" defaultValue="LST - FreeZone" />
          <input type="hidden" name="centerFlag" defaultValue="no" />
          <input type="hidden" name="leadsquared" defaultValue="yes" />
          <input type="hidden" name="eventId" defaultValue={123456789} />
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
              required=""
            />
          </div>
          {/*<button type="submit" class="btn cta w-100" value="Get FREE Counselling" onclick="sendOtp(1)">Get FREE Counselling </button> */}
          <input
            className="btn cta w-100"
            type="submit"
            defaultValue="Take Mock Test"
            onclick="sendOtp(1)"
          />
        </form>
      </div>
    </div>
  </div>
</section>






<section className="classroom-achiever detalts bg-grey">
  <div className="container">
    <h3 className="text-center">
      AIR 1 &amp; 2 in CLAT/AILET 2024 was a CL-LST student.
    </h3>
    <div className="row">
      <div className="col-lg-2 col-6 offset-lg-4">
        <div className="single-testimonial-style3">
          <div className="inner-content">
            <div className="client-info">
              <div className="image">
                {" "}
                <img src="/assets/img/top-achievers/Pradhyot-Shah.jpg" />{" "}
              </div>
              <div className="title">
                CLAT - AIR <span>2</span>
              </div>
              <h3>Pradhyot Shah</h3>
              <h6>
                CL ID <span className="brand-orange">30661072</span>
              </h6>
            </div>
            <div />
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-6">
        <div className="single-testimonial-style3">
          <div className="inner-content">
            <div className="client-info">
              <div className="image">
                {" "}
                <img src="/assets/img/top-achievers/Diya-Agrawal.jpg" />{" "}
              </div>
              <div className="title">
                AILET - AIR <span>1</span>
              </div>
              <h3>Diya Agrawal</h3>
              <h6>
                CL ID <span className="brand-orange">30262917</span>
              </h6>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>








<section className="program-highlight tabwrapper detalts" id="mba">
  <div className="container">
    <h3 className="text-center">Choose the Section and Get Started</h3>
    <ul className="nav nav-tabs justify-content-center pt-3" role="tablist">
      <li className="nav-item" role="presentation">
        <a
          className="nav-link active"
          id="fill-tab-0"
          data-bs-toggle="tab"
          href="#course-1"
          role="tab"
          aria-controls="fill-tabpanel-0"
          aria-selected="true"
        >
          {" "}
          Basic{" "}
        </a>
      </li>
      <li className="nav-item" role="presentation">
        <a
          className="nav-link"
          id="fill-tab-1"
          data-bs-toggle="tab"
          href="#course-2"
          role="tab"
          aria-controls="fill-tabpanel-1"
          aria-selected="false"
          tabIndex={-1}
        >
          {" "}
          Advanced{" "}
        </a>
      </li>
      <li className="nav-item" role="presentation">
        <a
          className="nav-link"
          id="fill-tab-2"
          data-bs-toggle="tab"
          href="#course-3"
          role="tab"
          aria-controls="fill-tabpanel-2"
          aria-selected="false"
          tabIndex={-1}
        >
          {" "}
          Expert{" "}
        </a>
      </li>
    </ul>
    <div className="tab-content pt-2" id="tab-content">
      <div
        className="tab-pane active"
        id="course-1"
        role="tabpanel"
        aria-labelledby="fill-tab-0"
      >
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="tabinner">
              <h5>English Language</h5>
              <ul className="mocktest">
                <li>
                  <a href="/freezone/take-test/index.jsp?qset_id=g5yegT4NQaw%3D">
                    Take Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="tabinner">
              <h5>Logical Reasoning </h5>
              <ul className="mocktest">
                <li>
                  <a href="/freezone/take-test/index.jsp?qset_id=6rEGGCXn3 E%3D">
                    Take Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="tabinner">
              <h5>Legal Aptitude </h5>
              <ul className="mocktest">
                <li>
                  <a href="/freezone/take-test/index.jsp?qset_id=FgIo2aRBqN0%3D">
                    Take Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="tabinner">
              <h5>Quantitative Aptitude </h5>
              <ul className="mocktest">
                <li>
                  <a href="/freezone/take-test/index.jsp?qset_id=dX6aCUEWjoU%3D">
                    Take Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="tabinner">
              <h5>General Knowledge </h5>
              <ul className="mocktest">
                <li>
                  <a href="/freezone/take-test/index.jsp?qset_id=WtZauQMdNrk%3D">
                    Take Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tab-pane"
        id="course-2"
        role="tabpanel"
        aria-labelledby="fill-tab-1"
      >
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="tabinner">
              <h5>English Language</h5>
              <ul className="mocktest">
                <li>
                  <a href="/freezone/take-test/index.jsp?qset_id=3yiDSHTqtoc%3D">
                    Take Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="tabinner">
              <h5>Logical Reasoning </h5>
              <ul className="mocktest">
                <li>
                  <a href="/freezone/take-test/index.jsp?qset_id=t7m9CFt88gM%3D">
                    Take Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="tabinner">
              <h5>Legal Aptitude </h5>
              <ul className="mocktest">
                <li>
                  <a href="/freezone/take-test/index.jsp?qset_id=eXyaJkD8p14%3D">
                    Take Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="tabinner">
              <h5>Quantitative Aptitude </h5>
              <ul className="mocktest">
                <li>
                  <a href="/freezone/take-test/index.jsp?qset_id=j0pfAXWGBAM%3D">
                    Take Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="tabinner">
              <h5>General Knowledge </h5>
              <ul className="mocktest">
                <li>
                  <a href="/freezone/take-test/index.jsp?qset_id=hazmbaZ LlI%3D">
                    Take Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tab-pane"
        id="course-3"
        role="tabpanel"
        aria-labelledby="fill-tab-2"
      >
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="tabinner">
              <h5>English Language</h5>
              <ul className="mocktest">
                <li>
                  <a href="/freezone/take-test/index.jsp?qset_id=dbmc3BH78SY%3D">
                    Take Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="tabinner">
              <h5>Logical Reasoning </h5>
              <ul className="mocktest">
                <li>
                  <a href="/freezone/take-test/index.jsp?qset_id=oiHhH 2ZzQE%3D">
                    Take Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="tabinner">
              <h5>Legal Aptitude </h5>
              <ul className="mocktest">
                <li>
                  <a href="/freezone/take-test/index.jsp?qset_id=k 0bxHCuzMc%3D">
                    Take Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="tabinner">
              <h5>Quantitative Aptitude </h5>
              <ul className="mocktest">
                <li>
                  <a href="/freezone/take-test/index.jsp?qset_id=jP6GedZdjew%3D">
                    Take Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="tabinner">
              <h5>General Knowledge </h5>
              <ul className="mocktest">
                <li>
                  <a href="/freezone/take-test/index.jsp?qset_id=diT0nwihu4c%3D">
                    Take Test
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




<section id="fulltest" className="text-center justify-content-center detalts">
  <div className="container">
    <h3>Take full-length CLAT Mock Tests</h3>
    <div className="row align-items-center">
      <div className="col-lg-12 col-sm-12">
        <div className="tabinner">
          <ul className="mocktest">
            <li>
              <a
                data-bs-backdrop="static"
                data-bs-toggle="modal"
                onclick="setQuestId('hHY6xPDRkw0%3D');"
                data-bs-target="#myModalNorm"
              >
                {" "}
                Test - 1
              </a>
            </li>
            <li>
              <a
                data-bs-backdrop="static"
                data-bs-toggle="modal"
                onclick="setQuestId('P0lz5v3T4hM%3D');"
                data-bs-target="#myModalNorm"
              >
                {" "}
                Test - 2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>






<section className="bullet detalts">
  <div className="container">
    <h3>
      Still Confused, why should you choose CL-LST for law entrance mocks over
      others?
    </h3>
    <p>
      Apart from it being FREE. We've tried to sum it up in 5 simple points.
    </p>
    <ul>
      <li>Syllabus-specific CLAT/AILET mock tests</li>
      <li>
        Accurate mock tests to help stimulate the actual test-taking environment
      </li>
      <li>
        Drill-down performance analysis of each mock to boost your performance
      </li>
      <li>All-India benchmarking of scores, and much more</li>
      <li>
        CLAT/AILET 2024 results are no fluke, we have been doing this for 17+
        year
      </li>
    </ul>
    <p>
      Check it out here{" "}
      <a href="https://www.lawentrance.com/success-stories.html">
        CL-LST Success Stories
      </a>
    </p>
    <h3>CLAT 2025 Test Series</h3>
    <p>
      If you want to explore more such tests that can boost your scores, you can
      check out our{" "}
      <a href="https://www.lawentrance.com/test-series/">test series</a>.
    </p>
  </div>
</section>




<Faqs f="freezone"/>




    
    </>
  )
}
