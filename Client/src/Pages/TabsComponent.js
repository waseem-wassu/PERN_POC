import React, { useState } from 'react'

const person = {
    name: 'John Doe',
    age: 32,
    occupation: 'Developer'
  };
  
  const address = {
    street: '1234 Main St',
    city: 'San Francisco',
    state: 'CA',
    zip: '94107'
  };

function TabsComponent() {
    const [activeTab, setActiveTab] = useState('Person');
    const handleChangeTab = (e, tabs) =>{
        e.preventDefault()
        setActiveTab(tabs)
    }

    return (
        <div className='tab_container'>
            <ul>
                <li onClick={(e) => handleChangeTab(e, 'Person')} style={{color: `${activeTab === 'Person' ? 'black' : 'gray'}`}}>Person</li>
                <li onClick={(e) => handleChangeTab(e, 'Address')} style={{color: `${activeTab === 'Address' ? 'black' : 'gray'}`}}>Address</li>
            </ul>
            <div className='tabcontent'>
                {activeTab === 'Person' ? (<div className='personcontainer'>
                    <p>Name: {person.name}</p>
                    <p>Age: {person.age}</p>
                    <p>Occupation: {person.occupation}</p>
                </div>) : (<div className='addresscontainer'>
                    <p>Street: {address.street}</p>
                    <p>City: {address.city}</p>
                    <p>State: {address.state}</p>
                    <p>Zip: {address.zip}</p>
                </div>)}
            </div>
        </div>
    )
}

export default TabsComponent