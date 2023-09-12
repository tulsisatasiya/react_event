import React from 'react'
import { useNavigate } from 'react-router-dom'

const Forget = () => {
    let nev=useNavigate()

    const navi=()=>{
        nev('/')
    }

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
                                                Reset Your Password
                                            </h5>
                                        </div>
                                        <form
                                           
                                            className="row g-3 needs-validation"
                                            noValidate>
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
                                                   
                                                />
                                                <div className="invalid-feedback">
                                                    Please enter your password!
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label
                                                    htmlFor="yourPassword"
                                                    className="form-label">
                                                   Confirm Password
                                                </label>
                                                <input
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
                                            <div className="col-12 py-3">
                                                <button
                                                    className="btn btn-primary w-100"
                                                    type="submit">
                                                    Reset 
                                                </button>
                                            </div>
                                            <div className="col-12 align-items-center">
                                                <p className="small mb-0">
                                                    <button
                                                    onClick={navi}
                                                        className="btn btn-sm a_link"
                                                    >
                                                        Back to login
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
  )
}

export default Forget
