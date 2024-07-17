"use client"
import Faqs from "@/components/Faqs";
import { useState } from "react";

function Classroom_coaching() {

  var [mobile,setMobile]= useState()
  
  return (
    < >




      <section class="banner classroom-coaching">
        <div class="container">

          <nav aria-label="breadcrumb" vocab="https://schema.org/" typeof="BreadcrumbList">
            <ol class="breadcrumb">
              <li class="breadcrumb-item" property="itemListElement" typeof="ListItem">
                <a href="/" property="item" typeof="WebPage">
                  <span property="name">Home</span>
                </a>
                <meta property="position" content="1" />
              </li>

              <li class="breadcrumb-item active" aria-current="page" property="itemListElement" typeof="ListItem">
                <span property="name">Classroom Coaching</span>
                <meta property="position" content="2" />
              </li>
            </ol>
          </nav>

          <div class="row">
            <div class="col-lg-7">
              <h1>Classroom Coaching</h1>
              <h2>CLAT, AILET, SLAT, and other Law exams</h2>
              <ul>
                <li>Mentoring Sessions</li>
                <li>Topic tests and Mock tests</li>
                <li>Doubt solving beyond classroom</li>
              </ul>



            </div>

            <div class="col-lg-5" id="frms">
              <p>Join the classroom coaching to ace various law entrance exams. Attend classes with our expert
                faculty members, who have over 16 years of experience, enabling students to excel.</p>

              <form name="clForm" id="clForm" action="/api/addcounselling" class="d-flex flex-wrap margin-top-10" method="POST"
                >
               

                <div class="input-group mb-3">
                  <input class="form-control me-2" type="tel" name="mobile" id="mobile"
                  onChange={(e)=>setMobile(e.target.value)}
                    placeholder="Enter Mobile No." pattern="[6-9][0-9]{9}"
                    title="Mobile number should start with 6, 7, 8, or 9 and contain at least 10 digits."
                    required />
                </div>
                {/* <!--<button type="submit" class="btn cta w-100" value="Get FREE Counselling" onclick="sendOtp(1)">Get FREE Counselling </button> --> */}
                <input class="btn cta w-100" type="submit" value="Get FREE Counselling"  />
              </form>

            </div>
          </div>
        </div>
      </section>

      <section class="classroom-achiever detalts bg-grey">
        <div class="container">
          <h3 class="text-center">AIR 1 & 2 in CLAT/AILET 2024 was a CL-LST student.</h3>
          <div class="row">

            <div class="col-lg-2 col-6 offset-lg-4">
              <div class="single-testimonial-style3">
                <div class="inner-content">
                  <div class="client-info">
                    <div class="image"> <img src="/assets/img/top-achievers/Pradhyot-Shah.jpg" /> </div>
                    <div class="title">
                      CLAT - AIR <span>2</span>
                    </div>
                    <h3>Pradhyot Shah</h3>
                    <h6>CL ID <span class="brand-orange">30661072</span></h6>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

            <div class="col-lg-2 col-6">
              <div class="single-testimonial-style3">
                <div class="inner-content">
                  <div class="client-info">
                    <div class="image"> <img src="/assets/img/top-achievers/Diya-Agrawal.jpg" /> </div>
                    <div class="title">
                      AILET - AIR <span>1</span>
                    </div>
                    <h3>Diya Agrawal</h3>
                    <h6>CL ID <span class="brand-orange">30262917</span></h6>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section class="detalts">
        <div class="container">
          <div class="row">

            <div class="col-lg-12 bullet">
              <h2>How does our CLAT coaching help?</h2>
              <p>From comprehensive 2 year CLAT coaching to intensive crash courses, LST offers programs designed
                to meet the specific needs of all law aspirants.</p>

              <p>Our faculty members, experts in their own domains, provide students with personalized strategies
                to take some of the most difficult tests for law in the country.</p>

              <p>Taking mocks consistently is easily available with resources available online, but a thorough
                analysis of the same, and using it to the best of a candidate's advantage is what we provide in
                our CLAT coaching. In both online and offline
                classes, one can expect:</p>

              <ul>
                <li>Live sessions of 120 minutes each</li>
                <li>Upto 70 Mock tests and analyses</li>
                <li>5000+ Practice Questions</li>
                <li>Monthly Current Affairs compendium</li>
              </ul>

              <p>Additionally, a supportive peer group can yield the best results, which is evident with our
                toppers.</p>


            </div>
            {/* 
                <!-- <div class="col-lg-5">
<h3>What our students say</h3>
<div class="row">
  <div class="col-lg-6"><div class="reslt-videp"><img src="/assets/img/result-image.png" class="img-fluid"></div></div>
  <div class="col-lg-6 col-6"><div class="reslt-videp"><img src="/assets/img/result-image1.png" class="img-fluid"></div></div>
</div>
</div> --> */}

          </div>
        </div>
      </section>


      <section class="detalts classroom-highlight bg-grey">
        <div class="container">
          <h2>Benefits of LST's Coaching Programs</h2>
          <div class="row">

            <div class="col-lg-4">
              <div class="highlight">
                <img src="/assets/img/trusted.svg" />
                <h4>A Trusted Name with pioneer results</h4>
                <p>With toppers in CLAT & AILET year after year, LST is the trusted name for law students across
                  the country for their CLAT preparation.</p>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="highlight">
                <img src="/assets/img/mentoring.svg" />
                <h4>Individual Attention and Mentoring</h4>
                <p>At LST, the performance of every student counts. Our faculty members focus on the individual
                  needs of students and inspire and encourage them to reach their potential.</p>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="highlight">
                <img src="/assets/img/nationwide.svg" />
                <h4>Nationwide Test Series Program</h4>
                <p>Conducted across 100+ locations, LST's Test Series is the only national-level program in the
                  CLAT-coaching industry (for both English and Hindi mediums).</p>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="highlight">
                <img src="/assets/img/legal-update.svg" />
                <h4>Legal Updates & Quizzes</h4>
                <p>Our experts regularly update a series of articles, quizzes, and opinions on the most relevant
                  events happening around you to strengthen your GK.</p>
              </div>
            </div>



            <div class="col-lg-4">
              <div class="highlight">
                <img src="/assets/img/help.svg" />
                <h4>CL to Aid your CLAT Preparation</h4>
                <p>myLST is a powerful online tool that provides an analytics-driven performance breakdown of
                  your tests. Along with exam schedules, online tests, GK, and weekly legal updates, myLST has
                  all the features a law aspirant needs for their
                  CLAT preparation.</p>
              </div>
            </div>




          </div>

        </div>
      </section>

      <section class="success">
        <div class="container">
          <h2>Our Testimonials</h2>
          <div class="testmonials-pull">

            <div class="suces slider slick-initialized slick-slider"><div class="slick-list draggable"><div class="slick-track" style={{ opacity: "1", width: "4202px", transform: "translate3d(-1910px, 0px, 0px)" }}><div class="slick-slide slick-cloned" data-slick-index="-3" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="success-story" style={{ width: "100%", display: "inlineBlock" }}>
              <p>I was a part of CL's classroom program here in Jayanagar Center. I started my preparation very late and was not regular with the course prep. I heavily depended on CL's content and mocks which played a major role in my preparation.</p>
              <div class="author">
                <img src="/assets/img/Rohit-Hebbar.webp" />
              </div>
              <span>
                <h5>Rohit Hebbar</h5>
                <h6>AIR 11, AILET 2023</h6>
              </span>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="-2" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="success-story" style={{ width: "100%", display: "inlineBlock" }}>
              <p>I was a part of CL's two-year classroom program in Chandigarh. CL's team not only helped me with great content and interesting classes but also guidance in defining the right path for my career through career counselling sessions. </p>
              <div class="author">
                <img src="/assets/img/Chahat-Bhambri.webp" />
              </div>
              <span>
                <h5>Chahat Bhambri</h5>
                <h6>AIR 29, CLAT 2023</h6>
              </span>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="success-story" style={{ width: "100%", display: "inlineBlock" }}>
              <p>I I attended the online classes in 11th because of COVID and started preparing for the exam seriously in class 12th, under the two-year program at CL. I believe except one mock I've attempted all the mocks provided by CL.</p>
              <div class="author">
                <img src="/assets/img/Joy-Sanskar-Kalra.webp" />
              </div>
              <span>
                <h5>Joy Sanskar Kalra</h5>
                <h6>AIR 14, CLAT 2023</h6>
              </span>
            </div></div></div><div class="slick-slide" data-slick-index="0" aria-hidden="true" style={{ width: "352px" }} tabindex="-1"><div><div class="success-story" style={{ width: "100%", display: "inlineBlock" }}>
              <p>I was a part of CL's CR nuggets program that helped me structure my planning and my performance in CLAT and AILET. I attended all the online classes which covered most of the course and gave more than 40 CL's mocks before my final exams.</p>
              <div class="author">
                <img src="/assets/img/Navya-Nair.webp" />
              </div>
              <span>
                <h5>Navya Nair</h5>
                <h6>AIR 6, CLAT 2023</h6>
              </span>
            </div></div></div><div class="slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: "352px" }} tabindex="-1"><div><div class="success-story" style={{ width: "100%", display: "inlineBlock" }}>
              <p>I was a part of CL's classroom program here in Jayanagar Center. I started my preparation very late and was not regular with the course prep. I heavily depended on CL's content and mocks which played a major role in my preparation.</p>
              <div class="author">
                <img src="/assets/img/Rohit-Hebbar.webp" />
              </div>
              <span>
                <h5>Rohit Hebbar</h5>
                <h6>AIR 11, AILET 2023</h6>
              </span>
            </div></div></div><div class="slick-slide slick-current slick-active" data-slick-index="2" aria-hidden="false" style={{ width: "352px" }}><div><div class="success-story" style={{ width: "100%", display: "inlineBlock" }}>
              <p>I was a part of CL's two-year classroom program in Chandigarh. CL's team not only helped me with great content and interesting classes but also guidance in defining the right path for my career through career counselling sessions. </p>
              <div class="author">
                <img src="/assets/img/Chahat-Bhambri.webp" />
              </div>
              <span>
                <h5>Chahat Bhambri</h5>
                <h6>AIR 29, CLAT 2023</h6>
              </span>
            </div></div></div><div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style={{ width: "352px" }}><div><div class="success-story" style={{ width: "100%", display: "inlineBlock" }}>
              <p>I I attended the online classes in 11th because of COVID and started preparing for the exam seriously in class 12th, under the two-year program at CL. I believe except one mock I've attempted all the mocks provided by CL.</p>
              <div class="author">
                <img src="/assets/img/Joy-Sanskar-Kalra.webp" />
              </div>
              <span>
                <h5>Joy Sanskar Kalra</h5>
                <h6>AIR 14, CLAT 2023</h6>
              </span>
            </div></div></div><div class="slick-slide slick-cloned slick-active" data-slick-index="4" id="" aria-hidden="false" tabindex="-1" style={{ width: "352px" }}><div><div class="success-story" style={{ width: "100%", display: "inlineBlock" }}>
              <p>I was a part of CL's CR nuggets program that helped me structure my planning and my performance in CLAT and AILET. I attended all the online classes which covered most of the course and gave more than 40 CL's mocks before my final exams.</p>
              <div class="author">
                <img src="/assets/img/Navya-Nair.webp" />
              </div>
              <span>
                <h5>Navya Nair</h5>
                <h6>AIR 6, CLAT 2023</h6>
              </span>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="5" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="success-story" style={{ width: "100%", display: "inlineBlock" }}>
              <p>I was a part of CL's classroom program here in Jayanagar Center. I started my preparation very late and was not regular with the course prep. I heavily depended on CL's content and mocks which played a major role in my preparation.</p>
              <div class="author">
                <img src="/assets/img/Rohit-Hebbar.webp" />
              </div>
              <span>
                <h5>Rohit Hebbar</h5>
                <h6>AIR 11, AILET 2023</h6>
              </span>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="6" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="success-story" style={{ width: "100%", display: "inlineBlock" }}>
              <p>I was a part of CL's two-year classroom program in Chandigarh. CL's team not only helped me with great content and interesting classes but also guidance in defining the right path for my career through career counselling sessions. </p>
              <div class="author">
                <img src="/assets/img/Chahat-Bhambri.webp" />
              </div>
              <span>
                <h5>Chahat Bhambri</h5>
                <h6>AIR 29, CLAT 2023</h6>
              </span>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="7" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="success-story" style={{ width: "100%", display: "inlineBlock" }}>
              <p>I I attended the online classes in 11th because of COVID and started preparing for the exam seriously in class 12th, under the two-year program at CL. I believe except one mock I've attempted all the mocks provided by CL.</p>
              <div class="author">
                <img src="/assets/img/Joy-Sanskar-Kalra.webp" />
              </div>
              <span>
                <h5>Joy Sanskar Kalra</h5>
                <h6>AIR 14, CLAT 2023</h6>
              </span>
            </div></div></div></div></div></div>
          </div>
        </div>
      </section>




      <section class="toppers-talk bg-grey">
        <div class="container">
          <h2>Toppers Talk</h2>
          {/* <!-- <p class="withd"></p> --> */}

          <div class="testmonials-pull">
            <div class="regular-mentorss slider slick-initialized slick-slider"><button class="slick-prev slick-arrow" aria-label="Previous" type="button" >Previous</button><div class="slick-list draggable"><div class="slick-track" style={{ opacity: "1", width: "7258px", transform: "translate3d(-1146px, 0px, 0px)" }}><div class="slick-slide slick-cloned" data-slick-index="-3" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="JaLtTLOggRE"><div data-id="JaLtTLOggRE"><img src="https://i.ytimg.com/vi/JaLtTLOggRE/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Arush Sarma </h3>
              <h5>AIR 44 - CLAT 2024</h5>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="-2" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="15KxyyjjtAA"><div data-id="15KxyyjjtAA"><img src="https://i.ytimg.com/vi/15KxyyjjtAA/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Manya Agarwal</h3>
              <h5>AIR 35 - CLAT 2024</h5>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="nqZm0_MlNys"><div data-id="nqZm0_MlNys"><img src="https://i.ytimg.com/vi/nqZm0_MlNys/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Tvesha Chauhan</h3>
              <h5>AIR 77 - CLAT 2024</h5>
            </div></div></div><div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="LZhL-Qj0Hrs"><div data-id="LZhL-Qj0Hrs"><img src="https://i.ytimg.com/vi/LZhL-Qj0Hrs/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Pradhyot Shah</h3>
              <h5>AIR 2 - CLAT 2024</h5>
            </div></div></div><div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="jYOr4XvNepU"><div data-id="jYOr4XvNepU"><img src="https://i.ytimg.com/vi/jYOr4XvNepU/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Nandita Matolli</h3>
              <h5>AIR 3 - AILET 2024</h5>
            </div></div></div><div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="xOQ8M4vuBZQ"><div data-id="xOQ8M4vuBZQ"><img src="https://i.ytimg.com/vi/xOQ8M4vuBZQ/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Amlan Panda</h3>
              <h5>AIR 30 - CLAT 2024</h5>
            </div></div></div><div class="slick-slide" data-slick-index="3" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="o2H7RJ_QnsI"><div data-id="o2H7RJ_QnsI"><img src="https://i.ytimg.com/vi/o2H7RJ_QnsI/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Preeyal Seghal</h3>
              <h5>AIR 12 - AILET 2024</h5>
            </div></div></div><div class="slick-slide" data-slick-index="4" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="TJ394CVT-9M"><div data-id="TJ394CVT-9M"><img src="https://i.ytimg.com/vi/TJ394CVT-9M/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Mantrana Mahi Agarwal </h3>
              <h5>AIR 19 - AILET 2024</h5>
            </div></div></div><div class="slick-slide" data-slick-index="5" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="JaLtTLOggRE"><div data-id="JaLtTLOggRE"><img src="https://i.ytimg.com/vi/JaLtTLOggRE/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Arush Sarma </h3>
              <h5>AIR 44 - CLAT 2024</h5>
            </div></div></div><div class="slick-slide" data-slick-index="6" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="15KxyyjjtAA"><div data-id="15KxyyjjtAA"><img src="https://i.ytimg.com/vi/15KxyyjjtAA/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Manya Agarwal</h3>
              <h5>AIR 35 - CLAT 2024</h5>
            </div></div></div><div class="slick-slide" data-slick-index="7" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="nqZm0_MlNys"><div data-id="nqZm0_MlNys"><img src="https://i.ytimg.com/vi/nqZm0_MlNys/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Tvesha Chauhan</h3>
              <h5>AIR 77 - CLAT 2024</h5>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="8" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="LZhL-Qj0Hrs"><div data-id="LZhL-Qj0Hrs"><img src="https://i.ytimg.com/vi/LZhL-Qj0Hrs/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Pradhyot Shah</h3>
              <h5>AIR 2 - CLAT 2024</h5>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="9" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="jYOr4XvNepU"><div data-id="jYOr4XvNepU"><img src="https://i.ytimg.com/vi/jYOr4XvNepU/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Nandita Matolli</h3>
              <h5>AIR 3 - AILET 2024</h5>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="10" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="xOQ8M4vuBZQ"><div data-id="xOQ8M4vuBZQ"><img src="https://i.ytimg.com/vi/xOQ8M4vuBZQ/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Amlan Panda</h3>
              <h5>AIR 30 - CLAT 2024</h5>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="11" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="o2H7RJ_QnsI"><div data-id="o2H7RJ_QnsI"><img src="https://i.ytimg.com/vi/o2H7RJ_QnsI/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Preeyal Seghal</h3>
              <h5>AIR 12 - AILET 2024</h5>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="12" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="TJ394CVT-9M"><div data-id="TJ394CVT-9M"><img src="https://i.ytimg.com/vi/TJ394CVT-9M/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Mantrana Mahi Agarwal </h3>
              <h5>AIR 19 - AILET 2024</h5>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="13" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="JaLtTLOggRE"><div data-id="JaLtTLOggRE"><img src="https://i.ytimg.com/vi/JaLtTLOggRE/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Arush Sarma </h3>
              <h5>AIR 44 - CLAT 2024</h5>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="14" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="15KxyyjjtAA"><div data-id="15KxyyjjtAA"><img src="https://i.ytimg.com/vi/15KxyyjjtAA/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Manya Agarwal</h3>
              <h5>AIR 35 - CLAT 2024</h5>
            </div></div></div><div class="slick-slide slick-cloned" data-slick-index="15" id="" aria-hidden="true" tabindex="-1" style={{ width: "352px" }}><div><div class="toppers" style={{ width: "100%", display: "inlineBlock" }}>
              <div class="video-frame">
                <div class="youtube-player" data-id="nqZm0_MlNys"><div data-id="nqZm0_MlNys"><img src="https://i.ytimg.com/vi/nqZm0_MlNys/hqdefault.jpg" /><div class="play"></div></div></div>
              </div>
              <h3>Tvesha Chauhan</h3>
              <h5>AIR 77 - CLAT 2024</h5>
            </div></div></div></div></div><button class="slick-next slick-arrow" aria-label="Next" type="button" >Next</button></div>
          </div>
        </div>
      </section>


      <Faqs f="Classroom" />

      <section class="free-assesment text-center bg-grey">
        <div class="container">

          <picture>
            <source media="(max-width: 480px)"
              srcset="https://clsite-file1.s3.amazonaws.com/108109_LAW-counseling-collaterals-810x210.jpg" />
            <source media="(max-width: 800px)"
              srcset="https://clsite-file1.s3.amazonaws.com/108109_LAW-counseling-collaterals-810x210.jpg" />
            <img src="https://clsite-file1.s3.amazonaws.com/108109_LAW-counseling-collaterals-810x210.jpg"
              style={{ width: "auto", maxWidth: "100%", }} />
          </picture>
          <div class="d-md-block margin-top-30">
            <a href="#frms" class="btn cta smothscroll">Get FREE Counselling </a>
          </div>
        </div>
      </section>







    </>
  );
}

export default Classroom_coaching;