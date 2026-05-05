import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import {
  FiActivity,
  FiCpu,
  FiFileText,
  FiShield,
  FiZap,
  FiLock,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-bg-glow" />

        <div className="hero-inner">
          <div className="hero-left">
            <span className="eyebrow">
              <span className="eyebrow-dot" /> Now with AI Analysis
            </span>

            <h1 className="hero-title">
              Find vulnerabilities <span className="accent">before</span><br />
              attackers do.
            </h1>

            <p className="hero-sub">
              Spawn unifies industry-standard security scanners — Nmap, Nuclei,
              FFUF, HTTPX and more — into one workspace, with AI-powered
              recommendations that turn raw output into actionable fixes.
            </p>

            <div className="hero-ctas">
              <button className="btn-primary" onClick={() => navigate("/scanners")}>
                Start scanning
              </button>
              <button className="btn-secondary" onClick={() => navigate("/scanners")}>
                Browse tools <FiArrowRight />
              </button>
            </div>

            <div className="hero-trust">
              <FiCheckCircle /> No agent install
              <span className="trust-sep" />
              <FiCheckCircle /> Open-source tooling
              <span className="trust-sep" />
              <FiCheckCircle /> AI remediation
            </div>
          </div>

          {/* RIGHT: dashboard mockup */}
          <div className="hero-right">
            <div className="mock-window">
              <div className="mock-titlebar">
                <span className="mock-dot mock-dot-r" />
                <span className="mock-dot mock-dot-y" />
                <span className="mock-dot mock-dot-g" />
                <span className="mock-url">spawn.security / scan / api.target.io</span>
              </div>

              <div className="mock-body">
                <div className="mock-summary">
                  <div className="summary-item">
                    <span className="summary-label">Target</span>
                    <span className="summary-value">api.target.io</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Scanner</span>
                    <span className="summary-value">Nuclei + Nmap</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-label">Status</span>
                    <span className="summary-value status-running">
                      <span className="run-dot" /> Running
                    </span>
                  </div>
                </div>

                <div className="mock-findings">
                  <div className="finding finding-crit">
                    <span className="sev sev-crit">CRIT</span>
                    <span className="finding-text">CVE-2024-3094 · Backdoor in liblzma</span>
                    <span className="finding-meta">:443</span>
                  </div>
                  <div className="finding finding-high">
                    <span className="sev sev-high">HIGH</span>
                    <span className="finding-text">Exposed .git directory</span>
                    <span className="finding-meta">/.git</span>
                  </div>
                  <div className="finding finding-med">
                    <span className="sev sev-med">MED</span>
                    <span className="finding-text">Outdated jQuery 1.9.1</span>
                    <span className="finding-meta">/static/</span>
                  </div>
                  <div className="finding finding-low">
                    <span className="sev sev-low">LOW</span>
                    <span className="finding-text">Missing security headers (CSP)</span>
                    <span className="finding-meta">HTTP</span>
                  </div>
                  <div className="finding finding-info">
                    <span className="sev sev-info">INFO</span>
                    <span className="finding-text">nginx/1.24.0 detected</span>
                    <span className="finding-meta">:80</span>
                  </div>
                </div>

                <div className="mock-progress">
                  <div className="progress-bar"><div className="progress-fill" /></div>
                  <span className="progress-label">Scanning ports · 68%</span>
                </div>
              </div>
            </div>

            <div className="mock-floater">
              <FiCpu className="floater-icon" />
              <div>
                <div className="floater-title">AI Recommendation</div>
                <div className="floater-text">Patch liblzma to ≥ 5.6.2 and rotate keys.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <span className="strip-label">Powered by</span>
        <div className="strip-logos">
          <span>Nmap</span>
          <span>Nuclei</span>
          <span>FFUF</span>
          <span>HTTPX</span>
          <span>Subfinder</span>
          <span>Dalfox</span>
          <span>WhatWeb</span>
          <span>Sherlock</span>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="section-head">
          <span className="eyebrow">Capabilities</span>
          <h2>One workspace. Every scanner you need.</h2>
          <p>
            Stop juggling terminal tabs and config files. Spawn orchestrates
            your favorite security tools and pipes the output through AI.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon icon-blue"><FiActivity /></div>
            <h3>Network discovery</h3>
            <p>Map open ports, services, and infrastructure with high-speed Nmap and HTTPX probes.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-amber"><FiZap /></div>
            <h3>Web fuzzing</h3>
            <p>Discover hidden endpoints, parameters, and subdomains with FFUF, Subfinder and friends.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-red"><FiShield /></div>
            <h3>Vulnerability scans</h3>
            <p>Run Nuclei templates and Dalfox XSS checks against any target with a single click.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-purple"><FiCpu /></div>
            <h3>AI analysis</h3>
            <p>Translate raw scanner output into prioritized findings and concrete remediation steps.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-green"><FiFileText /></div>
            <h3>Structured reports</h3>
            <p>Export clean, shareable reports for your team, your client, or your compliance audit.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon icon-cyan"><FiLock /></div>
            <h3>OSINT lookups</h3>
            <p>Hunt usernames across hundreds of platforms with built-in Sherlock integration.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stat-block">
          <strong>8</strong>
          <span>Scanners integrated</span>
        </div>
        <div className="stat-block">
          <strong>2.4k+</strong>
          <span>Nuclei templates</span>
        </div>
        <div className="stat-block">
          <strong>&lt; 30s</strong>
          <span>Avg AI summary</span>
        </div>
        <div className="stat-block">
          <strong>100%</strong>
          <span>Open-source core</span>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-bg" />
        <div className="cta-inner">
          <h2>Ready to scan your first target?</h2>
          <p>Pick a tool from the toolkit and get results in seconds.</p>
          <button className="btn-primary btn-cta" onClick={() => navigate("/scanners")}>
            Open the toolkit
          </button>
        </div>
      </section>
    </div>
  );
}
