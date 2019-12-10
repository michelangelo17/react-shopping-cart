import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import data from './data'
import { ProductContext, CartContext } from './contexts'
import useLocalStorage from './useLocalStorage'
// Components
import Navigation from './components/Navigation'
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart'

function App() {
  const [products] = useState(data)
  const [cart, setCart] = useLocalStorage('storedData', [])
	console.log(cart, setCart)
  const addItem = item => {
    setCart([...cart, item])
  }

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <div className='App'>
          <Navigation cart={cart} />

          {/* Routes */}
          <Route exact path='/' component={Products} />

          <Route path='/cart' component={ShoppingCart} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  )
}

export default App
