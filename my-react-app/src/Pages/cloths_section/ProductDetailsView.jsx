import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../component/main_layout/Layout';
import './ProductDetailsView.css'
const ProductDetailsView = () => {
    const { id } = useParams(); // Get the `id` from the URL
    const [product, setProduct] = useState(null); // State to store the product data
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Start loading
                const response = await fetch(`http://localhost:8080/api/cloths/${id}`); // API endpoint for fetching product by ID
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`); // Handle HTTP errors
                }
                const result = await response.json(); // Parse JSON response
                setProduct(result); // Set the fetched product data
            } catch (err) {
                setError(err.message); // Set the error message
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchData();
    }, [id]); // Dependency array ensures re-fetch if `id` changes

    if (loading) return <div>Loading...</div>; // Show loading state
    if (error) return <div>Error: {error}</div>; // Show error state

    return (
        <Layout>
            <div className="main-product-details">
                <h1>Product Details</h1>
                {product ? (
                    <div className='main-prod-deta-img'>
                        <img
                            src={`http://localhost:8080/${product.image}`}
                            alt={product.cloth_name}
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </div>
                ) : (
                    <p>No product found for ID: {id}</p>
                )}
            </div>
        </Layout>
    );
};

export default ProductDetailsView;
