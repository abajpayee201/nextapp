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
          <span property="name">
            LSAT-India<sup>™</sup>
          </span>
          <meta property="position" content={2} />
        </li>
      </ol>
    </nav>
    <div className="row">
      <div className="col-lg-4">
        <h1>
          LSAT-India<sup>™</sup> 2024
        </h1>
      </div>
      <div className="col-lg-8">
        {/* <p class="update"><span class="brand-orange">Updated on 17th April 2024 | 4:12 PM | #CLATExam2025</span></p> */}
        <p>
          Law School Entrance Test popularly known as LSAT-India™is a
          standardized test of reading, verbal reasoning, &amp; critical
          reasoning skills designed by the USA-based Law school admission
          council.
        </p>
        <ul>
          <li>
            Candidates can take the LSAT-India™ exam twice–one in January 2024
            and in June 2024.
          </li>
          <li>LSAT-India™ is an online exam.</li>
          <li>
            Jindal Global Law School (JGLS) exclusively accepts the LSAT-India™
            exam
          </li>
          <li>
            Other colleges like BITS Law School, Alliance University, Asian Law
            College, Noida, etc also accept the LSAT-India™ scores.
          </li>
        </ul>
        <form
          name="clForm"
          id="clForm"
          className="d-flex flex-wrap margin-top-20"
          method="post"
          onsubmit="return false;"
        >
          <input type="hidden" name="utm_source" defaultValue="Website" />
          <input
            type="hidden"
            name="utm_campaign"
            defaultValue="LSAT-Exam page"
          />
          <input
            type="hidden"
            name="utm_term"
            defaultValue="https://www.lawentrance.com/lsat-india/"
          />
          <input type="hidden" name="utm_medium" defaultValue="SEO" />
          <input
            type="hidden"
            name="cl_target_list"
            defaultValue="LSAT-Exam page"
          />
          <input type="hidden" name="cl_prod_category" defaultValue="LST" />
          {/*<input type="hidden" name="cl_prod_group" value='OC'> */}
          <input type="hidden" name="cl_exam_category" defaultValue="LST" />
          <input
            type="hidden"
            name="cl_campaign"
            defaultValue="LSAT-Exam page"
          />
          <input type="hidden" id="url" name="url" />
          <input
            type="hidden"
            name="listId"
            defaultValue="526dea05-6409-11ee-b1b0-0203d5b16550"
          />
          <input type="hidden" name="trigger" defaultValue="LSAT-Exam page" />
          <input type="hidden" name="leadsquared" defaultValue="yes" />
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
        <h3>
          LSAT-India<sup>™</sup> 2024: Important dates
        </h3>
        <p>
          While LSAT-India<sup>™</sup> is conducted multiple times in a year
          globally, LSAT-India<sup>™</sup>is held twice a year
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Events</strong>
                  </p>
                </td>
                <td colSpan={2}>
                  <p>
                    <strong>Dates 2024 (Tentative)</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>
                  <strong>
                    LSAT-India<sup>™</sup> Jan Session
                  </strong>
                </td>
                <td>
                  <p>
                    <strong>
                      LSAT-India<sup>™</sup> June Session
                    </strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Registration opens for LSAT-India 2024 </strong>
                  </p>
                </td>
                <td></td>
                <td>
                  <p>
                    <strong>14 August 2023</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Online Application process start</p>
                </td>
                <td>
                  <p>2nd week of October 2022</p>
                </td>
                <td>
                  <p>Last week of January 2023</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Early registration process ends</p>
                </td>
                <td>
                  <p>2nd week of December 2022</p>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <p>Registration close</p>
                </td>
                <td>
                  <p>10 January 2024</p>
                </td>
                <td>
                  <p>2 May 2024</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Test Scheduling/ Admit card availability</p>
                </td>
                <td>
                  <p>1st week of January 2023</p>
                </td>
                <td>
                  <p>2nd week of June 2023</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Exam date</p>
                </td>
                <td>
                  <p>20-21 January 2024</p>
                </td>
                <td>
                  <p>16-19 May 2024</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Score card</p>
                </td>
                <td>
                  <p>TBA</p>
                </td>
                <td>
                  <p>TBA</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>
          LSAT-India<sup>™</sup>: Eligibility Criteria
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
        <h3>
          LSAT-India<sup>™</sup> 2024: Exam Pattern
        </h3>
        <p>
          Given below is the exam pattern of LSAT-India<sup>™</sup>
        </p>
        <ul>
          <li>Exam Mode – Online</li>
          <li>Exam frequency – Twice a year</li>
          <li>Test duration - 2 hours and 20 minutes</li>
          <li>Question type - Multiple Choice format</li>
        </ul>
        <hr />
        <h3>
          LSAT-India<sup>™</sup> 2024: Syllabus
        </h3>
        {/* <h5 class="brand-purple">Educational Qualification</h5> */}
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Section Type</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Number of Questions</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Duration</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Analytical Reasoning</p>
                </td>
                <td>
                  <p>23</p>
                </td>
                <td>
                  <p>35 minutes</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Logical Reasoning (1)</p>
                </td>
                <td>
                  <p>22</p>
                </td>
                <td>
                  <p>35 minutes</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Logical Reasoning (2)</p>
                </td>
                <td>
                  <p>23</p>
                </td>
                <td>
                  <p>35 minutes</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Reading Comprehension</p>
                </td>
                <td>
                  <p>24</p>
                </td>
                <td>
                  <p>35 minutes</p>
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
                    <strong>~92</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>2 hours 20 minutes</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>
          LSAT-India<sup>™</sup> 2024: Slot Booking
        </h3>
        <p>
          Candidates need to book their slots before downloading the hall ticket
          for LSAT-India™
        </p>
        <p>
          Candidates can book their slots by following the steps given below
        </p>
        <p>
          <strong>Step 1:</strong> Click on the LSAT-India™ 2024 slot booking
          link
        </p>
        <p>
          <strong>Step 2:</strong> Login using registration ID and password
        </p>
        <p>
          <strong>Step 3</strong>: Select the test slot and timings from
          available slots
        </p>
        <p>
          <strong>Step 4:</strong> Submit the details to complete the slot
          booking process.
        </p>
        <hr />
        <h3>
          LSAT-India<sup>™</sup> 2024: Registration Process
        </h3>
        <p>
          After completing the LSAT-India™ registration, candidates can apply to
          the associated colleges (colleges which will accept LSAT-India™
          scores). Candidates can choose to apply to any or all of the
          associated colleges, however, LSAT-India™ scores will be given to all
          associated colleges.&nbsp;
        </p>
        <ul>
          <li>
            A list of associated law colleges is available on{" "}
            <a
              href="https://www.lsatindia.in/colleges/"
              target="_blank"
              rel="nofollow"
            >
              <strong>https://www.lsatindia.in/colleges/</strong>
            </a>
          </li>
        </ul>
        <p>
          Candidates can download the application forms from the respective
          college websites and apply to the colleges mentioning their
          LSAT-India™registration number.
        </p>
        <hr />
        <h3>
          LSAT-India<sup>™</sup> 2024 : Application Form
        </h3>
        <p>
          <strong>Steps to fill </strong>
          <strong>LSAT-India™ </strong>
          <strong>Application Form</strong>
        </p>
        <h5 className="brand-purple">1. Online registration</h5>
        <ul>
          <li>
            Register online for the LSAT-India™ entrance test by logging on to{" "}
            <a href="http://www.lsatindia.in/" rel="nofollow">
              <strong>www.lsatindia.in</strong>
            </a>
            .&nbsp;
          </li>
          <li>
            Enter details like first name, last name, email id, pin code, mobile
            number, and educational qualification.&nbsp;
          </li>
          <li>
            At this step the candidate needs to specify the program they want to
            pursue.
          </li>
        </ul>
        <h5 className="brand-purple">2. Filling of application form</h5>
        <p>
          <strong>
            Fill the application form post registration. Important fields
            include-
          </strong>
        </p>
        <ul>
          <li>Personal information</li>
          <li>Address details</li>
          <li>Program preferences</li>
          <li>Academic qualification</li>
          <li>Additional information</li>
        </ul>
        <p>
          <strong>Note:</strong> The candidate will need to select an exam
          center at this step
        </p>
        <h5 className="brand-purple">3. Payment of application fee</h5>
        <p>
          All registrants who complete the test registration, pay the test fee
          in a timely way, and follow published test rules may sit for the
          LSAT-India™
        </p>
        <p>
          <strong>Payment modes are as follows:</strong>
        </p>
        <ul>
          <li>
            Candidates can register for LSAT-India™ by paying the application
            fee, payable by credit card/debit card only.
          </li>
          <li>
            Payment through credit card/debit card: Fee will be accepted only
            through Visa and MasterCard credit cards, issued in India. Demand
            draft as payment mode is not accepted.
          </li>
        </ul>
        <hr />
        <h3>
          LSAT-India<sup>™</sup> 2024: Application fee
        </h3>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Category details</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Mode of payment</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Application fee</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Payment options</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>General/ OBC/ SC/ ST/ PwD/ Female</p>
                </td>
                <td>
                  <p>Online</p>
                </td>
                <td>
                  <p>Rs. 3999</p>
                  <p>For each exam</p>
                </td>
                <td>
                  <p>Credit Card/Debit Card/Net Banking</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5 className="brand-purple">Submission of application form</h5>
        <p>
          Submit the application form after ensuring that it is complete and
          there are no errors.
        </p>
        <hr />
        <h3>
          LSAT-India<sup>™</sup> 2024: Courses offered{" "}
        </h3>
        <p>
          Several law courses are offered by colleges accepting LSAT-India™
          scores. Given below is a list of such courses.
        </p>
        <ul>
          <li>BA LLB</li>
          <li>BBA LLB</li>
          <li>BA LLB (Hons.)</li>
          <li>BBA LLB (Hons.)</li>
          <li>B.Sc. LLB</li>
          <li>LLM</li>
          <li>B.Com LLB (Hons.)</li>
          <li>LLB</li>
          <li>B.Tech LLB</li>
          <li>B.Com LLB</li>
        </ul>
        <hr />
        <h3>
          Colleges Accepting LSAT-India<sup>™</sup> score
        </h3>
        <p>
          A number of colleges will be giving admission through LSAT-India
          <sup>™</sup>. Below mentioned are names of these LSAT-India
          <sup>™</sup> participating colleges
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>Institute</p>
                </td>
                <td>
                  <p>Location</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Jindal Global Law School</p>
                </td>
                <td>
                  <p>Sonipat</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Altius Institute of Universal Studies</p>
                </td>
                <td>
                  <p>Indore</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>IMS Unison University</p>
                </td>
                <td>
                  <p>Dehradun</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Nims School of Law, Nims University</p>
                </td>
                <td>
                  <p>Jaipur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>B. M. S. College of Law</p>
                </td>
                <td>
                  <p>Bangalore</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Institute of Law and Research</p>
                </td>
                <td>
                  <p>Faridabad</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>NIMT Institute of Method &amp; Law</p>
                </td>
                <td>
                  <p>Delhi</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>B.N. Law College</p>
                </td>
                <td>
                  <p>Udaipur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Jayoti Vidyapeeth Women's University</p>
                </td>
                <td>
                  <p>Jaipur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>B.S. Anangpuria Institute of Law</p>
                </td>
                <td>
                  <p>Faridabad</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Jagan Nath University, Law Faculty</p>
                </td>
                <td>
                  <p>Jaipur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Sardar Patel Subharti Institute of Law</p>
                </td>
                <td>
                  <p>Meerut</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <a href="https://www.careers360.com/colleges/chanakya-law-college-rudrapur">
                      <strong>Chanakya Law College</strong>
                    </a>
                  </p>
                </td>
                <td>
                  <p>Rudrapur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Jai Hind Defence College of Law</p>
                </td>
                <td>
                  <p>Bhopal</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Sri Vaishnav Institute of Law</p>
                </td>
                <td>
                  <p>Indore</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Dr. Anushka Vidhi Mahavidyalaya</p>
                </td>
                <td>
                  <p>Udaipur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>K.L.E. Society’s B. V. Bellad Law College</p>
                </td>
                <td>
                  <p>Belgaum</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Siddhartha Law College</p>
                </td>
                <td>
                  <p>Dehradun</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Durgapur Institute of Legal Studies</p>
                </td>
                <td>
                  <p>Durgapur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>K.L.E. Society's Gurusiddappa Kotambri Law College</p>
                </td>
                <td>
                  <p>Hubli</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Smt. Kamalaben Gambhirchand Shah Law School</p>
                </td>
                <td>
                  <p>Mumbai</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Geeta Institute of Law</p>
                </td>
                <td>
                  <p>Panipat</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>M A B Institute of Juridicial Science</p>
                </td>
                <td>
                  <p>Murshidabad</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Tagore Public Law College</p>
                </td>
                <td>
                  <p>Shekhupur, Rajasthan</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Haldia Law College</p>
                </td>
                <td>
                  <p>Midnapore</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Shri Swami Dayal Bhatnagar Law College</p>
                </td>
                <td>
                  <p>Secundrabad</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>C. M. R. Law School</p>
                </td>
                <td>
                  <p>Bangalore</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Disha Law College</p>
                </td>
                <td>
                  <p>Raipur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Jaipur School of Law</p>
                </td>
                <td>
                  <p>Jaipur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Jagan Nath University</p>
                </td>
                <td>
                  <p>Jhajjar, Haryana</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>RNBGU School of Law</p>
                </td>
                <td>
                  <p>Bikaner</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Aurora Group of Institutions</p>
                </td>
                <td>
                  <p>Telangana</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Adamas University</p>
                </td>
                <td>
                  <p>Kolkata</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>LJ School of Law</p>
                </td>
                <td>
                  <p>Ahmedabad</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Glocal Law School</p>
                </td>
                <td>
                  <p>Dehradun</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>JECRC University</p>
                </td>
                <td>
                  <p>Jaipur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Midnapore Law College</p>
                </td>
                <td>
                  <p>Midnapore</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Vaikunta Baliga College of Law</p>
                </td>
                <td>
                  <p>Udupi</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>IMS Law College</p>
                </td>
                <td>
                  <p>Noida</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>M. P. Law College</p>
                </td>
                <td>
                  <p>Aurangabad</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Reva University</p>
                </td>
                <td>
                  <p>Bangalore</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Asian Law College</p>
                </td>
                <td>
                  <p>Noida</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>R N Patel Ipcowala School of Law and Justice</p>
                </td>
                <td>
                  <p>Anand, Gujarat</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Royal College of Law</p>
                </td>
                <td>
                  <p>Ghaziabad</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>
          Colleges Associated with LSAT-India<sup>™</sup>
        </h3>
        <ul>
          <li>Asian law College&nbsp;</li>
          <li>
            School of Law and Constitutional Studies, Shobhit Deemed
            University&nbsp;
          </li>
          <li>ISBR law College&nbsp;</li>
          <li>GITAM School of Law</li>
          <li>Indore Institute of Law&nbsp;</li>
          <li>
            Mody University of Science and Technology
            <br />
            IILM University
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>



<Faqs f="Lsat" />
    
    </>
  )
}
