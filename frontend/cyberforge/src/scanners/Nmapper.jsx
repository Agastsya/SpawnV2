import { useState } from 'react'
import axios from "axios"
import './Nmapper.css'

function Nmapper(){
  const [ip, setip] = useState('');
  const [response,setResponse] = useState('');

  async function sendip(e){
    e.preventDefault();
    const res = await axios.post('http://134.209.150.218:3333/nmap',{ip});
    setResponse(res.data);
    
  }


  return (
    <div class="main-box">
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
        <button className='scanner-button' type="submit">Submit</button>
       </div>
      </form>
      <pre className='terminal' style={{ whiteSpace: "pre-wrap" }}>
      <div className='terminal-response'>
        {response}
      </div>
      </pre>

    </div>
  )

}
export default Nmapper