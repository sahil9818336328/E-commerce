import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className=' section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Since 1995, Home Centre has brought the joy of homemaking to
            millions of customers. Starting off with a single store in Sharjah,
            UAE, today the brand has over 100 stores worldwide. Over the years,
            Home Centre has earned a reputation for delivering outstanding
            value, continuous innovation and exceptional customer experience.
            Home Centre offers an extensive and impressive range of furniture,
            modular furniture, home furnishings, home accessories, bed and bath
            products and kitchenware.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 400px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-top: 2rem;
    font-weight: 500;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  article {
    margin-top: 2rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
