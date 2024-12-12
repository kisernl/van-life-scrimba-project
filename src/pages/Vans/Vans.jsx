import React from "react";
import VanCard from "../../components/VanCard";
import { Link } from "react-router-dom";


export default function Vans() {

const [vanData, setVanData] = React.useState([])

    React.useEffect(() => {
        fetch("/api/vans")
        .then(response => response.json())
        .then(data => {
            console.log("Fetched Data:", data);
            setVanData(data.vans);
        })
    }, [])

    console.log(vanData)

    const vanElements = vanData.map(({id, imageUrl, price, type, name} ) => (
        <VanCard 
            key={id}
            id={id}
            imageUrl={imageUrl} 
            price={price} 
            type={type} 
            name={name}
        />
    ))

    return (
        <main className="vans--page">
            <h1>Explore our van options</h1>
            <section className="van--hero">
                <div className="van--links">
                    <Link className="link-button">Luxury</Link>
                    <Link className="link-button">Simple</Link>
                    <Link className="link-button">Rugged</Link>
                </div>
                <div className="van--filter">
                    <Link>Clear filters</Link>
                </div>
            </section>
            <section className="cards--container">
                {vanElements}
            </section>
        </main>
    )
}