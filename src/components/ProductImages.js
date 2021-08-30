import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0])

  return (
    <Wrapper>
      <img src={main.url} alt={main.filename} className='main skeleton' />
      <div className='gallery'>
        {images.map((img, index) => {
          const { url, filename } = img
          return (
            <img
              src={url}
              alt={filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${img.url === main.url ? 'active' : null}`}
              id='skeleton'
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .skeleton {
    animation: css-loading 0.5s linear infinite alternate;
  }
  #skeleton {
    animation: css-loading 0.5s linear infinite alternate;
  }
  @keyframes css-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 1px #102a42;
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
