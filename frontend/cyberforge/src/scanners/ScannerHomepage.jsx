import ScannerCard from './ScannerCard'
import './ScannerHomepage.css'
import {
    FiActivity,
    FiSearch,
    FiGlobe,
    FiCompass,
    FiZap,
    FiCrosshair,
    FiUser,
    FiAlertTriangle
} from 'react-icons/fi'

function ScannerHomepage(){
    return(
        <div className='scanner-page'>
            <div className='scanner-page-hero'>
                <span className='scanner-eyebrow'>Toolkit</span>
                <h1>Security Scanners</h1>
                <p>Run targeted reconnaissance, vulnerability discovery and OSINT scans from a unified workspace. Pick a tool to begin.</p>
                <div className='scanner-stats'>
                    <div className='stat'><strong>8</strong><span>Scanners</span></div>
                    <div className='stat-divider'></div>
                    <div className='stat'><strong>4</strong><span>Categories</span></div>
                    <div className='stat-divider'></div>
                    <div className='stat'><strong>AI</strong><span>Analysis</span></div>
                </div>
            </div>

            <div className='scanner-box'>
                <ScannerCard
                    href="/nmap"
                    name="Network Mapper"
                    description="Discover open ports, running services, and potential vulnerabilities on target systems with deep network scanning."
                    icon={<FiActivity />}
                    category="Network"
                    accent="blue"
                />
                <ScannerCard
                    href="/ffuf"
                    name="Fuzz Faster U Fool"
                    description="Brute-force HTTP requests to discover hidden directories, files, parameters, subdomains and endpoints at high speed."
                    icon={<FiZap />}
                    category="Web"
                    accent="amber"
                />
                <ScannerCard
                    href="/whatweb"
                    name="WhatWeb"
                    description="Identify technologies, frameworks and software running on websites using fingerprinting techniques for reconnaissance."
                    icon={<FiSearch />}
                    category="Recon"
                    accent="cyan"
                />
                <ScannerCard
                    href="/subfinder"
                    name="Subfinder"
                    description="Passive subdomain enumeration tool that uses public sources to find valid subdomains for any target domain."
                    icon={<FiCompass />}
                    category="Recon"
                    accent="purple"
                />
                <ScannerCard
                    href="/nuclei"
                    name="Nuclei"
                    description="Template-driven vulnerability scanner that sends targeted requests to identify CVEs and misconfigurations across stacks."
                    icon={<FiAlertTriangle />}
                    category="Vulnerability"
                    accent="amber"
                />
                <ScannerCard
                    href="/httpx"
                    name="HTTPX"
                    description="Fast and multi-purpose HTTP toolkit for probing services, validating live hosts, and gathering technology metadata."
                    icon={<FiGlobe />}
                    category="Web"
                    accent="green"
                />
                <ScannerCard
                    href="/dalfox"
                    name="Dalfox"
                    description="Powerful XSS scanner and parameter analyzer for detecting cross-site scripting flaws across modern web applications."
                    icon={<FiCrosshair />}
                    category="Vulnerability"
                    accent="red"
                />
                <ScannerCard
                    href="/sherlock"
                    name="Sherlock"
                    description="Hunt down social media accounts by username across hundreds of platforms for OSINT and identity discovery."
                    icon={<FiUser />}
                    category="OSINT"
                    accent="pink"
                />
            </div>
        </div>
    )
}

export default ScannerHomepage
