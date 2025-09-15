export default function Entry(prop) {
    return (
        <article className="journal-entry">
            <div className="main-image-container    ">
                <img 
                className="main-image"
                src={prop.japan_url} alt={prop.main_imh_alt} />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={prop.marker_img}
                    alt={prop.marker_alt}
                />
                <span className="country">JAPAN</span>
                <a href={prop.map}>View on google maps</a>
                <h2 className="entry-title">{prop.travel_location}</h2>
                <p className="trip-dates">{prop.travel_date}</p>
                <p className="entry-text">{prop.info}</p>
            </div>
            
        </article>
    )
}