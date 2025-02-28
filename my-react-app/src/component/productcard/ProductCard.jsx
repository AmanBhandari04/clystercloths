import React, { useEffect, useState } from "react";
import axios from "axios";
import { LuIndianRupee } from "react-icons/lu";
import "./Procard.css";
import { NavLink } from "react-router-dom";

const ProductCard = ({ category }) => { // Receive category as a prop
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const { id } = useParams()
    // Fetch products using async/await
    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/cloths"); // Replace with your API endpoint
            const allProducts = response.data;

            // Filter products based on the category
            const filteredProducts = category
                ? allProducts.filter((product) => product.category === category)
                : allProducts;

            setProducts(filteredProducts);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching products:", error);
            setLoading(false);
        }
    };
    console.log(products)

    useEffect(() => {
        fetchProducts();
    }, [category]); // Refetch products when category changes

    return (
        <div className="product-card-grid">
            <div className="product-container">
                {loading ? (
                    <p>Loading...</p>
                ) : products.length > 0 ? (
                    products.map((product) => (
                        <div className="productcard-maindiv" key={product.id}>
                            <div className="image-box">
                                <img
                                    src={`http://localhost:8080/${product?.image}`}
                                    alt={product.cloth_name}
                                />
                            </div>
                            <div className="details-of-product">
                                <h3>{product?.category}</h3>
                                <h5>{product?.cloth_name}</h5>
                                <p>{product.message}</p>
                            </div>
                            <div className="price-and-view">
                                <h4>
                                    <LuIndianRupee />
                                    {product.price}
                                </h4>
                                <NavLink to={`/details/product/${product._id}`}>   <button className="btn border btn-success">View</button></NavLink>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products found for this category.</p>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
