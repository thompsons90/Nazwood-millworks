import React from "react";
import ".//workPopUp.scss";
import { Link } from "react-router-dom";
export const WorkPopUp = () => {
  return (
    <main class="page-content container-fluid">
      <div class="card kitchens">
        <h1 class="text-center card-title">Cabinets</h1>
        <div class="content">
          <Link to="/cabinets"><button class="btn">View all our cabinet work</button></Link>
          <p class="copy">We offer <br />
            <ul>
              Face frame

              Euro

              Multi-family

              Entertainment centers

              Closets

              Garage

              Vanities

              Custom Furniture
            </ul>
          </p>

        </div>
      </div>
      <div class="card trim"><h1 class="text-center card-title">Trim, Boards, and Moulding</h1>
        <div class="content">
        <Link to="/trim"><button class="btn">View trims </button></Link>
          <p class="copy"> We offer <br />
            Crown
            Shiplap

            Tongue & Groove

            Custom Flooring

            Face Frame stock

            S4S</p>
          
        </div>
      </div>
      <div class="card moulding"><h1 class="text-center card-title">Kitchen counters</h1>
        <div class="content">
         <Link to="/kitchens"><button class="btn">View all our moulding work</button></Link>
          <p class="copy">Crown

            Base

            Case

            Trim Packages

            Custom Profiles

            Historic Reproductions

            Arches

            Stair Parts</p>
         
        </div>
      </div>
      <div class="card stairs"><h1 class="text-center card-title">Other work</h1>
        <div class="content">
         <Link to="/misc"><button class="btn">See Wood work</button></Link>
          <p class="copy">We offer <br />
            I don't know what to put here</p>
         
        </div>
      </div>
    </main>
  )
}

