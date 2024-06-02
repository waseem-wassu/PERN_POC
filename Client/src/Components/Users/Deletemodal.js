import React from 'react';
import './Userlist.css';

const DeleteUserDialog = ({ isOpen, onClose, onDelete, user }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="delete-dialog">
      <div className="delete-dialog-content">
        <h2>Delete User</h2>
        <p>Are you sure you want to delete the user {user.name}?</p>
        <div className="button-container">
          <button className="confirm-button" onClick={() => onDelete(user.id)}>Delete</button>
          <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserDialog;
