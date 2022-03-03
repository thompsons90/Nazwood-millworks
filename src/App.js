
import './App.css';
import { AboutUs } from './components/aboutus';
import { Contact } from './components/contact';
import { Header } from './components/header';
import { OurWork } from './components/ourWork';

function App() {
  return (
    <div className="App container-fluid">
      <div id="work"></div>
     <Header />
     
     <OurWork /><div id="about"></div>
    <AboutUs />
     <div id="contact"></div>
     <Contact />
    </div>
  );
}

export default App;
