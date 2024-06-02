import React, { useState } from 'react';
import './Userlist.css';

const AddUserDialog = ({ isOpen, onClose }) => {
  const [user, setUser] = useState({name:'',email:'', phone:'', address:'' })

  const userHandleChange = (e) =>{
    setUser({...user, [e.target.value]: e.target.name})
  }

  const handleAddUser = (e) => {   
    onClose();
  };

  return (
    <div className={`dialog ${isOpen ? 'open' : ''}`}>
      <div className="dialog-content">
        <h2>Add User</h2>
        <div className="input-group">
          <label>Name:</label>
          <input type="text" name='name' value={user.name} onChange={(e) => userHandleChange(e)} />
        </div>
        <div className="input-group">
          <label>Phone:</label>
          <input type="text" name='phone' value={user.phone} onChange={(e) => userHandleChange(e)} />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" name='email' value={user.email} onChange={(e) => userHandleChange(e)} />
        </div>
        <div className="input-group">
          <label>Address:</label>
          <input type="text" name='address' value={user.address} onChange={(e) => userHandleChange(e)} />
        </div>
        <div className="button-container">
          <button className="add-button" onClick={handleAddUser}>Add User</button>
          <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddUserDialog;
