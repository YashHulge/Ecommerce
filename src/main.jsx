import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Product from './Product.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Details from './Details.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Home from './Home.jsx';
import Form_2 from './Form_2.jsx';
import Form_3 from './Form_3.jsx';
import Component1 from './PropsDrilling.jsx/Component1.jsx';
import NameProvider from './PropsDrilling.jsx/NameContext.jsx';
import Cart from './Cart.jsx';
import CartProvider from './Context.jsx/CartContext.jsx';
import Profile from './Profile.jsx';
let router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
    {
    path:"/product",
    element:<Product/>
  },
  {
    path:"/details/:id",
    element:<Details/>
  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"register",
    element:<Register/>
  },
  {
    index:true,
    element:<Home/>
  },
  {
    path:"carts",
    element:<Cart/>
  },
  {
    path:'profile',
    element:<Profile/>
  }
 
    ]
  }
  
])
createRoot(document.getElementById('root')).render(
// {/* <Form_2/> */}
// {/* <Form_3/> */}
// {/* <NameProvider>
//   <Component1/>
// </NameProvider> */}
<CartProvider>
  <RouterProvider router={router}>


</RouterProvider>
</CartProvider>
)
