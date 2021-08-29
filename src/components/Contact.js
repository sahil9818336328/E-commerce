import React, { useState } from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>SIGN UP AND GET A CHANCE TO WIN THE GIVEAWAY.</h3>
        <div className='content'>
          <p>
            Buy Furniture Online At Urban Ladder - India's Favourite Destination
            For All Things Home!
          </p>
          <form
            className='contact-form'
            action='https://formspree.io/f/mdoypgzw'
            method='POST'
          >
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
              name='_replyto'
            />
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--clr-grey-5);
    outline: none;
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-5);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-grey-5);
    text-transform: capitalize;
  }
  .submit-btn {
    background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-grey-3);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0 8rem 0;
  }
`

export default Contact
