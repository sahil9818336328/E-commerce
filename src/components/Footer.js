import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> ShopMe</span>
      </h5>
      <h5>All rights reserved.</h5>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
  text-align: center;
  span {
    color: var(--clr-grey-1);
    font-weight: 500;
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
