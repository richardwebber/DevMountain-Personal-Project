import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import Home from './Components/home.jsx'
import Shop from './Components/Shop2.jsx'
import Archive from './Components/Archive.jsx'
import Cart from './Components/Cart.jsx'
import Admin from './Components/Admin.jsx'
import IndividualProductPage from './Components/IndividualProductPage.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>} />
      <Route path='/shop' >
        <Route
          index
          element={<Shop />}
        />
      
        <Route
          path={`:id`}
          element={<IndividualProductPage />}
          
        />
      </Route>
      <Route path='/archive' element={<Archive/>} />
      <Route path='/cart' element={<Cart/>} /> 
      <Route path='/admin' element={<Admin/>}/>
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
</React.StrictMode>

)