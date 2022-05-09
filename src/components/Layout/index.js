import React from 'react';
import {NavBar} from "../NavBar";
import {HeroStyle} from "../../pages/Home/styles";
 export const Layout = ({ children }) => {
     return (
         <HeroStyle>
             <NavBar/>
             {children}
         </HeroStyle>
     );
 }


