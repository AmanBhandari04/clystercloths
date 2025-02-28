import React from 'react';

const ProductBanner = ({ Banner }) => {
    return (
        <>
            <div
                className="product-banner"
                style={{
                    backgroundImage: `url(${Banner})`, // Use backgroundImage for URLs
                    backgroundSize: "cover",          // Ensure the image covers the entire div
                    backgroundPosition: "center",     // Center the image
                    height: "80vh",          // Set a height for the banner
                    width: "100%",                    // Ensure it spans full width
                }}
            ></div>
        </>
    );
};

export default ProductBanner;
