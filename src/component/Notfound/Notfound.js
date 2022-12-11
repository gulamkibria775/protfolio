import React from 'react'
import useTitle from '../hook/useTitle'

export default function Notfound() {
  useTitle('no page')
  return (
    <div className='text-4xl'>
        <p>There is no page found</p>
        <p>404 page error</p>
    </div>
  )
}
