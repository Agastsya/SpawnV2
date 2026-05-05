import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <div className="footer-logo">Spawn</div>
                    <div className="footer-tag">Vulnerability Scanner & AI Analysis</div>
                </div>
                <div className="footer-cols">
                    <div className="footer-col">
                        <div className="footer-col-title">Product</div>
                        <a href="/scanners">Scanners</a>
                        <a href="/reports">Reports</a>
                        <a href="/analysis">AI Analysis</a>
                    </div>
                    <div className="footer-col">
                        <div className="footer-col-title">Resources</div>
                        <a href="#">Documentation</a>
                        <a href="#">Changelog</a>
                        <a href="#">Support</a>
                    </div>
                    <div className="footer-col">
                        <div className="footer-col-title">Company</div>
                        <a href="#">About</a>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <span>© 2026 Spawn Security. All rights reserved.</span>
                <span className="footer-status"><span className="status-dot"></span> All systems operational</span>
            </div>
        </footer>
    );
}

export default Footer;
