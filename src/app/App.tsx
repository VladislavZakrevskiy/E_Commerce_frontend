import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import { useAppSelector } from "./store/hooks"
import UserById from "../pages/UserById"
import AllProducts from "../pages/AllProducts"
import ProductById from "../pages/ProductById"
import Register from "../pages/Register"
import Login from "../pages/Login"
import BasketPage from "../pages/BacketPage"
import SellerById from "../pages/SellerById"
import MessagePage from "../pages/MessagePage"

function App() {

  const {isAuth} = useAppSelector(state => state.AuthSlice)

  return (
    <BrowserRouter>
      <Layout>
          {
            isAuth 
            ?
            <Routes>
              <Route path='/' element={<AllProducts/>}/>
              <Route path='/:id'/>
              <Route path={'/product/:id'} element={<ProductById/>}/>
              <Route path='/customer/:id' element={<UserById/>}/>
              <Route path="/seller/:id" element={<SellerById/>}/>
              <Route path={"/buy"} element={<BasketPage/>}/>
              <Route path='/messages' element={<MessagePage/>}/>
            </Routes>
            : 
            <Routes>
              <Route path="/registration/:step" element={<Register />} />
              <Route path='/login' element={<Login/>}/>
              <Route path="*" element={<Navigate to={'/login'} />} />
            </Routes>
          }
      </Layout>
    </BrowserRouter>
  )
}

export default App
