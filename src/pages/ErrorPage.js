import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you're looking for does'nt exist.</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: linear-gradient(to right, #4568dc, #b06ab3);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
    color: var(--clr-white);
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
    color: var(--clr-white);
  }
`

export default ErrorPage
