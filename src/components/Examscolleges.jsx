import React from 'react'
import Faqs from './Faqs'

export default function () {
  return (
    <>
    
    <section className="banner clat-css bullet">
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
          <span property="name">Law Entrance Exams</span>
          <meta property="position" content={2} />
        </li>
      </ol>
    </nav>
    <div className="row">
      <div className="col-lg-4">
        <h1>Law Entrance Exams</h1>
      </div>
      <div className="col-lg-8">
        <p>
          In India, law education has grown significantly compared to a decade
          ago. Candidates want to explore disciplines other than Engineering and
          Medicine. Law studies are growing increasingly popular in India,
          whereas other options have limited admission opportunities &amp; high
          competition.
        </p>
        <p>
          To get into the top law schools in the country, candidates have to
          clear law entrance exams like:
        </p>
        <ul className="d-lg-flex">
          <li>MHCET</li>
          <li>LSAT</li>
          <li>SLAT</li>
          <li>NLAT and more</li>
        </ul>
        <p>
          This article lists the common UG law entrance 2025 examinations in
          India that any aspirant can take if they want to attend a prestigious
          institution &amp; pursue a career in the area of law.
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
            defaultValue="Law_Entrance_Exam"
          />
          <input
            type="hidden"
            name="utm_term"
            defaultValue="https://www.lawentrance.com/exams-colleges/"
          />
          <input type="hidden" name="utm_medium" defaultValue="SEO" />
          <input
            type="hidden"
            name="cl_target_list"
            defaultValue="Law_Entrance_Exam"
          />
          <input
            type="hidden"
            name="cl_prod_category"
            id="cl_prod_category"
            defaultValue="LST"
          />
          {/*<input type="hidden" name="cl_prod_group" value='LOC'> */}
          <input type="hidden" name="cl_exam_category" defaultValue="LST" />
          <input
            type="hidden"
            name="cl_campaign"
            defaultValue="Law_Entrance_Exam"
          />
          <input type="hidden" id="url" name="url" />
          <input
            type="hidden"
            name="listId"
            defaultValue="cd169648-3809-11ed-909d-02c415c9a8cc"
          />
          <input
            type="hidden"
            name="trigger"
            defaultValue="Law_Entrance_Exam"
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
              className="form-control"
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="Enter Mobile No."
              pattern="[6-9][0-9]{9}"
              title="Mobile number should start with 6, 7, 8, or 9 and contain at least 10 digits."
              required=""
            />
            {/*<button type="submit" class="btn cta w-100" value="Get FREE Counselling" onclick="sendOtp(1)">Get FREE Counselling </button> */}
            <input
              className="btn cta"
              type="submit"
              defaultValue="Get FREE Counselling"
              onclick="sendOtp(1)"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</section>




<section className="midd-portion detalts bg-grey clta">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 bullet">
        <h3>Law Entrance Exams: Programs and Duration</h3>
        <p>
          Given below are the popular law entrance exams for UG and PG
          admission.
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Law Entrance exams</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Accepting University</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Duration of the courses</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>CLAT </strong>
                  </p>
                  <p>(Common Law Admission Test)</p>
                </td>
                <td>
                  <p>24 NLUs except for NLU Delhi</p>
                </td>
                <td>
                  <p>5 years</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>AILET </strong>
                  </p>
                  <p>(All India Law Entrance Test)</p>
                </td>
                <td>
                  <p>NLU Delhi</p>
                </td>
                <td>
                  <p>5 years</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>SLAT </strong>
                  </p>
                  <p>(Symbiosis Law Aptitude Test.)</p>
                </td>
                <td>
                  <p>Symbiosis Law Schools (SLS)</p>
                </td>
                <td>
                  <p>3 years/5 years</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>MHCET-law</strong>
                  </p>
                  <p>(Maharashtra Common Entrance Test - Law)</p>
                </td>
                <td>
                  <p>
                    Many government law colleges in the state of Maharashtra and
                    some private colleges.
                  </p>
                </td>
                <td>
                  <p>3 years/5 years</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>NMIMS-LAT</strong>
                  </p>
                  <p>(Narsee Monjee Institute - Law Aptitude Test.)</p>
                </td>
                <td>
                  <p>NMIMS colleges</p>
                </td>
                <td>
                  <p>3 years/5 years</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>LSAT-India</strong>
                  </p>
                  <p>(Law School Admission Test - India)</p>
                </td>
                <td>
                  <p>
                    LSAT-affiliated colleges. Click{" "}
                    <a href="https://www.lsatindia.in/colleges/">this link</a>{" "}
                    to see the list.
                  </p>
                </td>
                <td>
                  <p>3 years/5 years</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>Law Entrance Exams: Dates</h3>
        <p>
          The table below lists the registration as well as the exam dates for
          the exams listed above for the academic year 2024.
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Entrance Exam</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Application Start Date</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Application Last Date</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Exam Date (Tentative)</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Website</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Common Law Admission Test (CLAT)</p>
                </td>
                <td>
                  <p>July 2024</p>
                </td>
                <td>
                  <p>Mid-November 2024</p>
                </td>
                <td>
                  <p>First week of December 2024</p>
                </td>
                <td>
                  <p>
                    <a href="http://www.consortiumofnlus.ac.in/">
                      <strong>www.consortiumofnlus.ac.in</strong>
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>All India Law Entrance Test (AILET)</p>
                </td>
                <td>
                  <p>August 2024</p>
                </td>
                <td>
                  <p>Mid-November 2024</p>
                </td>
                <td>
                  <p>Second week of December 2024</p>
                </td>
                <td>
                  <p>
                    <a href="http://www.nludelhi.ac.in/">
                      <strong>www.nludelhi.ac.in</strong>
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Symbiosis Law Admissions Test (SLAT)</p>
                </td>
                <td>
                  <p>Mid-December 2023</p>
                </td>
                <td>
                  <p>Mid-April 2024</p>
                </td>
                <td>
                  <p>Second week of May 2024</p>
                </td>
                <td>
                  <p>
                    <a href="http://www.set-test.org/">
                      <strong>www.set-test.org</strong>
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Maharashtra Common Entrance Test (MH CET)</p>
                </td>
                <td>
                  <p>Mid-Feb 2024</p>
                </td>
                <td>
                  <p>April-end 2024</p>
                </td>
                <td>
                  <p>May 2024</p>
                </td>
                <td>
                  <p>
                    <a href="http://www.mahacet.org/">
                      <strong>www.mahacet.org</strong>
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>NLAT</p>
                </td>
                <td>
                  <p>1 December 2023</p>
                </td>
                <td>
                  <p>20 May 2024</p>
                </td>
                <td>
                  <p>Jan-May 2024</p>
                </td>
                <td>
                  <p>
                    <a href="https://www.nmimslat.in/">
                      <strong>https://www.nmimslat.in/</strong>
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>LSAT-India</p>
                </td>
                <td>
                  <p>14 August 2023</p>
                </td>
                <td>
                  <p>10 Jan 2024 (January Session)</p>
                  <p>02 May 2024</p>
                  <p>(May session)</p>
                </td>
                <td>
                  <p>20 Jan 2024 - 21 Jan 2024</p>
                  <p>
                    <strong>And</strong>
                  </p>
                  <p>16 May 2024 - 19 May 2024</p>
                </td>
                <td>
                  <p>
                    <a href="https://www.lsatindia.in/">
                      <strong>https://www.lsatindia.in/</strong>
                    </a>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>Law Entrance Exams: Overview of Exams</h3>
        <p>
          Details about top law entrance 2025 examinations, including
          eligibility, exam structure, and marking scheme, are given below.
        </p>
        <h5 className="brand-purple">SLAT</h5>
        <p>
          SLAT stands for Symbiosis Law Admission Test. It is a single
          admissions test for Symbiosis Law Schools (SLS) in Pune, Noida,
          Hyderabad, and Nagpur. BA LLB (Hons), BBA LLB (Hons), BA LLB, and BBA
          LLB are the available courses for admission.
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Eligibility</strong>
                  </p>
                </td>
                <td>
                  <p>
                    10+2 or an equivalent examination passed
                    <br /> Qualifying Cutoff: General/OBC- 45%, SC/ST- 40%
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Exam Duration</strong>
                  </p>
                </td>
                <td>
                  <p>1 Hour</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>No. of Questions</strong>
                  </p>
                </td>
                <td>
                  <p>60</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Exam Sections</strong>
                  </p>
                </td>
                <td>
                  <ul>
                    <li>General Knowledge</li>
                    <li>Analytical Reasoning</li>
                    <li>Reading Comprehension</li>
                    <li>Legal Reasoning</li>
                    <li>Logical Reasoning</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Marking Scheme</strong>
                  </p>
                </td>
                <td>
                  <p>+1 for each right answer and no negative marking.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Participating Institutes</p>
                </td>
                <td>
                  <p>
                    Symbiosis Law Schools (SLS) in Pune, Noida, Hyderabad, and
                    Nagpur.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Program duration</p>
                </td>
                <td>
                  <p>Three and five years</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Click the button below to read all about SLAT.</p>
        <a href="/slat/" className="btn cta">
          SLAT 2024
        </a>
        <hr />
        <h5 className="brand-purple">MHCET-law</h5>
        <p>
          The Maharashtra Common Entrance Test for Law (MH CET Law) is a
          state-level test administered by the State CET Cell, Maharashtra for
          admissions to legal degrees provided at participating law institutions
          in Maharashtra. The MHCET legal test is two hours long and is
          conducted online in a computer-based mode.
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Eligibility</strong>
                  </p>
                </td>
                <td>
                  <p>
                    10+2 or an equivalent examination passed
                    <br /> Qualifying Cutoff: General - 45%, SC/ST- 40%, VJNT,
                    SBC and OBC - 42%.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Exam Duration</strong>
                  </p>
                </td>
                <td>
                  <p>2 Hours</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>No. of Questions</strong>
                  </p>
                </td>
                <td>
                  <p>150</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Exam Sections</strong>
                  </p>
                </td>
                <td>
                  <ul>
                    <li>Legal Aptitude and Legal Reasoning</li>
                    <li>Logical and Analytical Reasoning</li>
                    <li>General Knowledge and Current Affairs</li>
                    <li>English Language</li>
                    <li>Mathematical Aptitude</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Marking Scheme</strong>
                  </p>
                </td>
                <td>
                  <p>+1 for every correct answer and no negative marking.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Participating Institutes</p>
                </td>
                <td>
                  <p>
                    Many government law colleges in the state of Maharashtra and
                    some private colleges.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Program duration</p>
                </td>
                <td>
                  <p>Three and five years</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Click the button below to read all about MHCET-Law.</p>
        <a href="/mhcet/" className="btn cta">
          MHCET-Law 2024
        </a>
        <hr />
        <h5 className="brand-purple">NMIMS-LAT or NLAT</h5>
        <p>
          The Narsee Monjee Institute of Management Studies Lawl Aptitude Test
          (NMIMS LAT) is a law entrance exam for admission to NMIMS Law colleges
          administered by SVKM's NMIMS Deemed-to-be-University.
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Eligibility</strong>
                  </p>
                </td>
                <td>
                  <p>
                    10+2 or an equivalent examination pass with a minimum of
                    50%.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Exam Duration</strong>
                  </p>
                </td>
                <td>
                  <p>2 Hours</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>No. of Questions</strong>
                  </p>
                </td>
                <td>
                  <p>150</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Exam Sections</strong>
                  </p>
                </td>
                <td>
                  <ul>
                    <li>Verbal Reasoning</li>
                    <li>Current Affairs</li>
                    <li>Legal Reasoning</li>
                    <li>Logical Reasoning</li>
                    <li>Quantitative Reasoning.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Marking Scheme</strong>
                  </p>
                </td>
                <td>
                  <p>+1 for every correct answer and no negative marking.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Participating Institutes</p>
                </td>
                <td>
                  <p>NMIMS Law colleges</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Program duration</p>
                </td>
                <td>
                  <p>Five years</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Click the button below to read all about NMIMS-LAT.</p>
        <a href="/nlat/" className="btn cta">
          NMIMS-LAT 2024
        </a>
        <hr />
        <h5 className="brand-purple">LSAT-India</h5>
        <p>
          The LSAT India examination is a standardized test designed to examine
          law students' skills in advanced reading, critical thinking, and
          informal and deductive reasoning.
        </p>
        <p>
          The Law School Admission Council, often known as LSAC Global,
          administers the test for admission to undergraduate and postgraduate
          legal courses at affiliated law institutions. LSAC is a non-profit
          organization that assists law students in gaining admission to private
          top-tier law schools based on LSAT exam scores.
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Eligibility</strong>
                  </p>
                </td>
                <td>
                  <p>10+2 or an equivalent examination pass.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Exam Duration</strong>
                  </p>
                </td>
                <td>
                  <p>2 Hours and 20 Minutes</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>No. of Questions</strong>
                  </p>
                </td>
                <td>
                  <p>92</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Exam Sections</strong>
                  </p>
                </td>
                <td>
                  <ul>
                    <li>Analytical Reasoning</li>
                    <li>Reading Comprehension</li>
                    <li>Logical Reasoning</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Marking Scheme</strong>
                  </p>
                </td>
                <td>
                  <p>
                    +1-3 marks for every correct answer and no negative marking.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Participating Institutes</p>
                </td>
                <td>
                  <p>
                    LSAT-affiliated colleges. Refer to{" "}
                    <a href="https://www.lsatindia.in/colleges/">
                      <strong>this link</strong>
                    </a>{" "}
                    for the list.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Program duration</p>
                </td>
                <td>
                  <p>Three and five years</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Click the button below to read all about LSAT-India.</p>
        <a href="/lsat-india/" className="btn cta">
          LSAT-India 2024
        </a>
      </div>
    </div>
  </div>
</section>



<Faqs f="exam" />
    
    </>
  )
}
