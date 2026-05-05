import { useState } from 'react'
import axios from "axios"
import '../Nmapper.css'

function Subfinder(){
  const [ip, setip] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function sendip(e){
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
    setResponse('');
    const res = await axios.post('http://localhost:3333/subfinder',{ip});
    setResponse(typeof res.data === 'object' ? JSON.stringify(res.data, null, 2) : res.data);
    setLoading(false);
  }

  return (
    <div className="main-box">
      <form className='scanner-form' onSubmit={sendip}>
        <h1 className='scanner-title'>Subfinder</h1>
        <h3 className='scanner-description'>Subfinder is a fast passive subdomain enumeration tool that discovers valid subdomains using passive online sources for security assessments and reconnaissance.</h3>
       <div className='inner-box'>
        <label className='scanner-label'>Enter Domain</label>
         <input
          placeholder='example.com'
          className='scanner-input'
          type="text"
          onChange={(e)=>{setip(e.target.value)}}
        />
        <button className='scanner-button' type="submit" disabled={loading}>
          {loading ? 'Enumerating...' : 'Submit'}
        </button>
       </div>
      </form>
      {submitted && (
        <pre className='terminal' style={{ whiteSpace: "pre-wrap" }}>
          <div className='terminal-response'>
            {loading ? <span className='loading-text'>Enumerating...</span> : response}
          </div>
        </pre>
      )}
    </div>
  )
}
export default Subfinder
