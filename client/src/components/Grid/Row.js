import React from "react"

//  this component makes it easier to use bootstrap row 

export const Row = ({ fluid, children}) => (
    <div className={`row${fluid ? "-fluid" : ""}`}>
    {children}
    </div>
);