import React, { useState, useEffect } from 'react';
import './Userlist.css';

const EditUserDialog = ({ isOpen, onClose, user, onEdit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAddress(user.address.street);
      setPhone(user.phone);
    }
  }, [user]);

  const handleEditUser = () => {
    onEdit(user.id, { name, email, address: { street: address }, phone });
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
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="button-container">
          <button className="confirm-button" onClick={handleEditUser}>Save</button>
          <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditUserDialog;
