import { useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  const [ip, setip] = useState('');
  const [response,setResponse] = useState('');

  async function sendip(e){
    e.preventDefault();
    const res = await axios.post('http://localhost:3333/nmap',{ip});
    setResponse(res.data);
    
  }


  return (
    <div class="main-box">
      <h1>Cyber Forge Frontend </h1>
      <form onSubmit={sendip}>
        <label>Enter Your Ip</label>
        <input 
          type="text" 
          onChange={(e)=>{setip(e.target.value)}} 
        />
        <button type="submit">Submit</button>
      </form>
      <pre style={{ whiteSpace: "pre-wrap" }}>
      {response}
      </pre>

    </div>
  )
}

export default App
