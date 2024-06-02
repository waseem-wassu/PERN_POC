import React, { useState, useEffect } from 'react';
import '../Users/Userlist.css';

const EditProductDialog = ({ isOpen, onClose, product, onEdit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
    
    }
  }, [product]);

  const handleEditUser = () => {
    onEdit(product.id, { name, description });
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="edit-dialog">
      <div className="edit-dialog-content">
        <h2>Edit User</h2>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
     
       
        <div className="button-container">
          <button className="confirm-button" onClick={handleEditUser}>Save</button>
          <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditProductDialog;
