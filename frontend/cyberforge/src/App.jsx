import './App.css'
import Nmapper from './scanners/Nmapper';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import ScannerHomepage from './scanners/ScannerHomepage';


function App() {
  return(
    <Router>
      <Header/>
    <Routes>
      <Route path={'/nmap'} element={<Nmapper/>}/>
      <Route path={'/scanners'} element={<ScannerHomepage/>}/>
    </Routes>
  </Router>
  )
}

export default App
