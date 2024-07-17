"use client"


import Link from "next/link";
import { useState } from "react";
import Student from "@/model/Student";






export default function Navbar() {


    var [clname,setClname]=useState("")

var [email,setEmail]=useState("")

var [password,setPassword]=useState("")

var [clmobile,setClmobile]=useState()

var [dateofbirth,setDateofbirth]=useState("")

var [custPincode,setCustPincode]=useState()

var [custTey,setCustTey]=useState("")

var [username,setUsername]=useState("")

var [loginpassword,setLoginpassword]=useState("")

function postData(e){
    e.preventDefault()
    alert(`
        clname=${clname}
        email=${email}
        password=${password}
        clmobile=${clmobile}
        dateofbirth=${dateofbirth}
        custPincode=${custPincode}
        custTey=${custTey}
        
        
        `)
}

    return (
        <>
            <div className="top-header">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <p>CLAT'25: 7 Months Left! Join our LST Course now <a href="/course-detail.jsp?prodId=BLxaow8lOkE%3D&amp;prodCategory=LST&amp;prodGroup=Online%20Coaching&amp;rt=&amp;rl=" className="orange">Click Here</a></p>
                        </div>
                        <div className="col-lg-6 contact-details">
                            <ul className="float-end">
                                <li><a href="https://t.me/LST4LAW"><i><img src="/assets/img/logos_telegram.svg" /></i><b>Join Forum</b></a></li>
                                <li><a href="tel:8130038836"><i><img src="/assets/img/bytesize_telephone.svg" /></i><b>8130-038-836</b></a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=9958760011" target="blank" data-original-title="WhatsApp 9958760011"><i><img src="/assets/img/logos_whatsapp-icon.svg" /></i><b>9958-760-011</b></a></li>
                                <li><a href="/contactus.jsp" className="me-0 px-0"><b>Contact</b></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>







            <div className="header-region change">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="/assets/img/lst_logo.webp" className="img-fluid" />
                        </a>
                        <div className="searh-mobile">
                            <a className="nav-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-magnifying-glass"></i></a>
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body">
                                    <form className="d-flex flex-wrap">
                                        <input id="sourcem" className="form-control" type="search" placeholder="Search..." aria-label="Search" />
                                        <div id="ddm" className="searchresult">
                                            <ul id="myULm" className="dropdown"></ul>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">All Programs</a>
                                    <ul className="dropdown-menu multi-level" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" href="/classroom-coaching/">Classroom Coaching</Link></li>
                                        <li><Link className="dropdown-item" href="/online-coaching/">Online Coaching</Link></li>
                                        <li><Link className="dropdown-item" href="/study-material/">Books &amp; Materials</Link></li>
                                        <li><Link className="dropdown-item" href="/test-series/">Test Series</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Exams</a>
                                    <ul className="dropdown-menu multi-level" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" href="/clat/">CLAT</Link></li>
                                        <li><Link className="dropdown-item" href="/ailet/">AILET</Link></li>
                                        <li><Link className="dropdown-item" href="/nlat/">NMIMS</Link></li>
                                        <li><Link className="dropdown-item" href="/slat/">SLAT</Link></li>
                                        <li><Link className="dropdown-item" href="/mhcet/">MHCET</Link></li>
                                        <li><Link className="dropdown-item" href="/lsat-india/">LSAT-India<sup>™</sup></Link></li>
                                        <li><Link className="dropdown-item" href="/exams-colleges/">Other law entrance exams</Link></li>
                                    </ul>

                                </li>
                                <li className="nav-item"><Link className="nav-link" href="/success-stories/">Results</Link></li>
                                <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Resources</Link>
                                    <ul className="dropdown-menu multi-level" aria-labelledby="navbarDropdown">


                                        <li><Link className="dropdown-item" href="/freezone/">Free CLAT Mock</Link></li>
                                        <li><Link className="dropdown-item" href="/blogs/">Blogs</Link></li>
                                        <li><Link className="dropdown-item" href="/article/">Article</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item free"><span><i className="fa-solid fa-star"></i>FREE</span><a className="nav-link" href="/webinar/">Webinar</a></li>
                                <li className="nav-item d-lg-none d-block"><a className="nav-link" href="/contactus.jsp">Contact</a></li>
                                <li className="nav-item srch"><a className="nav-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><i className="fa-solid fa-magnifying-glass"></i></a><div className="collapse" id="collapseExample"><div className="card card-body"><form className="d-flex flex-wrap"><input id="source" className="form-control" type="search" placeholder="Search..." aria-label="Search" /><div id="dd" className="searchresult"><ul id="myUL" className="dropdown"></ul></div></form></div></div></li>
                                <li className="nav-item two-btns">
                                    <a href="#" className="nav-link btnsamecont1 singup-btn" data-bs-toggle="modal" data-bs-target="#loginModal">Student Login</a></li>



                                <li className="nav-item two-btns"><a href="#" className="nav-link btnsamecont me-0 login-btn" data-bs-toggle="modal" data-bs-target="#signupModal">Student Sign up</a></li>                                </ul></div></div></nav></div>



            <div className="share-icon"><a href="https://t.me/LST4LAW"><i className="fa-brands fa-telegram"></i></a><a href="https://api.whatsapp.com/send?phone=9958760011" target="blank" data-original-title="WhatsApp 9958760011"><i className="fa-brands fa-whatsapp"></i></a><a href="tel:8130038836"><i className="fa-solid fa-phone"></i></a></div>




            <div
                className="modal fade modalboxiner modal-form"
                id="loginModal"
                tabIndex={-1}
                aria-labelledby="loginModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                x
                            </button>
                            {/* <h4 className="modal-title" id="myModalLabel">Login</h4> */}
                        </div>
                        <div className="modal-body">
                            <div className="login-new">
                                <div className="container">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-lg-12">
                                            <div className="login-page2">
                                                <div className="mb-4">
                                                    <h3>Welcome back</h3>
                                                </div>
                                                <div className="col-md-12 formregioncont">
                                                    <form  method="POST" action="/api/login" name="login">
                                                        
                                                        <div className="row gy-3 gy-md-4 overflow-hidden">
                                                            <div className="col-lg-12">
                                                                <label className="form-label">
                                                                    Enter Email{" "}
                                                                    <span className="text-danger">*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    id="usernmae"
                                                                    name="username"
                                                                    className="form-control"
                                                                    placeholder="Enter Email"
                                                                    onChange={(e)=>setUsername(e.target.value)}

                                                                    required
                                                                   
                                                                />
                                                               
                                                            </div>
                                                            <div className="col-lg-12 position-relative">
                                                                <label className="form-label">
                                                                    Enter Password{" "}
                                                                    <span className="text-danger">*</span>
                                                                </label>
                                                                <input
                                                                    type="password"
                                                                    id="password"
                                                                    className="form-control"
                                                                    name="loginpassword"
                                                                    placeholder="Enter password"
                                                                    onChange={(e)=>setLoginpassword(e.target.value)}

                                                                    required
                                                                />
                                                                <i className="fas fa-eye-slash togglePassword" />
                                                               
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="d-grid">
                                                                    <input
                                                                        className="btn cta"
                                                                        type="submit"
                                                                        id="loginProcess"
                                                                        defaultValue="Log in"
                                                                       
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 inputcheckcli">
                                                                <div className="form-check2">
                                                                    <div className="gap-1 gap-md-1 flex-md-row justify-content-between text-center">
                                                                        <a
                                                                            href="/lst-authentication/ForgotPassNew.jsp"
                                                                            className="text-decoration-none brand-orange"
                                                                        >
                                                                            Forgot password
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row margin-top-5">
                                                                <div className="col-lg-12 text-center">
                                                                    <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-center">
                                                                        <a
                                                                            href="#"
                                                                            className="link-secondary text-decoration-none"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#signupModal"
                                                                            style={{
                                                                                marginLeft: 15,
                                                                                textDecoration: "underline"
                                                                            }}
                                                                           
                                                                        >
                                                                            Don't have an account?{" "}
                                                                            <span className="brand-orange">Sign up</span>
                                                                        </a>
                                                                       
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div
                className="modal fade modalboxiner modal-form"
                id="signupModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="signupModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-md modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                x
                            </button>
                            {/*  <h4 className="modal-title" id="myModalLabel">Sign up</h4> */}
                        </div>
                        <div className="modal-body">
                            <div className="login-new">
                                <div className="container">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-lg-12">
                                            <div className="login-page2">
                                                <div className="mb-4">
                                                    <h3>Create Account</h3>
                                                </div>
                                                <div className="show-block">
                                                    <div className="row">
                                                        <form
                                                            className="form-signin"
                                                            name="registeration"
                                                            action="/api/addstudent"
                                                            method="POST"
                                                        >
                                                            <span id="reauth-email1" className="reauth-email" />
                                                            <div id="registerResponse" />
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            id="clname"
                                                                            name="clname"
                                                                            className="login_box form-control"
                                                                            placeholder="Name"
                                                                            pattern="^[A-Za-z]+[A-Za-z ]*$"
                                                                            title="Name should contain only alphabetic characters"
                                                                            required
                                                                            onChange={(e)=>setClname(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="email"
                                                                            id="email"
                                                                            name="email"
                                                                            
                                                                            className="login_box form-control"
                                                                            placeholder="Email"
                                                                            required
                                                                           
                                                                            onChange={(e)=>setEmail(e.target.value)}

                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="password"
                                                                            id="password"
                                                                            name="password"
                                                                            
                                                                            className="login_box form-control"
                                                                            placeholder="Password"
                                                                            required
                                                                           
                                                                            onChange={(e)=>setPassword(e.target.value)}

                                                                        />
                                                                    </div>
                                                                </div>
                                                                
                                                                <div id="checkResponse" />
                                                                <div className="col-lg-12">
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            name="clmobile"
                                                                            className="login_box form-control"
                                                                            id="clmobile"
                                                                            placeholder="Mobile"
                                                                            maxLength={10}
                                                                            pattern="[6-9][0-9]{9}"
                                                                            title="Mobile number should start with 6, 7, 8, or 9 and contain at least 10 digits."
                                                                            required
                                                                            onChange={(e)=>setClmobile(e.target.value)}

                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <div className="input-group date" id="datepicker">
                                                                        <input
                                                                            type="date"
                                                                            className="form-control"
                                                                            id="dateofbirth"
                                                                            placeholder="Date of Birth"
                                                                            name="dateofbirth"
                                                                            defaultValue=""
                                                                            readOnly=""
                                                                            required
                                                                            onChange={(e)=>setDateofbirth(e.target.value)}

                                                                        />
                                                                      
                                                                        
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <input
                                                                            type="text"
                                                                            name="custPincode"
                                                                            className="login_box form-control"
                                                                            id="custPincode"
                                                                            placeholder="Pin Code"
                                                                            maxLength={8}
                                                                            pattern="[0-9]{6}"
                                                                            title="Pincode should contain at least 6 digits."
                                                                            required
                                                                            onChange={(e)=>setCustPincode(e.target.value)}

                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <select
                                                                            name="custTey"
                                                                            id="custTey"
                                                                            className="form-control form-select"
                                                                            required
                                                                            onChange={(e)=>setCustTey(e.target.value)}

                                                                        >
                                                                            <option value="">Exam Year</option>
                                                                            <option value={2023}>2023</option>
                                                                            <option value={2024}>2024</option>
                                                                            <option value={2025}>2025</option>
                                                                            <option value={2025}>2026</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <input
                                                                type="hidden"
                                                                name="cityStateId"
                                                                id="cityStateId"
                                                                defaultValue="1#@#1"
                                                            />
                                                            <input
                                                                type="hidden"
                                                                name="userValid"
                                                                id="userValid"
                                                                defaultValue="N"
                                                            />
                                                            <input
                                                                type="hidden"
                                                                name="cityStateName"
                                                                id="cityStateName"
                                                                defaultValue="New Delhi"
                                                                maxLength={100}
                                                            />
                                                            {/*
          <input type="text" id="inputEmail" className="login_box" placeholder="City" required autofocus>
     
          <input type="text" id="inputEmail" className="login_box" placeholder="Pincode" required autofocus> */}
                                                            <input
                                                                className="btn cta sign-up"
                                                                type="submit"
                                                                id="regProcess"
                                                                defaultValue="Sign up"
                                                            />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </>
    );
}



