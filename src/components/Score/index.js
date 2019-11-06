import React from "react";
import "./style.css";

function Score(props) {
    return <h2 className="text-canter score">Score: {props.score} || Top Score: {props.topScore}</h2>
}

export default Score;