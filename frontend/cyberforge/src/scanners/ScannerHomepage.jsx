import './ScannerHomepage.css'

function ScannerHomepage(){
    return(
        <>
        <div className='scanner-box'>
            <a href="/nmap">
            <div className='scanner-card'>
               <div className='card-photo'>
                <img className='img' src="/images/eye.png" alt="" srcset="" />
               </div>
               <div className='card-text'>
                 <div className='card-title'>
                    Network Mapper (Nmap)
                </div>
                <div className='card-desc'>
                    Nmap is a powerful network scanner for discovering hosts, open ports, and security issues.
                </div>
               </div>

            </div></a>
            <div className='scanner-card'>
                ffuf
            </div>
            <div className='scanner-card'>
                Nikto
            </div>
            <div className='scanner-card'>
                Naabu
            </div>
        </div>
        </>
    )
}

export default ScannerHomepage