import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/user'
import HomePage from './pages/homepage'
import Admin from './pages/admin/admin'

import Singup from './pages/sigup'
import Singin from './pages/singin'
import GioHang from './pages/giohang'
import DetailProduct from './pages/detailproduct'
import Detailayout from './components/layout/detailLayout'
import { IProduct, SingupForm } from './model'
import { getAll } from './api/product'
import { signup } from './api/auth'
import ProductUpdate from './pages/product-update'
import Dashboard from './pages/admin/admin'
import { ErrorPage } from './pages/error'


// 1. Khai báo router react-router-dom

function App ()
{
  const [ product, setProduct ] = useState<IProduct[]>( [] )
  useEffect( () =>
  {
    getAll().then( ( { data } ) => setProduct( data ) )
  }, [] );

  return (

    <Routes>
      <Route path='/' element={ <UserLayout /> } > {/* user layout */ }
        <Route index element={ <HomePage products={ product } /> } />
        <Route path='products/:_id' index element={ <DetailProduct products={ product } /> } ></Route>
        <Route path='/giohang' element={ <GioHang /> } ></Route>
      </Route>
      <Route path="/admin" element={sessionStorage.getItem('user') === 'Admin' ? (<Detailayout />) : (<ErrorPage />)} >
<Route index element={<Dashboard />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Admin />} />
          <Route path="/admin/edit/:id" element={<ProductUpdate />} />
          
      </Route>



      <Route path='signup' element={ <Singup /> } ></Route>
      <Route path='login' element={ <Singin /> } ></Route>
    </Routes>

  )
}

export default App
