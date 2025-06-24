import React from 'react'

const Card = ({children, bg='bg-gray-100'}) => {
  return (
    <div className={`${bg} border-black border-4 p-3 rounded-lg shadow-md`}>{children}</div>
  )
}

export default Card