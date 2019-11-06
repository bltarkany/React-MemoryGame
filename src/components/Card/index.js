import React from "react";
import "./style.css";

function Card({id, name, image, handlePicked}) {
    return (
        <div className="card float-left"
            key={id}
            data-id={id}
            name={name}
            onClick={handlePicked}>
            <img src={image} class="card-img-top" alt={name} height="200px" width="200px"/>
        </div>
    )
}

export default Card;