import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const login = () => {
        navigate("/");
    };

    const url = "http://localhost:3030/Detaills";
    const [data, setdata] = useState({
        name: "",
        email: "",
        password: "",
    });
    const changedata = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
        console.log(data);
    };
    const submitdata = (e) => {
        e.preventDefault();

        if (data.email == "" && data.name == "" && data.password == "") {
            alert("Plese field all field ");
        } else {
            alert("User added succesfull");
            axios.post(url, data).then((res) => {
                console.log(res.data);
            });
            setdata({
                name: "",
                email: "",
                password: "",
            });
            navigate("/")
        }

        document.getElementsByName("name")[0].value = "";
        document.getElementsByName("email")[0].value = "";
        document.getElementsByName("password")[0].value = "";
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
                                        <img src="assets/img/logo.png" alt="" />
                                        <span className="d-none d-lg-block">
                                            NicePharmacy
                                        </span>
                                    </a>
                                </div>
                                {/* End Logo */}
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">
                                                Create an Account
                                            </h5>
                                            <p className="text-center small">
                                                Enter your personal details to
                                                create account
                                            </p>
                                        </div>
                                        <form
                                            onSubmit={submitdata}
                                            className="row g-3 needs-validation"
                                            noValidate>
                                            <div className="col-12">
                                                <label
                                                    htmlFor="yourName"
                                                    className="form-label">
                                                    Your Name
                                                </label>
                                                <input
                                                    onChange={changedata}
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="yourName"
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please, enter your name!
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label
                                                    htmlFor="yourEmail"
                                                    className="form-label">
                                                    Your Email
                                                </label>
                                                <input
                                                    onChange={changedata}
                                                    type="email"
                                                    name="email"
                                                    className="form-control"
                                                    id="yourEmail"
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter a valid Email
                                                    adddress!
                                                </div>
                                            </div>
                                            {/* <div className="col-12">
                                                <label
                                                    htmlFor="yourUsername"
                                                    className="form-label">
                                                    Username
                                                </label>
                                                <div className="input-group has-validation">
                                                    <span
                                                        className="input-group-text"
                                                        id="inputGroupPrepend">
                                                        @
                                                    </span>
                                                    <input
                                                        onChange={changedata}
                                                        type="text"
                                                        name="uname"
                                                        className="form-control"
                                                        id="yourUsername"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Please choose a
                                                        username.
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="col-12">
                                                <label
                                                    htmlFor="yourPassword"
                                                    className="form-label">
                                                    Password
                                                </label>
                                                <input
                                                    onChange={changedata}
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    id="yourPassword"
                                                    required
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter your password!
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <button className="btn btn-primary w-100">
                                                    Create Account
                                                </button>
                                            </div>
                                            <div className="col-12">
                                                <p className="small mb-0">
                                                    Already have an account?
                                                    <button
                                                        onClick={login}
                                                        className="btn btn-sm a_link">
                                                        Log in
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

export default Register;
