import React from 'react'

const Loading = () => {
  return (
    <div className='text-center loading-100'>
      <lord-icon
        src='https://cdn.lordicon.com/kvsszuvz.json'
        trigger='loop'
        colors='primary:#121331,secondary:#08a88a'
        style={{ width: '250px', height: '250px' }}
      ></lord-icon>
    </div>
  )
}

export default Loading
