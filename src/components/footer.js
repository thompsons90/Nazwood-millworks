import React from "react";

import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <div class="mt-4 pt-4 pb-4 footer">
<div class="container">
  <div class="row">
    <div class="col-lg-5 col-xs-12 about-company">
      <h2>Nazwood Millworks</h2>
      <p class="pr-5 ">We can put some extra information here. Or links to social media. Those are always good</p>
      
    </div>
    <div class="col-lg-3 col-xs-12 links">
      <h4 class="mt-lg-0 mt-sm-3">Contact us</h4>
        <ul class="m-0 p-0">
          <li>- 509-555-5555</li>
          <li>- Email@email.com</li> 
          <br />
          <h4 class="mt-lg-0 mt-sm-3">Hours</h4>
          <p>Monday — Friday
7:00 am — 4:00 pm PST</p>
<p>
Saturday — Sunday
By Appointment Only</p>
        </ul>
    </div>
    <div class="col-lg-4 col-xs-12 location">
      <h4 class="mt-lg-0 mt-sm-4">Location</h4>
      Mailing Address:<p> Nazwood Millworks, LLC P.O. Box 923, Airway Heights, WA 99001

</p>
      Physical Address:<p> Nazwood Millworks, LLC 1612 S Campbell Street
Airway Heights, WA 99001</p>

    </div>
  </div>
  <div class="row mt-5">
    <div class="col copyright">
      <p class=""><small class="text-white-50">© 2022. All Rights Reserved.</small></p>
      
  <Link to="/login" className="employee-login">Employee login</Link>
    </div>
  </div>
</div>
</div>
    )
}