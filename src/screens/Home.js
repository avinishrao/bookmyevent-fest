import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'

export default function Home() {
  return (
    <div className='fs-1'>
        <div><Navbar/> from the Home screen</div>
        <div>body</div>
        <div><Footer/></div>
        <div>This is the div of the Home page</div>
    </div>
    
  )
}
