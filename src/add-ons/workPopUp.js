import React from "react";
import ".//workPopUp.scss";
import { Link } from "react-router-dom";
export const WorkPopUp = () => {
  return (
    <main class="page-content container-fluid">
  <div class="card kitchens">
    <div class="content">
      <h2 class="title">Cabinets</h2>
      <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
      <Link to="/cabinets"><button class="btn">View all our cabinet work</button></Link>
    </div>
  </div>
  <div class="card trim">
    <div class="content">
      <h2 class="title">To The Beach</h2>
      <p class="copy">Plan your next beach trip with these fabulous destinations</p>
      <button class="btn">View Trips</button>
    </div>
  </div>
  <div class="card moulding">
    <div class="content">
      <h2 class="title">Desert Destinations</h2>
      <p class="copy">It's the desert you've always dreamed of</p>
      <button class="btn">Book Now</button>
    </div>
  </div>
  <div class="card stairs">
    <div class="content">
      <h2 class="title">Explore The Galaxy</h2>
      <p class="copy">Seriously, straight up, just blast off into outer space today</p>
      <button class="btn">Book Now</button>
    </div>
  </div>
</main>
  )
}

