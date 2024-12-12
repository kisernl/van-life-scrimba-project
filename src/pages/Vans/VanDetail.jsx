import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {

    const params = useParams();
    console.log(params)
    /**
     * Challenge part 2:
     * Using the endpoint set up (with mirage js), fetch the data
     * for the van with the current ID from params.id. Log the data
     * that comes back to the console.
     * 
     * Hint: the endpoint is a GET request to `/api/vans/:vanid`
     */

    const [van, setVan] = React.useState([])

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(response => response.json())
        .then(data => {
            console.log("Fetched Data:", data);
            setVan(data.vans);
        })
    }, [params.id])

    console.log(van.imageUrl)

    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}