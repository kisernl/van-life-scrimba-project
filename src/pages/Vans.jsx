import React from "react";
import VanCard from "../components/VanCard";
import { Link } from "react-router-dom";

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch("/api/vans")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 */

export default function Vans() {

const [vanData, setVanData] = React.useState(null)

    React.useEffect(() => {
        fetch("/api/vans")
        .then(response => response.json())
        // .then(data => setVanData(data.results))
        .then(data => {
            console.log("Fetched Data:", data); // Log the full response
            setVanData(data.vans); // Access 'results' only if the structure is correct
        })
    }, [])

    console.log(vanData)

    if (!vanData) {
        return <h1>Loading...</h1>;
    }
    
    else {

        return (
            <>
                <h1>Explore our van options</h1>
                <section className="van--hero">
                    <div className="van--links">
                        <Link>Simple</Link>
                        <Link>Luxury</Link>
                        <Link>Rugged</Link>
                    </div>
                    <div className="van--fliter">
                        <Link>Clear filters</Link>
                    </div>
                </section>
                <section className="cards--container">
                    {vanData.map(({id, imageUrl, price, type, name} ) => (
                        <VanCard 
                            key={id}
                            imageUrl={imageUrl} 
                            price={price} 
                            type={type} 
                            name={name}
                        />
                    ))}
                
                </section>
            </>
        )
    }
}