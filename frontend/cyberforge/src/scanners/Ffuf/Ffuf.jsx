import { useState } from "react";
import axios from "axios";
import "./Ffuf.css";

function Ffuf() {
  const [ip, setIp] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function sendIp(e) {
    e.preventDefault();
    setSubmitted(true);
    setLoading(true);
    setResponse("");
    const res = await axios.post("http://134.209.150.218:3333/ffuf", { ip });
    setResponse(JSON.stringify(res.data, null, 2));
    setLoading(false);
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
          <button className="scanner-button" type="submit" disabled={loading}>
            {loading ? "Scanning..." : "Submit"}
          </button>
        </div>
      </form>
      {submitted && (
        <pre className="terminal" style={{ whiteSpace: "pre-wrap" }}>
          <div className="terminal-response">
            {loading ? <span className="loading-text">Scanning...</span> : response}
          </div>
        </pre>
      )}
    </div>
  );
}

export default Ffuf;
