import React from "react";

export default function VanCard(props) {
    return (
        <div>
            <img src={props.imageUrl} alt="van pic" className="card--img" />
            <div>
                {props.name}
            </div>
            <div>
                {props.price}
            </div>
            <div>
                {props.type}
            </div>
        </div>
    )
}