import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err = useRouteError();

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <span className='text-lg font-bold'>{err.status} {err.statusText}</span>
      <h3 className='text-xl font-medium'>Oops!!! Something went wrong 😕</h3>
      <p>Maybe the page doesn't exist or has been removed</p>
    </div>
  )
}

export default Error