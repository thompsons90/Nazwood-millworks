import React from "react";
import { AboutUs } from './components/aboutus';
import { Contact } from './components/contact';
import { Header } from './components/header';
import { OurWork } from './components/ourWork';
import { Reviews } from './components/reviews';
import {  WoodTypes } from './components/woodtypes';


export const FrontPage = () => {
    return (
        <div>
            <div className="App container-fluid">
      <div id="work"></div>
     <Header />
     
     <OurWork />
    <AboutUs /> <WoodTypes />
   
    <Reviews />
   
       
       <div id="contact"></div>
     <Contact />
  
    </div>
        </div>
    )
}