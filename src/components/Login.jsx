import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../state/slices/authSlice";
import { useState } from "react";
import Swal from 'sweetalert2'
import Cookies from 'js-cookie';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);
    console.log(user)
    console.log(user.user.success, 'user login.......');
    if (user.user.success == true) {
        Cookies.set("token", user.user.token);
        Swal.fire({
            title: "Logged in successfully",
            // text: "You clicked the button!",
            icon: "success"
        });

        navigate("/");
        //alert("Login successfully");
    }

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)


        dispatch(login(form))

    };
  return (
   <>
   <div className="container-fluid page-header py-5">
            <h1 className="text-center text-white display-6">Login</h1>
            <ol className="breadcrumb justify-content-center mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                <li className="breadcrumb-item active text-white">Login</li>
            </ol>
        </div>
        <div className="container-fluid contact py-5">
            <div className="container py-5">
                <div className="p-5 bg-light rounded">
                    <div className="row g-4">




                        <div className="col-lg-7">
                            <form action="" className="">
                               
                                  <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Enter Your Email" name="email" onChange={handleChange} />
                                  <input type="password" className="w-100 form-control border-0 py-3 mb-4" placeholder="Your Password" name="password" onChange={handleChange} />
                                  <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary " type="button" onClick={handleSubmit}>Login</button>
                              </form>
                              <span>Dont Have an account<Link to="/signup">Sign Up</Link></span>
                        </div>
                        <div className="col-lg-5">
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                                <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Address</h4>
                                    <p className="mb-2">123 Street New York.USA</p>
                                </div>
                            </div>
                            <div className="d-flex p-4 rounded mb-4 bg-white">
                                <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Mail Us</h4>
                                    <p className="mb-2">info@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex p-4 rounded bg-white">
                                <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Telephone</h4>
                                    <p className="mb-2">(+012) 3456 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default Login