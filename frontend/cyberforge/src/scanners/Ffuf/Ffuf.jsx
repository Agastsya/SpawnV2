import { useState } from "react";
import axios from "axios";
import "./Ffuf.css";

function Ffuf() {
  const [ip, setIp] = useState("");
  const [response, setResponse] = useState("");

  async function sendIp(e) {
    e.preventDefault();
    const res = await axios.post("http://localhost:3333/ffuf", { ip });
    setResponse(res.data);
  }

  return (
    <div className="main-box">
      <form className="scanner-form" onSubmit={sendIp}>
        <h1 className="scanner-title">FFUF Scanner</h1>

        <h3 className="scanner-description">
          FFUF (Fuzz Faster U Fool) is used for discovering hidden directories,
          files, and endpoints on web servers through fuzzing.
        </h3>

        <div className="inner-box">
          <label className="scanner-label">Enter Target URL</label>

          <input
            placeholder="https://example.com"
            className="scanner-input"
            type="text"
            onChange={(e) => setIp(e.target.value)}
          />

          <button className="scanner-button" type="submit">
            Submit
          </button>
        </div>
      </form>

      <pre className="terminal" style={{ whiteSpace: "pre-wrap" }}>
        <div className="terminal-response">
          {response}
        </div>
      </pre>
    </div>
  );
}

export default Ffuf;