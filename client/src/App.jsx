import React from 'react'
import Navebar from './components/navbar'
import { useLocation } from 'react-router-dom'

const App = () => {
  const isOwnewrPath =useLocation().pathname.includes('/owner');
  return (
    <div>
      <Navebar />
    </div>
    
  )
}

export default App
