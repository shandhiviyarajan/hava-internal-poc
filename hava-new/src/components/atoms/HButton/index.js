import React from "react";
import {HButtonStyled} from "./HButton.styled";

const HButton = (props) =>{
    const {children} = props;
   return(
       <HButtonStyled {...props}>
           {children}
       </HButtonStyled>
   )
}

export default HButton;
