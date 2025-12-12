import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p class="text">You have a new message!</p>
    </>
  )
}

export default App
