import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import $ from 'jquery'
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from './pages'

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    $(function () {
      $('.loader').delay(2000).fadeOut('slow')
      $('#overlayer').delay(2000).fadeOut('slow')
      setLoading(false)
    })
  }, [])

  return (
    <>
      <div id='overlayer'>
        <span className='loader'>
          <span className='loader-inner'></span>
        </span>
      </div>
      {/* AuthWrapper to prevent, checkout url bug when user is logged in. */}
      {!loading && (
        <AuthWrapper>
          <Router>
            <Navbar />
            <Sidebar />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/products'>
                <Products />
              </Route>
              <Route exact path='/products/:id' children={<SingleProduct />} />

              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path='/cart'>
                <Cart />
              </Route>
              <PrivateRoute exact path='/checkout'>
                <Checkout />
              </PrivateRoute>
              <Route path='*'>
                <Error />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </AuthWrapper>
      )}
    </>
  )
}

export default App
