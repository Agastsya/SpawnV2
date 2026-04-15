import './App.css'
import Nmapper from './scanners/Nmapper';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import ScannerHomepage from './scanners/ScannerHomepage';
import Whatweb from './scanners/WhatWeb/Whatweb'
import Ffuf from './scanners/Ffuf/Ffuf';
import Homepage from '../Homepage/Homepage';


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
    </Routes>
  </Router>
  )
}

export default App
