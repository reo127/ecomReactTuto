
import { Link } from "react-router-dom";

const EditProduct = () => {
    return (
        <>
            <div className="py-5">

            </div>

            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="p-5 bg-light rounded">
                        <div className="row g-4">
                            <h3>Edit Product</h3>

                            <div className="col-lg-7">
                                <form action="" className="">
                                    <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Product Name" />
                                    <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Product Price" />
                                    <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Product Quantity" />
                                    <textarea type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Product Description" />
                                    <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Product Category" />

                                    <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary mb-4" type="button">Update</button>
                                    <button className="w-100 btn form-control border-secondary py-3 bg-white text-danger " type="button">Delete</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditProduct