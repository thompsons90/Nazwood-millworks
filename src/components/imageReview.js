import React, {useState, useEffect} from "react";


export const ImageReview = () => {
    const [Curb, setCurb] = useState([]);
    const [today, setToday] = useState(new Date())
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
    //let stringTime = new Date().toString();
      if (Curb ) {
        return (
          
          <div className="calendarPage">
            <div>Back to front page </div>
            {Curb.map((Curb) => {
                return (
                  <div className="container-fluid">
                    <div className="yes" key={Curb.Name}>
                   
                 
                  
                    <div className="col-sm-4">
                   <img src={Curb.image} className="img-fluid" alt="Customer "></img>
                   </div></div>
                  <button>Delete</button>
                  
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