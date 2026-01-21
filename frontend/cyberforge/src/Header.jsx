import "./Header.css"
function Header(){
    return(
        <div className="header">
            <div><span className="header-a">Spawn</span><span className="header-ab">Vulnerability Scanner</span></div>
            <ul className="header-b">
                <li><a href="/scanners" className="header-button">Scanners</a></li>
                <li>Reports</li>
                <li>AI Analysis</li>
            </ul>
        </div>
    )

}
export default Header;