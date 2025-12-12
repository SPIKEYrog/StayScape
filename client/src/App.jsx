import React from 'react'
import Navebar from './components/navbar'

const App = () => {
  const isOwnewrPath =useLocation().pathname.includes('/owner');
  return (
    <div>
      <Navebar />
    </div>
    
  )
}

export default App
