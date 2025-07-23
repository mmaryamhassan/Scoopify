import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Flavors from './Flavors.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Home />
    <About />
    <Flavors />
    <Footer />
  </StrictMode>,
)
