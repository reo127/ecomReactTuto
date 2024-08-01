import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Spinner from "./components/Spinner"
import ModalSearch from "./components/ModalSearch"
import Home from "./components/Home"
import Featurs from "./components/Featurs"
import Fruits from "./components/Fruits"
import Vesitable from "./components/Fruits"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import Shop from "./components/Shop"
import ShopDetails from "./components/ShopDetails"
import Checkout from "./components/Checkout"
import Testimonial from "./components/Testimonial"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import NotFound from "./components/NotFound"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import AddProduct from "./components/AddProdcut"
import EditProduct from "./components/EditProduct"
import Products from "./components/Products"
import { useSelector, useDispatch } from "react-redux";
import { logout, getUser } from "./state/slices/authSlice";
import Cookies from "js-cookie"

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const token = Cookies.get('token')
  const handleProfile = () => {
    if (token) {
        dispatch(getUser());
    }
}


useEffect(() => {
    handleProfile();
}, [dispatch, token]);

  return (
    <>
      {/* <Spinner/> */}
      <Navbar />
      <ModalSearch />
      {/* <Home/> */}
      {/* <Featurs/>
    <Fruits/>
    <Vesitable/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop handleProfile={handleProfile} />} />
        <Route path="/shop-details" element={<ShopDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/admin/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
      <Footer />


    </>
  )
}

export default App
