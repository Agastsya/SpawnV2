import './ScannerCard.css'

function ScannerCard({href, name, description, src, icon, category, accent}){
    const accentClass = accent ? `accent-${accent}` : 'accent-blue';
    return(
        <a href={href} className="scanner-card-link">
            <div className={`scanner-card ${accentClass}`}>
                <div className="card-top">
                    <div className="card-photo">
                        {icon ? icon : <img className='img' src={src} alt="" />}
                    </div>
                    {category && <span className="card-badge">{category}</span>}
                </div>
                <div className="card-text">
                    <div className="card-title">{name}</div>
                    <div className="card-desc">{description}</div>
                </div>
                <div className="card-footer">
                    <span className="card-cta">Launch scanner</span>
                    <span className="card-arrow">→</span>
                </div>
            </div>
        </a>
    )
}

export default ScannerCard
