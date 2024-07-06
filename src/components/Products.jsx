
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <>
            <div className="py-5">

            </div>

            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="p-5 bg-light rounded">
                        <div className="row g-4">
                            <h3>Products</h3>

                            <div className="col-lg-7">
                                <h3><Link to="/add-product" >Add Product</Link></h3>
                                <table className="table" >
                                    <tr>
                                        <td>Product Name</td>
                                        <td>Product Quantity</td>
                                        <td>Product Price</td>
                                        <td>Product Description</td>
                                        <td>Product Category</td>
                                        <td>Actions</td>

                                    </tr>
                                    <tr>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td>Test</td>
                                        <td> <Link to="/edit-product/1" className="btn btn-primary">Edit</Link>
                                            <button className="btn btn-danger">Delete</button>
                                        </td>

                                    </tr>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products