import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProgressBar from '../Pages/ProgressBar'
import StyledButton from '../Pages/StyledButton'
import Checkboxex from '../Pages/Checkboxex'
import HoverButton from '../Pages/HoverButton'
import Tabs from '../Pages/TabsComponent'
import LocalStore from '../Pages/LocalStore'
import Tableview from '../Pages/Tableview'
import AddTwoNumber from '../Pages/AddTwoNumber'
import Accordion from '../Pages/Accordion'
import Card from '../Pages/Card'
import BoxTask from '../Pages/Boxtask'
import Login from '../Components/Authentication/Login'
import Signup from '../Components/Authentication/Signup'
import UserList from '../Components/Users/Userlist'
import ProductList from '../Components/Products/Productlist'


export default function Routers() {
    return (
        <Router>
            <Routes>               
                <Route  path='/progressbar' element={<ProgressBar />} />
                <Route  path='/styledbutton' element={<StyledButton />} />
                <Route  path='/checkboxex' element={<Checkboxex />} />
                <Route  path='/hoverBtn' element={<HoverButton />} />
                <Route  path='/tabs' element={<Tabs />} />
                <Route  path='/localstore' element={<LocalStore />} />
                <Route  path='/tableview' element={<Tableview />} />
                <Route  path='/addtwo' element={<AddTwoNumber />} />
                <Route  path='/accordion' element={<Accordion />} />
                <Route  path='/cardview' element={<Card />} />
                <Route  path='/boxtask' element={<BoxTask />} />
                <Route  path='/' element={<Login />} />
                <Route  path='/signup' element={<Signup />} />
                <Route  path='/userlist' element={<UserList />} />
                <Route  path='/products' element={<ProductList/>} />


            </Routes>
        </Router>
    )
}
