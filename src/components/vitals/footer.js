import './footer.css'
export default function Footer () {
    return (
        <div className="footer"style={{background:'black',color:"white"}}>
            <div className='section-01'>
            
            <div className="list-1">
            <div className="v2"></div>
            <div className='items'>
            <a href="http://">TRAVEL</a> 
            <a href="http://">OUTERWEAR</a> 
            <a href="http://">ACCESSORIES</a>
            <a href="http://">LEISURE</a> 
            <a href="http://">CASTORE</a> 
            </div>
            </div>

            
            <div className="list-2">
            <div className="v2"></div>
            <div className='items'>
            <a href="http://">Student Discount</a> 
            <a href="http://">Key Worker Discount</a> 
            <a href="http://">Strava Discount</a>
            <a href="http://">Shipping Policy</a> 
            <a href="http://">CASTORE</a> 
            <a href="http://">Terms of Service</a> 
            <a href="http://">Cookie Policy</a> 
            <a href="http://">Terms & Conditions </a>
            <a href="http://">Acceptable Use Policy</a> 
            <a href="http://">Glossary</a> 
            </div>

            </div>
            <div className="list-3">
                <div className='item-3'>
                <img src="https://cdn.shopify.com/s/files/1/0535/5107/1386/files/nufc-x-castore-250px.png?v=9185231537168923942" 
                style={{height:"50%"}}></img>
                <div className="item-1">
                <h2>NUFC STORE</h2>
                <li>ST. JAMES' PARK</li>                
                <li>STRAWBERRY PLACE</li>
                <li>NEWCASTLE UPON TYNE</li>
                <li>NE1 4ST</li>
                <li>EMAIL: CONCIERGE@SHOP.NUFC.CO.UK</li>
                </div>
                </div> 
            </div>
            </div>
            <div className='section-2'>
            <p>© Castore 2022</p>
            <a href="/header">Back to top</a>
            <p>Built by ToTi Tech</p>
            </div>
        </div>
    )
}