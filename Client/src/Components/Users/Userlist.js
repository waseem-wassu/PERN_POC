import React, { useEffect, useState } from 'react'
import './Userlist.css'
import AddUserDialog from './Adduser';
import DeleteUserDialog from './Deletemodal';
import EditUserDialog from './EditUser';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Tableview() {
    const [userData, setUserData] = useState([])
    const [perPage, setPerpage] = useState(2)
    const [page, setPage] = useState(1)
    const [addUserModal, setAddUserModal] = useState(false)
    const [deleteUserModal, setDeleteUserModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [editUserModal, setEditUserModal] = useState(false);
    const [userToEdit, setUserToEdit] = useState(null);

    const totalPage = Math.ceil(userData && (userData?.length / perPage))
    useEffect(() => {
        getFunction()
    }, [])
    const getFunction = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setUserData(data)
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const lastIndex = page * perPage;
    const firstIndex = lastIndex - perPage;
    const currentItems = userData.slice(firstIndex, lastIndex)


    const handleOpenDialog = () => {
        setAddUserModal(true);
    };

    const handleCloseDialog = () => {
        setAddUserModal(false);
    };

    const handleOpenDeleteDialog = (user) => {
        setUserToDelete(user);
        setDeleteUserModal(true);
    };

    const handleCloseDeleteDialog = () => {
        setDeleteUserModal(false);
        setUserToDelete(null);
    };

    const handleDeleteUser = (userId) => {
        setUserData(userData.filter(user => user.id !== userId));
        handleCloseDeleteDialog();
    };

    const handleOpenEditDialog = (user) => {
        setUserToEdit(user);
        setEditUserModal(true);
    };

    const handleCloseEditDialog = () => {
        setEditUserModal(false);
        setUserToEdit(null);
    };

    const handleEditUser = (userId, updatedUser) => {
        setUserData(userData.map(user => (user.id === userId ? { ...user, ...updatedUser } : user)));
        handleCloseEditDialog();
    };

    return (
        <div className="page-container">
            <h1>User Management  <i class="fas fa-plus"></i></h1>
            <div className="table-wrapper">
                <button className="add-user-button" onClick={handleOpenDialog}>Add Users</button>
                <table className='table-container'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {currentItems?.map((item, i) => (
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.address.street}</td>
                                <td>{item.phone}</td>
                                <td className="actions-cell">
                                    <i className="fas fa-edit edit-icon" onClick={() => handleOpenEditDialog(item)}></i>
                                    <i className="fas fa-trash delete-icon" onClick={() => handleOpenDeleteDialog(item)}></i>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <AddUserDialog isOpen={addUserModal} onClose={handleCloseDialog} />
            <DeleteUserDialog isOpen={deleteUserModal} onClose={handleCloseDeleteDialog} onDelete={handleDeleteUser} user={userToDelete} />
            <EditUserDialog isOpen={editUserModal} onClose={handleCloseEditDialog} user={userToEdit} onEdit={handleEditUser} />
        </div>
    )
}

export default Tableview