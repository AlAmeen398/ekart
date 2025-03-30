


import Header from './component/Header'
import Footer from './component/Footer'
import Home from './page/Home'
import Cart from './page/Cart'
import Wishlist from './page/Wishlist'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Header />
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        
      </Routes>
      <Footer />

    </>
  )
}

export default App
