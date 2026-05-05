import { useState } from 'react'
import axios from "axios"
import './Nmapper.css'

function Nmapper(){
  const [ip, setip] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function sendip(e){
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
    setResponse('');
    const res = await axios.post('http://localhost:3333/nmap',{ip});
    setResponse(res.data);
    setLoading(false);
  }

  return (
    <div className="main-box">
      <form className='scanner-form' onSubmit={sendip}>
        <h1 className='scanner-title'>Nmap Scanner</h1>
        <h3 className='scanner-description'>Nmap Scanner is a powerful network scanning tool used to discover open ports, running services, and potential security vulnerabilities on target systems.</h3>
       <div className='inner-box'>
        <label className='scanner-label'>Enter Your Ip</label>
         <input
          placeholder='http://xyz.com'
          className='scanner-input'
          type="text"
          onChange={(e)=>{setip(e.target.value)}}
        />
        <button className='scanner-button' type="submit" disabled={loading}>
          {loading ? 'Scanning...' : 'Submit'}
        </button>
       </div>
      </form>
      {submitted && (
        <pre className='terminal' style={{ whiteSpace: "pre-wrap" }}>
          <div className='terminal-response'>
            {loading ? <span className='loading-text'>Scanning...</span> : response}
          </div>
        </pre>
      )}
    </div>
  )
}
export default Nmapper
