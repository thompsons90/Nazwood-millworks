import React from "react";
import { AboutUs } from './components/aboutus';
import { Header } from './components/header';
import HeroImage from "./add-ons/hero-image";

import { OurWork } from './components/ourWork';
import { Reviews } from './components/reviews';
import { WoodTypes } from './add-ons/woodtypes';
import { Footer } from "./components/footer";


export const FrontPage = () => {
    return (
        <div>
            <div className="">
                <Header /> <HeroImage />
                <div className="wood-border">
                    <div id="about"></div>
                    <AboutUs />
                    <div id="work"></div>
                    <OurWork /><WoodTypes />
                    <div id="reviews"></div>
                    <Reviews />
                </div>
                <Footer /><div id="contact"></div>
            </div>
        </div>
    )
}