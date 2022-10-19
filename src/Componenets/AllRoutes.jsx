import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { About } from '../Pages/About'
import { Bookings } from '../Pages/bookings'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { Moviedetails } from '../Pages/Moviedetails'
import { Notfound } from '../Pages/Notfound'
import { Product } from '../Pages/Product'
import { PrivateRoute } from './PrivateRoute'
import {ShowBookedMovie} from '../Pages/ShowBookedMovie'
export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}></Route>
        <Route path="/bookings" element={<PrivateRoute><Bookings/></PrivateRoute>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        
        <Route path="/moviedetails/:id" element={<Moviedetails/>}></Route>
        <Route path="/showBookedMovie" element={<ShowBookedMovie/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
    </Routes>
  )
}
