import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h4>
          <Link to='/'>Home</Link>
          {product && <Link to='/products'>products</Link>}/ {title}
        </h4>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: linear-gradient(to right, #4568dc, #b06ab3);
  margin-top: 2.5rem;
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  color: var(--clr-grey-1);
  a {
    color: var(--clr-white);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-grey-1);
  }
  h4 {
    margin-bottom: 0;
  }
`

export default PageHero
