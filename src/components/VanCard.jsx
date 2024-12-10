import React from "react";
import { Link } from "react-router-dom";

export default function VanCard(props) {
    return (
        <div className="van--card">
            <Link to={`/vans/${props.id}`}>
                <img src={props.imageUrl} alt="van pic" className="card--img" />
                <div className="van--title">
                    <div className="van--name">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="van--price">
                        <h3>${props.price}</h3><p>/day</p>
                    </div>
                </div>
            </Link>
            <div className={`${props.type}`}>
                <Link className="link-button">{props.type}</Link>
            </div>
        </div>
    )
}