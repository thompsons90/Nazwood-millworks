import React from "react";
import ".//workPopUp.css";

export const WorkPopUp = () => {
  return (
    <div className="wrap container-fluid">
<div className="row">
  <h1>Title of work</h1>
    <div className="tile "> 
      <img src='./cabnets.jpg' alt="wood" />
      <div className="text">
      <h1>Superior Cabniets</h1>
      <h2 className="animate-text">we do canbiets</h2>
      <p className="animate-text">More informatio and such ahahahaha</p>
  
      </div>

     </div>
   
    
    <div className="tile "> 
      <img src='./moulding.jpg'  alt="wood" />
      <div className="text">
      <h1>Moulding</h1>
      <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
      <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
    
      </div>
     </div>
      
      <div className="tile "> 
      <img src='./trim.jpg'  alt="wood" />
      <div className="text">
      <h1>Trim</h1>
      <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
      <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
  
      </div></div>
     </div>
    </div>
      
      
  );
};
