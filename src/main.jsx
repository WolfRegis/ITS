import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/about/About.jsx';
import Contact from './components/pages/contact/Contact.jsx';
import Formation from './components/pages/Formation/Formation.jsx';
import Maintenance from './components/pages/maintenance/Maintenance.jsx';
import Location from './components/pages/Géolocalisation/Location.jsx';
import Securite from './components/pages/securité/Securite.jsx';
import Reseau from './components/pages/réseau/Reseau.jsx';
import ElecBatiment from './components/pages/élctricité batiment/ElecBatiment.jsx';
import ElectIndustrielle from './components/pages/électricité industrielle/ElectIndustrielle.jsx.jsx';
import SiteInternet from './components/pages/site internet/SiteInternet.jsx';
import Vps from './components/pages/vps server/Vps.jsx';
import Logiciel from './components/pages/génie logiciel/Logiciel.jsx';
import Sms from './components/pages/sms marketing/Sms.jsx';

createRoot(document.getElementById('root')).render(

    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about/:from' element={<About />} />
        <Route path='/contact/:from' element={<Contact />} />
        <Route path='/formation/:from' element={<Formation />} />
        <Route path='/maintenance/:from' element={<Maintenance />} />
        <Route path='/géolocalisation/:from' element={<Location />} />
        <Route path='/sécurité/:from' element={<Securite />} />
        <Route path='/réseau/:from' element={<Reseau />} />
        <Route path='/électricité_batiment/:from' element={<ElecBatiment />} />
        <Route path='/électricité_industrielle/:from' element={<ElectIndustrielle />} />
        <Route path='/site_internet/:from' element={<SiteInternet />} />
        <Route path='/vps/:from' element={<Vps />} />
        <Route path='/génie_logiciel/:from' element={<Logiciel />} />
        <Route path='/sms_marketing/:from' element={<Sms />} />
      </Routes>
    </Router>
)
