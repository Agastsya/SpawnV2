import { useState } from 'react'
import axios from "axios"
import '../Nmapper.css'

function Nuclei(){
  const [ip, setip] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function sendip(e){
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
    setResponse('');
    const res = await axios.post('http://localhost:3333/nuclei',{ip});
    setResponse(typeof res.data === 'object' ? JSON.stringify(res.data, null, 2) : res.data);
    setLoading(false);
  }

  return (
    <div className="main-box">
      <form className='scanner-form' onSubmit={sendip}>
        <h1 className='scanner-title'>Nuclei Scanner</h1>
        <h3 className='scanner-description'>Nuclei is a fast vulnerability scanner based on community-curated templates, identifying security misconfigurations and CVEs across web applications.</h3>
       <div className='inner-box'>
        <label className='scanner-label'>Enter Target URL / Domain</label>
         <input
          placeholder='https://example.com'
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
export default Nuclei
