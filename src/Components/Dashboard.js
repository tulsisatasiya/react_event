import axios from "axios";
import React from "react";

const Dashboard = () => {
    const orgData = [
        {
            id: 101,
            name: "Abacavir",
            quantity: 25,
            price: 150,
            expiry: 2022,
        },
        {
            id: 102,
            name: "Eltrombopag",
            quantity: 90,
            price: 550,
            expiry: 2021,
        },
        {
            id: 103,
            name: "Meloxicam",
            quantity: 85,
            price: 450,
            expiry: 2025,
        },
        {
            id: 104,
            name: "Allopurinol",
            quantity: 50,
            price: 600,
            expiry: 2023,
        },
        {
            id: 105,
            name: "Phenytoin",
            quantity: 63,
            price: 250,
            expiry: 2021,
        },
    ];
    return (
        <div>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
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
                                <div className="card mb-3 w-100">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">
                                                List Of Medicine
                                            </h5>
                                            <table className="table text-center">
                                                <thead>
                                                    <tr>
                                                        <th>No</th>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Qty</th>
                                                        <th>Expire</th>
                                                        {/* <th>Action</th> */}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orgData.map(
                                                        (val, index) => (
                                                            <tr key={index}>
                                                                <td>{val.id}</td>
                                                                <td>{val.name}</td>
                                                                <td>{val.price}</td>
                                                                <td>{val.quantity}</td>
                                                                <td>{val.expiry}</td>
                                                                {/* <td>
                                                                    <button
                                                                        className="btn btn-danger btn-sm mx-2"
                                                                        type="button">
                                                                        Delete
                                                                    </button>
                                                                </td> */}
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="text-end">

                                <a type="button" className="btn btn-danger btn-sm" href="http://localhost:3000/" >LogOut</a>
                                        </div>
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

export default Dashboard;
