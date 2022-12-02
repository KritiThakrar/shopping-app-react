import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png';
import '../App.css';

const Navbar = () =>
{
    return (
        <div>
            <nav className="navbar shadow navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-5" to="/">
                        <img src={logo} alt="logo" width="70" height="54" className="d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active fw-semibold" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="bi bi-search"></i>
                                    </div>
                                </div>
                                <input className="form-control" type="search" placeholder="Search for products" aria-label="Search" />
                            </div>
                        </form>
                        <div className="row g-2 ms-5">
                            <div className="col-6">
                                <div className="ps-2">
                                    <i class="bi bi-person" style={{ fontSize: '1.3rem' }}></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="">
                                    <i class="bi bi-bag" style={{ fontSize: '1.3rem' }}></i>
                                </div>
                            </div>
                            <div className="col-6 mt-0 fw-semibold">
                                Profile
                            </div>
                            <div className="col-6 mt-0 fw-semibold">
                                Bag
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar