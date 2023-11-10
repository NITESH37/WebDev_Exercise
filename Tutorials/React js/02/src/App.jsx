import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const name = 'Nitesh'
  const greeting = 'Welcome to React js'
 
  return (
    <>
      <h1>Hi {name} </h1>
      <p>{greeting}</p>
    </>
  )
}

export default App
