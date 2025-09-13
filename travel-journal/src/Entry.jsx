export default function Entry() {
    return (
        <article className="journal-entry">
            <div className="main-image-container    ">
                <img 
                className="main-image"
                src="https://scrimba.com/links/travel-journal-japan-image-url" alt="mount fuji image" />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="./src/assets/images/marker.png" 
                    alt="map marker icon"
                />
                <span className="country">JAPAN</span>
                <a href="www.googlemaps.comhttps://www.google.com/maps/place/Mount+Fuji/">View on google maps</a>
                <h2 className="entry-title">Mount Fuji</h2>
                <p className="trip-dates">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
            
        </article>
    )
}