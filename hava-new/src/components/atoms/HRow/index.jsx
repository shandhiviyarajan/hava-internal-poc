import {Row } from "shards-react";

import React from "react";

const HRow = (props) =>{
    const {children} = props;
 return (
     <Row {...props}>
         {children}
     </Row>
 )
}

export default HRow;
