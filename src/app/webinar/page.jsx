"use client"



import React, { useEffect } from 'react'

import { useState } from 'react'

export default function () {

  var [name, setName] = useState("")
  var [email, setEmail] = useState("")
  var [mobile, setMobile] = useState("")
  var [city, setCity] = useState("")
  var [pincode, setPincode] = useState("")



  function postData(e) {
    e.preventDefault()
    // main.js 

    // POST request using fetch() 
    fetch("/api/getuser", {

      // Adding method type 
      method: "POST",

      // Adding body or contents to send 
      body: JSON.stringify({
        name,email,mobile,city,pincode
      }),

      // Adding headers to the request 
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

      // Converting to JSON 
      .then(response => response.json())

      // Displaying results to console 
      .then(json => console.log(json));


  }




  useEffect(() => {

  }, [])

  return (
    <>
      <section className="banner webinar">
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
                  href="/"
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
                <span property="name">Webinar</span>
                <meta property="position" content={2} />
              </li>
            </ol>
          </nav>
          <div className="row">


            <div className="col-lg-5">
              <div className="form-box">
                <h4>Register for FREE Webinar</h4>

                <form action="/api/adduser" method="post" >
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control w-100"
                      name="name"
                      id="name"
                      placeholder="Enter your Name"
                      pattern="^[A-Za-z]+[A-Za-z ]*$"
                      title="Name should contain only alphabetic characters"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control w-100"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control w-100"
                      type="tel"
                      name="mobile"
                      id="mobile"
                      placeholder="Enter Mobile No."
                      pattern="[6-9][0-9]{9}"
                      title="Mobile number should start with 6, 7, 8, or 9 and contain at least 10 digits."
                      required
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="city"
                      className="form-control w-100"
                      pattern="^[A-Za-z]+[A-Za-z ]*$"
                      maxLength={100}
                      name="city"
                      id="city"
                      defaultValue=""
                      placeholder="City"
                      required
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="pincode"
                      className="form-control w-100"
                      name="pincode"
                      id="pincode"
                      defaultValue=""
                      pattern="[0-9]{6,}"
                      placeholder="Pincode"
                      title="Pincode should contain at least 6 digits."
                      required
                      onChange={(e) => setPincode(e.target.value)}
                    />
                  </div>
                  <button className="btn cta w-100" type="submit" id="btn">
                    Save My Spot
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>


    </>
  )
}
