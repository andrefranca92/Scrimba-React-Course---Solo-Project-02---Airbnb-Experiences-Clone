import React from "react"

export default function Card(props) {
    
    return (
        <div className="card">
            <div className="card--imageContainer">
                <img className="card--image" src={props.item.imageUrl} />
            </div>
            <div className="card--content">
                <div className="card--locationContainer">
                    <span className="material-symbols-outlined card--pin"> location_on </span>
                    <h3 className="card--country"> {props.item.location} </h3>
                    <a className="card--mapsLink" href={props.item.googleMapsUrl}> View on Google Maps </a>
                </div>
                <h1 className="card--title"> {props.item.title} </h1>
                <p className="card--dates"> {props.item.startDate} - {props.item.endDate} </p>
                <p className="card--description"> {props.item.description} </p> 
            </div>
        </div>
    )
}