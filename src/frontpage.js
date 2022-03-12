import React from "react";
import { AboutUs } from './components/aboutus';
import { Contact } from './components/contact';
import { Header } from './components/header';
import Kenburns from "./components/kenburns";
import { OurWork } from './components/ourWork';
import { Reviews } from './components/reviews';
import {  WoodTypes } from './components/woodtypes';


export const FrontPage = () => {
    return (
        <div>
            <div className=" container-fluid">
            <Header /> <Kenburns />
      <div id="work"></div>
    
     
     <OurWork />
    <AboutUs /> <WoodTypes />
   <div id="reviews"></div>
    <Reviews />
   
       
       <div id="contact"></div>
     <Contact />
  
    </div>
        </div>
    )
}