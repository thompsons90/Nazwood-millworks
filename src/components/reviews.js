import React, {useState, useEffect} from "react";


export const Reviews = () => {
    const [Curb, setCurb] = useState([]);
    const [active, setActive] = useState(false)
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
      
      <div className="reviews">
        <h3 className="work-text">Our past work</h3>

        {Curb.map((Curb) => {
            return (
              <div className="">
              
               
              
               
              <div className="row">
                <div className="col-sm-4">
               <img src={Curb.image} className="img-fluid" alt="Review"></img>
               </div>
             
               </div>
               </div>
              
            );
          })}
        <div> <h3 onClick={() => setActive(!active)} className="work-text pointer">Submit your own photo</h3>
        <div className={active === true ? `yes` : `hidden` } >
          FORM HERE
          </div>
        </div>
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