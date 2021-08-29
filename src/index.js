import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain='dev-koggoxc3.us.auth0.com'
    clientId='KUB1Mo8X02tDMwqSzvJgQ40JUQUnVrZw'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        {/* FilterProvider inside ProductsProvider as we are acessing products in FilterProvider comming from ProductsProvider */}
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById('root')
)
