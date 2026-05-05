import './App.css'
import Nmapper from './scanners/Nmapper';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import ScannerHomepage from './scanners/ScannerHomepage';
import Whatweb from './scanners/WhatWeb/Whatweb'
import Ffuf from './scanners/Ffuf/Ffuf';
import Homepage from '../Homepage/Homepage';
import Httpx from './scanners/Httpx/Httpx';
import Nuclei from './scanners/Nuclei/Nuclei';
import Sherlock from './scanners/Sherlock/Sherlock';
import Dalfox from './scanners/Dalfox/Dalfox';
import Subfinder from './scanners/Subfinder/Subfinder';


function App() {
  return(
    <Router>
      <Header/>
    <Routes>
      <Route path={'/'} element={<Homepage/>}/>
      <Route path={'/nmap'} element={<Nmapper/>}/>
      <Route path={'/scanners'} element={<ScannerHomepage/>}/>
      <Route path={'/whatweb'} element={<Whatweb/>}/>
      <Route path={'/ffuf'} element={<Ffuf/>}/>
      <Route path={'/httpx'} element={<Httpx/>}/>
      <Route path={'/nuclei'} element={<Nuclei/>}/>
      <Route path={'/sherlock'} element={<Sherlock/>}/>
      <Route path={'/dalfox'} element={<Dalfox/>}/>
      <Route path={'/subfinder'} element={<Subfinder/>}/>
    </Routes>
  </Router>
  )
}

export default App
