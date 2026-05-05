import { useState } from "react";
import axios from "axios";
import "./Nmapper.css";

function ScannerTool({ endpoint, title, description, label, placeholder, fieldName = "ip" }) {
    const [value, setValue] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    async function send(e) {
        e.preventDefault();
        try {
            setSubmitted(true);
            setLoading(true);
            setResponse("");
            const res = await axios.post(`http://localhost:3333${endpoint}`, { [fieldName]: value });
            const data = typeof res.data === "string" ? res.data : JSON.stringify(res.data, null, 2);
            setResponse(data);
        } catch (err) {
            setResponse(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="main-box">
            <form className="scanner-form" onSubmit={send}>
                <h1 className="scanner-title">{title}</h1>
                <h3 className="scanner-description">{description}</h3>
                <div className="inner-box">
                    <label className="scanner-label">{label}</label>
                    <input
                        placeholder={placeholder}
                        className="scanner-input"
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button className="scanner-button" type="submit" disabled={loading}>
                        {loading ? "Scanning" : "Run Scan"}
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

export default ScannerTool;
