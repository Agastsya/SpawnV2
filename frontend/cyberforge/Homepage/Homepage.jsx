import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import { FiTarget } from "react-icons/fi";
import { SiCyberdefenders } from "react-icons/si";


export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="home">

      <div className="container">

        {/* LEFT */}
        <div className="left">
          <div>
            <h1 className="left-text">
            Vulnerability Scanner <br />
            <span>+ AI Recommendations</span>
          </h1>

          <p className="subtitle">
          </p>

          <div className="features">
            <div className="feature-item">
              <FiTarget size={32} color="red" /> Perform rapid vulnerability scans across networks, servers, and applications, identifying critical weaknesses and exposures efficiently without compromising accuracy or depth.
            </div>
            <div className="feature-item">
              <FiTarget size={32} color="red" /> Leverage AI-driven insights to analyze threats, prioritize remediation steps, and provide actionable recommendations tailored to your infrastructure and risk profile.
            </div>
            <div className="feature-item">
              <FiTarget size={32} color="red" /> Generate secure, structured reports with detailed findings, enabling streamlined workflows, continuous monitoring, and improved visibility into your overall security posture consistently.
            </div>
          </div>

          <button onClick={() => navigate("/scanner")}>
            Start Scan
          </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right">
          <img className="right-img" src="/images/cybersec.png" alt="" />
        </div>

      </div>

    </div>
  );
}