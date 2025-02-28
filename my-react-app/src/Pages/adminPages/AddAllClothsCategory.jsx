import React, { useState } from 'react';

const AddAllClothsCategory = () => {
    const [formData, setFormData] = useState({
        cloth_name: '',
        category: '',
        message: '',
        price: '',
    });
    const [image, setImage] = useState(null); // To handle the image file
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]); // Capture the file input
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Use FormData for file uploads
        const formDataToSend = new FormData();
        formDataToSend.append('cloth_name', formData.cloth_name);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('message', formData.message);
        formDataToSend.append('price', formData.price);
        if (image) {
            formDataToSend.append('image', image);
        }

        try {
            const response = await fetch('http://localhost:8080/api/cloths', {
                method: 'POST',
                body: formDataToSend,
                header: "multipart/form-data"
                // Send FormData
            });

            if (response.ok) {
                setResponseMessage('Cloth added successfully!');
                setFormData({ cloth_name: '', category: '', message: '', price: '' });
                setImage(null); // Reset file
            } else {
                setResponseMessage('Failed to add cloth. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setResponseMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="row w-50">
                <form onSubmit={handleSubmit} className="offset-6">
                    <h2>Product Details</h2>

                    <div>
                        <label className="form-label">Cloth Name:</label>
                        <input
                            type="text"
                            name="cloth_name"
                            value={formData.cloth_name}
                            onChange={handleChange}
                            required
                            className="form-control"
                        />
                    </div>

                    <div>
                        <label className="form-label">Cloth Category:</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="form-control"
                        />
                    </div>

                    <div>
                        <label className="form-label">Image:</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleFileChange}
                            required
                            className="form-control"
                        />
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <label className="form-label">Message:</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Price:</label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-5">Submit</button>
                </form>
            </div>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default AddAllClothsCategory;
