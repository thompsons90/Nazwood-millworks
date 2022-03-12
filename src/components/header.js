import React, {useState} from "react";

export const Header = () => {
  const [hidden, setHidden] = useState(false)
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="navbar-brand" onClick={() => setHidden(!hidden)} >
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
      
<ul id="nav" className={hidden === true ? `overlay` : `hidden`}>
	<li class="nav-link">
		<h1 data-name="home">Home</h1>
	</li>
	<li class="nav-link">
		<h1 data-name="About">About</h1>
	</li>
	<li class="nav-link">
		<h1 data-name="services">services</h1>
	</li>
	<li class="nav-link">
		<h1 data-name="contact">contact</h1>
	</li>
</ul>

    </nav>
  );
};
