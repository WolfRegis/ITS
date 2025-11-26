import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/about/About.jsx';
import Contact from './components/pages/contact/Contact.jsx';
import Formation from './components/pages/Formation/Formation.jsx';
import Maintenance from './components/pages/maintenance/Maintenance.jsx';

createRoot(document.getElementById('root')).render(

    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about/:from' element={<About />} />
        <Route path='/contact/:from' element={<Contact />} />
        <Route path='/formation/:from' element={<Formation />} />
        <Route path='/maintenance/:from' element={<Maintenance />} />
      </Routes>
    </Router>
)
