import React, { useState } from 'react';
import { FaUpload, FaBook, FaUser, FaMoneyBillWave, FaInfoCircle } from 'react-icons/fa';
import './SellYourBook.css';

const SellYourBook = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        isbn: '',
        condition: 'Good',
        price: '',
        description: '',
        category: '',
        sellerName: '',
        sellerEmail: '',
        sellerPhone: '',
        images: []
    });

    const [previewImages, setPreviewImages] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear messages when user starts typing
        setSuccessMessage('');
        setErrorMessage('');
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 5) {
            setErrorMessage('You can only upload up to 5 images');
            return;
        }
        setFormData(prev => ({
            ...prev,
            images: [...prev.images, ...files]
        }));

        // Create preview URLs
        const newPreviews = files.map(file => URL.createObjectURL(file));
        setPreviewImages(prev => [...prev, ...newPreviews]);
        setErrorMessage('');
    };

    const removeImage = (index) => {
        setFormData(prev => ({
            ...prev,
            images: prev.images.filter((_, i) => i !== index)
        }));
        setPreviewImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        try {
            // Simulate API call
            console.log('Form submitted:', formData);
            setSuccessMessage('Your book has been successfully listed for sale! We will review it shortly.');
            // Reset form
            setFormData({
                title: '',
                author: '',
                isbn: '',
                condition: 'Good',
                price: '',
                description: '',
                category: '',
                sellerName: '',
                sellerEmail: '',
                sellerPhone: '',
                images: []
            });
            setPreviewImages([]);
        } catch (error) {
            setErrorMessage('Failed to submit the form. Please try again later.');
        }
    };

    return (
        <div className="sell-book-container">
            <div className="sell-book-header">
                <h1>Sell Your Pre-Owned Books</h1>
                <p>Fill out the form below to list your books for sale</p>
            </div>

            {successMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}

            {errorMessage && (
                <div className="error-message">
                    {errorMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className="sell-book-form">
                <div className="form-section">
                    <h2><FaBook /> Book Details</h2>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="title">Book Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="author">Author</label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                value={formData.author}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="isbn">ISBN (Optional)</label>
                            <input
                                type="text"
                                id="isbn"
                                name="isbn"
                                value={formData.isbn}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select Category</option>
                                <option value="Fiction">Fiction</option>
                                <option value="Non-Fiction">Non-Fiction</option>
                                <option value="Children">Children</option>
                                <option value="Romance">Romance</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                                <option value="Thriller">Thriller</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="condition">Book Condition</label>
                            <select
                                id="condition"
                                name="condition"
                                value={formData.condition}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="Like New">Like New</option>
                                <option value="Very Good">Very Good</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                                <option value="Poor">Poor</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price (₹)</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                min="0"
                                step="0.01"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="form-section">
                    <h2><FaInfoCircle /> Book Description</h2>
                    <div className="form-group">
                        <label htmlFor="description">Describe your book's condition and any notable features</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows="4"
                            required
                        ></textarea>
                    </div>
                </div>

                <div className="form-section">
                    <h2><FaUpload /> Book Images</h2>
                    <div className="image-upload-container">
                        <div className="image-upload-box">
                            <input
                                type="file"
                                id="images"
                                name="images"
                                accept="image/*"
                                multiple
                                onChange={handleImageUpload}
                                className="file-input"
                            />
                            <label htmlFor="images" className="file-label">
                                <FaUpload className="upload-icon" />
                                <span>Click to upload images</span>
                                <span className="upload-hint">or drag and drop</span>
                            </label>
                        </div>
                        {previewImages.length > 0 && (
                            <div className="image-preview-container">
                                {previewImages.map((preview, index) => (
                                    <div key={index} className="image-preview">
                                        <img src={preview} alt={`Preview ${index + 1}`} />
                                        <button
                                            type="button"
                                            className="remove-image"
                                            onClick={() => removeImage(index)}
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="form-section">
                    <h2><FaUser /> Seller Information</h2>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="sellerName">Your Name</label>
                            <input
                                type="text"
                                id="sellerName"
                                name="sellerName"
                                value={formData.sellerName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sellerEmail">Email Address</label>
                            <input
                                type="email"
                                id="sellerEmail"
                                name="sellerEmail"
                                value={formData.sellerEmail}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sellerPhone">Phone Number</label>
                            <input
                                type="tel"
                                id="sellerPhone"
                                name="sellerPhone"
                                value={formData.sellerPhone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="form-actions">
                    <button type="submit" className="submit-btn">
                        <FaMoneyBillWave /> List Book for Sale
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SellYourBook; 