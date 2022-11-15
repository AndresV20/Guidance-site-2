import React from 'react'

const  input = () => {
  return (
    <form className='input'>
      <input type="input" placeholder='Search' className='input__box' />
      <button className='input__search' type='submit'>Go</button>
    </form>

  )
}

export default input;