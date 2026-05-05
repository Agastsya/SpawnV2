import { useState } from 'react'
import axios from "axios"
import '../Nmapper.css'

function Sherlock(){
  const [username, setUsername] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function sendUsername(e){
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
    setResponse('');
    const res = await axios.post('http://localhost:3333/sherlock',{username});
    setResponse(res.data);
    setLoading(false);
  }

  return (
    <div className="main-box">
      <form className='scanner-form' onSubmit={sendUsername}>
        <h1 className='scanner-title'>Sherlock OSINT</h1>
        <h3 className='scanner-description'>Sherlock hunts for social media accounts across multiple platforms using a given username, helping in OSINT investigations and digital footprint analysis.</h3>
       <div className='inner-box'>
        <label className='scanner-label'>Enter Username</label>
         <input
          placeholder='john_doe'
          className='scanner-input'
          type="text"
          onChange={(e)=>{setUsername(e.target.value)}}
        />
        <button className='scanner-button' type="submit" disabled={loading}>
          {loading ? 'Hunting...' : 'Submit'}
        </button>
       </div>
      </form>
      {submitted && (
        <pre className='terminal' style={{ whiteSpace: "pre-wrap" }}>
          <div className='terminal-response'>
            {loading ? <span className='loading-text'>Hunting...</span> : response}
          </div>
        </pre>
      )}
    </div>
  )
}
export default Sherlock
