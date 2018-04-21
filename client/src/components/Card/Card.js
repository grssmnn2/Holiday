import React, {Component} from "react";
import "./Card.css"
const Card = props => (
    <div className = "card">
        <div className="img-container">
            <img alt={props.review} src={props.image} />
        </div>
        <div className="content">
        <ul>
            <li> 
                <strong> Name: </strong> {props.name}
            </li> 
            <li>
                <strong> Details: </strong> {props.details} 
            </li> 
            <li>
                <strong> Review: </strong> {props.reivew}
            </li>
        </ul>
    </div>
</div>
)

export default Card; 