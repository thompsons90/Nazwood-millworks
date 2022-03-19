import React from "react";

import { Link } from "react-router-dom";


export const Footer = () => {
    return (
        <div class="mt-5 pt-5 pb-5 footer">
<div class="container">
  <div class="row">
    <div class="col-lg-5 col-xs-12 about-company">
      <h2>Nazwood Millworks</h2>
      <p class="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
      <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
    </div>
    <div class="col-lg-3 col-xs-12 links">
      <h4 class="mt-lg-0 mt-sm-3">Contact us</h4>
        <ul class="m-0 p-0">
          <li>- 509-555-5555</li>
          <li>- Email@email.com</li>
          
        </ul>
    </div>
    <div class="col-lg-4 col-xs-12 location">
      <h4 class="mt-lg-0 mt-sm-4">Location</h4>
      <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
      <p>Open 9 to 5</p>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col copyright">
      <p class=""><small class="text-white-50">© 2022. All Rights Reserved.</small></p>
      
  <Link to="/login">Employee login</Link>
    </div>
  </div>
</div>
</div>
    )
}