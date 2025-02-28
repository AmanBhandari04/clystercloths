import React from "react";
import Layout from "../../component/main_layout/Layout";
import { useParams } from "react-router-dom";
import ProductCard from "../../component/productcard/ProductCard";
import ProductBanner from "../../component/Banner/ProductBanner";
import Banner2 from "../../../public/image/banner.png";
import './ProductPage.css'

const ProductPage = () => {
    const { category } = useParams(); // Get category from URL

    return (
        <Layout>

            <ProductBanner Banner={Banner2} />

            <h2 className="product_page_heading">Best {category} for men</h2>

            <ProductCard category={category} /> {/* Pass category to ProductCard */}


        </Layout>
    );
};

export default ProductPage;
