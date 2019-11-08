import React from "react";
import "./style.css";

function Card({id, name, image, handleClick}) {
    return (
        <div className="card float-left"
            key={id}
            data-id={id}
            name={name}
            
            >
            <img src={image} className="card-img-top" onClick={handleClick(name)} alt={name} height="200px" width="200px"/>
        </div>
    );
}

export default Card;