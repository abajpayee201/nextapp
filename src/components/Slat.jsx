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
          <span property="name">SLAT</span>
          <meta property="position" content={2} />
        </li>
      </ol>
    </nav>
    <div className="row">
      <div className="col-lg-3">
        <h1>SLAT 2024</h1>
      </div>
      <div className="col-lg-9">
        {/* <p class="update"><span class="brand-orange">Updated on 17th April 2024 | 4:12 PM | #CLATExam2025</span></p> */}
        <p>
          SLAT also known as Symbiosis Law Admission Test is the entrance test
          conducted by Symbiosis International (Deemed University) to admit
          students in 4 Symbiosis Law Schools, namely:
        </p>
        <ul>
          <li>
            <strong>SLS - Pune</strong>
          </li>
          <li>
            <strong>SLS - Noida</strong>
          </li>
          <li>
            <strong>SLS - Nagpur</strong>
          </li>
          <li>
            <strong>SLS - Hyderabad</strong>
          </li>
        </ul>
        <p>
          All Symbiosis law schools (SLS) are among the top institutions that
          provide law education. The SIU will conduct SLAT 2024 on{" "}
          <strong>
            May 05, 2024 (Sunday) and May 11, 2024 (Saturday), between 9:00 AM -
            10:00 AM
          </strong>
        </p>
        <form
          name="clForm"
          id="clForm"
          className="d-flex flex-wrap margin-top-20"
          method="post"
          onsubmit="return false;"
        >
          <input type="hidden" name="utm_source" defaultValue="Website" />
          <input type="hidden" name="utm_medium" defaultValue="SEO" />
          <input
            type="hidden"
            name="utm_campaign"
            defaultValue="SLAT - Exam Page"
          />
          <input
            type="hidden"
            name="utm_term"
            defaultValue="https://www.lawentrance.com/slat/"
          />
          <input
            type="hidden"
            name="cl_target_list"
            defaultValue="SLAT - Exam Page"
          />
          <input type="hidden" name="cl_prod_category" defaultValue="LST" />
          {/* <input type="hidden" name="cl_prod_group" value='NA'> */}
          <input type="hidden" name="cl_exam_category" defaultValue="SLAT" />
          <input
            type="hidden"
            name="cl_campaign"
            defaultValue="SLAT - Exam Page"
          />
          <input type="hidden" id="url" name="url" />
          <input type="hidden" name="cityName" id="cityName" />
          <input
            type="hidden"
            name="listId"
            defaultValue="3c36ce37-8862-11ea-a14c-02db544adc82"
          />
          <input type="hidden" name="emailer" defaultValue="SLAT - Exam Page" />
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
        <h3>What is SLAT?</h3>
        <p>
          SLAT or Symbiosis Law Aptitude Test is a law entrance test conducted
          by Symbiosis International University (SIU). Candidates who
          successfully pass the SLAT exam get admission to the four
          aforementioned law schools in Pune, Noida, Nagpur, and Hyderabad.
        </p>
        <p>A basic overview of SLAT is given below.</p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Name of exam </strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>SLAT (Symbiosis Law School Admission Test)</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Exam type</p>
                </td>
                <td>
                  <p>Entrance exam for UG law courses</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Exam Level</p>
                </td>
                <td>
                  <p>University Level</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Programs offered</p>
                </td>
                <td>
                  <p>BBA LLB and BA LLB</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Available seats</p>
                </td>
                <td>
                  <p>1080</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Mode of exam</p>
                </td>
                <td>
                  <p>Online</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>
          LSAT - India<sup>™</sup> : Eligibility Criteria
        </h3>
        <p>
          Candidates should fulfill the eligibility criteria for undergraduate
          and postgraduate law courses offered at the accepting law colleges as
          under:
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <strong>Course</strong>
                </td>
                <td>
                  <p align="center">
                    <strong>Eligibility Criteria</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Five-year integrated LLB course</p>
                </td>
                <td>
                  <p>Candidates passed in class 12th&nbsp;or equivalent</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Three-year LLB course</p>
                </td>
                <td>
                  <p>
                    Candidates holding a bachelor degree in any stream from a
                    recognized university/ college
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Master of Laws</p>
                </td>
                <td>
                  <p>
                    Candidates holding a degree in law i.e. LLB degree from a
                    recognized university/ college
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>SLAT 2024: Exam Dates</h3>
        <p>The dates for the SLAT exam are as follows.</p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Event</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Dates</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Registration &amp; Payment close on</p>
                </td>
                <td>
                  <p>April 12, 2024</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Release of the admit card</p>
                </td>
                <td>
                  <p>Test 1: April 25, 2024</p>
                  <p>Test 2: April 30, 2024</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>SLAT 2024 exam date</p>
                </td>
                <td>
                  <p>
                    Test 1:<strong> May 05, 2024 (Sunday)</strong>
                  </p>
                  <p>
                    Test 2: <strong>May 11, 2024 (Saturday)</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Exam Timing</p>
                </td>
                <td>
                  <p>9:00 AM - 10:00 AM</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Result declaration</p>
                </td>
                <td>
                  <p>May 22, 2024 (Wednesday)</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>SLAT 2024: Exam Pattern</h3>
        <p>The exam pattern of SLAT is as follows:</p>
        <ul>
          <li>The exam will be given online, in a computer-based mode</li>
          <li>
            There will be 60 multiple-choice questions, each worth one mark
          </li>
          <li>In SLAT 2024, there is no negative marking</li>
          <li>The exam will be solely in English</li>
          <li>Candidates will be given 60 minutes to finish the test</li>
          <li>Late applicants will not be granted extra time</li>
        </ul>
        <hr />
        <h3>SLAT 2024: Seat Intake at each SLS</h3>
        <p>
          The table below shows the total seats offered by all four SLSs and
          course-wise distribution.
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Name</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Total Number of Seats</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Course-Wise Seats</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>SLS Pune</p>
                </td>
                <td>
                  <p>300</p>
                </td>
                <td>
                  <p>BBA LLB - 180</p>
                  <p>BA LLB - 120</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>SLS Nagpur</p>
                </td>
                <td>
                  <p>240</p>
                </td>
                <td>
                  <p>BBA LLB - 120</p>
                  <p>BA LLB - 120</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>SLS Hyderabad</p>
                </td>
                <td>
                  <p>240</p>
                </td>
                <td>
                  <p>BBA LLB - 120</p>
                  <p>BA LLB - 120</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>SLS Noida</p>
                </td>
                <td>
                  <p>300</p>
                </td>
                <td>
                  <p>BBA LLB - 180</p>
                  <p>BA LLB - 120</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>SLAT Eligibility Criteria 2024</h3>
        <p>The eligibility criteria for SLAT are as follows.</p>
        <ul>
          <li>
            <strong>Qualifying Exam:</strong> Completion of class (10+2) from
            any recognized state or national test board
          </li>
          <li>
            <strong>Minimum marks: </strong>Minimum of 45% marks or equivalent
            grade for General category (40% or equivalent grade for Scheduled
            Castes/Scheduled Tribes)
          </li>
          <li>
            <strong>Age:</strong> There is no age limit to take the SLAT 2024
            exam
          </li>
        </ul>
        <p>
          Candidates who have taken or are taking their Class 12 test may also
          apply for SLAT 2024. However, students will require their Class 12
          scores at the time of admission to the course.
        </p>
        <hr />
        <h3>SLAT Application Form 2024</h3>
        <p>
          The SLAT 2024 application form is out now, candidates can fill up the
          application form by following the steps below.
        </p>
        <ul>
          <li>
            Visit the official website of SLAT 2024 at{" "}
            <a href="https://www.set-test.org/">
              <strong>set-test.org</strong>
            </a>
          </li>
          <li>Once on the website, press the “Apply Now” button.</li>
          <li>
            Click the "Sign-in" button if you have already registered for the
            exam. Alternatively, click the "Register" button.
          </li>
          <li>
            Once registered you’ll be taken to a new page which will mention all
            the important instructions. Click the “I Agree” button once you’ve
            read the instructions.
          </li>
          <li>
            Fill in all of the essential information, such as your name, date of
            birth, category, cellphone number, e-mail ID, and so on, and then
            submit a scanned photo and signature.
          </li>
          <li>After that complete the payment and submit the form.</li>
        </ul>
        <p>
          The application fee must be paid at the time of enrollment and is
          divided into two parts: registration fee and program fee, which are as
          follows:
        </p>
        <ul>
          <li>
            Registration fee - <strong>INR 2,250</strong>
          </li>
          <li>
            Program registration fee for each constituent college -{" "}
            <strong>INR 1,000</strong>
          </li>
        </ul>
        <hr />
        <h3>SLAT Syllabus 2024</h3>
        <p>
          SIU does not publish or mention the syllabus for SLAT. However, based
          on previous year's papers and a general pattern some important topics
          stand out more than others. SLAT contains five different sections,
          namely:
        </p>
        <ul>
          <li>Logical Reasoning</li>
          <li>Legal Reasoning</li>
          <li>Analytical Reasoning</li>
          <li>Reading Comprehension</li>
          <li>General Knowledge</li>
        </ul>
        <p>
          The important topics for each section are mentioned in the table
          below.
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Sections</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Important Topics</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Logical Reasoning</p>
                </td>
                <td>
                  <ul>
                    <li>Assertion Reason</li>
                    <li>Logical consistency</li>
                    <li>Cause &amp; Effect</li>
                    <li>
                      Statement &amp; Course of Action, Conclusion, Arguments,
                      Interference, and Assumptions
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Legal Reasoning</p>
                </td>
                <td>
                  <ul>
                    <li>Indian Constitution</li>
                    <li>Law of Torts</li>
                    <li>Law of Contract</li>
                    <li>Family Law</li>
                    <li>International Law</li>
                    <li>Law of Crimes</li>
                    <li>Intellectual Property Rights</li>
                    <li>Legal Maxims</li>
                    <li>Legal Terms</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Analytical Reasoning</p>
                </td>
                <td>
                  <ul>
                    <li>Figure counting</li>
                    <li>Algebra</li>
                    <li>Profit &amp; Loss</li>
                    <li>Ratio and proportion</li>
                    <li>Number Series</li>
                    <li>Percentage</li>
                    <li>Time &amp; Work</li>
                    <li>Blood Relations</li>
                    <li>Arithmetic Reasoning</li>
                    <li>Clock</li>
                    <li>Distance &amp; Directions</li>
                    <li>Calendar</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Reading Comprehension</p>
                </td>
                <td>
                  <ul>
                    <li>Grammar</li>
                    <li>Vocabulary</li>
                    <li>Reading Comprehension</li>
                    <li>General English passages</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <p>General Knowledge</p>
                </td>
                <td>
                  <ul>
                    <li>
                      Current Affairs including State, National, International
                      affairs, etc.
                    </li>
                    <li>History</li>
                    <li>Geography</li>
                    <li>Arts &amp; Culture</li>
                    <li>National Park &amp; Wildlife Sanctuary</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>SLAT 2024: Preparation Tips</h3>
        <p>
          Candidates can use the tips listed below to help them perform well in
          the SLAT 2024 exam.
        </p>
        <h5 className="brand-purple">Set up a schedule</h5>
        <p>
          To manage your time between studying and other activities, you must
          first create a timetable for all the sections, including the ones that
          require extra attention. This will help you to improve your score and
          ranking.
        </p>
        <p>
          This program must be followed for at least 6-7 months. Additionally,
          spend at least an hour each day answering as many questions from prior
          years as you can for the SLAT Exam.
        </p>
        <h5 className="brand-purple">Use reliable sources</h5>
        <p>
          Ensure that you make use of reliable sources and identify the ones you
          will utilize to aid in your preparation rather than cause confusion.
        </p>
        <p>
          You can do this by asking your seniors or anyone else who has taken
          the SLAT Exam for books and study materials.
        </p>
        <h5 className="brand-purple">Note and re-evaluate</h5>
        <p>
          A well-written note cuts the work involved in studying by half.
          Therefore, it is advised that you take notes (short notes containing
          major points) and then update them.
        </p>
        <p>
          This can help you remember the knowledge more easily by keeping it
          fresh in your mind and allowing you to quickly go over it whenever
          required.
        </p>
        <h5 className="brand-purple">Read a newspaper</h5>
        <p>
          If you attempt to study everything at once, compiling news of global
          and national interest may prove to be a difficult task.
        </p>
        <p>
          Therefore, it is advised that you read the newspaper every day, follow
          Current Affairs, and take notes on the relevant news so that you may
          review it later.
        </p>
        <h5 className="brand-purple">Practice mock exams</h5>
        <p>
          Attempting mocks regularly allows you to decrease your chances of
          making mistakes during the test, and improve your speed. A detailed
          analysis of your attempt can help evaluate your preparation so you can
          focus on the areas where you scored lower.
        </p>
        <h5 className="brand-purple">Familiarize yourself with the format</h5>
        <p>
          Knowing the questions frequently asked in the SLAT exam pattern is the
          first step toward victory. You can identify the topics that require
          more improvement by reviewing the questions from the previous five
          years, which will aid in this process.
        </p>
        <p>Check out other law entrance exams-</p>
        <hr />
        <h3>SLAT 2024: Preparation Books</h3>
        <p>
          Candidates appearing for SLAT can use these books to prepare for each
          section of the exam.
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Section</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Books</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Legal Reasoning</p>
                </td>
                <td>
                  <p>Legal Awareness &amp; Reasoning by A.P. Bhardwaj</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Logical Reasoning</p>
                </td>
                <td>
                  <p>A Modern Approach to Logical Reasoning by R.S. Aggarwal</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>English Language</p>
                </td>
                <td>
                  <p>Objective General English by R.S. Aggarwal</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Analytical Reasoning</p>
                </td>
                <td>
                  <p>Analytical Reasoning by M.K. Pandey</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>General Knowledge</p>
                </td>
                <td>
                  <p>Newspapers and Law Magazines</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>SLAT 2024: Question and Marks Distribution</h3>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Pattern</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>No. of Questions</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Marks</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Logical Reasoning</p>
                </td>
                <td>
                  <p>12</p>
                </td>
                <td>
                  <p>12</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Legal Reasoning</p>
                </td>
                <td>
                  <p>12</p>
                </td>
                <td>
                  <p>12</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Analytical Reasoning</p>
                </td>
                <td>
                  <p>12</p>
                </td>
                <td>
                  <p>12</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Reading Comprehension</p>
                </td>
                <td>
                  <p>12</p>
                </td>
                <td>
                  <p>12</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>General Knowledge</p>
                </td>
                <td>
                  <p>12</p>
                </td>
                <td>
                  <p>12</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Total</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>60</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>60</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>SLAT 2024: Question and Marks Distribution</h3>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Pattern</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>No. of Questions</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Marks</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Logical Reasoning</p>
                </td>
                <td>
                  <p>12</p>
                </td>
                <td>
                  <p>12</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Legal Reasoning</p>
                </td>
                <td>
                  <p>12</p>
                </td>
                <td>
                  <p>12</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Analytical Reasoning</p>
                </td>
                <td>
                  <p>12</p>
                </td>
                <td>
                  <p>12</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Reading Comprehension</p>
                </td>
                <td>
                  <p>12</p>
                </td>
                <td>
                  <p>12</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>General Knowledge</p>
                </td>
                <td>
                  <p>12</p>
                </td>
                <td>
                  <p>12</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Total</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>60</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>60</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>SLAT Admit Card 2024</h3>
        <p>
          SIU will make the SLAT admission card 2024 available online via the
          login page for candidates. To get access to the exam center,
          candidates must first download the admit card. Candidates are also
          required to carry the admit cards to the designated exam center. The
          SLAT admit card will have the following details.
        </p>
        <ul>
          <li>Name</li>
          <li>Admission Category</li>
          <li>SLAT 2024 Test date and session timing</li>
          <li>Test City and center address</li>
          <li>Entrance Test Seat Number</li>
        </ul>
        <p>
          The SLAT admit card will be available from
          <strong> April 25, 2024 (Thursday) for SET Test 01</strong>
        </p>
        <p>
          <strong>April 30, 2024 (Tuesday) for SET Test 02.</strong> Once
          released you can download it from the official website at -{" "}
          <a href="http://set-test.org">
            <strong>set-test.org</strong>
          </a>
        </p>
        <hr />
        <h3>SLAT 2024: Exam Centers</h3>
        <p>
          SLAT will be conducted in online mode in 76 cities all over India.
          Applicants may select<strong> three preferred test cities </strong>to
          choose from while filling up the form. The list of cities is given
          below.
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Sr No</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>State</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>City</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>Bihar</p>
                </td>
                <td>
                  <p>Patna</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>2 </p>
                </td>
                <td>
                  <p>Jharkhand</p>
                </td>
                <td>
                  <p>Dhanbad</p>
                  <p>Jamshedpur</p>
                  <p>Ranchi</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>3</p>
                </td>
                <td>
                  <p>Odisha</p>
                </td>
                <td>
                  <p>Bhubaneshwar</p>
                  <p>Cuttack</p>{" "}
                </td>
              </tr>
              <tr>
                <td>
                  <p>4</p>
                </td>
                <td>
                  <p>Andaman &amp; Nicobar</p>
                </td>
                <td>
                  <p>Port Blair</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>5 </p>
                </td>
                <td>
                  <p>Assam</p>
                </td>
                <td>
                  <p>Dibrugarh</p>
                  <p>Guwahati</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>6</p>
                </td>
                <td>
                  <p>Meghalaya</p>
                </td>
                <td>
                  <p>Shillong</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>7</p>
                </td>
                <td>
                  <p>Sikkim</p>
                </td>
                <td>
                  <p>Gangtok - Bardang</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>8 </p>
                </td>
                <td>
                  <p>West Bengal</p>
                </td>
                <td>
                  <p>Asansol</p>
                  <p>Hooghly - Kalyani</p>
                  <p>Kolkata</p>
                  <p>Siliguri</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>16 </p>
                </td>
                <td>
                  <p>Delhi NCR</p>
                </td>
                <td>
                  <p>Delhi - Gurugram</p>
                  <p>Faridabad</p>
                  <p>Noida - Greater Noida - Ghaziabad</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>19 </p>
                </td>
                <td>
                  <p>Uttar Pradesh</p>
                </td>
                <td>
                  <p>Meerut</p>
                  <p>Agra</p>
                  <p>Aligarh</p>
                  <p>Bareilly</p>
                  <p>Jhansi</p>
                  <p>Kanpur</p>
                  <p>Lucknow</p>
                  <p>Prayagraj (Allahabad)</p>
                  <p>Varanasi</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>28</p>
                </td>
                <td rowSpan={2}>
                  <p>Uttarakhand</p>
                </td>
                <td>
                  <p>Dehradun</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>29</p>
                </td>
                <td>
                  <p>Roorkee</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>30</p>
                </td>
                <td rowSpan={4}>
                  <p>Rajasthan</p>
                </td>
                <td>
                  <p>Ajmer</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>31</p>
                </td>
                <td>
                  <p>Jaipur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>32</p>
                </td>
                <td>
                  <p>Jodhpur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>33</p>
                </td>
                <td>
                  <p>Kota</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>34</p>
                </td>
                <td>
                  <p>Haryana</p>
                </td>
                <td>
                  <p>Ambala</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>35</p>
                </td>
                <td>
                  <p>Himachal Pradesh</p>
                </td>
                <td>
                  <p>Bilaspur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>36</p>
                </td>
                <td>
                  <p>Jammu and Kashmir</p>
                </td>
                <td>
                  <p>Jammu</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>37</p>
                </td>
                <td rowSpan={4}>
                  <p>Punjab</p>
                </td>
                <td>
                  <p>Chandigarh - Mohali</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>38</p>
                </td>
                <td>
                  <p>Jalandhar</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>39</p>
                </td>
                <td>
                  <p>Amritsar</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>40</p>
                </td>
                <td>
                  <p>Patiala</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>41</p>
                </td>
                <td rowSpan={2}>
                  <p>Andhra Pradesh</p>
                </td>
                <td>
                  <p>Vijayawada</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>42</p>
                </td>
                <td>
                  <p>Visakhapatnam</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>43</p>
                </td>
                <td rowSpan={4}>
                  <p>Karnataka</p>
                </td>
                <td>
                  <p>Belagavi(Belgaum)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>44</p>
                </td>
                <td>
                  <p>Bengaluru</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>45</p>
                </td>
                <td>
                  <p>Mangaluru(Mangalore)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>46</p>
                </td>
                <td>
                  <p>Mysuru(Mysore)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>47</p>
                </td>
                <td>
                  <p>Telangana</p>
                </td>
                <td>
                  <p>Hyderabad</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>48</p>
                </td>
                <td rowSpan={5}>
                  <p>Kerala</p>
                </td>
                <td>
                  <p>Ernakulam - Kochi</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>49</p>
                </td>
                <td>
                  <p>Kottayam</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>50</p>
                </td>
                <td>
                  <p>Kozhikode</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>51</p>
                </td>
                <td>
                  <p>Thiruvananthapuram</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>52</p>
                </td>
                <td>
                  <p>Thrissur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>53</p>
                </td>
                <td rowSpan={3}>
                  <p>Tamil Nadu</p>
                </td>
                <td>
                  <p>Chennai</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>54</p>
                </td>
                <td>
                  <p>Coimbatore</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>55</p>
                </td>
                <td>
                  <p>Madurai</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>56</p>
                </td>
                <td>
                  <p>Goa</p>
                </td>
                <td>
                  <p>Panaji - Madgaon</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>57</p>
                </td>
                <td rowSpan={4}>
                  <p>Gujarat</p>
                </td>
                <td>
                  <p>Ahmedabad - Gandhinagar</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>58</p>
                </td>
                <td>
                  <p>Rajkot</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>59</p>
                </td>
                <td>
                  <p>Surat</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>60</p>
                </td>
                <td>
                  <p>Vadodara</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>61</p>
                </td>
                <td rowSpan={10}>
                  <p>Maharashtra</p>
                </td>
                <td>
                  <p>Ahmednagar</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>62</p>
                </td>
                <td>
                  <p>Amravati</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>63</p>
                </td>
                <td>
                  <p>Aurangabad</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>64</p>
                </td>
                <td>
                  <p>Kolhapur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>65</p>
                </td>
                <td>
                  <p>Mumbai</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>66</p>
                </td>
                <td>
                  <p>Nagpur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>67</p>
                </td>
                <td>
                  <p>Nashik</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>68</p>
                </td>
                <td>
                  <p>Navi Mumbai</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>69</p>
                </td>
                <td>
                  <p>Pune</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>70</p>
                </td>
                <td>
                  <p>Thane District</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>71</p>
                </td>
                <td rowSpan={3}>
                  <p>Chattisgarh</p>
                </td>
                <td>
                  <p>Bhilai Nagar</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>72</p>
                </td>
                <td>
                  <p>Bilaspur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>73</p>
                </td>
                <td>
                  <p>Raipur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>74</p>
                </td>
                <td rowSpan={3}>
                  <p>Madhya Pradesh</p>
                </td>
                <td>
                  <p>Bhopal</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>75</p>
                </td>
                <td>
                  <p>Indore</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>76</p>
                </td>
                <td>
                  <p>Jabalpur</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>SLAT Selection Process 2024</h3>
        <p>
          The SLAT exam selection procedure comprises an entrance exam, a
          writing skill test, and a personal interview. The name and weightage
          of each section are mentioned below.
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Entrance test applicable</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Weightage</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>SLAT scores (converted to a max of 50)</p>
                </td>
                <td>
                  <p>50</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Personal interviews</p>
                </td>
                <td>
                  <p>30</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Writing ability test</p>
                </td>
                <td>
                  <p>20</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Total marks</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>100</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>SLAT Cut-Off Marks 2024</h3>
        <p>
          Following the publication of the results, SIU publishes the cut-off
          marks. The cut-off marks are determined by the institution based on
          considerations such as the difficulty level of the SLAT test, the
          number of applicants, the number of seats, and the previous year's
          cut-off grades. Expected cut-off marks for 2024 are given below.
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Law School Name</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Expected cut-off marks</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>SLS Pune</p>
                </td>
                <td>
                  <p>46 to 48</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>SLS Noida</p>
                </td>
                <td>
                  <p>43 to 45</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>SLS Hyderabad</p>
                </td>
                <td>
                  <p>40 to 42</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>SLS Nagpur</p>
                </td>
                <td>
                  <p>37 to 40</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>SLAT Counseling 2024</h3>
        <p>
          Following the announcement of the SLAT 2024 results, qualifying
          candidates must engage in the counseling procedure. Candidates must go
          through the following steps to participate in SLAT Counseling 2024.
        </p>
        <h5 className="brand-purple">Counseling registration and fee</h5>
        <p>
          Candidates should check the official websites of SLS colleges for the
          counselling schedule and process. They must register online using the
          official website. Candidates who successfully register are assigned
          call letters to appear in the PI-WAT rounds.
        </p>
        <h5 className="brand-purple">Appearing for PI-WAT</h5>
        <p>
          Candidates must participate in PI-WAT rounds, in which a panel of
          judges examines them on general awareness, legal knowledge, and other
          related issues.
        </p>
        <h5 className="brand-purple">Merit list and selection rounds</h5>
        <p>
          Each institute creates its merit list based on SLAT, PI, and WAT
          results, and the shortlisted students must secure a place by paying
          the admission fee and fulfilling other processes.
        </p>
        <h5 className="brand-purple">Confirming seats</h5>
        <p>
          When the merit lists are issued and selected candidates must go to the
          respective SLS office. Then they must check the needed papers and pay
          the entrance fee to secure their spot in the preferred course.
        </p>
      </div>
    </div>
  </div>
</section>



<Faqs f="Slat" />
    
    </>
  )
}
