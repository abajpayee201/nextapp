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
          <span property="name">MH CET</span>
          <meta property="position" content={2} />
        </li>
      </ol>
    </nav>
    <div className="row">
      <div className="col-lg-4">
        <h1>MHCET Law 2024</h1>
      </div>
      <div className="col-lg-8">
        <p className="update">
          <span className="brand-orange">
            Registration, Exam Dates, Syllabus, and Exam Pattern
          </span>
        </p>
        <p>
          <strong>
            MH CET Law (Maharashtra Common Entrance Test for Law){" "}
          </strong>
          is conducted by the State Common Entrance Test Cell of Maharashtra. It
          is an annual state-level admission exam used to determine admission to{" "}
          <em>3-year and 5-year LLB degree</em> programs.
        </p>
        <ul>
          <li>
            The MH CET Law 2024 exam for the 3-year L.L.B course will be
            conducted on March 12 and March 13, 2024, in online mode.
          </li>
          <li>
            The MH CET Law 2024 exam for 5-year L.L.B courses will be held on
            May 03, 2024.
          </li>
        </ul>
        <p>
          The MH CET Law exam scores are accepted by over 150 private and
          government law colleges in Maharashtra and open a career path for law
          pursuing aspirants.
        </p>
        <p>
          <em>
            *The online registration for MH CET Law 2024 for 5-year has been
            extended till March 18th, 2024.{" "}
          </em>
        </p>
        <form
          name="clForm"
          id="clForm"
          className="d-flex flex-wrap margin-top-20"
          method="post"
          onsubmit="return false;"
        >
          <input
            type="hidden"
            name="utm_term"
            defaultValue="https://www.lawentrance.com/mhcet/"
          />
          <input type="hidden" name="utm_medium" defaultValue="SEO" />
          <input type="hidden" name="cl_target_list" defaultValue="MHCET Law" />
          <input
            type="hidden"
            name="cl_prod_category"
            id="cl_prod_category"
            defaultValue="LST"
          />
          <input type="hidden" name="cl_prod_group" defaultValue="OC" />
          <input type="hidden" name="cl_exam_category" defaultValue="Law" />
          <input type="hidden" name="cl_campaign" defaultValue="MHCET Law" />
          <input type="hidden" id="url" name="url" />
          <input
            type="hidden"
            name="listId"
            defaultValue="841eaad7-9d69-11ee-ade6-02a050a2b0e0"
          />
          <input type="hidden" name="trigger" defaultValue="MHCET Law" />
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
        <h3>MH CET Law 2024: Exam Overview</h3>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Name of exam</strong>
                  </p>
                </td>
                <td>
                  <p>MH CET Law 2024</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Full form</strong>
                  </p>
                </td>
                <td>
                  <p>Maharashtra Common Entrance Test Law</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Exam Level</strong>
                  </p>
                </td>
                <td>
                  <p>State level</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Courses offered</strong>
                  </p>
                </td>
                <td>
                  <p>3-year LLB and 5-year LLB courses</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Conducting by</strong>
                  </p>
                </td>
                <td>
                  <p>State Common Entrance Test Cell, Maharashtra</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <strong>Application Mode</strong>
                  </p>
                </td>
                <td>
                  <p>Online</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>MH CET Law 2024 Exam Dates</h3>
        <p>
          Given below are some important exam dates for MH CET Law 2024. Please
          note that these days are tentative and are subject to change.
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Details</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Dates (5-year LLB)</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Dates (3-year LLB)</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Application form </p>
                </td>
                <td>
                  <p>1st week of January 2024</p>
                </td>
                <td>
                  <p>1st week of January 2024</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Last date to apply</p>
                </td>
                <td>
                  <p>4th week of January 2024</p>
                </td>
                <td>
                  <p>4th week of January 2024</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Last date for corrections</p>
                </td>
                <td>
                  <p>1st week of February 2024</p>
                </td>
                <td>
                  <p>1st week of February 2024</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Admit Card</p>
                </td>
                <td>
                  <p>1st week of May 2024</p>
                </td>
                <td>
                  <p>1st week of March 2024</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <a
                      href="https://cetcell.mahacet.org/wp-content/uploads/2023/08/CETCELL_Tentative_CET_Schedule2024-25.pdf"
                      target="_blank"
                    >
                      Exam Date
                    </a>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>3rd May 2024</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>12th to 13th March 2024</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Result Declared</p>
                </td>
                <td>
                  <p>4th week of May 2024</p>
                </td>
                <td>
                  <p>4th week of March 2024</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Counselling</p>
                </td>
                <td>
                  <p>June 2024</p>
                </td>
                <td>
                  <p>April 2024</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>MH CET Law 2024: Eligibility Criteria</h3>
        <p>
          Before filling up the MH CET Law application form, aspirants must meet
          the MH CET Law eligibility criterion. Check out the qualifying
          criteria for MH CET Law 2024 admission to both 5-year LLB and 3-year
          LLB courses below
        </p>
        <h5 className="brand-purple">5-year LLB Course</h5>
        <ul>
          <li>Class (10+2) pass from a recognized board.</li>
          <li>
            <strong>General category</strong> students must have a minimum of{" "}
            <strong>45%</strong> in Class (10+2).
          </li>
          <li>
            <strong>SC/ST</strong> applicants must have at least{" "}
            <strong>40%</strong> in their Class (10+2).
          </li>
          <li>
            <strong>VJNT, SBC, and OBC</strong> students must have a minimum of{" "}
            <strong>42%</strong> in Class (10+2).
          </li>
        </ul>
        <h5 className="brand-purple">3-year LLB Course</h5>
        <ul>
          <li>
            Graduation from a recognized institution or university in any field.
          </li>
          <li>
            <strong>General category </strong>students must have a minimum of
            <strong> 45% </strong>in their graduation exam.
          </li>
          <li>
            <strong>SC/ST </strong>applicants must have at least{" "}
            <strong>40% </strong>in their graduation exam.
          </li>
          <li>
            <strong>VJNT, SBC, and OBC</strong> students must have a minimum of
            <strong> 42%</strong> in their graduation exam.
          </li>
        </ul>
        <hr />
        <h3>MH CET Law 2024: Exam Pattern</h3>
        <p>The following is the exam pattern for the MH CET Law 2024 exam.</p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Item</strong>
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
                  <p>Mode of exam</p>
                </td>
                <td>
                  <p>Online</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Language</p>
                </td>
                <td>
                  <p>English and Marathi</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Type of question paper</p>
                </td>
                <td>
                  <p>Multiple choice question based (MCQs)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Total number of questions</p>
                </td>
                <td>
                  <p>150 questions</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Duration of exam</p>
                </td>
                <td>
                  <p>120 minutes (2 hours)</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Total marks</p>
                </td>
                <td>
                  <p>150 marks</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Marking scheme</p>
                </td>
                <td>
                  <p>One mark for each correct answer</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Negative marking</p>
                </td>
                <td>
                  <p>No negative marking</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>MH CET Law 2024: Syllabus</h3>
        <p>
          Candidates studying for the MH CET Law 2024 exam should be familiar
          with the exam syllabus. The MH CET Law curriculum will assist students
          in understanding the themes on which questions will be asked. The
          sections in MH CET Law for 3-year LLB and 5-year LLB include:
        </p>
        <div className="accordion" id="accordionExample1">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOnes"
                aria-expanded="true"
                aria-controls="collapseOnes"
              >
                English
              </button>
            </h2>
            <div
              id="collapseOnes"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample1"
            >
              <div className="accordion-body">
                <p>
                  The questions in the English Language portion are designed to
                  evaluate basic grammatical abilities and vocabulary. Some of
                  the questions will follow a pattern of comprehension passages
                  followed by objective-type questions. In addition, some simple
                  questions about synonyms, antonyms, and mistake detection will
                  be asked.
                </p>
                <p>
                  Students can prepare for the MH CET Law English portion by
                  practicing grammar and comprehension abilities. Reading
                  comprehension problems often take more time, thus one must
                  practice reading and understanding speed. Reading newspapers,
                  editorials, and legal publications on a regular basis is
                  always suggested.
                </p>
                <p>
                  Some important topics for the English section are given below.
                </p>
                <ul>
                  <li>Vocabulary</li>
                  <li>Synonyms</li>
                  <li>Antonyms</li>
                  <li>Analogies</li>
                  <li>Proficiency</li>
                  <li>English Usage errors</li>
                  <li>Idioms and Phrases</li>
                  <li>One Word Substitutions</li>
                  <li>English Comprehension</li>
                  <li>Spotting errors</li>
                  <li>Spelling mistakes</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwos"
                aria-expanded="false"
                aria-controls="collapseTwos"
              >
                Current Affairs and General Knowledge
              </button>
            </h2>
            <div
              id="collapseTwos"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample1"
            >
              <div className="accordion-body">
                <p>
                  When it comes to current affairs and GK, it’s very important
                  to have a decent knowledge of current events happening around
                  the world. It is also advised to research current events from
                  the last six months. Newspaper reading and a rudimentary
                  understanding of history, politics, economics, and the
                  environment are also essential for passing the general
                  knowledge part.
                </p>
                <p>
                  Some important topics for the Current Affairs section are
                  given below.
                </p>
                <ul>
                  <li>History (ancient, medieval, and modern)</li>
                  <li>General Science</li>
                  <li>Economics</li>
                  <li>Geography</li>
                  <li>Civics</li>
                  <li>Current Affairs of the past year.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThrees"
                aria-expanded="false"
                aria-controls="collapseThrees"
              >
                Legal Reasoning
              </button>
            </h2>
            <div
              id="collapseThrees"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample1"
            >
              <div className="accordion-body">
                <p>
                  Legal reasoning is one of the most important portions of MH
                  CET Law 2024. It tests the candidate's aptitude and ability to
                  detect arguments and make conclusions using legal concepts.
                  Students should stay current on legal issues from the previous
                  six months and supplement them with a core understanding of
                  the subject. There is no need to study law in depth because
                  the component merely tests fundamental knowledge.
                </p>
                <p>
                  Some important topics for the Legal Reasoning section are
                  given below.
                </p>
                <ul>
                  <li>Indian Constitution</li>
                  <li>Family Law</li>
                  <li>Indian Contract Act</li>
                  <li>Law of Torts</li>
                  <li>Important Landmark</li>
                  <li>Supreme Court Judgement</li>
                  <li>Legal Fundamentals and Terms</li>
                  <li>Indian Penal Code</li>
                  <li>Legal Maxims</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFours"
                aria-expanded="false"
                aria-controls="collapseFours"
              >
                Logical Reasoning
              </button>
            </h2>
            <div
              id="collapseFours"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample1"
            >
              <div className="accordion-body">
                <p>
                  The logical reasoning part will include questions on
                  fundamental logical thinking. This area is dominated by
                  riddles, blood ties, age, analogies, and coding-decoding.
                  Candidates should practice a variety of problems and prepare
                  for each area of logical and analytical reasoning. Regular
                  practice is required for the entire subject of logical and
                  analytical reasoning.
                </p>
                <p>
                  Some important topics for the Logical Reasoning section are
                  given below.
                </p>
                <ul>
                  <li>Wide analogies</li>
                  <li>Drawing well-supported conclusions</li>
                  <li>Reasoning by analogy</li>
                  <li>Completing arguments</li>
                  <li>Applying principles or rules</li>
                  <li>Relationships and drawing logical conclusions</li>
                  <li>Sets of statements</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFives"
                aria-expanded="false"
                aria-controls="collapseFives"
              >
                Basic Mathematics (only in 5-year LLB)
              </button>
            </h2>
            <div
              id="collapseFives"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample1"
            >
              <div className="accordion-body">
                <p>
                  This portion will include ten questions and can be a
                  high-scoring segment for pupils with basic arithmetic
                  abilities. Only questions about profit-and-loss, interest,
                  math, time and distance, probability, and so on are posed.
                  These subjects can be prepared by keeping to the fundamental
                  principles (Class 10th equivalent) and constantly practicing
                  the questions.
                </p>
                <p>
                  Some important topics for the Basic Mathematic section are
                  given below.
                </p>
                <ul>
                  <li>Profit and Loss</li>
                  <li>Time and Work</li>
                  <li>Speed and Distance</li>
                  <li>Algebra</li>
                  <li>Venn Diagram</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h3>Preparation Material for MH CET Law 2024</h3>
        <p>
          Section-wise study material for MH CET Law preparation is given in the
          table below.
        </p>
        <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  <p>
                    <strong>Subject</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>Book and author</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>English Language</p>
                </td>
                <td>
                  <p>MH CET Law (English) Guide by Arihant Experts.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Word Power Made Easy by Norman Lewis.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Current Affairs and General Knowledge</p>
                </td>
                <td>
                  <p>Yearly General Knowledge Book by Pearson.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    Daily Newspapers such as the Telegraph, the Hindu, and
                    Economic Times.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Legal Reasoning</p>
                </td>
                <td>
                  <p>Legal Awareness and Reasoning by A P Bhardwaj.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>LST's Legal Reasoning Module.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Logical Reasoning</p>
                </td>
                <td>
                  <p>
                    Logical Reasoning for CLAT, AILET, LSAT India, SLAT, and
                    other law entrance exams by Universal Publications.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>A Modern Approach to Logical Reasoning by RS Aggarwal.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Mathematics</p>
                </td>
                <td>
                  <p>Taxman's Mathematics for CLAT by Shailesh Kumar.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Class 10th NCERT Maths textbook.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>MH CET Law 2024: Section-wise question distribution</h3>
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
                    <strong>5-year LLB </strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>3-year LLB</strong>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Legal Aptitude and Legal Reasoning</p>
                </td>
                <td>
                  <p>40</p>
                </td>
                <td>
                  <p>30</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>General Knowledge and Current Affairs</p>
                </td>
                <td>
                  <p>30</p>
                </td>
                <td>
                  <p>40</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Logical and Analytical Reasoning</p>
                </td>
                <td>
                  <p>40</p>
                </td>
                <td>
                  <p>30</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>English</p>
                </td>
                <td>
                  <p>30</p>
                </td>
                <td>
                  <p>50</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Basic Mathematics</p>
                </td>
                <td>
                  <p>10</p>
                </td>
                <td>
                  <p>-</p>
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
                    <strong>150</strong>
                  </p>
                </td>
                <td>
                  <p>
                    <strong>150</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        <h3>MH CET Law 2024: Preparation Tips</h3>
        <p>Some preparation tips for the exam are given below.</p>
        <ul>
          <li>
            Examine the whole syllabus and prepare a study plan accordingly.
          </li>
          <li>Make a schedule for your study and stick to it.</li>
          <li>Make an effort not to skip any topics.</li>
          <li>
            Clear your fundamentals by solving sample papers and practice tests.
          </li>
          <li>Allow at least one to two weeks for revision.</li>
        </ul>
        <hr />
        <h3>Steps for MH CET Law 2024 Application Form</h3>
        <p>
          The MH CET Law Application Form 2024 will be available on the MH CET
          Cell's official website in <strong>February and March 2024 </strong>
          for 5-year LLB and 3-year LLB programs. Step-by-step instructions to
          fill out the application are given below.{" "}
        </p>
        <ul>
          <li>
            <strong>Step 1: </strong>Go to the official website of CET Cell
            Maharashtra -
            <a href="https://cetcell.mahacet.org/">
              <strong> https://cetcell.mahacet.org/</strong>
            </a>
          </li>
          <li>
            <strong>Step 2: </strong>Press the “CET Exam Portal” button.
          </li>
          <li>
            <strong>Step 3: </strong>Click on the 3-yr LLB / 5-yr LLB tab as per
            your requirement.
          </li>
          <li>
            <strong>Step 4: </strong>If you have not yet registered for the MH
            CET exam, click on the "New Registration" page. Candidates who have
            already registered on the MAH CET Cell portal should choose the
            "Already Registered" option.{" "}
          </li>
          <li>
            <strong>Step 5:</strong> Fill in your personal and permanent address
            information, as well as your email address and cellphone number.
          </li>
          <li>
            <strong>Step 6: </strong>To finish the registration process, create
            a password and enter the security PIN.
          </li>
          <li>
            <strong>Step 7: </strong>Once logged in, fill out the form and
            attach a passport-sized photo of yourself as well as a scanned copy
            of your signature. (
            <strong>20 KB to 50 KB file size for photo</strong> and 1
            <strong>0 KB to 20 KB for signature </strong>in
            <strong> jpg/ jpeg format.</strong>)
          </li>
          <li>
            <strong>Step 8: </strong>Pay the application fees and the save
            application form for future reference.
          </li>
        </ul>
        <hr />
        <h3>MH CET Law 2024: Admit Card</h3>
        <p>
          The MH CET Law admit card 2024 will be published separately for the
          5-year LLB entrance exam and the 3-year LLB entrance exam. The
          admission card for each course's entrance exam will be available 5-7
          days before the start date. See the instructions below on how to
          download the admit card.
        </p>
        <ul>
          <li>
            Visit the Maha CET Cell's official website -{" "}
            <a href="https://cetcell.mahacet.org/">
              <strong>cetcell.mahacet.org</strong>
            </a>
          </li>
          <li>Select the MAH CET LLB 5-year LLB / 3-year LLB tab.</li>
          <li>Select the View / Print Admit Card option.</li>
          <li>
            To download the admission card, enter your registration number and
            date of birth.
          </li>
        </ul>
        <hr />
        <h3>MH CET Law 2024: Result</h3>
        <p>
          Your MH CET Law score will decide which of the participating
          universities will accept you for admission. The MH CET Law result is
          expected to be released in <strong>June 2024.</strong> Once the
          results are out you can check your results by following these steps:
        </p>
        <ul>
          <li>
            Visit the MAH CET Cell website -{" "}
            <a href="https://cetcell.mahacet.org/">
              <strong>cetcell.mahacet.org</strong>
            </a>
          </li>
          <li>
            Click on the MAH LLB 5-year / 3-year LLB tab (pick the course for
            which you wish to see the results).
          </li>
          <li>Select the Download Score Card option. </li>
          <li>
            Enter your MH CET Law application number, date of birth, and the
            security PIN that was provided.
          </li>
          <li>The screen will display your MH CET Law scorecard.</li>
          <li>Save the scorecard for future reference.</li>
        </ul>
        <hr />
        <h3>MH CET Law 2024: Counseling</h3>
        <p>
          The MH CET Law 2024 counseling will take place in numerous phases
          using a <strong>Centralised Admission Process (CAP).</strong>
          Candidates must fill out the CAP registration form (same as the MH CET
          Law counseling registration form) and pick the colleges to which they
          want to be admitted for each MH CET CAP cycle. Merit lists will be
          produced based on the marks obtained by candidates in the exam and CAP
          registration for various rounds.
        </p>
        <p>
          The counseling will be held separately for the three-year and
          five-year courses. It will begin in <strong>June/July 2024 ;</strong>
          via online mode. The candidates will be shortlisted based on their
          rank and the availability of seats.
        </p>
        <p>
          Applicants will also be needed to provide certain documents during the
          counseling procedure, such as
        </p>
        <ul>
          <li>Class 12th mark sheet/certificate</li>
          <li>MH CET Law Admit Card</li>
          <li>MH CET Law Result</li>
          <li>Date of Birth Certificate</li>
          <li>Caste certificate (If applicable)</li>
          <li>Passing Certificate</li>
          <li>Transfer certificate</li>
        </ul>
        <hr />
        <h3>Top Law Colleges Accepting MH CET Law Scores</h3>
        <p>
          The MH CET Law results are acknowledged by over 150 legal schools in
          Maharashtra. The participating institutions in MH CET Law provide
          around 11,000 seats in 5-year LLB and 16,000 seats in 3-year LLB,
          ensuring that everyone has a fair opportunity to pursue a preferred
          LLB study. Some of the top colleges are listed below.
        </p>
        <ul>
          <li>University of Mumbai Law Academy, Mumbai.</li>
          <li>Government Law College, Churchgate.</li>
          <li>SVKM's Pravin Gandhi College of Law, Mumbai.</li>
          <li>Amolakchand Law College, Yavatmal.</li>
          <li>Bharati Vidyapeeth's New Law College, Sangli.</li>
          <li>Dr. DY Patil Law College, Pune.</li>
          <li>GLC Mumbai - Government Law College, Mumbai.</li>
          <li>Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur</li>
          <li>Marathwada Mitra Mandal's Law College, Pune</li>
          <li>SNDT Women University, Mumbai</li>
        </ul>
      </div>
    </div>
  </div>
</section>


<Faqs f="Mchet" />
    </>
  )
}
