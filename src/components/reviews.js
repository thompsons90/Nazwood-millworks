import React, {useState, useEffect} from "react";


export const Reviews = () => {
    const [Curb, setCurb] = useState([]);
const [showImages, setShowImages] = useState(false)
  async function getCalendarInfo() {
    const response = await fetch(
      "https://us-west-2.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/curb-appeal-thycd/service/getEvents/incoming_webhook/getEvents"
    );
    const json = await response.json();
    
    setCurb(json.Curb);
  //console.log(Curb)
  }
 

 useEffect(() => {
   getCalendarInfo()
   
 }, [])
 if (Curb ) {
    return (
      
      <div className="calendarPage">
        
        {Curb.map((Curb) => {
            return (
              <div className="container-fluid">
              
               
              
               
              <div className="row">
                <div className="col-sm-4">
               <img src={Curb.imageOne} className="img-fluid" alt="Review"></img> <h3>Customer Name: <br /> {Curb.Name}</h3>
               </div>
             
               </div>
               </div>
              
            );
          })}
        
      </div>
    );
  } else if (Curb) {
    return (
     
      <div className="calendarPage">
       Something's wrong with the data or your internet connection if you see this for more than a couple seconds. 
      </div>
    );
  } 
}