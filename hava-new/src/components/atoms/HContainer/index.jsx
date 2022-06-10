import { Container } from "shards-react";

import React from "react";

const Index = (props) =>{
    const {children} = props;
 return (
     <Container {...props}>
         {children}
     </Container>
 )
}

export default Index;
