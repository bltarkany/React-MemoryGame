import React from "react";
import "./style.css";
// import { expression } from "@babel/template";

export function Container(props) {
    return <div className="container" >{props.children}</div>;
}

export function Row(props) {
    return <div className="row">{props.children}</div>
}

export function Col(props) {
    return <div className="col-sm-12">{props.children}</div>
}