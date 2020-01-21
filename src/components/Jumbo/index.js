import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
      <div className="jumbotron text-center">
        <h1>React Clicky Game</h1>
        <p className="lead">Click a Character to begin and increase your score. Be careful not to click the 
        same picture twice. </p>
        <hr className="my-4"/>
        {props.message ? (<p>{props.message}</p>) : (<p>Click Character to Begin</p>)}
      </div>
    );
}
  
export default Jumbotron;  