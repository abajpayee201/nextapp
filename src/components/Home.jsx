"use client"


import React from 'react'
import Link from 'next/link'
import Faqs from './Faqs'

export default function Home() {
  return (
    <>
    <div >
        <section className="banner">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <h1>Your Preparation Partner for Law Entrance Exams</h1>
                <h2>Choose CL-LST to crack CLAT, AILET, and OLETs(Other law entrance tests)</h2>
                <div className="pro-box">
                  <p><Link href="/classroom-coaching/">Classroom Coaching</Link> | <Link href="/online-coaching/">Online Coaching</Link> | <Link href="/test-series/">All-India Test Series</Link> | <Link href="/study-material/" className="clar">Books & Materials</Link></p>
                </div>

                <form name="clForm" action='/api/addcounselling' id="clForm" className="d-flex flex-wrap margin-top-10" method="post"  >
                  
                  <input className="form-control me-2" type="tel" name="mobile" id="mobile" placeholder="Enter Mobile No." pattern="[6-9][0-9]{9}" title="Mobile number should start with 6, 7, 8, or 9 and contain at least 10 digits." required />

                  <input className="btn cta" type="submit" value="Get FREE Counselling"  />

                </form>

              </div>
              <div className="col-lg-6 m-hide">
                <img src="assets/img/banner-home.svg" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>
      </div>


      <section className="latest-updates bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h2>What's New</h2>
              <p>Stay updated and informed on the top law exams-their registrations, admit cards, last dates and more</p>
            </div>

            <div className="col-lg-6 offset-lg-1">
              <div className="demo5 demof">
                <ul>
                  <li>
                    <span>CLAT</span>
                    <p>Common Law Admission Test (CLAT) 2025 will be conducted on Sunday, December 1, 2024, from 2 - 4 PM.</p>

                  </li>

                  <li>
                    <span>MHCET</span>
                    <p>MAH-CET(5 Yr. LL.B) exam scheduled on 30 May 2024.<a href="https://cetcell.mahacet.org/" target="_blank" rel="nofollow"> Apply here.</a></p>

                  </li>


                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="achievers">
        <div className="container">

          <div className="row">
            <div className="col-lg-3 col-sm-12">
              <div className="lft">
                <h5 className="brand-orange">Results</h5>
                <h2>Top Achievers</h2>
                <p>17+ years of proven and consistent track record of student success and student progress</p>

                <p className="clat-ailet"><strong>CLAT/AILET 2024 Achievers</strong></p>

              </div>
            </div>
            <div className="col-lg-9 col-sm-12">
              <div className="rgt">
                <div className="testmonials-pull">

                  <div className="regular slider">

                    <div className="col-lg-3">

                      <div className="single-testimonial-style3">
                        <div className="inner-content">
                          <div className="client-info">
                            <div className="image"> <img src="assets/img/top-achievers/Pradhyot-Shah.webp" /> </div>
                            <div className="title">
                              CLAT - AIR <span>2</span>
                            </div>
                            <h3>Pradhyot Shah</h3>
                            <h6>CL ID <span className="brand-orange">30661072</span></h6>
                          </div>
                          <div></div>
                        </div>
                      </div>

                      <div className="single-testimonial-style3">
                        <div className="inner-content">
                          <div className="client-info">
                            <div className="image"> <img src="assets/img/top-achievers/Diya-Agrawal.webp" /> </div>
                            <div className="title">
                              AILET - AIR <span>1</span>
                            </div>
                            <h3>Diya Agrawal</h3>
                            <h6>CL ID <span className="brand-orange">30262917</span></h6>
                          </div>
                          <div></div>
                        </div>
                      </div>

                    </div>

                    <div className="col-lg-3">

                      <div className="single-testimonial-style3">
                        <div className="inner-content">
                          <div className="client-info">
                            <div className="image"> <img src="assets/img/top-achievers/Pragnya-Amireddy.webp" /> </div>
                            <div className="title">
                              CLAT - AIR <span>4</span>
                            </div>
                            <h3>Pragnya Amireddy</h3>
                            <h6>CL ID <span className="brand-orange">11827264</span></h6>
                          </div>
                          <div></div>
                        </div>
                      </div>

                      <div className="single-testimonial-style3">
                        <div className="inner-content">
                          <div className="client-info">
                            <div className="image"> <img src="assets/img/top-achievers/Nandita-Matolli.webp" /> </div>
                            <div className="title">
                              AILET - AIR <span>3</span>
                            </div>
                            <h3>Nandita Matolli</h3>
                            <h6>CL ID <span className="brand-orange">30661355</span></h6>
                          </div>
                          <div></div>
                        </div>
                      </div>

                    </div>

                    <div className="col-lg-3">

                      <div className="single-testimonial-style3">
                        <div className="inner-content">
                          <div className="client-info">
                            <div className="image"> <img src="assets/img/top-achievers/Ashutosh-Kar.webp" /> </div>
                            <div className="title">
                              CLAT - AIR <span>10</span>
                            </div>
                            <h3>Ashutosh Kar</h3>
                            <h6>CL ID <span className="brand-orange">11913164</span></h6>
                          </div>
                          <div></div>
                        </div>
                      </div>

                      <div className="single-testimonial-style3">
                        <div className="inner-content">
                          <div className="client-info">
                            <div className="image"> <img src="assets/img/top-achievers/Aanya-Dhandha.webp" /> </div>
                            <div className="title">
                              AILET - AIR <span>4</span>
                            </div>
                            <h3>Aanya Dhandha</h3>
                            <h6>CL ID <span className="brand-orange">11947087</span></h6>
                          </div>
                          <div></div>
                        </div>
                      </div>

                    </div>

                    <div className="col-lg-3">

                      <div className="single-testimonial-style3">
                        <div className="inner-content">
                          <div className="client-info">
                            <div className="image"> <img src="assets/img/top-achievers/dev-shanker.webp" /> </div>
                            <div className="title">
                              CLAT - AIR <span>12</span>
                            </div>
                            <h3>Dev Shanker</h3>
                            <h6>CL ID <span className="brand-orange">11821518</span></h6>
                          </div>
                          <div></div>
                        </div>
                      </div>

                      <div className="single-testimonial-style3">
                        <div className="inner-content">
                          <div className="client-info">
                            <div className="image"> <img src="assets/img/top-achievers/Divas.webp" /> </div>
                            <div className="title">
                              AILET - AIR <span>6</span>
                            </div>
                            <h3>Divas Upadhyay</h3>
                            <h6>CL ID <span className="brand-orange">11901292</span></h6>
                          </div>
                          <div></div>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>



          </div>


          <div className="media_banner">
            <div className="row">
              <div className="col-lg-3 col-sm-4 col-12">
                <div className="media_image">
                  <a href="https://bit.ly/486WV7A" target="_blank" tabIndex="-1" previewlistener="true">
                    <img className="img-responsive" src="https://clsite-file1.s3.amazonaws.com/7214_vidya-banner-8-12-23.gif"
                      alt="" title="" />  </a>
                </div>
              </div>

              <div className="col-lg-3 col-sm-4 col-12">
                <div className="media_image">
                  <a href="https://www.careerlauncher.com/law-admissions-alliance/index.html?utm_source=careerlauncher&amp;utm_medium=banner" target="_blank" tabIndex="-1" previewlistener="true">
                    <img className="img-responsive" src="https://clsite-file1.s3.amazonaws.com/7214_allaince-law12-3-2024.gif"
                      alt="" title="" style={{ border: "solid 1px #eee" }} />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-sm-4 col-12">
                <div className="media_image">
                  <a href="https://www.careerlauncher.com/admissions-vmls/index.html" target="_blank" tabIndex="-1" previewlistener="true">
                    <img className="img-responsive"
                      src="assets/img/vmls-6-1-2024.gif" alt="" title="" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-sm-4 col-12">
                <div className="media_image">
                  <a href="https://www.careerlauncher.com/gls-university/index.html" target="_blank" tabIndex="-1" previewlistener="true">
                    <img className="img-responsive" src="assets/img/7214_gls-10-6-2023.webp" alt="" title="" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-sm-4 col-12">
                <div className="media_image">
                  <a href="https://bit.ly/3F6i1Xu" target="_blank" tabIndex="-1" previewlistener="true">
                    <img className="img-responsive" src="https://clsite-file1.s3.amazonaws.com/7214_iiuler-6-10-2023.gif" alt="" title="" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>









      <section className="featured-in bg-grey">
        <div className="container">
          <h6>Lawentrance.com featured in</h6>
          <div className="testmonials-pull">
            <div className="regular1 slider">
              <div className="faetured"><img src="assets/img/The_Indian_Express_logo.webp" className="img-fluid" /></div>
              <div className="faetured"><img src="assets/img/India_today_new.webp" className="img-fluid" /></div>
              <div className="faetured"><img src="assets/img/Hindustan_Times_logo.webp" className="img-fluid" /></div>

            </div>
          </div>
        </div>
      </section>







      <section className="success">
        <div className="container">
          <div className="testmonials-pull">

            <div className="suces slider">

              <div className="success-story">
                <p>A friend recommended CL-LST to me. Although I comparatively started late, fortunately, my first className was with one of my favorite teachers, which made everything easier.</p>
                <div className="author">
                  <img src="assets/img/top-achievers/Pradhyot-Shah.jpg" />
                </div>
                <span>
                  <h5>Pradhyot Shah</h5>
                  <h6>AIR 2 CLAT | CL Id - 30661072</h6>
                </span>
              </div>

              <div className="success-story">
                <p>I was confident about my preparation but never expected to secure rank 4 in CLAT. I believe this is because of the adept guidance and quality material provided by CL-LST.
                </p>
                <div className="author">
                  <img src="assets/img/top-achievers/Pragnya-Amireddy.jpg" />
                </div>
                <span>
                  <h5>Pragnya Amireddy</h5>
                  <h6>AIR 4 - CLAT 2024 | CL Id - 11827264</h6>
                </span>
              </div>

              <div className="success-story">
                <p>I joined CL-LST around March after my 11th exams. I was highly satisfied with the comprehensive curriculum and the well-versed faculties, as they were always available to resolve my queries. </p>
                <div className="author">
                  <img src="assets/img/top-achievers/Diya-Agrawal.jpg" />
                </div>
                <span>
                  <h5>Diya Agrawal</h5>
                  <h6>AIR 1 - AILET 2024 | CL Id - 30262917</h6>
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>






      <section className="courses-slide bg-grey">
        <div className="container"><div className="position-relative">
          <h5 className="brand-orange">Courses</h5>
          <h2>Most Popular Courses</h2>
          <a href="/courses.jsp" className="btn cta all-couses">View All Courses</a>
        </div>
          <p>Our story begins with your trust in us and ends with your progress. We do not believe that one size fits all, and that is showcased in our course offerings. From CLAT and AILET dedicated courses to courses catering to other law entrance tests, including SLAT, NMIMS LAT, MAH-CET, and PU Entrance exams; our course structures cover it all.</p>
          <div className="testmonials-pull">
            <div className="cousrs slider">
              <div className="mentor-descrip">
                <img src="https://clsite-file1.s3.amazonaws.com/7890_Law-Express-2024.jpg" />
                <h5><span>Target Year: 2024</span></h5>
                <hr />
                <a href="/course-detail.jsp?prodId=%20Ds30CTQOKg%3D&prodCategory=LST&prodGroup=Online%20Coaching&rt=&rl=">
                  <h4>LAW Express 2024 Online</h4>
                </a>
                <p>Ideal for students preparing for OLETs* (SLAT, NMIMS-LAT, MAH-CET, etc.)</p>
                <hr />
                <div className="d-flex align-items-center three-btns">
                  <a href="" className="btn blue">Online</a><a href="" className="btn pink">Live</a>
                </div>
              </div>
              <div className="mentor-descrip">
                <img src="assets/img/LST-Span-Classroom.jpg" />
                <h5><span>Target Year: 2025/2026</span></h5>
                <hr />
                <a href="/courses.jsp?type=Classroom"><h4>LST Span</h4></a><p>Ideal for students looking for face-to-face preparation of CLAT, AILET, & OLETs* within 2 years</p><hr /><div className="d-flex align-items-center three-btns"><a href="" className="btn purple">Offline</a>
                </div>
              </div>
              <div className="mentor-descrip">
                <img src="https://clsite-file1.s3.amazonaws.com/7890_LST-Span-Premium-Online.jpg" />
                <h5><span>Target Year: 2026</span></h5>
                <hr />
                <a href="/course-detail.jsp?prodId=2g4R36nHHZA%3D&prodCategory=LST&prodGroup=Online%20Coaching&rt=&rl=">
                  <h4>LST Span Premium Online</h4></a><p>Ideal for students preparing for CLAT, AILET, & OLETs* within 2 years</p><hr /><div className="d-flex align-items-center three-btns"><a href="" className="btn blue">Online</a>
                  <a href="" className="btn pink">Live</a>
                </div>
              </div>
              <div className="mentor-descrip">
                <img src="assets/img/Law-Express-Classroom.jpg" />
                <h5><span>Target Year: 2024</span></h5>
                <hr />
                <a href="/courses.jsp?type=Classroom">
                  <h4>Law Express</h4>
                </a>
                <p>Ideal for students looking for face-to-face preparation of OLETs* (SLAT, NMIMS-LAT, MAH-CET, etc.)</p>
                <hr />
                <div className="d-flex align-items-center three-btns">
                  <a href="" className="btn purple">Offline</a>
                </div>
              </div>
              <div className="mentor-descrip">
                <img src="https://clsite-file1.s3.amazonaws.com/7890_LST-Bullet-Premium-Online.jpg.jpg" />
                <h5><span>Target Year: 2025</span></h5>
                <hr />
                <a href="/course-detail.jsp?prodId=GF6pvRT3d%2Fo%3D&prodCategory=LST&prodGroup=Online%20Coaching&rt=&rl=">
                  <h4>LST Bullet Premium Online</h4>
                </a>
                <p>Ideal for students retaking CLAT, AILET, & OLETs*</p>
                <hr />
                <div className="d-flex align-items-center three-btns">
                  <a href="" className="btn blue">Online</a><a href="" className="btn pink">Live</a>
                </div>
              </div>
              <div className="mentor-descrip">
                <img src="https://clsite-file1.s3.amazonaws.com/7890_LST2025TestSeries.jpg" />
                <h5>
                  <span>Target Year: 2025</span>
                </h5>
                <hr />
                <a href="/course-detail.jsp?prodId=UxJ7ugUUy3A%3D&prodCategory=LST&prodGroup=Test%20Series&rt=&rl=">
                  <h4>LST 2025 Test Series</h4>
                </a>
                <p>Ideal for students looking for mock test series of CLAT, AILET, & OLETs*</p>
                <hr />
                <div className="d-flex align-items-center three-btns">
                  <a href="" className="btn purple">Offline</a>
                </div>
              </div>
              <div className="mentor-descrip">
                <img src="assets/img/LST-Plus-Classroom.jpg" />
                <h5><span>Target Year: 2025</span></h5>
                <hr />
                <a href="/courses.jsp?type=Classroom">
                  <h4>LST Plus</h4>
                </a>
                <p>Ideal for students looking for face-to-face preparation of CLAT, AILET, & OLETs* within 1 year</p>
                <hr />
                <div className="d-flex align-items-center three-btns">
                  <a href="" className="btn purple">Offline</a>
                </div>
              </div>
              <div className="mentor-descrip">
                <img src="https://clsite-file1.s3.amazonaws.com/7890_CLAT-Plus-Premium-Online.jpg" />
                <h5><span>Target Year: 2025</span></h5>
                <hr />
                <a href="/course-detail.jsp?prodId=FPWhN1xcHsY%3D&prodCategory=LST&prodGroup=Online%20Coaching&rt=&rl=">
                  <h4>LST Plus Premium Online</h4>
                </a>
                <p>Ideal for students preparing for CLAT, AILET, & OLETs* within 1 year</p>
                <hr />
                <div className="d-flex align-items-center three-btns">
                  <a href="" className="btn blue">Online</a><a href="" className="btn pink">Live</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>










      <section className="why-choose">
        <div className="container">
          <h5 className="brand-orange">Why Us?</h5>
          <h2>Student Testimonials</h2>
          <p>We choose our students to speak for us.</p>

          <div className="testmonials-pull">
            <div className="choose-why slider slick-initialized slick-slider"><button className="slick-prev slick-arrow" aria-label="Previous" type="button" >Previous</button><div className="slick-list draggable" style={{ padding: "0px 120px" }}><div className="slick-track" style={{ opacity: "1", width: "6840px", transform: "translate3d(-2052px, 0px, 0px)" }}><div className="slick-slide slick-cloned" data-slick-index="-4" id="" aria-hidden="true" tabIndex="-1" style={{ width: "312px" }}><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>I always looked forward to the Quant &amp; English classes of CL-LST. The faculty helped us to enjoy the
                  preparation process rather than just cracking an exam. It helped me keep my cool for the AILET exam even
                  when my CLAT exam did not go as I expected.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Nandita-Matolli.webp" /> </div>
                  <div className="title">
                    AILET- AIR <span>3</span>
                  </div>
                  <h3>Nandita Matolli </h3>
                  <p><strong>CL Id - 30661355</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="-3" id="" aria-hidden="true" tabIndex="-1" style={{ width: "312px" }}><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>I took the 2-year online course with LST. The faculty and the comprehensive study material, especially
                  monthly GK magazines, helped me a lot. Attempting mocks regularly &amp; comprehensively analyzing them
                  contributed to 25-40% growth in my marks. It reflected in the exam as well.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Aanya-Dhandha.webp" /> </div>
                  <div className="title">
                    AILET- AIR <span>4</span>
                  </div>
                  <h3>Aanya Dhandha </h3>
                  <p><strong>CL Id - 11947087</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="-2" id="" aria-hidden="true" tabIndex="-1" style={{ width: "312px" }}><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>Law Entrance Examinations require consistent practice, clarity on approach to problem-solving, and
                  adequate guidance. With each mock I attempted, I nurtured the habit of problem-solving from the
                  examiner's perspective. CL-LST faculties were always there to guide me during this process.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Divas-Upadhyay.webp" /> </div>
                  <div className="title">
                    AILET- AIR <span>6</span>
                  </div>
                  <h3>Divas Upadhyay</h3>
                  <p><strong>CL Id - 11901292</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" tabIndex="-1" style={{ width: "312px" }}><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>I believe my success is majorly attributed to the rigorous curriculum of the CL-LST course and the competitive culture of the coaching center, which never let me settle and motivated me to move forward. My mentors helped me with the mental part of the exam as well.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Preeyal-Seghal.webp" /> </div>
                  <div className="title">
                    AILET- AIR <span>12</span>
                  </div>
                  <h3>Preeyal Seghal</h3>
                  <p><strong>CL Id - 30260949</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide" data-slick-index="0" aria-hidden="true" style={{ width: "312px" }} tabIndex="-1"><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>A friend recommended CL-LST to me. Although I started late compared to others, fortunately, my first
                  class was with one of my favorite teachers, which made everything easier. With the amount of support I
                  got from the institute at all stages of my journey, I was able to ace the exam.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Pradhyot-Shah.webp" /> </div>
                  <div className="title">
                    CLAT- AIR <span>2</span>
                  </div>
                  <h3>Pradhyot Shah</h3>
                  <p><strong>CL Id - 30661072</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: "312px" }} tabIndex="-1"><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>I was confident about my preparation, but never expected to secure rank 4 in CLAT. I believe this is
                  because of the adept guidance &amp; quality material provided by CL-LST, which helped me adapt to the new
                  exam pattern. Despite the uncertainties, I was confident of my preparation.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Pragnya-Amireddy.webp" /> </div>
                  <div className="title">
                    CLAT- AIR <span>4</span>
                  </div>
                  <h3>Pragnya Amireddy</h3>
                  <p><strong>CL Id - 11827264</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style={{ width: "312px" }} tabIndex="-1"><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>I believe attempting mocks was the essential part of my strategy. I focused on analyzing the mock after
                  each attempt, which made me realize my mistakes, and then helped me capitalize on the learnings after
                  each attempt, which was aided by guidance from CL-LST faculties.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Ashutosh-Kar.webp" /> </div>
                  <div className="title">
                    CLAT- AIR <span>10</span>
                  </div>
                  <h3>Ashutosh Kar</h3>
                  <p><strong>CL Id - 11913164</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide slick-current slick-active slick-center" data-slick-index="3" aria-hidden="false" style={{ width: "312px" }}><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>I joined CL-LST around March after my 11th exams. The entire curriculum was quite comprehensive, aided
                  by well-versed faculties at the center. I was highly satisfied with the faculty, as they were available
                  to resolve my queries at any time of the day.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Diya-Agrawal.webp" /> </div>
                  <div className="title">
                    AILET- AIR <span>1</span>
                  </div>
                  <h3>Diya Agrawal</h3>
                  <p><strong>CL Id - 30262917</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide slick-active" data-slick-index="4" aria-hidden="false" style={{ width: "312px" }}><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>I always looked forward to the Quant &amp; English classes of CL-LST. The faculty helped us to enjoy the
                  preparation process rather than just cracking an exam. It helped me keep my cool for the AILET exam even
                  when my CLAT exam did not go as I expected.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Nandita-Matolli.webp" /> </div>
                  <div className="title">
                    AILET- AIR <span>3</span>
                  </div>
                  <h3>Nandita Matolli </h3>
                  <p><strong>CL Id - 30661355</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide" data-slick-index="5" aria-hidden="true" style={{ width: "312px" }}><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>I took the 2-year online course with LST. The faculty and the comprehensive study material, especially
                  monthly GK magazines, helped me a lot. Attempting mocks regularly &amp; comprehensively analyzing them
                  contributed to 25-40% growth in my marks. It reflected in the exam as well.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Aanya-Dhandha.webp" /> </div>
                  <div className="title">
                    AILET- AIR <span>4</span>
                  </div>
                  <h3>Aanya Dhandha </h3>
                  <p><strong>CL Id - 11947087</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide" data-slick-index="6" aria-hidden="true" style={{ width: "312px" }} tabIndex="-1"><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>Law Entrance Examinations require consistent practice, clarity on approach to problem-solving, and
                  adequate guidance. With each mock I attempted, I nurtured the habit of problem-solving from the
                  examiner's perspective. CL-LST faculties were always there to guide me during this process.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Divas-Upadhyay.webp" /> </div>
                  <div className="title">
                    AILET- AIR <span>6</span>
                  </div>
                  <h3>Divas Upadhyay</h3>
                  <p><strong>CL Id - 11901292</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide" data-slick-index="7" aria-hidden="true" style={{ width: "312px" }} tabIndex="-1"><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>I believe my success is majorly attributed to the rigorous curriculum of the CL-LST course and the competitive culture of the coaching center, which never let me settle and motivated me to move forward. My mentors helped me with the mental part of the exam as well.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Preeyal-Seghal.webp" /> </div>
                  <div className="title">
                    AILET- AIR <span>12</span>
                  </div>
                  <h3>Preeyal Seghal</h3>
                  <p><strong>CL Id - 30260949</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="8" id="" aria-hidden="true" tabIndex="-1" style={{ width: "312px" }}><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>A friend recommended CL-LST to me. Although I started late compared to others, fortunately, my first
                  class was with one of my favorite teachers, which made everything easier. With the amount of support I
                  got from the institute at all stages of my journey, I was able to ace the exam.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Pradhyot-Shah.webp" /> </div>
                  <div className="title">
                    CLAT- AIR <span>2</span>
                  </div>
                  <h3>Pradhyot Shah</h3>
                  <p><strong>CL Id - 30661072</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="9" id="" aria-hidden="true" tabIndex="-1" style={{ width: "312px" }}><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>I was confident about my preparation, but never expected to secure rank 4 in CLAT. I believe this is
                  because of the adept guidance &amp; quality material provided by CL-LST, which helped me adapt to the new
                  exam pattern. Despite the uncertainties, I was confident of my preparation.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Pragnya-Amireddy.webp" /> </div>
                  <div className="title">
                    CLAT- AIR <span>4</span>
                  </div>
                  <h3>Pragnya Amireddy</h3>
                  <p><strong>CL Id - 11827264</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="10" id="" aria-hidden="true" tabIndex="-1" style={{ width: "312px" }}><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>I believe attempting mocks was the essential part of my strategy. I focused on analyzing the mock after
                  each attempt, which made me realize my mistakes, and then helped me capitalize on the learnings after
                  each attempt, which was aided by guidance from CL-LST faculties.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Ashutosh-Kar.webp" /> </div>
                  <div className="title">
                    CLAT- AIR <span>10</span>
                  </div>
                  <h3>Ashutosh Kar</h3>
                  <p><strong>CL Id - 11913164</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="11" id="" aria-hidden="true" tabIndex="-1" style={{ width: "312px" }}><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>I joined CL-LST around March after my 11th exams. The entire curriculum was quite comprehensive, aided
                  by well-versed faculties at the center. I was highly satisfied with the faculty, as they were available
                  to resolve my queries at any time of the day.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Diya-Agrawal.webp" /> </div>
                  <div className="title">
                    AILET- AIR <span>1</span>
                  </div>
                  <h3>Diya Agrawal</h3>
                  <p><strong>CL Id - 30262917</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="12" id="" aria-hidden="true" tabIndex="-1" style={{ width: "312px" }}><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>I always looked forward to the Quant &amp; English classes of CL-LST. The faculty helped us to enjoy the
                  preparation process rather than just cracking an exam. It helped me keep my cool for the AILET exam even
                  when my CLAT exam did not go as I expected.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Nandita-Matolli.webp" /> </div>
                  <div className="title">
                    AILET- AIR <span>3</span>
                  </div>
                  <h3>Nandita Matolli </h3>
                  <p><strong>CL Id - 30661355</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="13" id="" aria-hidden="true" tabIndex="-1" style={{ width: "312px" }}><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>I took the 2-year online course with LST. The faculty and the comprehensive study material, especially
                  monthly GK magazines, helped me a lot. Attempting mocks regularly &amp; comprehensively analyzing them
                  contributed to 25-40% growth in my marks. It reflected in the exam as well.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Aanya-Dhandha.webp" /> </div>
                  <div className="title">
                    AILET- AIR <span>4</span>
                  </div>
                  <h3>Aanya Dhandha </h3>
                  <p><strong>CL Id - 11947087</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="14" id="" aria-hidden="true" tabIndex="-1" style={{ width: "312px" }}><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>Law Entrance Examinations require consistent practice, clarity on approach to problem-solving, and
                  adequate guidance. With each mock I attempted, I nurtured the habit of problem-solving from the
                  examiner's perspective. CL-LST faculties were always there to guide me during this process.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Divas-Upadhyay.webp" /> </div>
                  <div className="title">
                    AILET- AIR <span>6</span>
                  </div>
                  <h3>Divas Upadhyay</h3>
                  <p><strong>CL Id - 11901292</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="15" id="" aria-hidden="true" tabIndex="-1" style={{ width: "312px" }}><div><div className="single-testimonial-style3" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="open-div">
                <p>I believe my success is majorly attributed to the rigorous curriculum of the CL-LST course and the competitive culture of the coaching center, which never let me settle and motivated me to move forward. My mentors helped me with the mental part of the exam as well.</p>
              </div>
              <div className="inner-content">
                <div className="client-info">
                  <div className="image"> <img src="assets/img/top-achievers/Preeyal-Seghal.webp" /> </div>
                  <div className="title">
                    AILET- AIR <span>12</span>
                  </div>
                  <h3>Preeyal Seghal</h3>
                  <p><strong>CL Id - 30260949</strong></p>
                </div>
                <div></div>
              </div>
            </div></div></div></div></div><button className="slick-next slick-arrow" aria-label="Next" type="button" >Next</button></div>
          </div>



        </div>
      </section>













      <section className="law-exams bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="brand-orange">Exams</h5>
              <h2>Law Entrance Exams</h2>
              <p>Stay informed about these top law exams for a successful career in law. We've gathered key information to aid your understanding.</p>
              <div className="row">

                <div className="col-lg-3 col-6">
                  <div className="law-box">
                    <h4>CLAT</h4>
                    <a href="/clat/"> <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="law-box">
                    <h4>AILET</h4>
                    <a href="/ailet/"> <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="law-box">
                    <h4>LSAT&mdash;India&trade;</h4>
                    <a href="/lsat-india/"> <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="law-box">
                    <h4>SLAT</h4>
                    <a href="/slat/"> <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="law-box">
                    <h4>MAH-CET (5 Yr. LL.B.)</h4>
                    <a href="/mhcet/"> <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="law-box">
                    <h4>NMIMS</h4>
                    <a href="/nlat/"> <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="law-box">
                    <h4>ET-Christ Univ.</h4>
                    <a href="/"> <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="law-box">
                    <h4>Other law entrance exams</h4>
                    <a href="/exams-colleges/"> <i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>



              </div>

            </div>





          </div>


        </div>
      </section>






















      <section className="free-assesment">
        <div className="container">
          <h5 className="brand-orange">Law Schools</h5>
          <h2>Law Schools in India</h2>
          <p>Get into India's finest law schools through CLAT, AILET, and OLETs.</p>
          <p>From NLUs to GLC to JGLS, & more, law entrance exams are the backbone of these top law schools in India, and taking these exams and the results in those exams will define your legal journey. </p>
          <div className="gap-2 d-md-block">
            <a href="/law-schools/" className="btn cta">Explore more</a>
          </div>
        </div>
      </section>


      <section className="law-exams bullet bg-grey">
        <div className="container">
          <div className="row">

            <div className="col-lg-8">
              <h5 className="brand-orange">Our Centers</h5>

              <h2>Experience learning at our centers near you</h2>
              <p>Our 200+ centers, spread across the nation, are more than just classNamerooms. They are hubs of academic excellence where dreams are nurtured, skills are honed, & futures are built.</p>
              <ul>
                <li>Personalized learning from top educators in your city</li>
                <li>State-of-the-Art Facilities with latest technologies</li>
                <li>Unparalleled in-person experience</li>
              </ul>
              <a href="/contactus.jsp" className="btn cta margin-top-30">Find a center near me <i className="fa fa-angle-right"></i></a>

            </div>

            <div className="col-lg-4 top-m">
              <img src="assets/img/india.webp" className="img-fluid" />

            </div>

          </div>

        </div>
      </section>



      <section className="comprehensive-writing">
        <div className="container">
          <h5 className="brand-orange">Blogs</h5>
          <h2>The Legal Blogs</h2>

          <p>Cracking CLAT demands determination, guidance, and support. Explore CL-LST experts' blogs, featuring insights from previous toppers, for a winning strategy.</p>

          <div className="row margin-top-30">


            <div className="col-lg-6 col-sm-6">
              <div className="comprehensive-box">
                <div className="row">
                  <div className="col-lg-6">
                    <img src="//www.careerlauncher.com/logs/news_content/7740/12012024/pexels-ekaterina-bolovtsova-60777971.jpg" />
                  </div>

                  <div className="col-lg-6">

                    <h3><a href='/blogs/balancing-ug-law-entrances-and-board-preparation-14764/'>Balancing UG Law Entrances and Board Preparation</a></h3>
                    <p>Preparing for law entrances while juggling between your board examinations can be a challenging...</p>
                  </div>
                </div>

              </div>
            </div>


            <div className="col-lg-6 col-sm-6">
              <div className="comprehensive-box">
                <div className="row">
                  <div className="col-lg-6">
                    <img src="//www.careerlauncher.com/logs/news_content/7740/12012024/pexels-lil-artsy-1925536.jpg" />
                  </div>

                  <div className="col-lg-6">

                    <h3><a href='/blogs/preparation-tips-for-slat-2024-14762/'>Preparation Tips for SLAT 2024</a></h3>
                    <p>Here are some tips and tricks that can aid you in your preparation journey for cracking SLAT 2024.</p>
                  </div>
                </div>

              </div>
            </div>


            <div className="col-lg-6 col-sm-6">
              <div className="comprehensive-box">
                <div className="row">
                  <div className="col-lg-6">
                    <img src="//www.careerlauncher.com/logs/news_content/8022/28022024/group-high-school-students-taking-test-classNameroom.jpg" />
                  </div>

                  <div className="col-lg-6">

                    <h3><a href='/blogs/the-role-of-mocks-to-ace-law-entrance-exams-15064/'>The Role of Mocks to Ace Law Entrance Exams</a></h3>
                    <p>Mock tests is an effective tool allowing aspirants experience simulated versions of the actual...</p>
                  </div>
                </div>

              </div>
            </div>


            <div className="col-lg-6 col-sm-6">
              <div className="comprehensive-box">
                <div className="row">
                  <div className="col-lg-6">
                    <img src="//www.careerlauncher.com/logs/news_content/7740/22012024/brendan-church-pKeF6Tt3c08-unsplash.jpg" />
                  </div>

                  <div className="col-lg-6">

                    <h3><a href='/blogs/how-to-choose-the-right-law-entrance-exam-14862/'>How to Choose the Right Law Entrance Exam?</a></h3>
                    <p>Here are a few steps to help you choose which one is the right law entrance examination for you.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="text-center">
              <a href='/blogs/' className="btn cta">Show More</a>
            </div>


          </div>
        </div>

      </section>














      <section className="our-mentors bg-grey">
        <div className="container">
          <h2>Our Mentors</h2>

          <div className="testmonials-pull">
            <div className="regular-mentor slider">

              <div className="inner">
                <img src="assets/img/gautampuri.webp" />
                <div className="product-info">
                  <h3>Gautam Puri</h3>
                  <h6>Teaching experience of 20+ years</h6>
                </div>
              </div>

              <div className="inner">
                <img src="assets/img/Siddharth-Mehta.webp" />
                <div className="product-info">
                  <h3>Siddharth Mehta</h3>
                  <h6>Teaching experience of 11 years</h6>
                </div>
              </div>

              <div className="inner">
                <img src="assets/img/Suhasini.webp" />
                <div className="product-info">
                  <h3>Dr. Suhasini Kashyap</h3>
                  <h6>Teaching experience of 10+ years</h6>
                </div>
              </div>


              <div className="inner">
                <img src="assets/img/Gejo-Sreenivasan.webp" />
                <div className="product-info">
                  <h3>Gejo Sreenivasan</h3>
                  <h6>Teaching experience of 20+ years</h6>
                </div>
              </div>

              <div className="inner">
                <img src="assets/img/amitendra.webp" />
                <div className="product-info">
                  <h3>Amitendra Kumar</h3>
                  <h6>Teaching experience of 18+ years</h6>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>











      <section className="toppers-talk">
        <div className="container">
          <h2>Toppers Talk</h2>
          {/* <!-- <p className="withd"></p> --> */}

          <div className="testmonials-pull">
            <div className="regular-mentorss slider slick-initialized slick-slider"><button className="slick-prev slick-arrow" aria-label="Previous" type="button" >Previous</button><div className="slick-list draggable"><div className="slick-track" style={{ opacity: "1", width: "7258px", transform: "translate3d(-1146px, 0px, 0px)" }}><div className="slick-slide slick-cloned" data-slick-index="-3" id="" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="ETKCvcruDJk"><div data-id="ETKCvcruDJk"><img src="https://i.ytimg.com/vi/ETKCvcruDJk/hqdefault.jpg" className="gm-lazy gm-observing gm-observing-cb" /><div className="play"></div></div></div>
              </div>
              <h3>Aanya Dhandha</h3>
              <h5>AIR 4 - AILET 2024 | AIR 86 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="-2" id="" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="MHf1USgG688"><div data-id="MHf1USgG688"><img src="https://i.ytimg.com/vi/MHf1USgG688/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Divas Upadhyay</h3>
              <h5>AIR 6 - AILET 2024 | AIR 38 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="o2H7RJ_QnsI"><div data-id="o2H7RJ_QnsI"><img src="https://i.ytimg.com/vi/o2H7RJ_QnsI/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Preeyal Seghal</h3>
              <h5>AIR 12 - AILET 2024 | AIR 550 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="LZhL-Qj0Hrs"><div data-id="LZhL-Qj0Hrs"><img src="https://i.ytimg.com/vi/LZhL-Qj0Hrs/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Pradhyot Shah</h3>
              <h5>AIR 2 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="OZ7SKm4wwHQ"><div data-id="OZ7SKm4wwHQ"><img src="https://i.ytimg.com/vi/OZ7SKm4wwHQ/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Pragnya Amireddy</h3>
              <h5>AIR 4 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="yt7NQO0qTu4"><div data-id="yt7NQO0qTu4"><img src="https://i.ytimg.com/vi/yt7NQO0qTu4/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Ashutosh Kar</h3>
              <h5>AIR 10 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide" data-slick-index="3" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="hd91XOJJryQ"><div data-id="hd91XOJJryQ"><img src="https://i.ytimg.com/vi/hd91XOJJryQ/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Diya Agrawal</h3>
              <h5>AIR 1 - AILET 2024 | AIR 344 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide" data-slick-index="4" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="jYOr4XvNepU"><div data-id="jYOr4XvNepU"><img src="https://i.ytimg.com/vi/jYOr4XvNepU/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Nandita Matolli</h3>
              <h5>AIR 3 - AILET 2024</h5>
            </div></div></div><div className="slick-slide" data-slick-index="5" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="ETKCvcruDJk"><div data-id="ETKCvcruDJk"><img src="https://i.ytimg.com/vi/ETKCvcruDJk/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Aanya Dhandha</h3>
              <h5>AIR 4 - AILET 2024 | AIR 86 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide" data-slick-index="6" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="MHf1USgG688"><div data-id="MHf1USgG688"><img src="https://i.ytimg.com/vi/MHf1USgG688/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Divas Upadhyay</h3>
              <h5>AIR 6 - AILET 2024 | AIR 38 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide" data-slick-index="7" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="o2H7RJ_QnsI"><div data-id="o2H7RJ_QnsI"><img src="https://i.ytimg.com/vi/o2H7RJ_QnsI/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Preeyal Seghal</h3>
              <h5>AIR 12 - AILET 2024 | AIR 550 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="8" id="" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="LZhL-Qj0Hrs"><div data-id="LZhL-Qj0Hrs"><img src="https://i.ytimg.com/vi/LZhL-Qj0Hrs/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Pradhyot Shah</h3>
              <h5>AIR 2 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="9" id="" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="OZ7SKm4wwHQ"><div data-id="OZ7SKm4wwHQ"><img src="https://i.ytimg.com/vi/OZ7SKm4wwHQ/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Pragnya Amireddy</h3>
              <h5>AIR 4 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="10" id="" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="yt7NQO0qTu4"><div data-id="yt7NQO0qTu4"><img src="https://i.ytimg.com/vi/yt7NQO0qTu4/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Ashutosh Kar</h3>
              <h5>AIR 10 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="11" id="" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="hd91XOJJryQ"><div data-id="hd91XOJJryQ"><img src="https://i.ytimg.com/vi/hd91XOJJryQ/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Diya Agrawal</h3>
              <h5>AIR 1 - AILET 2024 | AIR 344 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="12" id="" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="jYOr4XvNepU"><div data-id="jYOr4XvNepU"><img src="https://i.ytimg.com/vi/jYOr4XvNepU/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Nandita Matolli</h3>
              <h5>AIR 3 - AILET 2024</h5>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="13" id="" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="ETKCvcruDJk"><div data-id="ETKCvcruDJk"><img src="https://i.ytimg.com/vi/ETKCvcruDJk/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Aanya Dhandha</h3>
              <h5>AIR 4 - AILET 2024 | AIR 86 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="14" id="" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="MHf1USgG688"><div data-id="MHf1USgG688"><img src="https://i.ytimg.com/vi/MHf1USgG688/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Divas Upadhyay</h3>
              <h5>AIR 6 - AILET 2024 | AIR 38 - CLAT 2024</h5>
            </div></div></div><div className="slick-slide slick-cloned" data-slick-index="15" id="" aria-hidden="true" tabIndex="-1" style={{ width: "352px" }}><div><div className="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div className="video-frame">
                <div className="youtube-player" data-id="o2H7RJ_QnsI"><div data-id="o2H7RJ_QnsI"><img src="https://i.ytimg.com/vi/o2H7RJ_QnsI/hqdefault.jpg" /><div className="play"></div></div></div>
              </div>
              <h3>Preeyal Seghal</h3>
              <h5>AIR 12 - AILET 2024 | AIR 550 - CLAT 2024</h5>
            </div></div></div></div></div><button className="slick-next slick-arrow" aria-label="Next" type="button" >Next</button></div>
          </div>
        </div>
      </section>











      <Faqs f="Home" />

      <section className="dfz-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">Unlock your Legal Career with Top Law Institutes | Avail Upto 60% OFF on Application Fees. <a href="https://bit.ly/3UnQGHn" target="_blank" className="btn12 btn btn-primary"> Apply Now</a></h3>
            </div>
          </div>
        </div>
      </section>



    
    </>
  )
}
