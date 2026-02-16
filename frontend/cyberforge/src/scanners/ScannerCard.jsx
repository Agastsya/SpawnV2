import './ScannerCard.css'
function ScannerCard({href,name,description,src}){

    return(
        <a href={href}>
            <div className='scanner-card'>
               <div className='card-photo'>
                <img className='img' src={src} alt="" srcset="" />
               </div>
               <div className='card-text'>
                 <div className='card-title'>
                    {name}
                </div>
                <div className='card-desc'>
                    {description}
                </div>
               </div>

            </div></a>
    )
}
export default ScannerCard