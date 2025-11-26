import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/about/About.jsx';
import Contact from './components/pages/contact/Contact.jsx';

createRoot(document.getElementById('root')).render(

    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about/:from' element={<About />} />
        <Route path='/contact/:from' element={<Contact />} />
      </Routes>
    </Router>
)
