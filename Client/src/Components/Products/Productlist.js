import React, { useEffect, useState } from 'react'
import '../Users/Userlist.css'
import AddProduct from './Addproduct';
// import DeleteUserDialog from './Deletemodal';
import EditProductDialog from './Editproduct';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Tableview() {
    const [productData, setProductData] = useState([])
    const [perPage, setPerpage] = useState(2)
    const [page, setPage] = useState(1)
    const [addUserModal, setAddProductModal] = useState(false)
    const [deleteUserModal, setDeleteUserModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [editProductModal, setEditProductModal] = useState(false);
    const [productToEdit, setProductToEdit] = useState(null);
    const totalPage = Math.ceil(productData && (productData?.length / perPage))
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
            setProductData(data)
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const lastIndex = page * perPage;
    const firstIndex = lastIndex - perPage;
    const currentItems = productData.slice(firstIndex, lastIndex)


    const handleOpenDialog = () => {
        setAddProductModal(true);
    };

    const handleCloseDialog = () => {
        setAddProductModal(false);
    };

    const handleOpenDeleteDialog = (user) => {
        setUserToDelete(user);
        setDeleteUserModal(true);
    };

    const handleCloseDeleteDialog = () => {
        setDeleteUserModal(false);
        setUserToDelete(null);
    };

    const handleDeleteUser = (productId) => {
        setProductData(productData.filter(product => product.id !== productId));
        handleCloseDeleteDialog();
    };

    const handleOpenEditDialog = (product) => {
        setProductToEdit(product);
        setEditProductModal(true);
    };

    const handleCloseEditDialog = () => {
        setEditProductModal(false);
        setProductToEdit(null);
    };

    const handleEditProduct = (productId, updatedProduct) => {
        setProductData(productData.map(product => (product.id === productId ? { ...product, ...updatedProduct } : product)));
        handleCloseEditDialog();
    };

    return (
        <div className="page-container">
            <h1>Product Management  <i class="fas fa-plus"></i></h1>
            <div className="table-wrapper">
                <button className="add-user-button" onClick={handleOpenDialog}>Add Product</button>
                <table className='table-container'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Description</th>                           
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems?.map((item, i) => (
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>                                
                                <td className="actions-cell">
                                    <i className="fas fa-edit edit-icon" onClick={() => handleOpenEditDialog(item)}></i>
                                    <i className="fas fa-trash delete-icon" onClick={() => handleOpenDeleteDialog(item)}></i>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <AddProduct isOpen={addUserModal} onClose={handleCloseDialog} />
            {/* <DeleteUserDialog isOpen={deleteUserModal} onClose={handleCloseDeleteDialog} onDelete={handleDeleteUser} user={userToDelete} />*/}
            <EditProductDialog isOpen={editProductModal} onClose={handleCloseEditDialog} product={productToEdit} onEdit={handleEditProduct} /> 
        </div>
    )
}

export default Tableview