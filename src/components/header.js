import React from "react";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="navbar-brand" >
        <img
          src="./logo.png"
          alt="wood-working"
          className="logo"
          width="140px"
          height="100px"
         
        ></img>
        <h2 className="company-title">NazWood Millworks</h2> 
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <div className="col-sm-4"></div>

        <a className="nav-icon col-sm-2" href="#work">Our work</a>
        <a className="nav-icon col-sm-2" href="#about">About Us</a>
        <a className="nav-icon col-sm-2" href="#contact">Contact us</a>
        <a className="nav-icon col-sm-2" href="#reviews">Reviews</a>
      </div>
    </nav>
  );
};
