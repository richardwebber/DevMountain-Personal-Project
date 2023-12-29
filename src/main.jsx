import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import Home from './Components/Home.jsx'
import Shop from './Components/Shop2.jsx'
import Archive from './Components/Archive.jsx'
import Cart from './Components/Cart.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/archive' element={<Archive/>} />
      <Route path='/cart' element={<Cart/>} /> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)