import { useState } from 'react'
import axios from "axios"
import '../Nmapper.css'

function Dalfox(){
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function sendUrl(e){
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
    setResponse('');
    const res = await axios.post('http://localhost:3333/dalfox',{url});
    setResponse(typeof res.data === 'object' ? JSON.stringify(res.data, null, 2) : res.data);
    setLoading(false);
  }

  return (
    <div className="main-box">
      <form className='scanner-form' onSubmit={sendUrl}>
        <h1 className='scanner-title'>Dalfox XSS Scanner</h1>
        <h3 className='scanner-description'>Dalfox is a powerful XSS scanner and parameter analysis tool that helps find and exploit cross-site scripting vulnerabilities in web applications.</h3>
       <div className='inner-box'>
        <label className='scanner-label'>Enter Target URL</label>
         <input
          placeholder='https://example.com/search?q=test'
          className='scanner-input'
          type="text"
          onChange={(e)=>{setUrl(e.target.value)}}
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
export default Dalfox
