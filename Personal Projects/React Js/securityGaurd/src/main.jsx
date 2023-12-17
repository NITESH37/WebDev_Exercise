import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Services from './components/Serrvices/Services.jsx'
import Careers from './components/Careers/Careers.jsx'
import { Home } from './components/Home/Home.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App />} >
      <Route path='/' element={<Home />} />
    <Route path='careers' element={ <Careers />} />
    <Route path='contacts' element= { <Contact /> } />
    <Route path='about' element={ <About />} />
    <Route path='services' element={ <Services />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
