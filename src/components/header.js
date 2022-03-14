import React, {useState} from "react";

export const Header = () => {
  const [hidden, setHidden] = useState(false)
  return (
    <div className="container-fluid">
      <div className="row navigation">
 <div className="col-sm-4" onClick={() => setHidden(!hidden)} >
        <img
          src="./logo.png"
          alt="wood-working"
          className="logo"
          width="140px"
          height="100px"
         
        ></img>
        <h2 className="company-title col-sm-4" >NazWood Millworks</h2> 
      </div>
      </div>
     
    
<ul id="nav" className={hidden === true ? `overlay container-fluid` : `hidden`}>
  <div className="col-sm-6">
<li class="nav-link">
		<h1 data-name="home">Home</h1>
	</li>
  </div>
	
  <div className="col-sm-6">
<li class="nav-link">
		<h1 data-name="home">Home</h1>
	</li>
  </div>
	<div className="col-sm-6">
<li class="nav-link">
		<h1 data-name="home">Home</h1>
	</li>
  </div>
	<div className="col-sm-6">
<li class="nav-link">
		<h1 data-name="home">Home 2</h1>
	</li>
  </div>
</ul>

    </div>
  );
};
