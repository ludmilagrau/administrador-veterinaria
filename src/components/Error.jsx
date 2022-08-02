import React from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-2 rounded-md -mt-7'>
      <p>{children}</p>
    </div>
  )
}

export default Error;