import React, { useState } from 'react';
import '../Users/Userlist.css'

const AddProductDialog = ({ isOpen, onClose }) => {
    const [product, setProduct] = useState({ name: '', description: '' })
    const [listProduct, setListproduct] = useState([])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };
    

    const handleAddProduct = (e) => {
        e.preventDefault();
        setListproduct(prev => [...prev, product])
        // onClose();
    };

    console.log(listProduct,'producyyyyyyyyyyyyy');

    return (
        <div className={`dialog ${isOpen ? 'open' : ''}`}>
            <div className="dialog-content">
                <h2>Add Product</h2>
                <div className="input-group">
                    <label>Product Name:</label>
                    <input type="text" name='name' value={product.name} onChange={(e) => handleChange(e)} />
                </div>
                <div className="input-group">
                    <label>Description:</label>
                    <input type="text" name='description' value={product.description} onChange={(e) => handleChange(e)} />
                </div>

                <div className="button-container">
                    <button className="add-button" onClick={handleAddProduct}>Add product</button>
                    <button className="cancel-button" onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddProductDialog;
