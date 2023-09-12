import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const reg = useNavigate();
    const navigate = () => {
        reg("/register");
    };
    const forget =()=>{
        reg('/forget')
    }

    const url = "http://localhost:3030/Detaills";

    const [data, setdata] = useState({
        email: "",
        password: "",
    });

    let userdata = "";
    const submitform = (e) => {
        e.preventDefault();
        axios.get(url).then((res) => {
            userdata = res.data;
            const { email, password } = userdata[0];
            console.log(email);
            if (data.email == "" && data.password == "") {
                alert("Plese enter valid Email or password");
            } else {
                if (data.email == email && data.password == password) {
                    reg("/dashboard");
                    alert("User Login Succesfully");
                } else {
                    alert("Email or Password are wrong");
                }
            }
        });
    };
    const savedata = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                <div className="d-flex justify-content-center py-4">
                                    <a
                                        href="index.html"
                                        className="logo d-flex align-items-center w-auto">
                                        <span className="d-none d-lg-block">
                                            DR Pharmacy
                                        </span>
                                    </a>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">
                                                Login to Your Account
                                            </h5>
                                          
                                        </div>
                                        <form
                                            onSubmit={submitform}
                                            // onSubmit={loginhandler}
                                            className="row g-3 needs-validation"
                                            noValidate>
                                            <div className="col-12">
                                                <label
                                                    htmlFor="yourUsername"
                                                    className="form-label">
                                                    Username
                                                </label>
                                                <div className="input-group has-validation">
                                                    <span
                                                        className="input-group-text"
                                                        id="inputGroupPrepend">
                                                        &#9993;
                                                    </span>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        className="form-control"
                                                        id="yourUsername"
                                                        required
                                                        // onChange={onchange}
                                                        onChange={savedata}
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please enter your
                                                        username.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label
                                                    htmlFor="yourPassword"
                                                    className="form-label">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    id="yourPassword"
                                                    required
                                                    // onChange={onchange}
                                                    onChange={savedata}
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter your password!
                                                </div>
                                            </div>
                                            <div className="col-12 py-3">
                                                <button
                                                    className="btn btn-primary w-100"
                                                    type="submit">
                                                    Login
                                                </button>
                                            </div>
                                            <div className="text-end m-0">
                                                <button
                                                    className="btn btn-sm a_link"
                                                    onClick={forget}>
                                                    Forget Password ?
                                                </button>
                                            </div>
                                            <div className="col-12 align-items-center ">
                                                <p className="small mb-0">
                                                    Don't have account?{" "}
                                                    <button
                                                        className="btn btn-sm a_link"
                                                        onClick={navigate}>
                                                        Create an account
                                                    </button>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;
