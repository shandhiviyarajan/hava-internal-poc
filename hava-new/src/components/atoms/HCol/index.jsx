import { Container, Row, Col } from "shards-react";

import React from "react";

const HCol = (props) =>{
    const {children} = props;
   return (
       <Col {...props}>
           {children}
       </Col>
   )
}

export default HCol;
