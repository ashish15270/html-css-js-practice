import { hydrateRoot } from "react-dom/client";
import Header from "./Header"
import Entry from "./entry"

export default function App() {
    
    return <>
    <Header 
    header_content="my travel journal"
    img_src="./src/assets/images/globe.png"
    alt_text="globe icon"
    />
    <Entry 
    japan_url="https://scrimba.com/links/travel-journal-japan-image-url"
    marker_img="/src/assets/images/marker.png" 
    marker_alt="location"
    travel_date="12 Jan, 2021 - 24 Jan, 2021"
    travel_location="Mount Fuji"
    map="www.googlemaps.comhttps://www.google.com/maps/place/Mount+Fuji/"
    info="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."  
    main_img_alt="mount fuji image"
    />
    </>
    
}