"use client"

import { useEffect } from "react";


import { useState } from "react";





function Faqs({ f }) {

  var [result, setResult] = useState("")



  useEffect(() => {
    fetch('https://www.lawentrance.com/faqsData.jsp?page=' + f) // api for the get request
      .then(response => response.text())
      .then(data => setResult(data));

  }, [])

  return (
    < >
      <section className="faqs bg-grey">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-center">Frequently asked questions</h2>
              <div className="accordion" id="accordionExample" dangerouslySetInnerHTML={{ __html: result }}>







              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Faqs;
