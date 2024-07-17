function Footer() {
    return (
        < >


            <a
                id="back-to-top"
                href="#"
                className=""
                role="button"
                style={{ display: "inline" }}
            >
                <span className="fa fa-angle-up" />
            </a>

            <section className="footer-top">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-9">
                            <h3>106 CL-LST test-prep centers spread over 89+ cities in India &amp; Abroad</h3>
                        </div>
                        <div className="col-lg-3">
                            <a href="/contactus.jsp" previewlistener="true">
                                <button className="btn cta bg-white full-width">Find a CL-LST Center</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>




            <section className="footer-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="footer-logo">
                                <a href="/" target="_blank">
                                    <img src="/assets/img/footer-logo.png" className="img-fluid m-bt-32" alt="Footer LST Logo" />
                                </a>
                                <ul className="nav d-flex justify-content-start">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    {/* <!--<li><a href="/courses.jsp">Course</a></li>--> */}
                                    <li>
                                        <a href="/success-stories.html">Results</a>
                                    </li>
                                    <li><a href="/article/">Article</a></li>
                                    <li><a href="/blogs/">Blogs</a></li>
                                    <li><a href="/webinar/">Webinars</a></li>
                                    <li><a href="/faq.jsp">FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <p>Stay up to date</p>
                            <form className="" action="/api/addnewsletter" method="post">
                                <div className="d-flex">
                                    <input className="form-control me-2" id="mail" name="email" required  placeholder="Enter your email" aria-label="Enter your email" />
                                    <button className="btn cta" type="submit" >
                                        Subscribe
                                    </button>
                                </div>
                                <span id="subMsg"></span>
                            </form>
                        </div>
                    </div>
                    <hr />
                    <div className="row copyright">
                        <div className="col-lg-5">
                            <p>© CL Educate Ltd. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-3">
                            <ul className="nav d-flex justify-content-center justify-content-md-start">
                                <li>
                                    <a href="https://www.instagram.com/lst4law/" target="_blank">
                                        <i className="fa-brands fa-instagram">
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@lawentrance6500" target="_blank">
                                        <i className="fa-brands fa-youtube">
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/LST4LAW" target="_blank">
                                        <i className="fa-brands fa-telegram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <ul className="nav d-flex justify-content-center justify-content-md-end">
                                <li><a href="/terms-conditions.html">Terms</a></li>
                                <li><a href="/privacy.html">Privacy</a></li>
                                <li><a href="/sitemap.html">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Footer;
