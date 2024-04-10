import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ProductPage from './components/ProductPage'
import ProductDetailsPage from './components/ProductDetailsPage'
import CartPage from './components/CartPage'


function App() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetchdata()
  }, []);

  async function fetchdata() {
    try {
      let res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      console.log(data)
      setResult([...data])
      console.log(result)
    } catch (e) {
      console.log(e)
    }

  }

  return (
    <>
      <div id="body">
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='/' element={<ProductPage result={result} />} />
            <Route path='/productDetails' element={<ProductDetailsPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
