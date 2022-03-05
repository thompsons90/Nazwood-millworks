
import './App.css';
import { AboutUs } from './components/aboutus';
import { Contact } from './components/contact';
import { Header } from './components/header';
import { OurWork } from './components/ourWork';
import { Reviews } from './components/reviews';
import {  WoodTypes } from './components/woodtypes';

function App() {
  return (
    <div className="App container-fluid">
      <div id="work"></div>
     <Header />
     
     <OurWork />
    <AboutUs />
    <div id="reviews"></div>
    <Reviews />
     <div id="contact"></div>
     <Contact />
    
       <WoodTypes />
     
    </div>
  );
}

export default App;
