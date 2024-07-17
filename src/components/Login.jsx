import React from 'react'

export default function () {
    return (
        <>
            <div className="row flexdefine">
                <div className="whitebgdefine">
                    <div className="col-md-12 logo-region text-center">
                        <a href="/">
                            <img src="/assets/img/logo-black.png" alt="logo" />
                        </a>
                    </div>
                    <div className="col-md-12 formregioncont">
                        <form action="verifyCall.jsp" method="POST" name="login" id="login">
                            {/* <div class="row"><h2>Sign In</h2> </div> */}
                            <div className="form-group row">
                                <label>User Name</label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    placeholder="Enter email ID"
                                    required=""
                                    autofocus=""
                                />

                            </div>
                            <div className="form-group row">
                                <label>Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter password"
                                    required=""
                                />

                            </div>
                            <div className="btns text-center row">
                                <button
                                    type="button"
                                    href=""
                                    className="btn btn-same btn-login equalbtns btn-loginn"
                                    id="loginProcess"
                                >
                                    Login
                                </button>
                            </div>

                            <div className="sigunp row">
                                <div className="col-xs-12 col-md-12">
                                    <a
                                        href="/registration.jsp"
                                        className="btn btn-same btn-register equalbtns"
                                    >
                                        Create new account
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
