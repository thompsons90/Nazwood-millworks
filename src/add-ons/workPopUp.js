import React from "react";
import ".//workPopUp.css";

export const WorkPopUp = (props) => {
  return (
    <div className="wrap container-fluid">

    <div className="tile col-sm-4"> 
      <img src='./cabnets.jpg' alt="wood" />
      <div className="text">
      <h1>Superior Cabniets</h1>
      <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
      <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
  
      </div>
     </div>
    
    
    <div className="tile col-sm-4"> 
      <img src='./moulding.jpg'  alt="wood" />
      <div className="text">
      <h1>Moulding</h1>
      <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
      <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
    
      </div>
     </div>
      
      <div className="tile col-sm-4"> 
      <img src='./trim.jpg'  alt="wood" />
      <div className="text">
      <h1>Trim</h1>
      <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
      <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
  
      </div></div>
     
    </div>
      
      
  );
};
