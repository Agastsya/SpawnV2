import "./Header.css"
function Header(){
    return(
        <div className="header">
            <div><span className="header-a">Spawn</span><span className="header-ab">Vulnerability Scanner</span></div>
            <ul className="header-b">
                <li><a href="/" className="header-button">Home</a></li>
                <li><a href="/scanners" className="header-button">Scanners</a></li>
                <li><a href="/reports" className="header-button">Reports</a></li>
                <li><a href="/analysis" className="header-button">AI Analysis</a></li>

            </ul>
        </div>
    )

}
export default Header;