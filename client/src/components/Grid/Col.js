import React from "react";
//  makes it easier to do column sizing 
//  i,e, just <Col size = "md-12">
export const Col = ({ size, children}) => (
    <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
</div>

);