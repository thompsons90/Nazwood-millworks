import React from "react";
import { AboutUs } from './components/aboutus';
import { Contact } from './components/contact';
import { Header } from './components/header';
import HeroImage from "./add-ons/hero-image";

import { OurWork } from './components/ourWork';
import { Reviews } from './components/reviews';
import {  WoodTypes } from './add-ons/woodtypes';
import { Link } from "react-router-dom";


export const FrontPage = () => {
    return (
        <div>
            <div className=" ">
            <Header /> <HeroImage />
      
    
     
     <OurWork /><div id="work"></div><WoodTypes />
    <AboutUs />
  
    
   
       
       
     <Contact /><div id="contact"></div>
  <Link to="/login">Employee login</Link>
    </div>
        </div>
    )
}