import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, getUser } from "../state/slices/authSlice";
import Cookies from 'js-cookie';
const Navbar = () => {
    const user = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const handleLogout = () => {
        Cookies.remove('token')
        dispatch(logout());
        
    }
    const token = Cookies.get('token')
    console.log(token)
    console.log("user succss : ", user?.user?.user)

    return (
        <>
            <div className="container-fluid fixed-top">
                <div className="container topbar bg-primary d-none d-lg-block">
                    <div className="d-flex justify-content-between">
                        <div className="top-info ps-2">
                            <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#" className="text-white">123 Street, New York</a></small>
                            <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><a href="#" className="text-white">Email@Example.com</a></small>
                        </div>
                        <div className="top-link pe-2">
                            <a href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</a>
                            <a href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</a>
                            <a href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></a>
                        </div>
                    </div>
                </div>
                <div className="container px-0">
                    <nav className="navbar navbar-light bg-white navbar-expand-xl">
                        <a href="index.html" className="navbar-brand"><h1 className="text-primary display-6">Fruitables</h1></a>
                        <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars text-primary"></span>
                        </button>
                        <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                            <div className="navbar-nav mx-auto">

                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="shop" className="nav-item nav-link ">Shop</Link>
                                <Link to="shop-details" className="nav-item nav-link ">Shop Detail</Link>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Admin</a>
                                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                        <Link to="admin/products" className="dropdown-item">Products</Link>
                                        <Link to="add-product" className="dropdown-item">Add Product</Link>

                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                        <Link to="cart" className="dropdown-item">Cart</Link>
                                        <Link to="checkout" className="dropdown-item">Checkout</Link>
                                        <Link to="testimonial" className="dropdown-item">Testimonial</Link>
                                        <Link to="not-found" className="dropdown-item">404 Page</Link>
                                    </div>
                                </div>
                                <Link to="contact" className="nav-item nav-link">Contact</Link>
                            </div>
                            <div className="d-flex m-3 me-0">
                                <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
                                <a href="#" className="position-relative me-4 my-auto">
                                    <i className="fa fa-shopping-bag fa-2x"></i>
                                    <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: "-5px", left: "15px", height: "20px", minWwidth: "20px" }}>{user?.user?.user?.cart?.length}</span>
                                </a>
                                {/* Check the condition for login and logout */}
                                {token || user.user.token ? (
                                    <button onClick={handleLogout}>Logout</button>
                                ) : (
                                    <Link to="login" className="my-auto">
                                        <i className="fas fa-user fa-2x"></i>
                                    </Link>
                                )}
                                {/* <Link to="login" className="my-auto">
                                <i className="fas fa-user fa-2x"></i>
                            </Link> */}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Navbar
