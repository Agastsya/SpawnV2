import ScannerCard from './ScannerCard'
import './ScannerHomepage.css'

function ScannerHomepage(){
    return(
        <>
        <div className='scanner-box'>
            <ScannerCard
            href="/nmap"
            name="Network Mapper"
            description="Nmap Scanner is a powerful network scanning tool used to discover open ports, running services, and potential security vulnerabilities on target systems."
            src ="/images/eye.png"
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


        </div>
        </>
    )
}

export default ScannerHomepage