import './App.css'
import Nmapper from './scanners/Nmapper';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScannerHomepage from './scanners/ScannerHomepage';
import Whatweb from './scanners/WhatWeb/Whatweb'
import Ffuf from './scanners/Ffuf/Ffuf';
import Homepage from '../Homepage/Homepage';
import ScannerTool from './scanners/ScannerTool';


function App() {
  return(
    <Router>
      <Header/>
      <main className="app-content">
        <Routes>
          <Route path={'/'} element={<Homepage/>}/>
          <Route path={'/scanners'} element={<ScannerHomepage/>}/>
          <Route path={'/nmap'} element={<Nmapper/>}/>
          <Route path={'/whatweb'} element={<Whatweb/>}/>
          <Route path={'/ffuf'} element={<Ffuf/>}/>
          <Route path={'/subfinder'} element={
            <ScannerTool
              endpoint="/subfinder"
              title="Subfinder"
              description="Passive subdomain enumeration tool that uses public sources to find valid subdomains for any target domain."
              label="Target Domain"
              placeholder="example.com"
              fieldName="ip"
            />
          }/>
          <Route path={'/nuclei'} element={
            <ScannerTool
              endpoint="/nuclei"
              title="Nuclei"
              description="Template-driven vulnerability scanner that sends targeted requests to identify CVEs and misconfigurations across stacks."
              label="Target URL"
              placeholder="https://example.com"
              fieldName="ip"
            />
          }/>
          <Route path={'/httpx'} element={
            <ScannerTool
              endpoint="/httpx"
              title="HTTPX"
              description="Fast and multi-purpose HTTP toolkit for probing services, validating live hosts, and gathering technology metadata."
              label="Target Host"
              placeholder="example.com"
              fieldName="ip"
            />
          }/>
          <Route path={'/dalfox'} element={
            <ScannerTool
              endpoint="/dalfox"
              title="Dalfox"
              description="Powerful XSS scanner and parameter analyzer for detecting cross-site scripting flaws across modern web applications."
              label="Target URL"
              placeholder="https://example.com/?q=test"
              fieldName="url"
            />
          }/>
          <Route path={'/sherlock'} element={
            <ScannerTool
              endpoint="/sherlock"
              title="Sherlock"
              description="Hunt down social media accounts by username across hundreds of platforms for OSINT and identity discovery."
              label="Username"
              placeholder="johndoe"
              fieldName="username"
            />
          }/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
