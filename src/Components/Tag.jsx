import React from 'react'

function Tag({title}) {
  return (
    <>
    <div className='p-1 m-1 rounded w-max min-h-max bg-[#333333] text-xs'>{title}</div>
    </>
  )
}

export default Tag