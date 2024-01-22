export default function Card(props) {
    // console.log(props)
    return(
        <div className="card-wrapper">
            <figure className="image-container">
                <img src={props.info.imageUrl} alt="place photo" className="card-image" />
           </figure>
            <div className="text-container">
                <div className="title-container">
                    <img src="map_icon.svg" alt="map pin" className="map-pin" />
                    <h3>{props.info.location}</h3> 
                    <a href={props.info.googleMapsUrl} rel="noreferrer" target="_blank">View on Google Maps</a>
                </div>
                <h2>{props.info.title}</h2>
                <h4>{props.info.startDate} - {props.info.endDate}</h4>
                <p>{props.info.description}</p>
            </div>
        </div>
    )
}