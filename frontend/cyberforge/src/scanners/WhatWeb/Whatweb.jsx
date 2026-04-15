import { useState } from "react";
import axios from "axios";
import "./Whatweb.css";

function Whatweb() {
  const [ip, setIp] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendIp(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3333/whatweb", { ip });
      setResponse(res.data);
    } catch (err) {
      setResponse("Error scanning target");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="main-box">
      <form className="scanner-form" onSubmit={sendIp}>
        <h1 className="scanner-title">WhatWeb Scanner</h1>

        <h3 className="scanner-description">
          WhatWeb identifies websites and technologies including CMS,
          frameworks, server software, analytics tools, and more.
        </h3>

        <div className="inner-box">
          <label className="scanner-label">Enter Your IP / URL</label>

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
          {loading ? "Scanning..." : response}
        </div>
      </pre>
    </div>
  );
}

export default Whatweb;