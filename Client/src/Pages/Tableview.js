import React, { useEffect, useState } from 'react'

function Tableview() {
    const [userData, setUserData] = useState([])
    const [perPage, setPerpage] = useState(2)
    const [page, setPage] = useState(1)
    const totalPage = Math.ceil(userData && (userData?.length / perPage))
    useEffect(() => {
        getFunction()
    }, [])
    const getFunction = async () => {
        try {
            // const response = await fetch("https://jsonplaceholder.typicode.com/users")
            // if (!response.ok) {
            //     throw new Error('Failed to fetch data');
            // }
            // const data = await response.json();
            // setUserData(data)
            await fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then(res => {
                setUserData(res)
            })
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const lastIndex = page * perPage;
    const firstIndex = lastIndex - perPage;
    const currentItems = userData.slice(firstIndex, lastIndex)


    return (
        <table className='table-container'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            {currentItems?.map((item, i) => (
                <tbody>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{`${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`}</td>
                        <td>{item.phone}</td>
                        <td>{item.website}</td>
                        <td>{item.company.name}</td>
                    </tr>
                </tbody>
            ))}

        </table>

    )
}

export default Tableview