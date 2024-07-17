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
          <span property="name">NLAT</span>
          <meta property="position" content={2} />
        </li>
      </ol>
    </nav>
    <div className="row">
      <div className="col-lg-3">
        <h1>NLAT 2024</h1>
      </div>
      <div className="col-lg-9">
        <p className="update">
          <span className="brand-orange">
            Exam Eligibility, Test Pattern, Syllabus, and more
          </span>
        </p>
        <p>
          NMIMS (deemed to be a University) conducts university-level entrances
          every year for different categories of courses ranging from
          engineering to law. NMIMS LAT or NLAT stands for national law aptitude
          test, is conducted by NMIMS for its law courses at the undergraduate
          level 5-year integrated programs, namely:
        </p>
        <ul>
          <li>BA LLB (Hons.): available in six NMIMS campuses</li>
          <li>BBA LLB (Hons.): available in seven NMIMS campuses</li>
        </ul>
        <p>
          The five-year programs were launched by the Kirti Mehta School of Law
          at NMIMS, and have the same structure as the programs at NLUs. This
          article will cover details about NLAT 2024's eligibility criteria,
          exam pattern, syllabus, seat intake, reservation criteria, and more.
          So, let's jump right in.
        </p>
        <form
          name="clForm"
          id="clForm"
          className="d-flex flex-wrap margin-top-20"
          method="post"
          onsubmit="return false;"
        >
          <input type="hidden" name="utm_source" defaultValue="Website" />
          <input type="hidden" name="utm_campaign" defaultValue="NLAT" />
          <input
            type="hidden"
            name="utm_term"
            defaultValue="https://www.lawentrance.com/nlat/"
          />
          <input type="hidden" name="utm_medium" defaultValue="SEO" />
          <input type="hidden" name="cl_target_list" defaultValue="NLAT" />
          <input
            type="hidden"
            name="cl_prod_category"
            id="cl_prod_category"
            defaultValue="LST"
          />
          {/* <input type="hidden" name="cl_prod_group" value='LOC'> */}
          <input type="hidden" name="cl_exam_category" defaultValue="NLAT" />
          <input type="hidden" name="cl_campaign" defaultValue="NLAT" />
          <input type="hidden" id="url" name="url" />
          <input
            type="hidden"
            name="listId"
            defaultValue="58e576e9-a07e-11ed-909d-02c415c9a8cc"
          />
          <input type="hidden" name="trigger" defaultValue="NLAT" />
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
        <h3>NLAT 2024: Important Dates</h3>
        <p>
          The registrations for the January exam are already open, find out
          about other important dates for the academic year 2024 from the table
          below:
        </p>
        <div className="table-responsive">
          <table className="table-striped table">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Dates</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Upcoming Exam Dates</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <p>
                    <strong>PHASE 1</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>06 Dec 23 - 10 Mar 24</p>
                </td>
                <td>
                  <p>NLAT 2024 Application Process</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>01 Jan 24 - 15 Mar 24</p>
                </td>
                <td>
                  <p>NLAT 2024 Exam&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>04 Apr 24</p>
                </td>
                <td>
                  <p>NLAT 2024 Merit List&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>06 Apr 24 - 16 Apr 24</p>
                </td>
                <td>
                  <p>NLAT 2024 Counselling</p>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <p>
                    <strong>PHASE 2</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>11 Jan 24 - 20 Mar 24</p>
                </td>
                <td>
                  <p>N2024 Application Process</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>16 Mar 24 - 25 May 24</p>
                </td>
                <td>
                  <p>NLAT 2024 Exam</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>13 Jun 24</p>
                </td>
                <td>
                  <p>NLAT 2024 Merit List&nbsp;</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>15 Jun 24 - 29 Jun 24</p>
                </td>
                <td>
                  <p>NLAT 2024 Counselling&nbsp;</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>NLAT 2024: Exam Pattern</h3>
        <p>
          NLAT has a similar test pattern to CLAT. Find below all the
          information regarding the sections, marking scheme, time, and more.
        </p>
        <div className="table-responsive">
          <table className="table-striped table">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Particulars</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Details</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Sections</p>
                </td>
                <td>
                  <p>1. Verbal Reasoning</p>
                  <p>2. GK</p>
                  <p>3. Quantitative Reasoning</p>
                  <p>4. Logical Reasoning</p>
                  <p>5. Legal Reasoning</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>No of questions</p>
                </td>
                <td>
                  <p>150 (30 questions each)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Total marks</p>
                </td>
                <td>
                  <p>150 (30 marks each)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Negative marking</p>
                </td>
                <td>
                  <p>No negative marketing</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Total time</p>
                </td>
                <td>
                  <p>120 minutes</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Question pattern</p>
                </td>
                <td>
                  <p>Computer-based objective-type MCQ questions</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Admission procedure</p>
                </td>
                <td>
                  <p>
                    Students are given admission based on their NLAT and/or CLAT
                    scores
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>NLAT 2024: Exam Eligibility</h3>
        <p>
          To participate in the NLAT 2024, candidates must meet the qualifying
          conditions listed below.
        </p>
        <ul>
          <li>
            Candidates must pass Class 12 or equivalent from a recognized board
            in any stream with a minimum of 50% aggregate.
          </li>
          <li>
            Candidates who have finished Class 12 from the International
            Baccalaureate (IB) board shall be either IB certificate/DP issued
            with a minimum of 24 total credits having passed 3 HL and 3 SL
            mandatorily from any stream.
          </li>
          <li>
            If the marksheet provided by the appropriate board is in percentile,
            the real aggregate percentage of all the subjects in which the
            candidate has appeared will be taken into account.
          </li>
          <li>
            Those candidates who have not received a grade or have failed any of
            the subjects listed on their marksheet are unable to apply for the
            test.
          </li>
          <li>
            Candidates taking the final Class 12 examinations are also eligible
            to apply. However, such individuals must meet the conditions listed
            above within the time frame specified.
          </li>
        </ul>
        <hr />
        <h3>NLAT 2024: Registration Fee</h3>
        <p>
          The NLAT registration fee depends on the number of retakes and the
          schools the candidate is applying for. The application fee is
          mentioned below.
        </p>
        <ul>
          <li>
            1 attempt: <i className="fa-solid fa-indian-rupee-sign" />
            2000 (total amount)
          </li>
          <li>
            2nd attempt: + <i className="fa-solid fa-indian-rupee-sign" />
            2000 → <i className="fa-solid fa-indian-rupee-sign" />
            4000 (total amount)
          </li>
          <li>
            3rd attempt: + <i className="fa-solid fa-indian-rupee-sign" />
            2000 → <i className="fa-solid fa-indian-rupee-sign" />
            6000 (total amount)
          </li>
        </ul>
        <hr />
        <h3>NLAT 2024: Application Process</h3>
        <p>To register for NLAT 2024, follow the steps given below:</p>
        <ul>
          <li>Visit the official website of NMIMS.</li>
          <li>
            Click on the <strong>“Apply Now”</strong> button and create an
            account.
          </li>
          <li>
            Candidates can complete registration by picking the appropriate test
            category from NMIMS-NPAT / NMIMSCET / NMIMS-LAT; and campus
            preferences.
          </li>
          <li>
            One can select multiple test categories / multiple schools and
            multiple program preferences. They can also select multiple attempts
            for each category.
          </li>
          <li>
            The registration fees depend on the number of schools selected for
            each test category and the total retakes.
          </li>
          <li>
            Once the fee is paid, candidates can schedule their test dates and
            retakes. 1 main and 2 retakes for each of the categories are
            permitted.
          </li>
          <li>
            Candidates should not register multiple times or in the same exam
            category else it will lead to blocking the candidate from admission.
          </li>
          <li>
            After successful registration and payment, the applicant will be
            able to schedule the examinations by selecting the test date/s and
            test center.
          </li>
          <li>
            Test dates/center availability will be subject to its capacity and
            will be done on a first come first serve basis.
          </li>
          <li>Finish your registration by scheduling all tests.</li>
        </ul>
        <p>
          The application process is given on the official website of NMIMS-LAT
          as well.
        </p>
        <p>
          <strong>Note:</strong> Rescheduling/ cancellations aren’t allowed.
          There will be 23 test centers to pick from.
        </p>
        <hr />
        <h3>Required Documents for Application</h3>
        <p>
          The candidates must upload the following documents in the application
          form:
        </p>
        <ul>
          <li>Two Passport-size photographs of the candidate.</li>
          <li>
            Scanned image of the signature (on white paper with a black ink
            pen).
          </li>
        </ul>
        <p>
          The format, size, and dimensions of the documents are given below.
        </p>
        <div className="table-responsive">
          <table className="table-striped table">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Scanned Images</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Size</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Dimension</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Format</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Photograph</p>
                </td>
                <td>
                  <p>20KB - 50KB</p>
                </td>
                <td>
                  <p>200 x 230 Pixels</p>
                </td>
                <td>
                  <p>JPG or JPEG</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Signature</p>
                </td>
                <td>
                  <p>10KB - 20KB</p>
                </td>
                <td>
                  <p>140 x 60 Pixels</p>
                </td>
                <td>
                  <p>JPG or JPEG</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>NLAT 2024: Syllabus</h3>
        <p>
          As mentioned in the exam pattern before, the NLAT exam consists of 5
          sections in total. The important topics for each section are
          highlighted below.
        </p>
        <h5 className="brand-purple">NLAT Syllabus: Verbal Reasoning</h5>
        <div className="table-responsive">
          <table className="table-striped table">
            <tbody>
              <tr>
                <td>
                  <p>One Word Substitution</p>
                </td>
                <td>
                  <p>Jumbled Sentence</p>
                </td>
                <td>
                  <p>Synonyms and Antonyms</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>A sentence or Phrase Improvement</p>
                </td>
                <td>
                  <p>Paragraph Completion</p>
                </td>
                <td>
                  <p>Idioms and Phrases</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Sentence Correction</p>
                </td>
                <td>
                  <p>Active and Passive Voice</p>
                </td>
                <td>
                  <p>Direct &amp; Indirect Speech</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Fill in Blanks- Conjunction, Preposition, Tenses, etc</p>
                </td>
                <td>
                  <p>Reading Comprehension</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5 className="brand-purple">NLAT Syllabus: General Knowledge</h5>
        <div className="table-responsive">
          <table className="table-striped table">
            <tbody>
              <tr>
                <td>
                  <p>Politics</p>
                </td>
                <td>
                  <p>Event Dates</p>
                </td>
                <td>
                  <p>India: An Overview</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>History</p>
                </td>
                <td>
                  <p>Current Affairs</p>
                </td>
                <td>
                  <p>Books and Authors</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Geography</p>
                </td>
                <td>
                  <p>Sports &amp; Games</p>
                </td>
                <td>
                  <p>Famous Personalities</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Economy Business</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5 className="brand-purple">NLAT Syllabus: Quantitative Reasoning </h5>
        <div className="table-responsive">
          <table className="table-striped table">
            <tbody>
              <tr>
                <td>
                  <p>Graphs</p>
                </td>
                <td>
                  <p>Mensuration</p>
                </td>
                <td>
                  <p>Statistical Estimation</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Basic Algebra</p>
                </td>
                <td>
                  <p>Numerical Information</p>
                </td>
                <td>
                  <p>Ratio and Proportion</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5 className="brand-purple">NLAT Syllabus: Legal Reasoning</h5>
        <div className="table-responsive">
          <table className="table-striped table">
            <tbody>
              <tr>
                <td>
                  <p>Torts</p>
                </td>
                <td>
                  <p>Criminal Law</p>
                </td>
                <td>
                  <p>General Legal Principles</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Contracts</p>
                </td>
                <td>
                  <p>International Law</p>
                </td>
                <td>
                  <p>Intellectual Property Law</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Family Law&nbsp;</p>
                </td>
                <td>
                  <p>Constitutional Law</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Slot booking is only open to paying candidates. Candidates who have
          successfully registered can choose the date and location of the NLAT
          2024.
        </p>
        <p>
          However, whether the candidate is assigned to the requested slot is
          determined by the test center's capacity. As a result, this facility
          is accessible on a first-come, first-served basis.
        </p>
        <hr />
        <h3>Exam Centres</h3>
        <p>The following is the list of exam centers for NLAT 2024.</p>
        <div className="table-responsive">
          <table className="table-striped table">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>S. No</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>State</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Cities</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>Andhra Pradesh</p>
                </td>
                <td>
                  <p>Vijayawada, Rajahmundry</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>2</p>
                </td>
                <td>
                  <p>Assam</p>
                </td>
                <td>
                  <p>Guwahati</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>3</p>
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
                  <p>4</p>
                </td>
                <td>
                  <p>Chhattisgarh</p>
                </td>
                <td>
                  <p>Raipur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>5</p>
                </td>
                <td>
                  <p>Delhi</p>
                </td>
                <td>
                  <p>Delhi/New Delhi</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>6</p>
                </td>
                <td>
                  <p>Goa</p>
                </td>
                <td>
                  <p>Goa</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>7</p>
                </td>
                <td>
                  <p>Gujrat</p>
                </td>
                <td>
                  <p>Ahmedabad, Rajkot, Surat, Vadodara, Changa</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>8</p>
                </td>
                <td>
                  <p>Haryana</p>
                </td>
                <td>
                  <p>Faridabad, Gurugram, Karnal, Ambala Cantt.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>9</p>
                </td>
                <td>
                  <p>Himachal Pradesh</p>
                </td>
                <td>
                  <p>Solan</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>10</p>
                </td>
                <td>
                  <p>Jharkhand</p>
                </td>
                <td>
                  <p>Jamshedpur, Ranchi</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>11</p>
                </td>
                <td>
                  <p>Karnataka</p>
                </td>
                <td>
                  <p>Bengaluru, Mysuru</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>12</p>
                </td>
                <td>
                  <p>Kerala</p>
                </td>
                <td>
                  <p>
                    Kochi, Trivandrum, Ernakulam, Thrissur, Kozhikode, Kottayam
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>13</p>
                </td>
                <td>
                  <p>Madhya Pradesh</p>
                </td>
                <td>
                  <p>Bhopal, Indore, Jabalpur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>14</p>
                </td>
                <td>
                  <p>Maharashtra</p>
                </td>
                <td>
                  <p>
                    Pune, Shirpur, Thane, Kalyan, Aurangabad, Mumbai, Nagpur,
                    Nashik, Navi Mumbai, Sangli / Kolhapur
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>15</p>
                </td>
                <td>
                  <p>Odisha</p>
                </td>
                <td>
                  <p>Bhubaneshwar</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>16</p>
                </td>
                <td>
                  <p>Puducherry</p>
                </td>
                <td>
                  <p>Puducherry</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>17</p>
                </td>
                <td>
                  <p>Punjab</p>
                </td>
                <td>
                  <p>Amritsar, Chandigarh, Mohali, Ludhiana</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>18</p>
                </td>
                <td>
                  <p>Rajasthan</p>
                </td>
                <td>
                  <p>Jaipur, Jodhpur, Kota, Udaipur</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>19</p>
                </td>
                <td>
                  <p>Tamil Nadu</p>
                </td>
                <td>
                  <p>Chennai, Coimbatore, Nagercoil, Salem</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>20</p>
                </td>
                <td>
                  <p>Telangana</p>
                </td>
                <td>
                  <p>Hyderabad, Secunderabad</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>21</p>
                </td>
                <td>
                  <p>Uttar Pradesh</p>
                </td>
                <td>
                  <p>
                    Greater Noida, Kanpur, Lucknow, Meerut, Varanasi, Agra /
                    Mathura, Ghaziabad
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>22</p>
                </td>
                <td>
                  <p>Uttarakhand</p>
                </td>
                <td>
                  <p>Dehradun</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>23</p>
                </td>
                <td>
                  <p>West Bengal</p>
                </td>
                <td>
                  <p>Kolkata</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>NLAT 2024: Result</h3>
        <p>
          NLAT 2024 results will be made available online after exams are over.
          The results are put out as a merit list. Candidates can also obtain
          individual scorecards by entering their login information and
          password.
        </p>
        <p>Given below are steps to check the NLAT2024 result-</p>
        <ul>
          <li>Visit the admission site of NLAT 2024</li>
          <li>Click on the NMIMS LAT 2024 results link</li>
          <li>Log in using your ID and password</li>
          <li>The NMIMS LAT 2024 results will be presented on screen</li>
          <li>Download and save the results for later use</li>
        </ul>
        <p>
          <strong>Note:</strong> Candidates can only take the NLAT exam three
          times: one main attempt and two retakes. In such a case, the best
          score from the three tries would be considered for admission.
        </p>
      </div>
    </div>
  </div>
</section>



<Faqs f="Nlat"/>
    
    </>
  )
}
