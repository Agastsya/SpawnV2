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
        <>
        <div className='scanner-box'>
            <ScannerCard
            href="/nmap"
            name="Network Mapper"
            description="Nmap Scanner is a powerful network scanning tool used to discover open ports, running services, and potential security vulnerabilities on target systems."
            src ="/images/nmap.png"
            />
            <ScannerCard
            href="/ffuf"
            name="Fuzz Faster U Fool"
            description="FFUF is a fast web fuzzing tool used to discover hidden directories, files, parameters, subdomains, and endpoints by brute-forcing HTTP requests."
            src="/images/ffuf.png"
            />
            <ScannerCard
            href="/nikto"
            name="Nikto Web Scanner"
            description="Nikto is an open-source web server scanner that detects dangerous files, outdated server software, misconfigurations, and known web vulnerabilities."
            src="/images/nikto.png"
            />
            <ScannerCard
            href="/whatweb"
            name="What Web"
            description="Identifies technologies, frameworks, and software running on websites using fingerprinting techniques for security analysis and reconnaissance purposes."
            src="/images/whatweb.png"
            />
            <ScannerCard
            href="/httpx"
            name="HTTPx Prober"
            description="HTTPx is a fast and multi-purpose HTTP toolkit used to probe web servers, detect technologies, check status codes, and perform HTTP reconnaissance."
            src="/images/httpx.png"
            />
            <ScannerCard
            href="/nuclei"
            name="Nuclei Scanner"
            description="Nuclei is a fast vulnerability scanner based on community-curated templates, identifying security misconfigurations and CVEs across web applications."
            src="/images/nuclei.png"
            />
            <ScannerCard
            href="/sherlock"
            name="Sherlock OSINT"
            description="Sherlock hunts for social media accounts across multiple platforms using a given username, helping in OSINT investigations and digital footprint analysis."
            src="/images/sherlock.png"
            />
            <ScannerCard
            href="/dalfox"
            name="Dalfox XSS Scanner"
            description="Dalfox is a powerful XSS scanner and parameter analysis tool that helps find and exploit cross-site scripting vulnerabilities in web applications."
            src="/images/dalfox.png"
            />
            <ScannerCard
            href="/subfinder"
            name="Subfinder"
            description="Subfinder is a fast passive subdomain enumeration tool that discovers valid subdomains using passive online sources for security assessments and reconnaissance."
            src="/images/subfinder.png"
            />
        </div>
    )
}

export default ScannerHomepage
